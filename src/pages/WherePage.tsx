import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const APPLE_MAPS_URL = "https://maps.apple.com/place?coordinate=46.248283,13.577997&name=Kozmetika%20Kobarid";
const GOOGLE_MAPS_URL = "https://www.google.com/maps?q=Krilanova+ulica+22,+5222+Kobarid,+Slovenia";

const WherePage: React.FC<{ t: (key: string) => string }> = ({ t }) => {
  return (
    <Container fluid className="p-0 h-100 d-flex flex-column flex-grow-1" style={{ minHeight: 0 }}>
      <Row className="g-0 w-100">
        <Col xs={12} className="d-flex flex-column justify-content-center align-items-center align-items-md-start p-4 bg-white">
          <div className="w-100">
            <div className="mb-3">
              <div className="fw-medium text-secondary fs-5 mb-1" aria-label={t('addressLabel')}>{t('addressLabel')}</div>
              <div className="fs-6 text-dark mb-2" aria-label={t('addressFull')}>{t('addressFull')}</div>
            </div>
            <div className="d-flex gap-2 mb-3 flex-wrap">
              <Button variant="primary" size="lg" href={APPLE_MAPS_URL} target="_blank" className="fw-semibold fs-5" aria-label={t('openAppleMaps')} rel="noopener noreferrer">
                {t('openAppleMaps')}
              </Button>
              <Button variant="success" size="lg" href={GOOGLE_MAPS_URL} target="_blank" className="fw-semibold fs-5" aria-label={t('openGoogleMaps')} rel="noopener noreferrer">
                {t('openGoogleMaps')}
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="g-0 w-100 flex-grow-1" style={{ minHeight: 0 }}>
        <Col xs={12} className="d-flex align-items-stretch justify-content-center p-0 h-100 flex-grow-1" style={{ minHeight: 0 }}>
          <div className="w-100 h-100 d-flex align-items-stretch justify-content-center flex-grow-1" style={{ minHeight: 0 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.073393268298!2d13.57579831580309!3d46.24828307911709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b6e2e2e2e2e2e%3A0x477b6e2e2e2e2e2e!2sKrilanova%20ulica%2022%2C%205222%20Kobarid%2C%20Slovenia!5e0!3m2!1sen!2ssi!4v1692979200000!5m2!1sen!2ssi"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('tabWhere') + ' Map'}
              className="map-iframe"
            ></iframe>
          </div>
        </Col>
      </Row>
      <style>{`
        .map-iframe {
          width: 100%;
          height: 100%;
          min-height: 400px;
          max-height: 200vh;
        }
      `}</style>
    </Container>
  );
};

export default WherePage;
