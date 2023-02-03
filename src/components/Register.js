import React from 'react'
import './Register.css'
import fb from '../assets/fb.svg'
import signup from '../assets/signup.png'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <>
            <div className='register'  >
                <div className="modal fade" tabindex="-1" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='close' data-bs-dismiss="modal" aria-label="Close">
                            <g clip-path="url(#clip0_1_2255)">
                                <path d="M14 2.33331C7.54838 2.33331 2.33337 7.54831 2.33337 14C2.33337 20.4516 7.54838 25.6666 14 25.6666C20.4517 25.6666 25.6667 20.4516 25.6667 14C25.6667 7.54831 20.4517 2.33331 14 2.33331ZM19.8334 18.1883L18.1884 19.8333L14 15.645L9.81171 19.8333L8.16671 18.1883L12.355 14L8.16671 9.81164L9.81171 8.16665L14 12.355L18.1884 8.16665L19.8334 9.81164L15.645 14L19.8334 18.1883Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2255">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="modal-content mcon">

                            <div className="mnav d-flex align-items-center justify-content-center">
                                <p className="pmnav">
                                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                                </p>
                            </div>
                            <div className="mconbody">
                                <div className="mconleft">
                                    <p className="acchead">Create Account</p>
                                    <div className="inputs">
                                        <div className="nameinput">
                                            <input type="text" placeholder='First Name' />
                                            <input type="text" placeholder='Last Name' />
                                        </div>
                                        <input type="text" className='inp' placeholder='Email' />
                                        <input type="text" className='inp' placeholder='Password' />
                                        <input type="text" className='inp' placeholder='Confirm Password' />
                                    </div>
                                    <button type='submit' className='accbtn'>Create Account</button>
                                    <div className="socialicons">
                                        <button className='sbtn'>
                                            <img src={fb} alt="" style={{ width: "16px", height: "16px" }} className='m-2' />
                                            Sign up with Facebook</button>
                                        <button className="sbtn">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-2'>
                                                <g clip-path="url(#clip0_1_2217)">
                                                    <path d="M3.54594 9.66905L2.989 11.7482L0.953406 11.7912C0.345063 10.6629 0 9.37192 0 8.00005C0 6.67345 0.322625 5.42245 0.8945 4.32092H0.894938L2.70719 4.65317L3.50106 6.45455C3.33491 6.93895 3.24434 7.45895 3.24434 8.00005C3.24441 8.5873 3.35078 9.14995 3.54594 9.66905Z" fill="#FBBB00" />
                                                    <path d="M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z" fill="#518EF8" />
                                                    <path d="M13.0081 14.2382L13.0085 14.2386C11.6375 15.3406 9.89596 15.9999 8.00015 15.9999C4.95355 15.9999 2.30477 14.2971 0.953552 11.7911L3.54608 9.66895C4.22168 11.472 5.96102 12.7555 8.00015 12.7555C8.87662 12.7555 9.69774 12.5186 10.4023 12.105L13.0081 14.2382Z" fill="#28B446" />
                                                    <path d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z" fill="#F14336" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_2217">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Sign up with Google</button>
                                    </div>
                                </div>
                                <div className="mconright">
                                    <div className="accsign">
                                        Already have an account? <Link to="/signin" className='mconacc' data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">Sign In</Link>
                                    </div>
                                    <div className="signupimg">
                                        <img src={signup} alt="" className='simg' />
                                    </div>
                                    <div className="inst">
                                        By signing up, you agree to our Terms & conditions, Privacy policy
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='register'>
                <div className="modal fade" tabindex="-1" id="exampleModalToggle2" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='closel' data-bs-dismiss="modal" aria-label="Close">
                            <g clip-path="url(#clip0_1_2255)">
                                <path d="M14 2.33331C7.54838 2.33331 2.33337 7.54831 2.33337 14C2.33337 20.4516 7.54838 25.6666 14 25.6666C20.4517 25.6666 25.6667 20.4516 25.6667 14C25.6667 7.54831 20.4517 2.33331 14 2.33331ZM19.8334 18.1883L18.1884 19.8333L14 15.645L9.81171 19.8333L8.16671 18.1883L12.355 14L8.16671 9.81164L9.81171 8.16665L14 12.355L18.1884 8.16665L19.8334 9.81164L15.645 14L19.8334 18.1883Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2255">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="modal-content mconl">
                            <div className="mnav d-flex align-items-center justify-content-center">
                                <p className="pmnav">
                                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                                </p>
                            </div>
                            <div className="mconbody">
                                <div className="mconleftl">
                                    <p className="acchead">Sign In</p>
                                    <div className="inputsl">
                                        <input type="text" className='inpl' placeholder='Email' />
                                        <input type="text" className='inpl' placeholder='Password' />
                                    </div>
                                    <button type='submit' className='accbtn'>Sign In</button>
                                    <div className="socialicons">
                                        <button className='sbtn'>
                                            <img src={fb} alt="" style={{ width: "16px", height: "16px" }} className='m-2' />
                                            Sign in with Facebook</button>
                                        <button className="sbtn">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-2'>
                                                <g clip-path="url(#clip0_1_2217)">
                                                    <path d="M3.54594 9.66905L2.989 11.7482L0.953406 11.7912C0.345063 10.6629 0 9.37192 0 8.00005C0 6.67345 0.322625 5.42245 0.8945 4.32092H0.894938L2.70719 4.65317L3.50106 6.45455C3.33491 6.93895 3.24434 7.45895 3.24434 8.00005C3.24441 8.5873 3.35078 9.14995 3.54594 9.66905Z" fill="#FBBB00" />
                                                    <path d="M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z" fill="#518EF8" />
                                                    <path d="M13.0081 14.2382L13.0085 14.2386C11.6375 15.3406 9.89596 15.9999 8.00015 15.9999C4.95355 15.9999 2.30477 14.2971 0.953552 11.7911L3.54608 9.66895C4.22168 11.472 5.96102 12.7555 8.00015 12.7555C8.87662 12.7555 9.69774 12.5186 10.4023 12.105L13.0081 14.2382Z" fill="#28B446" />
                                                    <path d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z" fill="#F14336" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_2217">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Sign in with Google</button>
                                            <p className="fpas">Forgot Password?</p>
                                    </div>
                                </div>
                                <div className="mconright">
                                    <div className="accsign1">
                                        Don’t have an account yet?<Link to="/" className='mconacc' data-bs-toggle="modal" data-bs-target="#exampleModal">Create new for free!</Link>
                                    </div>
                                    <div className="signupimg">
                                        <img src={signup} alt="" className='simg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
