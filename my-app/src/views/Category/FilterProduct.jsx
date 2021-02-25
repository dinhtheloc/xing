
import React from 'react'

export default function FilterProduct() {
    return (
        <form class="form" method="post">
            {/* begin::Categories */}
            <div class="mb-11">
                <label class="fs-2 fw-bolder text-dark mb-7">Categories</label>
                {/* begin::Categories list */}
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="checkbox" id="kt_checkbox_1" value="1" />
                    <label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_1">Electronics</label>
                </div>
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="checkbox" id="kt_checkbox_2" value="1" />
                    <label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_2">Sports Equipments</label>
                </div>
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="checkbox" id="kt_checkbox_3" value="1" />
                    <label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_3">Appliances</label>
                </div>
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="checkbox" id="kt_checkbox_4" value="1" />
                    <label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_4">Software Solutions</label>
                </div>
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="checkbox" id="kt_checkbox_5" value="1" />
                    <label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_4">Food &amp; Groceries</label>
                </div>
                {/* end::Categories list */}
            </div>
            {/* end::Categories */}
            {/* begin::Prices */}
            <div class="mb-7">
                <label class="fs-2 fw-bolder text-dark mb-7">Price</label>
                {/* begin::Price Options */}
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" id="kt_radio_1" value="1" name="prices" />
                    <label class="form-check-label fw-bold text-gray-600" for="kt_radio_1">All</label>
                </div>
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" id="kt_radio_2" value="1" name="prices" />
                    <label class="form-check-label fw-bold text-gray-600" for="kt_radio_2">0$ - 99$</label>
                </div>
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" id="kt_radio_3" value="1" name="prices" />
                    <label class="form-check-label fw-bold text-gray-600" for="kt_radio_3">100$ - 999$</label>
                </div>
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" id="kt_radio_4" value="1" name="prices" />
                    <label class="form-check-label fw-bold text-gray-600" for="kt_radio_4">1000$ &amp; Above</label>
                </div>
                {/* end::Price Options */}
            </div>
            {/* end::Prices */}
            {/* begin::Price Slider */}
            <div class="mb-13">
                <div class="text-dark fw-bolder fs-6 mb-5">Pricing Range</div>
            </div>
            {/* end::Price Slider */}
            {/* begin::Prices */}
            <div class="mb-11">
                <label class="fs-2 fw-bolder text-dark mb-7">Sizes</label>
                {/* begin::Button Group */}
                <div class="d-flex" role="group">
                    <input type="radio" class="btn-check" name="sizes" id="kt_size_1" />
                    <label class="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1" for="kt_size_1">XS</label>
                    <input type="radio" class="btn-check" name="sizes" id="kt_size_2" />
                    <label class="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1" for="kt_size_2">S</label>
                    <input type="radio" class="btn-check" checked="checked" name="sizes" id="kt_size_3" />
                    <label class="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1" for="kt_size_3">M</label>
                    <input type="radio" class="btn-check" name="sizes" id="kt_size_4" />
                    <label class="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1" for="kt_size_4">L</label>
                    <input type="radio" class="btn-check" name="sizes" id="kt_size_5" />
                    <label class="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1" for="kt_size_5">XL</label>
                </div>
                {/* end::Button Group */}
            </div>
            {/* end::Prices */}

            <button type="reset" class="btn btn-primary fw-bolder me-2 px-8">Reset</button>
            <button class="btn btn-color-gray-600 btn-active-light-primary fw-bolder px-8">Setup</button>
        </form>

    )
}
