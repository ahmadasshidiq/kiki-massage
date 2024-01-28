"use client";
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const testimoni1 = '/testimoni1.jpg';
const testimoni2 = '/testimoni2.jpeg';
const testimoni3 = '/testimoni3.jpeg';

// Daftar gambar testimoni
const testimonialData = [
    {
      image: testimoni1,
      nama: 'Nia',
      rating: '⭐⭐⭐⭐⭐ Sangat Puas',
      caption: '"Setelah dua minggu ada perubahan, sekarang payudara saya menjadi lebih kencang dan besar."',
    },
    {
        image: testimoni2,
        nama: 'Vani',
        rating: '⭐⭐⭐⭐⭐ Sangat Puas',
        caption: '"Hasil trapi bagus, terapis amanah dan profesional."',
      },
      {
        image: testimoni3,
        nama: 'Dea Amanda',
        rating: '⭐⭐⭐⭐ Puas',
        caption: '"Badan terasa lebih enak setelah terapi."',
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

    const ratingstyle = {
      color: 'gold',
    }
  
    return (
      <div style={{width: '270px'}}>
        <Slide {...slideProperties}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="each-slide">
              <img src={testimonial.image} alt={`Testimoni ${index + 1}`} style={imagestyle} />
              <p style={namastyle}>{testimonial.nama}</p>
              <p style={ratingstyle}>{testimonial.rating}</p>
              <p style={captionstyle}>{testimonial.caption}</p>
            </div>
          ))}
        </Slide>
      </div>
    );
  };
  
  export default TestimonialSlider;