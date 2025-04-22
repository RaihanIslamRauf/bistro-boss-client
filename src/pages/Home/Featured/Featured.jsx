import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading='check it out' heading='Featured Item'></SectionTitle>
            <div className='md:flex justify-normal items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36'>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p>Aug 20, 2029</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cumque illum eligendi cum earum officiis quasi totam maiores, dolores minima! Alias dolorem maiores, at sunt excepturi fugiat placeat error libero sapiente expedita hic cum nulla, quis, earum eum fugit maxime quidem. Nobis cumque vitae error adipisci ipsam. Et, sunt libero.</p>
                <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
            </div>
        </div>
        </div>
    );
};

export default Featured;