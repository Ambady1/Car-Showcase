import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav'
const Home = () => {
  return (
    <main className="overflow-hidden">
      <Nav/>
      <Hero />
    </main>
  );
};

export default Home;
