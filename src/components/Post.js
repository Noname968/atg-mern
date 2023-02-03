import React, { useState } from 'react'
import './Post.css'
import pimg from '../assets/pimg.png'
import pimg2 from '../assets/pimg2.png'
import pimg3 from '../assets/pimg3.png'
import pimg4 from '../assets/pimg4.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'

function Post() {
    const [open, setopen] = useState(true);

    return (
        <div className='post'>
            <div className="mpos">
                <span>Posts(368)</span>
                <select name="" id="">
                    <option value="">Filter: All</option>
                </select>
            </div>
            <div className='posttopicsh'>
                <div className="plinksh">
                    <p>All Posts(32)</p>
                    <p>Article</p>
                    <p>Event</p>
                    <p>Education</p>
                    <p>Job</p>
                </div>
                <div className="prighth">
                    <div id="" className='pdropdown'>
                        Write a Post
                        <svg width="10" height="4" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.416626 0.166626L4.99996 4.74996L9.58329 0.166626H0.416626Z" fill="black" />
                        </svg>
                    </div>
                    <div id="" className='pdropdown2'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_859)">
                                <path d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_859">
                                    <rect width="22" height="22" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Join Group
                    </div>
                </div>
            </div>
            <div className="posts">
                <div class="card">
                    <img src={p1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">✍️ Article</h5>
                        <div className="ptitle">
                            <div className="pptitle">What if famous brands had regular fonts? Meet RegulaBrands!</div>
                            <div className="dropbtn" onClick={() => setopen(!open)}>
                                <div className="btn">
                                    <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6667 3.00008C14.6667 4.28341 15.7167 5.33341 17 5.33341C18.2834 5.33341 19.3334 4.28341 19.3334 3.00008C19.3334 1.71675 18.2834 0.666748 17 0.666748C15.7167 0.666748 14.6667 1.71675 14.6667 3.00008ZM12.3334 3.00008C12.3334 1.71675 11.2834 0.666748 10 0.666748C8.71671 0.666748 7.66671 1.71675 7.66671 3.00008C7.66671 4.28341 8.71671 5.33341 10 5.33341C11.2834 5.33341 12.3334 4.28341 12.3334 3.00008ZM5.33337 3.00008C5.33337 1.71675 4.28337 0.666747 3.00004 0.666747C1.71671 0.666747 0.666708 1.71675 0.666708 3.00008C0.666708 4.28341 1.71671 5.33341 3.00004 5.33341C4.28337 5.33341 5.33337 4.28341 5.33337 3.00008Z" fill="black" />
                                    </svg>
                                </div>
                                <div className={!open ? `ddown` : `dclose`}>
                                    <p>Edit</p>
                                    <p>Report</p>
                                    <p>Option 3</p>
                                </div>
                            </div>
                        </div>
                        <p className="psubt">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div className="pbottom">
                            <div className="pbleftl">
                                <img src={pimg} alt="" className='nameimg' />
                                <p className="name">Sarthak Kamra</p>
                            </div>
                            <div className="pbright">
                                <div className="views">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="icon/action/visibility_24px">
                                            <path id="icon/action/visibility_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                                        </g>
                                    </svg>
                                    1.4k views
                                </div>
                                <svg width="36" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='sharel'>
                                    <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                                    <g clip-path="url(#clip0_1_966)">
                                        <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_966">
                                            <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src={p2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">🔬️ Education</h5>
                        <div className="ptitle">
                            <div className="pptitle">Tax Benefits for Investment under National Pension Scheme launched by Government</div>
                            <div className="dropbtn" onClick={() => setopen(!open)}>
                                <div className="btn">
                                    <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6667 3.00008C14.6667 4.28341 15.7167 5.33341 17 5.33341C18.2834 5.33341 19.3334 4.28341 19.3334 3.00008C19.3334 1.71675 18.2834 0.666748 17 0.666748C15.7167 0.666748 14.6667 1.71675 14.6667 3.00008ZM12.3334 3.00008C12.3334 1.71675 11.2834 0.666748 10 0.666748C8.71671 0.666748 7.66671 1.71675 7.66671 3.00008C7.66671 4.28341 8.71671 5.33341 10 5.33341C11.2834 5.33341 12.3334 4.28341 12.3334 3.00008ZM5.33337 3.00008C5.33337 1.71675 4.28337 0.666747 3.00004 0.666747C1.71671 0.666747 0.666708 1.71675 0.666708 3.00008C0.666708 4.28341 1.71671 5.33341 3.00004 5.33341C4.28337 5.33341 5.33337 4.28341 5.33337 3.00008Z" fill="black" />
                                    </svg>
                                </div>
                                <div className={!open ? `ddown` : `dclose`}>
                                    <p>Edit</p>
                                    <p>Report</p>
                                    <p>Option 3</p>
                                </div>
                            </div>
                        </div>
                        <p className="psubt">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div className="pbottom">
                            <div className="pbleftl">
                                <img src={pimg2} alt="" className='nameimg' />
                                <p className="name">Sarah West</p>
                            </div>
                            <div className="pbright">
                                <div className="views">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="icon/action/visibility_24px">
                                            <path id="icon/action/visibility_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                                        </g>
                                    </svg>
                                    1.4k views
                                </div>
                                <svg width="36" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='sharel'>
                                    <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                                    <g clip-path="url(#clip0_1_966)">
                                        <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_966">
                                            <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src={p3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">🗓️ Meetup</h5>
                        <div className="ptitle">
                            <div className="pptitle">Finance & Investment Elite Social Mixer @Lujiazui</div>
                            <div className="dropbtn" onClick={() => setopen(!open)}>
                                <div className="btn">
                                    <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6667 3.00008C14.6667 4.28341 15.7167 5.33341 17 5.33341C18.2834 5.33341 19.3334 4.28341 19.3334 3.00008C19.3334 1.71675 18.2834 0.666748 17 0.666748C15.7167 0.666748 14.6667 1.71675 14.6667 3.00008ZM12.3334 3.00008C12.3334 1.71675 11.2834 0.666748 10 0.666748C8.71671 0.666748 7.66671 1.71675 7.66671 3.00008C7.66671 4.28341 8.71671 5.33341 10 5.33341C11.2834 5.33341 12.3334 4.28341 12.3334 3.00008ZM5.33337 3.00008C5.33337 1.71675 4.28337 0.666747 3.00004 0.666747C1.71671 0.666747 0.666708 1.71675 0.666708 3.00008C0.666708 4.28341 1.71671 5.33341 3.00004 5.33341C4.28337 5.33341 5.33337 4.28341 5.33337 3.00008Z" fill="black" />
                                    </svg>
                                </div>
                                <div className={!open ? `ddown` : `dclose`}>
                                    <p>Edit</p>
                                    <p>Report</p>
                                    <p>Option 3</p>
                                </div>
                            </div>
                        </div>
                        <div className="viweb">Visit Website</div>
                        <div className="pbottom">
                            <div className="pbleftl">
                                <img src={pimg3} alt="" className='nameimg' />
                                <p className="name">Ronal Jones</p>
                            </div>
                            <div className="pbright">
                                <div className="views">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="icon/action/visibility_24px">
                                            <path id="icon/action/visibility_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                                        </g>
                                    </svg>
                                    1.4k views
                                </div>
                                <svg width="36" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='sharel'>
                                    <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                                    <g clip-path="url(#clip0_1_966)">
                                        <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_966">
                                            <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardi">
                <h5 class="card-title">💼️ Job</h5>
                    <div class="card-body">
                        <h5 class="card-title">Software Developer</h5>
                        <div className="ptitle">
                            <div className="pptitle">Finance & Investment Elite Social Mixer @Lujiazui</div>
                            <div className="dropbtn" onClick={() => setopen(!open)}>
                                <div className="btn">
                                    <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6667 3.00008C14.6667 4.28341 15.7167 5.33341 17 5.33341C18.2834 5.33341 19.3334 4.28341 19.3334 3.00008C19.3334 1.71675 18.2834 0.666748 17 0.666748C15.7167 0.666748 14.6667 1.71675 14.6667 3.00008ZM12.3334 3.00008C12.3334 1.71675 11.2834 0.666748 10 0.666748C8.71671 0.666748 7.66671 1.71675 7.66671 3.00008C7.66671 4.28341 8.71671 5.33341 10 5.33341C11.2834 5.33341 12.3334 4.28341 12.3334 3.00008ZM5.33337 3.00008C5.33337 1.71675 4.28337 0.666747 3.00004 0.666747C1.71671 0.666747 0.666708 1.71675 0.666708 3.00008C0.666708 4.28341 1.71671 5.33341 3.00004 5.33341C4.28337 5.33341 5.33337 4.28341 5.33337 3.00008Z" fill="black" />
                                    </svg>
                                </div>
                                <div className={!open ? `ddown` : `dclose`}>
                                    <p>Edit</p>
                                    <p>Report</p>
                                    <p>Option 3</p>
                                </div>
                            </div>
                        </div>
                        <div className="viweb1">Apply on Timesjobs</div>
                        <div className="pbottom">
                            <div className="pbleftl">
                                <img src={pimg4} alt="" className='nameimg' />
                                <p className="name">Joseph Gray</p>
                            </div>
                            <div className="pbright">
                                <div className="views">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="icon/action/visibility_24px">
                                            <path id="icon/action/visibility_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                                        </g>
                                    </svg>
                                    1.4k views
                                </div>
                                <svg width="36" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='sharel'>
                                    <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                                    <g clip-path="url(#clip0_1_966)">
                                        <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_966">
                                            <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
