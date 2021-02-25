import React from 'react';
import FilterProduct from './FilterProduct';
import ListCardProduct from './ListCardProduct';


export default function Category() {
    return (
        <div className="row mt-4">
            <div className="col-9">
                <div className="toolbar mb-4" id="kt_toolbar">
                    <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                        {/* begin::Info*/}
                        <div className="d-flex flex-column align-items-start justify-content-center flex-wrap me-1">
                            {/* begin::Title*/}
                            <h3 className="text-dark fw-bolder my-1">Danh mục</h3>
                            {/* end::Title*/}
                            {/* begin::Breadcrumb*/}
                            <ul className="breadcrumb breadcrumb-line bg-transparent text-muted fw-bold p-0 my-1 fs-7">
                                <li className="breadcrumb-item">
                                    <a href="/start/index.html" className="text-muted text-hover-primary">Trang chủ</a>
                                </li>
                                <li className="breadcrumb-item text-dark">Chăm sóc da</li>
                            </ul>
                            {/* end::Breadcrumb*/}
                        </div>
                        {/* end::Info*/}
                        {/* begin::Nav*/}
                        <div className="d-flex align-items-center flex-nowrap text-nowrap overflow-auto py-1">
                            <a href="/start/apps/chat.html" className="btn btn-active-accent fw-bolder">Danh mục 1</a>
                            <a href="/start/apps/inbox.html" className="btn btn-active-accent fw-bolder ms-3">Danh mục 2</a>
                            <a href="/start/apps/shop/shop-1.html" className="btn btn-active-accent fw-bolder ms-3">Danh mục 3</a>
                            <a href="/start/apps/shop/product.html" className="btn btn-active-accent fw-bolder ms-3">Danh mục 4</a>
                        </div>
                        {/* end::Nav*/}
                    </div>
                </div>

                <div className="container">
                    <div className="card card-custom">
                        <div className="card-body p-4">
                            <ListCardProduct></ListCardProduct>

                            <ul class="pagination mt-4">
                                <li class="page-item previous disabled"><a href="#" class="page-link"><i class="previous"></i></a></li>
                                <li class="page-item "><a href="#" class="page-link">1</a></li>
                                <li class="page-item active"><a href="#" class="page-link">2</a></li>
                                <li class="page-item "><a href="#" class="page-link">3</a></li>
                                <li class="page-item "><a href="#" class="page-link">4</a></li>
                                <li class="page-item "><a href="#" class="page-link">5</a></li>
                                <li class="page-item "><a href="#" class="page-link">6</a></li>
                                <li class="page-item next"><a href="#" class="page-link"><i class="next"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            <div className="col-3">
                <div className="card card-custom">
                    <div className="card-body">
                        <div className="d-flex flex-column text-center bg-light-primary rounded py-8 px-5 mb-10">
                            <h3 className="fs-2 fw-bolder mb-2">Tìm kiếm sản phẩm</h3>
                            <span className="text-muted fs-6 fw-bolder">Công cụ tìm kiếm nhanh chóng</span>
                        </div>

                        <FilterProduct></FilterProduct>
                    </div>
                </div>
            </div>
        </div>
    )
}
