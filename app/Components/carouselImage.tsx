"use client";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const carousel1 = "/image.png";
const carousel2 = "/image1.png";
const carousel3 = "/image2.png";
const carousel4 = "/image3.png";
const carousel5 = "/image4.png";

const Carousel = () => {
    const images: string[] = [
      carousel1,
      carousel2,
      carousel3,
      carousel4,
      carousel5,
      // Tambahkan path ke gambar selanjutnya jika diperlukan
    ];
  
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: false,
    };

    const imagestyle = {
        width: '100%'
    }
  
    return (
      <div className="slide-container">
        <Slide {...properties}>
          {images.map((image, index) => (
            <div key={index} className="each-slide">
              {/* Menggunakan tag img untuk menampilkan gambar */}
              <img src={image} alt={`Slide ${index + 1}`} style={imagestyle} />
            </div>
          ))}
        </Slide>
      </div>
    );
  };  

export default Carousel;
