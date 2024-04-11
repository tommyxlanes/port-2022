import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Testimonial from './Testimonial';

export default function layout({ children }) {
  return (
    <>
        <Navbar /> 

        {children}

        <Footer />
    </>
  );
}
