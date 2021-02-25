import React from 'react';
import { ReactComponent as HeartSVG } from './svg/heart.svg';

export default function InfoCard() {
    return (
        <div class="card card-custom shadow-none w-auto w-md-300px w-lg-auto w-xxl-300px ml-auto">
            {/* begin::Card Body */}
            <div class="card-body bg-light px-12 py-10">
                <h3 class="fw-bolder fs-1 ">
                    <a href="#" class="text-gray-800">Sữa Dưỡng Thể Giữ Ẩm hàng ngày Aveeno Daily Moisturizing Lotion (354ml)</a>
                </h3>
                <div><HeartSVG></HeartSVG><HeartSVG></HeartSVG><HeartSVG></HeartSVG><HeartSVG></HeartSVG><HeartSVG></HeartSVG> 333</div>
                <div class="text-primary fs-3 mb-4">239,000 ₫</div>

                <div class="fs-7 mb-4">
                    Giúp nuôi dưỡng, dưỡng da không nhờn rít, dễ hấp thụ và thành phần tự nhiên, lành tính, không mùi.
                    Công thức với tinh chất yến mạch giúp duy trì độ ẩm, bảo vệ và cải thiện làn da khô, cho bạn làn da mềm mại, mịn màng và khỏe mạnh tự nhiên.
                                        </div>
                <div class="input-group">
                    <input type="number" class="form-control" placeholder="Số lượng" />
                    <button class="btn btn-primary"
                        type="button">Mua ngay</button>
                </div>
            </div>
            {/* end::Card Body */}
        </div>
    )
}
