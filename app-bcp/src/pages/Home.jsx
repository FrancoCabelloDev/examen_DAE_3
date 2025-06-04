// pages/Home.jsx
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CardList from '../components/CardList';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <CardList />
    </div>
  );
};

export default Home;