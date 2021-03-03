import React from 'react';
import {
    Link
  } from "react-router-dom";
import { ReactComponent as SidebarToggler } from './sidebar-toggler.svg';
import { ReactComponent as ShoppingCart } from './shopping-cart.svg';

export default function Header() {
    return (
        <div id="kt_header"
            style={{ background: '#fff' }}
            className="header"
            data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
            {/* begin::Container*/}
            <div className="container d-flex align-items-stretch justify-content-between">
                {/* begin::Left*/}
                <div className="d-flex align-items-center">
                    {/* begin::Mega Menu Toggler*/}
                    <button className="btn btn-icon btn-accent me-2 me-lg-6"
                        id="kt_mega_menu_toggle" data-bs-toggle="modal" data-bs-target="#kt_mega_menu_modal">
                        {/* begin::Svg Icon | path: '.svg/icons/Text/Article.svg.'*/}
                        <span className="svg-icon svg-icon-1">
                            <SidebarToggler></SidebarToggler>
                        </span>
                        {/* end::Svg Icon*/}
                    </button>
                    {/* end::Mega Menu Toggler*/}
                    {/* begin::Logo*/}
                    <Link to="/">
                        <img alt="Logo" src="/assets/img/XingBeauty.svg" className="h-30px" />
                    </Link>
                    {/* end::Logo*/}
                </div>
                {/* end::Left*/}
                {/* begin::Right*/}
                <div className="d-flex align-items-center">
                    <Link to="/gio-hang" class="btn btn-icon btn-accent btn-light-danger fw-bolder pulse pulse-danger">
                        <span class="svg-icon svg-icon-1">
                            <ShoppingCart></ShoppingCart>
                        </span>
                    </Link>
                </div>
                {/* end::Right*/}
            </div>
            {/* end::Container*/}
        </div>
    )
}
