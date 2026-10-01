/* JUST ZENITH — Product variant state sync for accelerated checkout */
(function() {
    'use strict';

    function initVariantSyncFix() {
        var form = document.querySelector('form[data-product-form]');
        var productJsonEl = document.querySelector('[data-product-json]');

        if (!form || !productJsonEl) return;

        var productData;
        try {
            productData = JSON.parse(productJsonEl.textContent);
        } catch (error) {
            console.error('Variant sync: invalid product JSON', error);
            return;
        }

        if (!productData || !Array.isArray(productData.variants) || !productData.variants.length) return;

        var variantIdInput = form.querySelector('input[name="id"][data-variant-id]');
        var optionInputs = Array.prototype.slice.call(form.querySelectorAll('[data-option-input]'));

        function getVariantById(id) {
            if (!id) return null;
            return productData.variants.find(function(variant) {
                return String(variant.id) === String(id);
            }) || null;
        }

        function getVariantFromCheckedOptions() {
            var selectedOptions = [];
            form.querySelectorAll('[data-option-input]:checked').forEach(function(input) {
                selectedOptions.push(input.value);
            });

            if (!selectedOptions.length) return null;

            return productData.variants.find(function(variant) {
                return variant.options.every(function(optionValue, index) {
                    return String(optionValue) === String(selectedOptions[index]);
                });
            }) || null;
        }

        function selectVariantOptions(variant) {
            if (!variant || !optionInputs.length) return;

            form.querySelectorAll('[data-option-index]').forEach(function(wrapper, index) {
                var desiredValue = variant.options[index];
                if (desiredValue == null) return;

                var matchingInput = Array.prototype.slice.call(wrapper.querySelectorAll('[data-option-input]')).find(function(input) {
                    return String(input.value) === String(desiredValue);
                });

                if (!matchingInput) return;

                matchingInput.checked = true;

                wrapper.querySelectorAll('[data-option-swatch]').forEach(function(swatch) {
                    swatch.classList.remove('is-selected');
                });

                var activeSwatch = matchingInput.closest('[data-option-swatch]');
                if (activeSwatch) activeSwatch.classList.add('is-selected');

                var valueDisplay = wrapper.querySelector('[data-option-value]');
                if (valueDisplay) valueDisplay.textContent = matchingInput.value;
            });
        }

        function syncHiddenVariantId() {
            var checkedVariant = getVariantFromCheckedOptions();
            if (checkedVariant && variantIdInput) {
                variantIdInput.value = String(checkedVariant.id);
            }
            return checkedVariant;
        }

        var urlVariantId = null;
        try {
            urlVariantId = new URL(window.location.href).searchParams.get('variant');
        } catch (e) {
            urlVariantId = null;
        }

        var initialVariant =
            getVariantById(urlVariantId) ||
            getVariantById(variantIdInput && variantIdInput.value) ||
            getVariantFromCheckedOptions() ||
            productData.variants.find(function(variant) {
                return variant.available;
            }) ||
            productData.variants[0];

        if (initialVariant) {
            selectVariantOptions(initialVariant);
            if (variantIdInput) variantIdInput.value = String(initialVariant.id);

            var checkedInput = form.querySelector('[data-option-input]:checked');
            if (checkedInput) {
                checkedInput.dispatchEvent(new Event('change', {
                    bubbles: true
                }));
            }
        }

        optionInputs.forEach(function(input) {
            input.addEventListener('change', function() {
                syncHiddenVariantId();
            }, true);
        });

        form.addEventListener('submit', function() {
            syncHiddenVariantId();
        }, true);

        form.addEventListener('click', function(event) {
            if (event.target.closest('.shopify-payment-button') || event.target.closest('.shopify-payment-button__button')) {
                syncHiddenVariantId();
            }
        }, true);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVariantSyncFix);
    } else {
        initVariantSyncFix();
    }
})();