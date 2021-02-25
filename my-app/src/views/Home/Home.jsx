
import React, { useEffect } from 'react';
import Banner from './Banner';
import ListCardProduct from './ListCardProduct';
import SearchProduct from './SearchProduct';

export default function Home() {
	return (
		<>
			<div style={{background: '#fff', marginBottom: 150}}>
				<div className="container">
					<Banner></Banner>
				</div>
				<img
				style={{position: 'absolute'}}
					className="w-100"
					src='/assets/img/patterns/wave.svg'></img>
			</div>
			<div className="container">

				{/* <div className="pattern bottom"></div> */}
				<div className="card card-custom mt-10">
					<div className="card-body">
						<SearchProduct></SearchProduct>
						{/* begin::Section*/}
						<div className="mb-10">
							{/* begin::Heading*/}
							<div className="d-flex justify-content-between align-items-center mb-7">
								<h2 className="fw-bolder text-dark fs-2 mb-0">Sản phẩm khuyến mãi</h2>
								<a href="#" className="btn btn-light-primary btn-sm fw-bolder">Xem tất cả</a>
							</div>
							{/* end::Heading*/}
							<ListCardProduct></ListCardProduct>
						</div>
						{/* end::Section*/}
						{/* begin::Section*/}

						{/* begin::Section*/}
						<div className="mb-10">
							{/* begin::Heading*/}
							<div className="d-flex justify-content-between align-items-center mb-7">
								<h2 className="fw-bolder text-dark fs-2 mb-0">Trang điểm</h2>
								<a href="#" className="btn btn-light-primary btn-sm fw-bolder">Xem tất cả</a>
							</div>
							{/* end::Heading*/}
							<ListCardProduct></ListCardProduct>
						</div>
						{/* end::Section*/}
						{/* begin::Section*/}

						{/* begin::Section*/}
						<div className="mb-10">
							{/* begin::Heading*/}
							<div className="d-flex justify-content-between align-items-center mb-7">
								<h2 className="fw-bolder text-dark fs-2 mb-0">Skincare</h2>
								<a href="#" className="btn btn-light-primary btn-sm fw-bolder">Xem tất cả</a>
							</div>
							{/* end::Heading*/}
							<ListCardProduct></ListCardProduct>
						</div>
						{/* end::Section*/}
						{/* begin::Section*/}
					</div>
				</div>
			</div>
		</>
	)
}
