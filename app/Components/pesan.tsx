"use client";
import React, { useState, useEffect } from 'react';
import styles from "@/app/Page.module.css";

const Pesan: React.FC = () => {
    const [harga, setHarga] = useState("");
const [layanan, setLayanan] = useState("Body Massage");
const [durasi, setDurasi] = useState("60");

    const hargaMap: Record<string, Record<string, string>> = {
    "Body Massage": { "60": "120.000", "90": "165.000", "120": "215.000" },
    "Totok Wajah": { "90": "195.000", "120": "250.000" },
    "Kerokan": { "90": "195.000", "120": "250.000" },
    "Reflexi": { "90": "195.000", "120": "250.000" },
    "Totok V": { "90": "270.000", "120": "420.000" },
    "Scrub": { "90": "195.000", "120": "250.000" },
    "Totok Payudara": { "90": "270.000", "120": "420.000" },
    };

    useEffect(() => {
    // Update harga ketika layanan atau durasi berubah
    updateHarga();
    }, [layanan, durasi]);

    const updateHarga = () => {
    if (layanan && durasi) {
        // Set harga sesuai layanan dan durasi yang dipilih
        setHarga(hargaMap[layanan][durasi] || "");
    } else {
        // Clear the harga if either layanan or durasi is not selected
        setHarga("");
    }
    };


      const handleDurasiChange = (selectedDurasi: string) => {
        setDurasi(selectedDurasi);
      };

      const handleLayananChange = (selectedLayanan: string) => {
        setLayanan(selectedLayanan);
    };

    const handlePesanClick = async () => {
       // Mengumpulkan data dari formulir
       const namaElement = document.getElementById('nama') as HTMLInputElement | null;
       const genderElement = document.getElementById('gender') as HTMLSelectElement | null;
       const noElement = document.getElementById('no') as HTMLInputElement | null;
       const layananElement = document.getElementById('layanan') as HTMLSelectElement | null;
       const durasiElement = document.querySelector('input[name="durasi"]:checked') as HTMLInputElement | null;
       const tglElement = document.getElementById('tgl') as HTMLInputElement | null;
       const jamElement = document.getElementById('jam') as HTMLInputElement | null;
       const paymentElement = document.getElementById('payment') as HTMLSelectElement | null;
       const alamatElement = document.getElementById('alamat') as HTMLTextAreaElement | null;

       if (
           namaElement && genderElement && noElement && layananElement &&
           durasiElement && tglElement && jamElement &&
           paymentElement && alamatElement
       ) {
           const nama = namaElement.value;
           const gender = genderElement.value;
           const no = noElement.value;
           const layanan = layananElement.value;
           const durasi = durasiElement.value;
           const tgl = tglElement.value;
           const jam = jamElement.value;
           const payment = paymentElement.value;
           const alamat = alamatElement.value;
    
        // Mengirim pesan WhatsApp
        const message = `
Halo Admin, saya telah melakukan pemesanan Layanan dengan data sebagai berikut:
------------------------------------------------------------------
*Data Diri*
Nama Lengkap          : ${nama}
Jenis Kelamin            : ${gender}
No Whatsapp             : ${no}
    
*Pesanan*
Jenis Layanan           : ${layanan}
Durasi Layanan         : ${durasi} Menit
Harga                          : Rp. ${harga}
    
*Jadwal Pemesanan*
Tanggal Reservasi       : ${tgl}
Waktu Reservasi          : ${jam} WIB
    
*Pembayaran*
Tipe Pembayaran         : ${payment}
    
*Alamat*
Alamat Lengkap & Notes  : ${alamat}
`;
    
        // Mengirim pesan ke nomor WhatsApp : 6287773294573
        const waNumber = '6287773294573'; // Ganti dengan nomor tujuan WhatsApp Anda
        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
       }
      };

  return (
    <form action="" method="post" className={styles.form}>
            <label htmlFor="nama">Nama Lengkap</label>
            <input type="text" name="nama" id="nama" placeholder="Masukkan Nama Anda"/><br />

            <label htmlFor="gender">Jenis Kelamin</label>
            <select name="gender" id="gender" style={{height: '30px'}}>
              <option value="laki-laki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
              <option value="khusus">Khusus</option>
            </select><br />

            <label htmlFor="no">No. WhatsApp</label>
            <input type="text" name="no" id="no" placeholder="Masukkan nomor aktif"/><br />

            <label htmlFor="layanan">Jenis Layanan</label>
            <select name="layanan" id="layanan" style={{height: '30px'}} onChange={(e) => handleLayananChange(e.target.value)}>
              <option value="Body Massage">Body Massage</option>
              <option value="Totok Wajah">Body Massage dan Totok Wajah</option>
              <option value="Kerokan">Body Masssage dan Kerokan</option>
              <option value="Reflexi">Body Massage dan Reflexi</option>
              <option value="Totok V">Body Massage dan Totok V</option>
              <option value="Scrub">Body Massage dan Scrub</option>
              <option value="Totok Payudara">Body Massage dan Totok Payudara</option>
            </select><br />

            <label htmlFor="durasi">Durasi</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" id="durasi-60" name="durasi" value="60" onChange={() => handleDurasiChange("60")} />
                    <label htmlFor="durasi-60">60 Menit</label>
                    <input type="radio" id="durasi-90" name="durasi" value="90" onChange={() => handleDurasiChange("90")} />
                    <label htmlFor="durasi-90">90 Menit</label>
                    <input type="radio" id="durasi-120" name="durasi" value="120" onChange={() => handleDurasiChange("120")} />
                    <label htmlFor="durasi-120">120 Menit</label>
                </div><br />

            <label htmlFor="harga">Harga</label>
            <input type="text" id="harga" name="harga" value={harga} readOnly/><br />


            <label htmlFor="tgl">Tanggal Reservasi</label>
            <input type="date" name="tgl" id="tgl" style={{width: '98%'}}/><br />

            <label htmlFor="jam">Waktu Reservasi</label>
            <input type="time" name="jam" id="jam" style={{width: '98%'}}/><br />

            <label htmlFor="payment">Tipe Pembayaran</label>
            <select name="payment" id="payment" style={{height: '30px'}}>
              <option value="Tunai">Tunai</option>
              <option value="Non Tunai">Non Tunai</option>
            </select><br />

            <label htmlFor="alamat">Alamat Lengkap</label>
            <textarea name="alamat" id="alamat" placeholder="Masukkan alamat dengan benar" style={{ resize: 'none', height: '100px', overflow: 'hidden' }}></textarea><br />

            <button onClick={handlePesanClick} style={{color: 'white', background: 'rgb(30, 150, 300)', width: '120px', height: 'max-content', padding: '15px'}}>Pesan</button>

          </form>
  )
}

export default Pesan