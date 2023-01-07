import React from 'react';
import Drawer from '../Drawer/Drawer';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import TopHeader from '../TopHeader/TopHeader';

const Layout = ({ children }: any) => {
    return (
        <Drawer>
            <TopHeader />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </Drawer>
    );
};

export default Layout;