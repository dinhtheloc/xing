import React from 'react';
import InfoCard from './InfoCard';
import './style-product.css';
import ListCardProduct from './ListCardProduct';
import CardInfoRight from './CardInfoRight';
import ImageProduct from './ImageProduct';
import { ReactComponent as Divider } from './svg/divider.svg';
export default function Product() {
    return (
        <>
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
                        </div>
                    </div>

                    <div className="container" style={{ paddingRight: 0 }}>
                        <div className="flex-row-fluid">
                            <div className="card card-custom mb-5 mb-xxl-8">
                                <div class="card-body">

                                    <div className="d-flex bg-white p-12 flex-column flex-md-row flex-lg-column flex-xxl-row">
                                        {/* begin::Image */}
                                        <div class="bgi-no-repeat bgi-position-center bgi-size-contain h-300px h-md-auto h-lg-300px h-xxl-auto mw-100 w-650px mx-auto"
                                            style={{ backgroundImage: "url('https://nuty.vn/wp-content/uploads/2020/12/aveeno-daily-moisturizing-lotion-354ml-600x600.jpg')" }}>
                                        </div>
                                        {/* end::Image */}

                                        {/* begin::Card */}
                                        <InfoCard></InfoCard>
                                        {/* end::Card */}
                                    </div>
                                    <ImageProduct></ImageProduct>
                                </div>
                            </div>
                        </div>

                        <div class="card card-custom">
                            <div class="card-header">
                                <h3 class="card-title">Mô tả sản phẩm</h3>
                            </div>
                            <div class="card-body">
                                <div className="description">
                                    <h2><strong>Sữa Dưỡng Ẩm Benton Deep Green Tea Lotion</strong></h2>
                                    <p><span>Trà xanh bao giờ cũng là “nguồn cảm hứng bất tận” cho các sản phẩm làm đẹp. Nhất là đối với Hàn Quốc – một đất nước luôn dành sự quan tâm đặc biệt cho chiết xuất thiên nhiên này. Chính vì thế mà dòng dưỡng da Deep Green Tea của Benton đã chiếm được tình cảm của hàng vạn chị em dù chỉ ra mới ra mắt. Liệu em ấy có đủ sức “cạnh tranh” với hàng trăm sản phẩm đã ra mắt trước đây? Hãy cùng Nuty khám phá sức mạnh vô hình của từng em nha.</span></p>
                                    <p><img class="size-large wp-image-131764 aligncenter" src="https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-2-1024x1024.jpg" alt="" width="1024" height="1024" srcset="https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-2-1024x1024.jpg 1024w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-2-150x150.jpg 150w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-2-300x300.jpg 300w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-2-768x768.jpg 768w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-2-600x600.jpg 600w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-2-45x45.jpg 45w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-2-100x100.jpg 100w" sizes="(max-width: 1024px) 100vw, 1024px" /></p>
                                    <h4><span><strong><em>Benton Deep Green Tea Lotion</em></strong></span></h4>
                                    <p><span>Mặc dù đây là dòng sản phẩm mới được ra mắt của hãng. Nhưng lại sở hữu nhiều công dụng “nhìn phát yêu luôn”:</span></p>
                                    <ul>
                                        <li><span>Lá xanh được thu hoạch từ thị trấn Boseong, được mệnh danh là phủ thủ trà xanh của Hàn Quốc. Chính vì thế mà độ tinh khiết, an toàn và tươi mát của những lá trà luôn được đảm bảo.</span></li>
                                        <li><span>Chiết xuất trà xanh có trong các sản phẩm&nbsp;Benton Deep Green Tea lên đến 50%. Và tận dụng tối đa “sức mạnh” từ cây trà như lá trà, rễ và cả hạt trà. Vừa có tác dụng dưỡng ẩm sâu, vừa chăm sóc da khỏe hơn từng ngày.</span></li>
                                        <li><span>Kết cấu ẩm mịn, tươi mát. Ngay lập tức mang lại độ ẩm và cảm giác dễ chịu cho da của bạn. Cho bạn “bồ kết” từ ngay lần đầu sử dụng.</span></li>
                                        <li><span>Bên cạnh các thành phần trà xanh “chủ chốt”. Thì sản phẩm còn được bổ sung thảo dược vào bên trong sản phẩm. Góp phần “hốt trọn” căng thẳng của làn da, đồng thời kích thích tuần hoàn và lưu thông máu, để da sáng khỏe và ngăn ngừa các dấu hiệu lão hóa.</span></li>
                                        <li><span>Các&nbsp;amino&nbsp;acid có trong trà xanh có khả năng&nbsp;cải thiện độ đàn hồi, trả lại sự tươi trẻ. Đồng thời giúp cân bằng lượng dầu, bã nhờn và duy trì độ ẩm tối thiểu trên da. Giảm thiểu tình trạng khô sần nứt nẻ mỗi khi giao mùa.</span></li>
                                        <li><span>Công thức đặc biệt hoàn toàn không chứa cồn, chất tạo màu hay hương liệu nhân tạo. Công thức lành mạnh của sản phẩm sẽ “nuông chiều” làn da và giảm thiểu tối đa khả năng kích ứng. Phù hợp cho cả những nàng sở hữu làn da nhạy cảm, khó yêu khó chiều.</span></li>
                                    </ul>
                                    <p><img class="size-large wp-image-131462 aligncenter" src="https://nuty.vn/wp-content/uploads/2019/02/benton-1-1024x1024.jpg" alt="" width="1024" height="1024" srcset="https://nuty.vn/wp-content/uploads/2019/02/benton-1-1024x1024.jpg 1024w, https://nuty.vn/wp-content/uploads/2019/02/benton-1-150x150.jpg 150w, https://nuty.vn/wp-content/uploads/2019/02/benton-1-300x300.jpg 300w, https://nuty.vn/wp-content/uploads/2019/02/benton-1-768x768.jpg 768w, https://nuty.vn/wp-content/uploads/2019/02/benton-1-600x600.jpg 600w, https://nuty.vn/wp-content/uploads/2019/02/benton-1-45x45.jpg 45w, https://nuty.vn/wp-content/uploads/2019/02/benton-1-100x100.jpg 100w, https://nuty.vn/wp-content/uploads/2019/02/benton-1.jpg 1080w" sizes="(max-width: 1024px) 100vw, 1024px" /></p>
                                    <h4><span><strong><em>Những ai nên sử dụng sản phẩm này?</em></strong></span></h4>
                                    <ul>
                                        <li><span>Những làn da xỉn màu, cần cung cấp độ ẩm ngay lập tức.</span></li>
                                        <li><span>Những làn da cần được xoa dịu bởi các kích ứng từ môi trường bên ngoài.</span></li>
                                        <li><span>Những làn da đang căng thẳng hay thường xuyên trang điểm, cần được chăm sóc tối ưu hơn.</span></li>
                                        <li><span>Da dầu, lỗ chân lông to và thường xuyên bị bít tắc lỗ chân lông.</span></li>
                                    </ul>
                                    <p><img class="size-large wp-image-131464 aligncenter" src="https://nuty.vn/wp-content/uploads/2019/02/benton-lotion-1024x1024.jpg" alt="" width="1024" height="1024" srcset="https://nuty.vn/wp-content/uploads/2019/02/benton-lotion-1024x1024.jpg 1024w, https://nuty.vn/wp-content/uploads/2019/02/benton-lotion-150x150.jpg 150w, https://nuty.vn/wp-content/uploads/2019/02/benton-lotion-300x300.jpg 300w, https://nuty.vn/wp-content/uploads/2019/02/benton-lotion-768x768.jpg 768w, https://nuty.vn/wp-content/uploads/2019/02/benton-lotion-600x600.jpg 600w, https://nuty.vn/wp-content/uploads/2019/02/benton-lotion-45x45.jpg 45w, https://nuty.vn/wp-content/uploads/2019/02/benton-lotion-100x100.jpg 100w, https://nuty.vn/wp-content/uploads/2019/02/benton-lotion.jpg 1080w" sizes="(max-width: 1024px) 100vw, 1024px" /></p>
                                    <h4><strong><em>Hướng dẫn sử dụng</em></strong></h4>
                                    <div class="" data-block="true" data-editor="4etad" data-offset-key="av56f-0-0">
                                        <div class="_1mf _1mj" data-offset-key="av56f-0-0"><span data-offset-key="av56f-0-0">– Sau khi rửa mặt, lấy một lượng vừa đủ sản phẩm ra bông tẩy trang rồi nhẹ nhàng lau đều khắp mặt theo chiều từ dưới lên trên, từ trong ra ngoài.</span></div>
                                    </div>
                                    <div class="" data-block="true" data-editor="4etad" data-offset-key="8s61o-0-0">
                                        <div class="_1mf _1mj" data-offset-key="8s61o-0-0"><span data-offset-key="8s61o-0-0">– Sử dụng mỗi ngày 2 lần vào buổi sáng và buổi tối.</span></div>
                                        <div data-offset-key="8s61o-0-0">&nbsp;</div>
                                        <div data-offset-key="8s61o-0-0"><img class="size-large wp-image-131765 aligncenter" src="https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-1024x1024.jpg" alt="" width="1024" height="1024" srcset="https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-1024x1024.jpg 1024w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-150x150.jpg 150w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-300x300.jpg 300w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-768x768.jpg 768w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-600x600.jpg 600w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-45x45.jpg 45w, https://nuty.vn/wp-content/uploads/2019/02/202-benton-deep-green-tea-100x100.jpg 100w" sizes="(max-width: 1024px) 100vw, 1024px" /></div>
                                    </div>

                                    <div class="show-more">
                                        <button class="btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary">Xem thêm mô tả</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="container"
                        class="position-sticky top-0"
                        style={{ paddingLeft: 0 }}>
                        <CardInfoRight></CardInfoRight>
                    </div>
                </div >
            </div >
            <div className="text-center mt-8 mb-8 container">
                <div className="title mb-4">
                    <h1>Sản phẩm tương tự</h1>
                    <Divider></Divider>
                </div>

                <ListCardProduct></ListCardProduct>
            </div>

        </>
    )
}
