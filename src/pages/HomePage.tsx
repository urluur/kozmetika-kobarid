import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';

const images = [
  img1,
  img2,
  img3,
];

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="h-100 w-100 position-relative d-flex align-items-center justify-content-center overflow-hidden m-0 p-0">
      <Carousel indicators controls={true} fade interval={4000} style={{ maxHeight: '84vh', width: '100%', height: '84vh' }}>
        {images.map((src, idx) => (
          <Carousel.Item key={idx} style={{ maxHeight: '84vh', width: '100%', height: '84vh' }}>
            <img
              src={src}
              alt={`slide-${idx}`}
              style={{ objectFit: 'cover', width: '100%', height: '84vh' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="position-absolute top-50 start-50 translate-middle text-center px-4 py-3" style={{ zIndex: 2, background: 'rgba(255,255,255,0.85)', borderRadius: '1rem', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
        <div className="d-flex flex-column align-items-center gap-2">
          <span style={{ fontSize: '2.5rem' }} aria-label="Logo">🌸</span>
          <span className="fw-bold fs-3" style={{ fontFamily: 'Avenir, Helvetica, Arial, sans-serif', letterSpacing: '1px' }}>Kozmetika Kobarid</span>
          <p className="text-secondary fs-5 mb-2" style={{ maxWidth: 400 }}>{t('homeWelcome')}</p>
          <Button variant="primary" size="lg" href="https://cal.com/urluur" target="_blank" rel="noopener noreferrer" className="fw-semibold">
            {t('bookOnline')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
