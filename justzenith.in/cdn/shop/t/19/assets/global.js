/* ============================================
   JUST ZENITH — Global JavaScript
   Scroll reveal, header, mobile menu,
   announcement bar, testimonials, product page
   ============================================ */

(function() {
    'use strict';

    /* --- Scroll Reveal (IntersectionObserver) --- */
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('[data-scroll-reveal]');
        if (!revealElements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        revealElements.forEach((el) => observer.observe(el));
    }

    /* --- Header Scroll Behavior --- */
    function initHeader() {
        const header = document.querySelector('[data-header]');
        if (!header) return;

        let lastScroll = 0;
        let ticking = false;

        function onScroll() {
            const currentScroll = window.scrollY;

            if (currentScroll > 50) {
                header.classList.add('is-scrolled');
            } else {
                header.classList.remove('is-scrolled');
            }

            lastScroll = currentScroll;
            ticking = false;
        }

        window.addEventListener(
            'scroll',
            function() {
                if (!ticking) {
                    requestAnimationFrame(onScroll);
                    ticking = true;
                }
            }, {
                passive: true
            }
        );

        // Initial check
        onScroll();
    }

    /* --- Mobile Menu --- */
    function initMobileMenu() {
        const toggleBtn = document.querySelector('[data-mobile-menu-toggle]');
        const closeBtn = document.querySelector('[data-mobile-menu-close]');
        const menu = document.querySelector('[data-mobile-menu]');
        if (!toggleBtn || !menu) return;

        function openMenu() {
            menu.classList.add('is-open');
            menu.setAttribute('aria-hidden', 'false');
            toggleBtn.setAttribute('aria-expanded', 'true');
            document.body.classList.add('menu-open');

            // Trap focus
            const focusable = menu.querySelectorAll(
                'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
            );
            if (focusable.length) focusable[0].focus();
        }

        function closeMenu() {
            menu.classList.remove('is-open');
            menu.setAttribute('aria-hidden', 'true');
            toggleBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
            toggleBtn.focus();
        }

        toggleBtn.addEventListener('click', openMenu);
        if (closeBtn) closeBtn.addEventListener('click', closeMenu);

        // Close on Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menu.classList.contains('is-open')) {
                closeMenu();
            }
        });
    }

    /* --- Announcement Bar Rotation --- */
    function initAnnouncementBar() {
        const slider = document.querySelector('[data-announcement-slider]');
        if (!slider) return;

        const slides = slider.querySelectorAll('.announcement-bar__slide');
        if (slides.length <= 1) return;

        let current = 0;
        const interval = 4000;

        function nextSlide() {
            slides[current].classList.remove('is-active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('is-active');
        }

        setInterval(nextSlide, interval);
    }

    /* --- Testimonial Slider --- */
    function initTestimonials() {
        const sliders = document.querySelectorAll('[data-testimonial-slider]');

        sliders.forEach(function(slider) {
            const slides = slider.querySelectorAll('[data-testimonial-slide]');
            const dots = slider.querySelectorAll('[data-testimonial-dot]');
            const prevBtn = slider.querySelector('[data-testimonial-prev]');
            const nextBtn = slider.querySelector('[data-testimonial-next]');
            const autoplay = slider.dataset.autoplay === 'true';
            const speed = parseInt(slider.dataset.speed, 10) * 1000 || 5000;

            if (slides.length <= 1) return;

            let current = 0;
            let autoplayTimer = null;

            function goTo(index) {
                slides[current].classList.remove('is-active');
                if (dots[current]) dots[current].classList.remove('is-active');

                current = ((index % slides.length) + slides.length) % slides.length;

                slides[current].classList.add('is-active');
                if (dots[current]) dots[current].classList.add('is-active');

                resetAutoplay();
            }

            function next() {
                goTo(current + 1);
            }

            function prev() {
                goTo(current - 1);
            }

            function resetAutoplay() {
                if (!autoplay) return;
                if (autoplayTimer) clearInterval(autoplayTimer);
                autoplayTimer = setInterval(next, speed);
            }

            if (prevBtn) prevBtn.addEventListener('click', prev);
            if (nextBtn) nextBtn.addEventListener('click', next);

            dots.forEach(function(dot) {
                dot.addEventListener('click', function() {
                    const index = parseInt(this.dataset.testimonialDot, 10);
                    goTo(index);
                });
            });

            if (autoplay) {
                autoplayTimer = setInterval(next, speed);

                // Pause on hover
                slider.addEventListener('mouseenter', function() {
                    if (autoplayTimer) clearInterval(autoplayTimer);
                });
                slider.addEventListener('mouseleave', function() {
                    autoplayTimer = setInterval(next, speed);
                });
            }
        });
    }

    /* --- Product Page: Gallery --- */
    function initProductGallery() {
        const gallery = document.querySelector('[data-product-gallery]');
        if (!gallery) return;

        const mainGallery = gallery.querySelector('.product-page__gallery-main');
        const slides = [...gallery.querySelectorAll('[data-gallery-slide]')];
        const thumbnails = [...gallery.querySelectorAll('[data-thumbnail]')];

        if (!slides.length) return;

        let currentIndex = slides.findIndex(slide => slide.classList.contains('is-active'));
        if (currentIndex < 0) currentIndex = 0;

        function showSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;

            currentIndex = index;

            slides.forEach((slide, i) => {
                slide.classList.toggle('is-active', i === currentIndex);
            });

            thumbnails.forEach((thumb, i) => {
                thumb.classList.toggle('is-active', i === currentIndex);
            });
        }

        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                showSlide(index);
            });
        });

        let startX = 0;

        mainGallery.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
        }, {
            passive: true
        });

        mainGallery.addEventListener('touchend', e => {
            const endX = e.changedTouches[0].clientX;
            const distance = startX - endX;

            if (Math.abs(distance) < 40) return;

            if (distance > 0) {
                showSlide(currentIndex + 1);
            } else {
                showSlide(currentIndex - 1);
            }
        }, {
            passive: true
        });
    }

    /* --- Product Page: Variant Selector --- */
    function initVariantSelector() {
        const productForm = document.querySelector('[data-product-form]');
        if (!productForm) return;

        const productJsonEl = document.querySelector('[data-product-json]');
        const inventoryJsonEl = document.querySelector('[data-product-inventory]');
        if (!productJsonEl) return;

        let productData, inventoryData;
        try {
            productData = JSON.parse(productJsonEl.textContent);
            inventoryData = inventoryJsonEl ? JSON.parse(inventoryJsonEl.textContent) : {};
        } catch (e) {
            return;
        }

        const optionInputs = productForm.querySelectorAll('[data-option-input]');
        const variantIdInput = productForm.querySelector('[data-variant-id]');
        const addToCartBtn = productForm.querySelector('[data-add-to-cart]');

        optionInputs.forEach(function(input) {
            input.addEventListener('change', function() {
                // Update swatch styling
                const swatch = this.closest('[data-option-swatch]');
                const container = this.closest('.product-page__option-values');
                if (container) {
                    container.querySelectorAll('[data-option-swatch]').forEach(function(s) {
                        s.classList.remove('is-selected');
                    });
                }
                if (swatch) swatch.classList.add('is-selected');

                // Update option value display
                const optionWrapper = this.closest('[data-option-index]');
                if (optionWrapper) {
                    const valueDisplay = optionWrapper.querySelector('[data-option-value]');
                    if (valueDisplay) valueDisplay.textContent = this.value;
                }

                // Find matching variant
                var selectedOptions = [];
                productForm.querySelectorAll('[data-option-input]:checked').forEach(function(opt) {
                    selectedOptions.push(opt.value);
                });

                var matchedVariant = productData.variants.find(function(variant) {
                    return variant.options.every(function(opt, index) {
                        return opt === selectedOptions[index];
                    });
                });

                if (matchedVariant) {
                    variantIdInput.value = matchedVariant.id;

                    // Update price
                    var priceContainer = document.querySelector('#price-' + productData.id);
                    if (priceContainer) {
                        var regularPrice = priceContainer.querySelector('.price__regular');
                        var salePrice = priceContainer.querySelector('.price__sale');

                        if (matchedVariant.compare_at_price && matchedVariant.compare_at_price > matchedVariant.price) {
                            priceContainer.classList.add('price--on-sale');
                            if (regularPrice) {
                                regularPrice.classList.add('price__regular--compare');
                                regularPrice.textContent = formatMoney(matchedVariant.compare_at_price);
                            }
                            if (!salePrice) {
                                var salePriceEl = document.createElement('span');
                                salePriceEl.className = 'price__sale';
                                salePriceEl.textContent = formatMoney(matchedVariant.price);
                                regularPrice.parentNode.appendChild(salePriceEl);
                            } else {
                                salePrice.textContent = formatMoney(matchedVariant.price);
                            }
                        } else {
                            priceContainer.classList.remove('price--on-sale');
                            if (regularPrice) {
                                regularPrice.classList.remove('price__regular--compare');
                                regularPrice.textContent = formatMoney(matchedVariant.price);
                            }
                            if (salePrice) salePrice.remove();
                        }
                    }

                    // Update add to cart button
                    if (matchedVariant.available) {
                        addToCartBtn.disabled = false;
                        addToCartBtn.textContent = 'ADD TO BAG';
                    } else {
                        addToCartBtn.disabled = true;
                        addToCartBtn.textContent = 'SOLD OUT';
                    }

                    // Update stock counter
                    var stockCounter = document.querySelector('[data-stock-counter]');
                    if (stockCounter) {
                        var stockHtml = '';
                        if (matchedVariant.available) {
                            var variantInventory = inventoryData[matchedVariant.id] || {};
                            if (variantInventory.management === 'shopify') {
                                var qty = variantInventory.quantity;
                                if (qty <= 0) {
                                    stockHtml = '<span class="product-page__stock-dot product-page__stock-dot--low"></span>' +
                                        '<span class="product-page__stock-text product-page__stock-text--low">Selling fast \u2014 limited stock</span>';
                                } else if (qty <= 5) {
                                    stockHtml = '<span class="product-page__stock-dot product-page__stock-dot--low"></span>' +
                                        '<span class="product-page__stock-text product-page__stock-text--low">Only ' + qty + ' pieces left</span>';
                                } else if (qty <= 20) {
                                    stockHtml = '<span class="product-page__stock-dot product-page__stock-dot--medium"></span>' +
                                        '<span class="product-page__stock-text product-page__stock-text--medium">' + qty + ' pieces in stock</span>';
                                } else {
                                    stockHtml = '<span class="product-page__stock-dot product-page__stock-dot--high"></span>' +
                                        '<span class="product-page__stock-text">' + qty + ' pieces in stock</span>';
                                }
                            } else {
                                stockHtml = '<span class="product-page__stock-dot product-page__stock-dot--high"></span>' +
                                    '<span class="product-page__stock-text">In stock</span>';
                            }
                        } else {
                            stockHtml = '<span class="product-page__stock-dot product-page__stock-dot--out"></span>' +
                                '<span class="product-page__stock-text product-page__stock-text--out">Out of stock</span>';
                        }
                        stockCounter.innerHTML = stockHtml;
                    }

                    // Update gallery image
                    if (matchedVariant.featured_image) {
                        var slides = document.querySelectorAll('[data-gallery-slide]');
                        var thumbs = document.querySelectorAll('[data-thumbnail]');
                        var targetId = String(matchedVariant.featured_image.id);

                        slides.forEach(function(slide) {
                            slide.classList.toggle('is-active', slide.dataset.imageId === targetId);
                        });
                        thumbs.forEach(function(thumb) {
                            thumb.classList.toggle('is-active', thumb.dataset.imageId === targetId);
                        });
                    }

                    // Update URL
                    var url = new URL(window.location);
                    url.searchParams.set('variant', matchedVariant.id);
                    window.history.replaceState({}, '', url);
                }
            });
        });
    }

    /* --- Product Page: Quantity Selector --- */
    function initQuantitySelectors() {
        document.addEventListener('click', function(e) {
            var decreaseBtn = e.target.closest('[data-quantity-decrease]');
            var increaseBtn = e.target.closest('[data-quantity-increase]');

            if (decreaseBtn) {
                var input = decreaseBtn.parentElement.querySelector('[data-quantity-input]');
                if (input) {
                    var val = parseInt(input.value, 10);
                    if (val > 1) input.value = val - 1;
                }
            }

            if (increaseBtn) {
                var input = increaseBtn.parentElement.querySelector('[data-quantity-input]');
                if (input) {
                    var val = parseInt(input.value, 10);
                    input.value = val + 1;
                }
            }
        });
    }

    /* --- Share Button --- */
    function initShareButton() {
        var shareBtn = document.querySelector('[data-share-btn]');
        if (!shareBtn) return;

        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: window.location.href,
                });
            } else {
                navigator.clipboard.writeText(window.location.href).then(function() {
                    var originalText = shareBtn.querySelector('span');
                    if (originalText) {
                        var prev = originalText.textContent;
                        originalText.textContent = 'Link Copied!';
                        setTimeout(function() {
                            originalText.textContent = prev;
                        }, 2000);
                    }
                });
            }
        });
    }

    /* --- Collection Sort --- */
    function initCollectionSort() {
        var sortSelect = document.querySelector('[data-sort-select]');
        if (!sortSelect) return;

        sortSelect.addEventListener('change', function() {
            var url = new URL(window.location);
            url.searchParams.set('sort_by', this.value);
            window.location = url.toString();
        });
    }

    /* --- Money Formatter (simple) --- */
    function formatMoney(cents) {
        var amount = (cents / 100).toFixed(2);
        return '₹' + amount;
    }

    /* --- Smooth Scroll for Anchor Links --- */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /* --- Size Chart Modal --- */
    function initSizeChart() {
        var openBtn = document.querySelector('[data-size-chart-open]');
        var modal = document.querySelector('[data-size-chart-modal]');
        if (!openBtn || !modal) return;

        function openModal() {
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
        }

        function closeModal() {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
        }

        openBtn.addEventListener('click', openModal);

        modal.querySelectorAll('[data-size-chart-close]').forEach(function(el) {
            el.addEventListener('click', closeModal);
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('is-open')) {
                closeModal();
            }
        });
    }

    /* --- Initialize Everything --- */
    function init() {
        initScrollReveal();
        initHeader();
        initMobileMenu();
        initAnnouncementBar();
        initTestimonials();
        initProductGallery();
        initVariantSelector();
        initQuantitySelectors();
        initShareButton();
        initCollectionSort();
        initSmoothScroll();
        initSizeChart();
    }

    /* --- Reinitialize a single section (used by customizer events) --- */
    function reinitSection() {
        initScrollReveal();
        initTestimonials();
        initAnnouncementBar();
        initProductGallery();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    /* --- Shopify Theme Editor Events ---
       These fire when the merchant edits sections in the theme customizer.
       Without them, section changes (text, images, blocks) won't visually
       update until a full page reload. */
    document.addEventListener('shopify:section:load', reinitSection);
    document.addEventListener('shopify:section:select', reinitSection);
    document.addEventListener('shopify:section:reorder', reinitSection);
    document.addEventListener('shopify:block:select', function(e) {
        reinitSection();
        // Scroll the selected block into view if applicable
        var target = e.target;
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    });
    document.addEventListener('shopify:block:deselect', reinitSection);
})();