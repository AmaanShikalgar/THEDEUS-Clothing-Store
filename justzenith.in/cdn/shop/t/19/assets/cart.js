/* JUST ZENITH — Cart JavaScript */
(function() {
    'use strict';
    var CartDrawer = {
        drawer: null,
        overlay: null,
        init: function() {
            this.drawer = document.querySelector('[data-cart-drawer]');
            this.overlay = document.querySelector('[data-cart-drawer-overlay]');
            if (!this.drawer) return;
            this.bindEvents();
        },
        bindEvents: function() {
            var self = this;
            document.querySelectorAll('[data-cart-drawer-toggle]').forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    self.open();
                });
            });
            document.addEventListener('click', function(e) {
                var closeBtn = e.target.closest('[data-cart-drawer-close]');
                if (closeBtn) {
                    e.preventDefault();
                    self.close();
                }
            });
            if (this.overlay) this.overlay.addEventListener('click', function() {
                self.close();
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && self.isOpen()) self.close();
            });
            document.addEventListener('submit', function(e) {
                var form = e.target.closest('[data-quick-add-form]');
                if (form) {
                    e.preventDefault();
                    self.addToCart(form);
                    return;
                }
                var productForm = e.target.closest('[data-product-form]');
                if (productForm) {
                    var submitter = e.submitter;
                    if (submitter && submitter.matches('[data-add-to-cart]')) {
                        e.preventDefault();
                        self.addToCart(productForm);
                    }
                }
            });
            document.addEventListener('click', function(e) {
                var minusBtn = e.target.closest('[data-quantity-minus]');
                var plusBtn = e.target.closest('[data-quantity-plus]');
                var removeBtn = e.target.closest('[data-remove-item]');
                if (minusBtn) {
                    var line = parseInt(minusBtn.dataset.line, 10),
                        input = minusBtn.parentElement.querySelector('[data-quantity-input]');
                    if (input) self.updateQuantity(line, Math.max(0, parseInt(input.value, 10) - 1));
                }
                if (plusBtn) {
                    var line2 = parseInt(plusBtn.dataset.line, 10),
                        input2 = plusBtn.parentElement.querySelector('[data-quantity-input]');
                    if (input2) self.updateQuantity(line2, parseInt(input2.value, 10) + 1);
                }
                if (removeBtn) self.updateQuantity(parseInt(removeBtn.dataset.line, 10), 0);
            });
            document.addEventListener('change', function(e) {
                var input = e.target.closest('.cart-drawer__quantity-input');
                if (input) self.updateQuantity(parseInt(input.dataset.line, 10), Math.max(0, parseInt(input.value, 10) || 0));
            });
        },
        isOpen: function() {
            return this.drawer && this.drawer.classList.contains('is-open');
        },
        open: function() {
            if (!this.drawer) return;
            this.drawer.classList.add('is-open');
            this.drawer.setAttribute('aria-hidden', 'false');
            document.body.classList.add('drawer-open');
        },
        close: function() {
            if (!this.drawer) return;
            this.drawer.classList.remove('is-open');
            this.drawer.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('drawer-open');
        },
        clearCartError: function(form) {
            var existing = form && form.querySelector('[data-cart-error-message]');
            if (existing) existing.remove();
        },
        showCartError: function(form, message) {
            if (!form) return;
            this.clearCartError(form);
            var actions = form.querySelector('.product-page__actions') || form;
            var errorEl = document.createElement('p');
            errorEl.setAttribute('data-cart-error-message', '');
            errorEl.setAttribute('role', 'alert');
            errorEl.style.margin = '10px 0 0';
            errorEl.style.fontSize = '12px';
            errorEl.style.lineHeight = '1.4';
            errorEl.style.color = '#E74C3C';
            errorEl.textContent = message || 'Unable to add this item to the bag.';
            actions.appendChild(errorEl);
        },
        addToCart: function(form) {
            var self = this;
            var submitBtn = form.querySelector('[data-add-to-cart]');
            var originalText = submitBtn ? submitBtn.textContent : '';
            var isProductForm = form.matches('[data-product-form]');
            var requestOptions;

            self.clearCartError(form);

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'ADDING...';
            }

            if (isProductForm) {
                var variantInput = form.querySelector('input[name="id"]');
                var quantityInput = form.querySelector('input[name="quantity"]');
                var variantId = variantInput ? String(variantInput.value || '').trim() : '';
                var quantity = quantityInput ? Math.max(1, parseInt(quantityInput.value, 10) || 1) : 1;

                if (!variantId) {
                    self.showCartError(form, 'Please select a size before adding to bag.');
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                    }
                    return;
                }

                requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        items: [{
                            id: variantId,
                            quantity: quantity
                        }]
                    })
                };
            } else {
                requestOptions = {
                    method: 'POST',
                    body: new FormData(form)
                };
            }

            fetch('/cart/add.js', requestOptions)
                .then(function(response) {
                    return response.json().catch(function() {
                        return {};
                    }).then(function(data) {
                        if (!response.ok) {
                            var message = data.description || data.message || ('Shopify cart error (' + response.status + ')');
                            var error = new Error(message);
                            error.status = response.status;
                            error.shopifyResponse = data;
                            throw error;
                        }
                        return data;
                    });
                })
                .then(function() {
                    return fetch('/cart.js', {
                            headers: {
                                'Accept': 'application/json'
                            }
                        })
                        .then(function(r) {
                            return r.json();
                        })
                        .then(function(cart) {
                            self.updateCartCount(cart.item_count);
                            self.renderCartDrawer(cart);
                            self.open();
                        });
                })
                .catch(function(error) {
                    console.error('Cart error:', error, error.shopifyResponse || '');
                    self.showCartError(form, error.message || 'Unable to add this item to the bag.');
                    if (submitBtn) submitBtn.textContent = 'ERROR — TRY AGAIN';
                })
                .finally(function() {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        setTimeout(function() {
                            submitBtn.textContent = originalText;
                        }, 1400);
                    }
                });
        },
        updateQuantity: function(line, quantity) {
            var self = this;
            fetch('/cart/change.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    line: line,
                    quantity: quantity
                })
            }).then(function(r) {
                if (!r.ok) throw new Error('Update failed');
                return r.json();
            }).then(function() {
                self.refreshCart();
            }).catch(function(e) {
                console.error('Cart update error:', e);
            });
        },
        refreshCart: function() {
            var self = this;
            fetch('/cart.js', {
                headers: {
                    'Accept': 'application/json'
                }
            }).then(function(r) {
                return r.json();
            }).then(function(cart) {
                self.updateCartCount(cart.item_count);
                self.renderCartDrawer(cart);
            });
        },
        updateCartCount: function(count) {
            document.querySelectorAll('[data-cart-count-badge]').forEach(function(el) {
                el.textContent = count;
            });
            document.querySelectorAll('[data-cart-count]').forEach(function(el) {
                el.textContent = '(' + count + ')';
            });
        },
        renderCartDrawer: function(cart) {
            var self = this,
                drawer = this.drawer;
            if (!drawer) return;
            var panel = drawer.querySelector('.cart-drawer__panel');
            if (!panel) return;
            var header = panel.querySelector('.cart-drawer__header'),
                headerHtml = header ? header.outerHTML : '';
            if (cart.item_count === 0) {
                panel.innerHTML = headerHtml + '<div class="cart-drawer__empty"><p class="cart-drawer__empty-text">Your bag is empty</p><a href="/collections/all" class="btn btn--primary">START SHOPPING</a></div>';
                return;
            }
            var itemsHtml = '';
            cart.items.forEach(function(item, index) {
                var line = index + 1;
                var imageUrl = item.image || (item.featured_image && item.featured_image.url) || '';
                var imageHtml = '<a href="' + self.escapeAttribute(item.url) + '" class="cart-drawer__item-image">' + (imageUrl ? '<img src="' + self.escapeAttribute(imageUrl) + '" alt="' + self.escapeAttribute(item.product_title) + '" width="80" height="100" loading="lazy">' : '') + '</a>';
                itemsHtml += '<div class="cart-drawer__item" data-line-index="' + line + '">' + imageHtml + '<div class="cart-drawer__item-details"><div class="cart-drawer__item-header"><a href="' + item.url + '" class="cart-drawer__item-title">' + self.escapeHtml(item.product_title) + '</a><button class="cart-drawer__item-remove" data-remove-item data-line="' + line + '" aria-label="Remove">×</button></div><p class="cart-drawer__item-variant">' + self.escapeHtml(item.variant_title || '') + '</p><div class="cart-drawer__item-bottom"><div class="cart-drawer__quantity"><button type="button" class="cart-drawer__quantity-btn" aria-label="Decrease quantity" data-quantity-minus data-line="' + line + '">−</button><input class="cart-drawer__quantity-input" type="number" aria-label="Quantity" value="' + item.quantity + '" min="0" data-quantity-input data-line="' + line + '"><button type="button" class="cart-drawer__quantity-btn" aria-label="Increase quantity" data-quantity-plus data-line="' + line + '">+</button></div><span class="cart-drawer__item-price">' + self.formatMoney(item.final_line_price) + '</span></div></div></div>';
            });
            panel.innerHTML = headerHtml + '<div class="cart-drawer__body"><div class="cart-drawer__items">' + itemsHtml + '</div></div><div class="cart-drawer__footer"><div class="cart-drawer__subtotal"><span>Subtotal</span><span>' + this.formatMoney(cart.total_price) + '</span></div><p class="cart-drawer__note">Shipping & taxes calculated at checkout.</p><a href="/checkout" class="cart-drawer__checkout-btn btn btn--primary btn--full">CHECKOUT</a><a href="/collections/all" class="cart-drawer__continue">Continue Shopping</a></div>';
        },
        formatMoney: function(cents) {
            return '₹' + (cents / 100).toFixed(2);
        },
        escapeAttribute: function(text) {
            return this.escapeHtml(String(text || '')).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        },
        escapeHtml: function(text) {
            var div = document.createElement('div');
            div.appendChild(document.createTextNode(text));
            return div.innerHTML;
        }
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function() {
        CartDrawer.init();
    });
    else CartDrawer.init();
})();