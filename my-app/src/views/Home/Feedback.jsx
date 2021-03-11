import React from 'react';
import { ReactComponent as Divider } from '../Product/svg/divider.svg';

export default function Feedback() {
    return (
        <>
            <div className="title text-center mb-4">
                <h1>Khách hàng nhận xét</h1>
                <Divider></Divider>
            </div>
            <div class="row mx-n2 mb-5">
                <div class="col-sm-6 col-lg-3 px-2 mb-3">
                    {/* Team  */}
                    <div class="card h-100 transition-3d-hover">
                        <div class="card-body">
                            <div class="avatar avatar-lg avatar-circle mb-4">
                                <img class="avatar-img w-100px"
                                    src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-1/p480x480/94882405_3281756085383164_2614568221977608192_n.jpg?_nc_cat=100&ccb=3&_nc_sid=7206a8&_nc_ohc=ErmrgNRwMp4AX-ksJGS&_nc_ht=scontent.fsgn2-6.fna&tp=6&oh=87c00777e31fda08da810e9f6bab2bdf&oe=6066512D"
                                    alt="Thanh Huyền " />
                            </div>

                            <span class="d-block small font-weight-bold text-cap mb-1">Nhân viên văn phòng</span>
                            <h4 class="text-lh-sm">Thanh Huyền</h4>
                            <p class="font-size-1">
                                Sản phẩm do nhà làm nên dùng rất an tâm.
                                Trước đây mặt mình có nhiều mụn đầu đen và da thì sạm màu do từng bị mụn,
                                từ khi đắp bột trà xanh với tinh bột nghệ của Nhà Tinh Trà Đậu thì thấy hiệu quả lắm.
                            Da mình gần hết mụn, mụn đầu đen cũng không còn, da sáng màu hơn và rất mịn. Siêu hiệu quả</p>
                        </div>
                    </div>
                    {/* End Team  */}
                </div>

                <div class="col-sm-6 col-lg-3 px-2 mb-3">
                    {/* Team  */}
                    <div class="card h-100 transition-3d-hover">
                        <div class="card-body">
                            <div class="avatar avatar-lg avatar-circle mb-4">
                                <img class="avatar-img w-100px"
                                    src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/16473640_108188243034428_3536827694748648430_n.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=Jcq8RoWQ_1EAX_qm1ok&_nc_ht=scontent.fsgn2-2.fna&oh=7a134481a04d2b9f588c689c69456d06&oe=60667BEC"
                                    alt="Hồ Lệ Thu" />
                            </div>

                            <span class="d-block small font-weight-bold text-cap mb-1">Nhân viên văn phòng</span>
                            <h4 class="text-lh-sm">Hồ Lệ Thu</h4>
                            <p class="font-size-1">
                                Sản phẩm dùng tốt lắm shop !!!
                                Sẽ ủng hộ shop dài dài.</p>
                        </div>
                    </div>
                    {/* End Team  */}
                </div>

                <div class="col-sm-6 col-lg-3 px-2 mb-3">
                    {/* Team  */}
                    <div class="card h-100 transition-3d-hover">
                        <div class="card-body">
                            <div class="avatar avatar-lg avatar-circle mb-4">
                                <img class="avatar-img w-100px"
                                    src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/146135676_2939712522924571_479221900358686560_o.jpg?_nc_cat=110&ccb=3&_nc_sid=8bfeb9&_nc_ohc=TQRSe2RHST4AX_xykVT&_nc_ht=scontent.fsgn2-6.fna&oh=f599df61c7fedd731ba7cd27bdf52166&oe=60665532"
                                    alt="Khánh Vân" />
                            </div>

                            <span class="d-block small font-weight-bold text-cap mb-1">Sinh viên</span>
                            <h4 class="text-lh-sm">Khánh Vân</h4>
                            <p class="font-size-1">
                                Shop bán đồ chất lượng,uy tín , đúng với các thông tin trên bao bì, giao hàng nhanh chóng.</p>
                        </div>

                    </div>
                    {/* End Team  */}
                </div>

                <div class="col-sm-6 col-lg-3 px-2 mb-3">
                    {/* Team  */}
                    <div class="card h-100 transition-3d-hover">
                        <div class="card-body">
                            <div class="avatar avatar-lg avatar-circle mb-4">
                                <img class="avatar-img w-100px"
                                    src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/129868667_3803592269663032_8346897225811392144_n.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=5121TJDzP1wAX9J9XDS&_nc_ht=scontent.fsgn2-6.fna&oh=21958a18fe3e9181ce9bad5d7fdf35c1&oe=60652E45"
                                    alt="Nguyên Nguyễn" />
                            </div>

                            <span class="d-block small font-weight-bold text-cap mb-1">Sinh viên</span>
                            <h4 class="text-lh-sm">Nguyên Nguyễn</h4>
                            <p class="font-size-1">
                                Hàng chất lượng và cô chủ dễ thương ^^</p>
                        </div>
                    </div>
                    {/* End Team  */}
                </div>
            </div>
        </>
    )
}
