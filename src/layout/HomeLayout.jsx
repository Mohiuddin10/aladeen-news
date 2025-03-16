import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavBar from '../components/layoutComponent/LeftNavBar';
import RightNavbar from '../components/layoutComponent/RightNavbar';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
                <aside className='left col-span-3'>
                    <LeftNavBar></LeftNavBar>
                </aside>
                <section className='col-span-6'>main component</section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;