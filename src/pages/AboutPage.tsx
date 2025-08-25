import React from 'react';
import { Card, Button } from 'react-bootstrap';
import aboutImg from '../assets/images/about.jpg';

interface Props {
  t: (key: string) => string;
}

const AboutPage: React.FC<Props> = ({ t }) => (
  <div className="h-100 d-flex align-items-center justify-content-center mt-5">
    <Card className="p-4 shadow-sm w-100 text-center mx-auto" style={{ maxWidth: 400 }}>
      <Card.Img
        variant="top"
        src={aboutImg}
        alt="Person"
        className="mx-auto mb-3 rounded-circle"
        style={{ width: 140, height: 140, objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title className="fs-4 text-dark">Minka Uršič</Card.Title>
        <Button href="tel:+38631798833" variant="primary" className="mb-3 fw-semibold fs-5">
          +386 31 79 88 33
        </Button>
        <Card.Text className="text-secondary fs-6 lh-lg">{t('aboutMeText')}</Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default AboutPage;
