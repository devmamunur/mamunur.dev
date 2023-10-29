import React from 'react';
import NavBar from "@/components/NavBar";
import HeroArea from "@/components/HeroArea";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";

const HomePage : React.FC = () => {
    return (
        <>
            <NavBar/>
            <HeroArea/>
            <HomeSections/>
            <Footer/>
        </>
    );
};

export default HomePage;