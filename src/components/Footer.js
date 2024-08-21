import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../styles/app.css'; 

export default function App() {
    return (
        <MDBFooter className='custom-footer-bg text-center text-lg-start text-secondary'>
            <MDBContainer className='footer-container'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <MDBRow className='w-100'>
                        <MDBCol md="3" lg="3" xl="3" className='d-flex align-items-center mb-4 logo-column'>
                            <img src='../img/logo.png' alt='Company Logo' className='me-5' />
                        </MDBCol>

                        <MDBCol md="3" lg="3" xl="3" className='d-flex flex-column mb-4'>
                            <h6 className='fw-bold mb-4'>Company</h6>
                            <p className='ps-3'>
                                <a href='#!' className='text-reset'>
                                    Our offer
                                </a>
                            </p>
                            <p className='ps-3'>
                                <a href='#!' className='text-reset'>
                                    Vendor
                                </a>
                            </p>
                            <p className='ps-3'>
                                <a href='#!' className='text-reset'>
                                    Blog
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="3" xl="3" className='d-flex flex-column  mb-4'>
                            <h6 className='fw-bold mb-4'>Legal</h6>
                            <p className='ps-3'>
                                <a href='#!' className='text-reset'>
                                    Privacy Policy
                                </a>
                            </p>
                            <p className='ps-3'>
                                <a href='#!' className='text-reset'>
                                    Terms of use Vendors
                                </a>
                            </p>
                            <p className='ps-3'>
                                <a href='#!' className='text-reset'>
                                    Terms of use Buyer
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="3" xl="3" className='d-flex flex-column  mb-md-0 mb-4'>
                            <h6 className='fw-bold mb-4'>Contact</h6>
                            <p className='ps-3'>
                                FAQ
                            </p>
                            <p className='ps-3'>
                                Contact Us
                            </p>
                            <p className='ps-3'>
                                Book a demo
                            </p>
                        </MDBCol>
                    </MDBRow>
                </section>

                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span><i className="fas fa-location-dot"></i> Etifak SAS - 69 chemin du Klettenberg,
                            <span className='d-block'>68100 Mulhouse, FRANCE</span>
                        </span>
                        <span><i class="fas fa-phone"></i> +33 123456789
                        </span>
                    </div>
                    

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="github" />
                        </a>
                    </div>
                </section>
            </MDBContainer>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                ©2024 Etifak. All rights reserved.
            </div>
        </MDBFooter>
    );
}