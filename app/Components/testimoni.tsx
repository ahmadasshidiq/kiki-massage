"use client";
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const testimoni1 = '/testimoni.jpg';

// Daftar gambar testimoni
const testimonialData = [
    {
      image: testimoni1,
      nama: 'Arya Panca',
      caption: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    },
    {
        image: testimoni1,
        nama: 'Arya Panca',
        caption: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      },
      {
        image: testimoni1,
        nama: 'Arya Panca',
        caption: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      },
    // Tambahkan gambar dan caption lainnya sesuai kebutuhan
  ];

  const TestimonialSlider = () => {
    const slideProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: true,
    };
  
    const imagestyle = {
        width: '270px',
        height: '603px',
    };
  
    const namastyle = {
      fontWeight: 'bold',
    };
  
    const captionstyle = {
      color: 'grey',
    };
  
    return (
      <div style={{width: '270px'}}>
        <Slide {...slideProperties}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="each-slide">
              <img src={testimonial.image} alt={`Testimoni ${index + 1}`} style={imagestyle} />
              <p style={namastyle}>{testimonial.nama}</p>
              <p style={captionstyle}>{testimonial.caption}</p>
            </div>
          ))}
        </Slide>
      </div>
    );
  };
  
  export default TestimonialSlider;