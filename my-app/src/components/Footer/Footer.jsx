import React from 'react'

export default function Footer() {
    return (
        <div class="footer py-4 d-flex flex-lg-column">
            {/* begin::Container */}
            <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                {/* begin::Copyright */}
                <div class="text-dark order-2 order-md-1">
                    <span class="text-muted fw-bold me-2">2021 ©</span>
                    <a href="https://www.facebook.com/kagebunshinnojusu/" target="_blank" class="text-gray-800 text-hover-primary">Xing Beauty</a>
                </div>
                {/* end::Copyright */}
                {/* begin::Nav */}
                <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                    <li class="menu-item">
                        <a href="https://shopee.vn/xingbeauty" target="_blank" class="menu-link ps-0 pe-2">Shopee</a>
                    </li>
                    <li class="menu-item">
                        <a href="https://www.instagram.com/xing.beauty/" target="_blank" class="menu-link pe-0 pe-2">Instagram</a>
                    </li>
                    <li class="menu-item">
                        <a href="https://www.facebook.com/xingbeauty" target="_blank" class="menu-link pe-0">Facebook</a>
                    </li>
                </ul>
                {/* end::Nav */}
            </div>
            {/* end::Container */}
        </div>
    )
}
