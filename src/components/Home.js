import React from 'react';
import Banner from './Banner';
import CollectionFeatured from './CollectionFeatured';
import CollectionOver from './CollectionOver';
import Footer from './Footer';
import Header from './Header';
import Transaction from './Transaction';

const Home = () => {
    return (
        <div className=''>
            <Header/>
            <Banner/>
            <Transaction/>
            <CollectionOver/> 
            <CollectionFeatured/>
            <Footer/>
        </div>
    );
};

export default Home;