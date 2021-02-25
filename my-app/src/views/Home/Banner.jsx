import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap';

export default function Banner() {

    useEffect(() => {
        var myCarousel = document.querySelector('#kt_carousel_1_carousel')
        var carousel = new Carousel(myCarousel);
    }, []);
    return (
        <div id="kt_carousel_1_carousel" class="carousel carousel-custom slide" data-bs-ride="carousel" data-bs-interval="8000">
            {/* begin::Heading */}
            <div class="d-flex align-items-center justify-content-between flex-wrap">
                {/* begin::Label */}
                <span class="fs-4 fw-bolder pe-2">Chương trình khuyến mãi</span>
                {/* end::Label */}

                {/* begin::Carousel Indicators */}
                <ol class="p-0 m-0 carousel-indicators carousel-indicators-dots">
                    <li data-bs-target="#kt_carousel_1_carousel" data-bs-slide-to="0" class="ms-1 active"></li>
                    <li data-bs-target="#kt_carousel_1_carousel" data-bs-slide-to="1" class="ms-1"></li>
                </ol>
                {/* end::Carousel Indicators */}
            </div>
            {/* end::Heading */}

            {/* begin::Carousel */}
            <div class="carousel-inner pt-8">
                {/* begin::Item */}
                <div class="carousel-item active">
                    <img
                        class="d-block w-100"
                        src={'https://nuty.vn/wp-content/uploads/2021/02/bannerweb-flash-sale-48h.jpg'}></img>
                </div>
                {/* end::Item */}

                {/* begin::Item */}
                <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src={'https://nuty.vn/wp-content/uploads/2021/02/bannerweb-7.png'}></img>
                </div>
                {/* end::Item */}
            </div>
            {/* end::Carousel */}
            {/*  */}
        </div>

    )
}
