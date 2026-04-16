import React from 'react';
import footerImg from '../assets/Images/logo-xl.png';
import { FaFacebook, FaInstagram, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <section className='bg-[#244D3F]'>
            <div className='max-w-9/12 mx-auto pb-6 pt-10'>
                <div>
                    <div className='text-center space-y-4'>
                        <img className='mx-auto' src={footerImg} alt="" />
                        <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-4 gap-2'>
                        <h3 className='text-white'>Social Links</h3>
                        <div className='flex gap-2'>
                            <div className='p-2 bg-white rounded-2xl'><FaInstagram /></div>
                            <div className='p-2 bg-white rounded-2xl'><FaFacebook /></div>
                            <div className='p-2 bg-white rounded-2xl'><FaXTwitter /></div>
                        </div>
                       
                    </div>
                </div>
                <div className='flex flex-col gap-4 md:flex-row text-gray-400 justify-between items-center border-t border-t-[#096446]  mt-8 pt-6'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service </p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;