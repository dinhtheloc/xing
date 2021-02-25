import React from 'react';
// import FilterProduct from './FilterProduct';
// import ListCardProduct from './ListCardProduct';


export default function Product() {
    return (
        <div className="row mt-4">
            <div className="col-9">
                <div className="toolbar mb-4" id="kt_toolbar">
                    <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                        {/* begin::Info*/}
                        <div className="d-flex flex-column align-items-start justify-content-center flex-wrap me-1">
                            {/* begin::Title*/}
                            <h3 className="text-dark fw-bolder my-1">Chi tiết sản phẩm</h3>
                            {/* end::Title*/}
                            {/* begin::Breadcrumb*/}
                            <ul className="breadcrumb breadcrumb-line bg-transparent text-muted fw-bold p-0 my-1 fs-7">
                                <li className="breadcrumb-item">
                                    <a href="/start/index.html" className="text-muted text-hover-primary">Trang chủ</a>
                                </li>
                                <li className="breadcrumb-item">Chăm sóc da</li>
                                <li className="breadcrumb-item text-dark">Sữa Dưỡng Thể Giữ Ẩm hàng ngày Aveeno Daily Moisturizing Lotion (354ml)</li>
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
                    <div className="flex-row-fluid">
                        <div className="card card-custom mb-5 mb-xxl-8">
                            <div class="card-body d-flex bg-white p-12 flex-column flex-md-row flex-lg-column flex-xxl-row">
                                {/* begin::Image */}
                                <div class="bgi-no-repeat bgi-position-center bgi-size-contain h-300px h-md-auto h-lg-300px h-xxl-auto mw-100 w-650px mx-auto"
                                    style={{ backgroundImage: "url('https://nuty.vn/wp-content/uploads/2020/12/aveeno-daily-moisturizing-lotion-354ml-600x600.jpg')" }}></div>
                                {/* end::Image */}
                                {/* begin::Card */}
                                <div class="card card-custom shadow-none w-auto w-md-300px w-lg-auto w-xxl-300px ml-auto">
                                    {/* begin::Card Body */}
                                    <div class="card-body bg-light px-12 py-10">
                                        <h3 class="fw-bolder fs-1 mb-1">
                                            <a href="#" class="text-gray-800">Sữa Dưỡng Thể Giữ Ẩm hàng ngày Aveeno Daily Moisturizing Lotion (354ml)</a>
                                        </h3>
                                        <div class="text-primary fs-3 mb-9">239,000 ₫</div>
                                        <div class="fs-7 mb-8">
                                            Giúp nuôi dưỡng, dưỡng da không nhờn rít, dễ hấp thụ và thành phần tự nhiên, lành tính, không mùi.
                                            Công thức với tinh chất yến mạch giúp duy trì độ ẩm, bảo vệ và cải thiện làn da khô, cho bạn làn da mềm mại, mịn màng và khỏe mạnh tự nhiên.
                                        </div>

                                        <button type="button" class="btn btn-primary fw-bolder me-2 px-8">Mua ngay</button>

                                    </div>
                                    {/* end::Card Body */}
                                </div>
                                {/* end::Card */}
                            </div>
                            {/*  */}
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

                        {/* <FilterProduct></FilterProduct> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
