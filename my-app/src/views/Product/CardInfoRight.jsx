import React from 'react';

import { ReactComponent as Boxes } from './svg/boxes.svg';
import { ReactComponent as DeliveryTruck } from './svg/delivery-truck.svg';
import { ReactComponent as Messenger } from './svg/messenger.svg';


export default function CardInfoRight() {
    return (
        <>
            <div className="card card-custom">
                <div className="card-body">
                    <div class="d-flex align-items-center">
                        {/* begin::Symbol*/}
                        <div class="symbol symbol-45px me-5">
                            <span class="symbol-label bg-light">
                                <span class="svg-icon svg-icon-muted svg-icon-2hx">
                                    <Boxes></Boxes>
                                </span>
                            </span>
                        </div>
                        {/* end::Symbol*/}
                        {/* begin::Info*/}
                        <div class="d-flex flex-column flex-grow-1">
                            <a href="#" class="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder">Hàng chính hãng 100%</a>
                            <span class="text-muted fw-bold">Tất cả mặt hàng đều có xuất sứ rõ ràng.</span>
                        </div>
                        {/* end::Info*/}
                    </div>
                </div>
            </div>
            <div className="card card-custom mt-4">
                <div className="card-body">
                    <div class="d-flex align-items-center">
                        {/* begin::Symbol*/}
                        <div class="symbol symbol-45px me-5">
                            <span class="symbol-label bg-light">
                                <span class="svg-icon svg-icon-muted svg-icon-2hx">
                                    <Messenger></Messenger>
                                </span>
                            </span>
                        </div>
                        {/* end::Symbol*/}
                        {/* begin::Info*/}
                        <div class="d-flex flex-column flex-grow-1">
                            <a href="#" class="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder">Hỗ trợ 24/7</a>
                            <span class="text-muted fw-bold">Nếu bạn có thắc mắc hay câu hỏi gì thì hãy inbox ngay cho shop qua <a href="https://www.facebook.com/xingbeauty" target="_blank">Facebook</a> hoặc <a href="https://www.facebook.com/xingbeauty" target="_blank">Instagram</a> nhé.</span>
                        </div>
                        {/* end::Info*/}
                    </div>

                </div>
            </div>

            <div className="card card-custom mt-4">
                <div className="card-body">
                    <div class="d-flex align-items-center">
                        {/* begin::Symbol*/}
                        <div class="symbol symbol-45px me-5">
                            <span class="symbol-label bg-light">
                                <span class="svg-icon svg-icon-muted svg-icon-2hx">
                                    <DeliveryTruck></DeliveryTruck>
                                </span>
                            </span>
                        </div>
                        {/* end::Symbol*/}
                        {/* begin::Info*/}
                        <div class="d-flex flex-column flex-grow-1">
                            <a href="#" class="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder">Giao hàng toàn quốc</a>
                            <span class="text-muted fw-bold">Hỗ trợ phí ship rẻ nhất cho các quận, tỉnh còn lại.</span>
                        </div>
                        {/* end::Info*/}
                    </div>

                </div>
            </div>
        </>
    )
}
