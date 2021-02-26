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
                                <img class="avatar-img w-100px" src="https://preview.keenthemes.com/start/assets/media/svg/avatars/047-girl-25.svg" alt="Image Description" />
                            </div>

                            <span class="d-block small font-weight-bold text-cap mb-1">Founder / CEO</span>
                            <h4 class="text-lh-sm">Christina Kray</h4>
                            <p class="font-size-1">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                        </div>
                    </div>
                    {/* End Team  */}
                </div>

                <div class="col-sm-6 col-lg-3 px-2 mb-3">
                    {/* Team  */}
                    <div class="card h-100 transition-3d-hover">
                        <div class="card-body">
                            <div class="avatar avatar-lg avatar-circle mb-4">
                                <img class="avatar-img w-100px" src="https://preview.keenthemes.com/start/assets/media/svg/avatars/018-girl-9.svg" alt="Image Description" />
                            </div>

                            <span class="d-block small font-weight-bold text-cap mb-1">Project Manager</span>
                            <h4 class="text-lh-sm">Jeff Fisher</h4>
                            <p class="font-size-1">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                        </div>
                    </div>
                    {/* End Team  */}
                </div>

                <div class="col-sm-6 col-lg-3 px-2 mb-3">
                    {/* Team  */}
                    <div class="card h-100 transition-3d-hover">
                        <div class="card-body">
                            <div class="avatar avatar-lg avatar-circle mb-4">
                                <img class="avatar-img w-100px" src="https://preview.keenthemes.com/start/assets/media/svg/avatars/003-girl-1.svg" alt="Image Description" />
                            </div>

                            <span class="d-block small font-weight-bold text-cap mb-1">Product Designer</span>
                            <h4 class="text-lh-sm">Amy Forren</h4>
                            <p class="font-size-1">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                        </div>

                    </div>
                    {/* End Team  */}
                </div>

                <div class="col-sm-6 col-lg-3 px-2 mb-3">
                    {/* Team  */}
                    <div class="card h-100 transition-3d-hover">
                        <div class="card-body">
                            <div class="avatar avatar-lg avatar-circle mb-4">
                                <img class="avatar-img w-100px" src="https://preview.keenthemes.com/start/assets/media/svg/avatars/009-boy-4.svg" alt="Image Description" />
                            </div>

                            <span class="d-block small font-weight-bold text-cap mb-1">Want a new challenge?</span>
                            <h4 class="text-lh-sm">Join us</h4>
                            <p class="font-size-1">Browse through our job opportunities and become a member of the family!</p>
                        </div>

                    </div>
                    {/* End Team  */}
                </div>
            </div>
        </>
    )
}
