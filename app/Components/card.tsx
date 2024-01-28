"use client";
import React from 'react';
import styles from './Card.module.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  const handleCardButtonClick = () => {
    const formSection = document.getElementById('form');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
  };

  return (
    <div className={styles.card}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image="/1.png"
            alt="Body Massage"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Body Massage
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Rasakan sentuhan lembut untuk melepaskan ketegangan tubuh dan mengembalikan keseimbangan energi. Kelezatan bagi tubuh Anda.
            </Typography>
          </CardContent>
        </CardActionArea>
        <button onClick={() => handleCardButtonClick()} style={{paddingLeft: '18px', paddingBottom: '20px', color: 'rgb(30, 150, 300)'}}>Pesan ➛</button>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image="/2.png"
            alt="Body Massage dan Totok Wajah"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Body Massage dan Totok Wajah
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Pengalaman pijat menyeluruh untuk tubuh dan wajah Anda. Berikan kesegaran ekstra dan rona alami untuk kulit berseri.
            </Typography>
          </CardContent>
        </CardActionArea>
        <button onClick={() => handleCardButtonClick()} style={{paddingLeft: '18px', paddingBottom: '20px', color: 'rgb(30, 150, 300)'}}>Pesan ➛</button>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image="/3.png"
            alt="Body Massage dan Kerokan"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Body Massage dan Kerokan
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Hadirkan kelegaan dengan kombinasi pijat mendalam dan kerokan tradisional. Rasakan aliran energi yang menyegarkan.
            </Typography>
          </CardContent>
        </CardActionArea>
        <button onClick={() => handleCardButtonClick()} style={{paddingLeft: '18px', paddingBottom: '20px', color: 'rgb(30, 150, 300)'}}>Pesan ➛</button>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image="/4.png"
            alt="Body Massage dan Reflexi"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Body Massage dan Reflexi
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Pijatan khusus untuk merevitalisasi setiap titik refleksi di kaki, memberikan relaksasi total dari kepala hingga kaki.
            </Typography>
          </CardContent>
        </CardActionArea>
        <button onClick={() => handleCardButtonClick()} style={{paddingLeft: '18px', paddingBottom: '20px', color: 'rgb(30, 150, 300)'}}>Pesan ➛</button>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image="/5.png"
            alt="Body Massage dan Totok V"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Body Massage dan Totok V
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Harmoni sempurna antara pijat tubuh dan totok V untuk membangkitkan vitalitas dan keseimbangan dalam tubuh Anda.
            </Typography>
          </CardContent>
        </CardActionArea>
        <button onClick={() => handleCardButtonClick()} style={{paddingLeft: '18px', paddingBottom: '20px', color: 'rgb(30, 150, 300)'}}>Pesan ➛</button>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image="/6.png"
            alt="Body Massage dan Scrub"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Body Massage dan Scrub
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Perawatan menyeluruh dengan pijatan lembut dan scrub eksfoliasi untuk kulit yang lembut dan bercahaya.
            </Typography>
          </CardContent>
        </CardActionArea>
        <button onClick={() => handleCardButtonClick()} style={{paddingLeft: '18px', paddingBottom: '20px', color: 'rgb(30, 150, 300)'}}>Pesan ➛</button>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image="/7.png"
            alt="Body Massage dan Totok Payudara"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Body Massage dan Totok Payudara
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Sentuhan lembut untuk memanjakan tubuh dan totok payudara untuk memelihara kesehatan dan keindahan alami.
            </Typography>
          </CardContent>
        </CardActionArea>
          <button onClick={() => handleCardButtonClick()} style={{paddingLeft: '18px', paddingBottom: '20px', color: 'rgb(30, 150, 300)'}}>Pesan ➛</button>
      </Card>
    </div>
  );
}