import React from 'react';
import { ReactComponent as SearchSVG } from './svg/search.svg';

export default function SearchProduct() {
    return (
        <div className="card card-custom mb-12">
            <div className="card-body card-rounded p-0 d-flex bg-light-primary">
                <div className="d-flex flex-column flex-lg-row-auto p-10 p-md-20">
                    <h1 className="fw-bolder text-dark">Công cụ tìm kiếm</h1>
                    <div className="fs-3 mb-8">Tìm kiếm sản phẩm mà bạn yêu thích</div>
                    {/* begin::Form*/}
                    <form className="d-flex flex-center py-2 px-6 bg-white rounded">
                        {/* begin::Svg Icon | path: '.svg/icons/General/Search.svg.'*/}
                        <span className="svg-icon svg-icon-1 svg-icon-primary">
                            <SearchSVG></SearchSVG>
                        </span>
                        {/* end::Svg Icon*/}
                        <input type="text" className="form-control border-0 fw-bold ps-2 w-xxl-350px" placeholder="Dưỡng da, Son môi, mặt nạ..." />
                    </form>
                    {/* end::Form*/}
                </div>
                <div className="d-none d-md-flex flex-row-fluid mw-400px ml-auto bgi-no-repeat bgi-position-y-center bgi-position-x-left bgi-size-cover"
                    style={{ backgroundImage: `url(https://preview.keenthemes.com/start/assets/media/svg/illustrations/progress.svg)` }}></div>
            </div>
        </div>
    )
}
