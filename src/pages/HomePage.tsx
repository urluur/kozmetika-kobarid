import React from 'react';
import { Carousel } from 'react-bootstrap';

const images = [
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
];

const HomePage: React.FC = () => (
  <div className="h-100 w-100 d-flex align-items-center justify-content-center overflow-hidden m-0 p-0">
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
  </div>
);

export default HomePage;
