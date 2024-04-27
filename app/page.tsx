"use client";
import Image from 'next/image';
import styles from "./Page.module.css";
import logo from "../public/logo.png";
import Carousel from './Components/carouselImage';
import whatsApp from "../public/whatsapp.png";
import Card from './Components/card';
import TestimonialSlider from './Components/testimoni';
import Pesan from './Components/pesan';

export default function Home() {
  return (
    <main style={{maxWidth: '100vw'}}>

      <nav>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Kiki Massage Logo" style={{width: '35px', height: '35px', borderRadius: '10px', paddingTop: '4px'}}/>
        </div>
        <div className={styles.pesan}>
            <button onClick={() => {
        // Menggulir halaman ke bagian form
        const formSection = document.getElementById('form');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
      }} style={{ background: 'rgb(30, 150, 300)', color: 'white', width: '100px', height: '30px', border: 'none', borderRadius: '1rem', cursor: 'pointer'}}>
                PESAN
            </button>
        </div>
      </nav>

      <Carousel/>

      <div className={styles.greeting}>
        <h3>Selamat Datang</h3>
        <p>Layanan jasa massage murah dan profesional di bidang nya. Kami siap datang ke lokasi anda dan siap melayani anda kapan saja dan dimana saja. Layanan kami di jamin aman dan sudah terbukti keampuhan nya. Jangan ragu untuk memesan layanan kami dan rasakan sensasinya sentuhan lembut dengan manja.</p>
      </div>

      <h3>Kami Memberikan Layanan</h3>
      <div className={styles.layanan}>
        <Card/>
      </div>

      <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5rem'}}>
        <div id="form">
        <h3>Formulir Pemesanan</h3>
          <Pesan/>
        </div>
      

          <div className={styles.testimoni}>
            <h3>Testimoni</h3>
            <TestimonialSlider />
            <img src="/hubungi.png"
              alt="Hubungi"
              onClick={() => {
                const whatsappLink = "https://api.whatsapp.com/send?phone=6281210390991&text=Halo%20Pak%20Rizki,%20saya%20mau%20bertanya%20tentang%20terapi.";
                window.open(whatsappLink, "_blank");
            }} />
          </div>
      </div><br />

      <footer style={{background: 'rgb(30, 150, 300)', width: '100%', height: 'max-content', display: 'grid', alignContent: 'center'}}>
        <p style={{fontSize: '13px', color: 'white', textAlign: 'center', height: '1px', fontWeight: 'bold'}}>©Kiki Massage</p>
        <p style={{fontSize: '11px', color: 'white', textAlign: 'center', height: '1px'}}>Contact Us</p>
        <div style={{display: 'flex', flex: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
          <img src="/whatsapp.png" alt="" style={{width: '15px', height: '15px'}}/>
          <p style={{fontSize: '11px', color: 'white', textAlign: 'center', height: '10px'}}>+62 812-1039-0991</p>
        </div>
      </footer>

    </main>
  );
}
