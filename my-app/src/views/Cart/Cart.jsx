import React from 'react';
import CardInfoRight from '../Product/CardInfoRight';
import {
    Link
  } from "react-router-dom";
export default function Cart() {
    return (
        <>
            <div className="row mt-4">
                <div className="col-9">
                    <div className="toolbar mb-4" id="kt_toolbar">
                        <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                            {/* begin::Info*/}
                            <div className="d-flex flex-column align-items-start justify-content-center flex-wrap me-1">
                                {/* begin::Title*/}
                                <h3 className="text-dark fw-bolder my-1">Giỏ hàng</h3>
                                {/* end::Title*/}
                                {/* begin::Breadcrumb*/}
                                <ul className="breadcrumb breadcrumb-line bg-transparent text-muted fw-bold p-0 my-1 fs-7">
                                    <li className="breadcrumb-item">
                                        <a href="/start/index.html" className="text-muted text-hover-primary">Trang chủ</a>
                                    </li>
                                    <li className="breadcrumb-item text-dark">Giỏ hàng</li>
                                </ul>
                                {/* end::Breadcrumb*/}
                            </div>
                        </div>
                    </div>

                    <div className="" style={{ paddingRight: 0 }}>
                        <div className="content fs-6 d-flex flex-column-fluid" id="kt_content">
                            {/* begin::Container */}
                            <div className="container">
                                <div className="card card-custom">
                                    <div className="card-body p-0">
                                        {/* begin::Invoice */}
                                        <div className="row justify-content-center pt-8 px-8 pt-md-20 px-md-0">
                                            <div className="col-md-10">
                                                {/*  begin: Invoice header */}
                                                <div className="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                                                    <h1 className="display-6 text-dark fw-bolder mb-10">Đơn hàng của bạn</h1>
                                                    <div className="d-flex flex-column align-items-md-end px-0">
                                                        {/* begin::Logo */}
                                                        <Link to="/" className="mb-5">
                                                            <img src="/assets/img/XingBeauty.svg" alt="XingBeauty"></img>
                                                        </Link>
                                                        {/* end::Logo */}
                                                        <span className="d-flex flex-column align-items-md-end fs-4 fw-bold text-muted">
                                                            <span>xingbeautyvn@gmail.com</span>
                                                            <span>01222407227</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* end: Invoice header */}

                                                <button type="button" 
                                                className="btn btn-active-accent active fw-bolder">Chỉnh sửa giỏ hàng</button>

                                                {/* begin: Invoice body */}
                                                <div className="row border-bottom pb-10">
                                                    <div className="col-md-9 py-md-10 pe-md-10">
                                                        <div className="table-responsive">
                                                            <table className="table align-middle table-borderless">
                                                                <thead>
                                                                    <tr className="border-bottom-1 border-bottom-gray-100 fw-bolder text-muted fs-6 text-uppercase">
                                                                        <th className="pt-5 pb-10 ps-0">Sản phẩm</th>
                                                                        <th className="pt-5 pb-10 text-end">Đơn giá</th>
                                                                        <th className="pt-5 pb-10 text-end">Số lượng</th>
                                                                        <th className="pt-5 pb-10 text-end">Tổng tiền</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="fw-bolder ps-0">
                                                                            <div className="d-flex align-items-center">
                                                                                <i className="fa fa-genderless text-success fs-1 me-2"></i>Sữa rửa mặt</div>
                                                                        </td>
                                                                        <td className="text-end">120.000₫</td>
                                                                        <td className="text-end">2</td>
                                                                        <td className="pe-0 fs-6 fw-bolder text-end">240.000₫</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="fw-bolder ps-0">
                                                                            <div className="d-flex align-items-center">
                                                                                <i className="fa fa-genderless text-success fs-1 me-2"></i>Sữa rửa mặt</div>
                                                                        </td>
                                                                        <td className="text-end">120.000₫</td>
                                                                        <td className="text-end">2</td>
                                                                        <td className="pe-0 fs-6 fw-bolder text-end">240.000₫</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="fw-bolder ps-0">
                                                                            <div className="d-flex align-items-center">
                                                                                <i className="fa fa-genderless text-success fs-1 me-2"></i>Sữa rửa mặt</div>
                                                                        </td>
                                                                        <td className="text-end">120.000₫</td>
                                                                        <td className="text-end">2</td>
                                                                        <td className="pe-0 fs-6 fw-bolder text-end">240.000₫</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="border-bottom w-100 mt-7 mb-13"></div>
                                                        <div className="d-flex fs-7 flex-wrap">
                                                            <button type="button" className="btn btn-primary fw-bolder fs-6 py-4 px-6 me-3 me-sm-6 my-1">Chốt đơn và đặt hàng</button>
                                                            <Link to="/" className="btn btn-light-primary fw-bolder fs-6 me-3 px-6 my-1">Tiếp tục mua hàng</Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 border-start-md ps-md-10 pt-md-10 text-end">
                                                        {/* begin::Total Amount */}
                                                        <div className="fs-3 fw-bolder text-muted mb-3">Tổng tiền</div>
                                                        <div className="fs-2x fw-bolder">720.000₫</div>
                                                        {/* end::Total Amount */}
                                                        {/* begin::Invoice Date */}
                                                        <div className="mt-4 text-gray-600 fs-6 fw-bold mb-3">DATE</div>
                                                        <div className="fs-6 fw-bold">12 May, 2020</div>
                                                        {/* end::Invoice Date */}
                                                    </div>
                                                </div>
                                                {/* end: Invoice body */}
                                            </div>
                                        </div>
                                        {/* end::Invoice */}
                                    </div>
                                </div>
                            </div>
                            {/* end::Container */}
                        </div>
                        {/* end::Content */}
                        {/*  */}
                    </div>
                </div>

                <div className="col-3">
                    <div className="container"
                        className="position-sticky top-0"
                        style={{ paddingLeft: 0 }}>
                        <CardInfoRight></CardInfoRight>
                    </div>
                </div >
            </div >
        </>
    )
}
