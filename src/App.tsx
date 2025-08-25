import { useState } from 'react';
import { Button, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WherePage from './pages/WherePage';

function App() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState('home');
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="d-flex flex-column h-100 min-vh-100">
      <Navbar bg="white" expand="md" className="shadow-sm px-3 w-100" expanded={expanded} onToggle={setExpanded}>
        <Navbar.Brand onClick={() => setPage('home')} className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
          <span className="mx-2" style={{ fontSize: '2rem' }} aria-label="Logo">🌸</span>
          <span style={{ fontSize: '1.3rem', letterSpacing: '1px', fontFamily: 'Avenir, Helvetica, Arial, sans-serif', fontWeight: 400 }}>Kozmetika Kobarid</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link active={page === 'home'} onClick={() => setPage('home')}>{t('tabHome')}</Nav.Link>
            <Nav.Link active={page === 'about'} onClick={() => setPage('about')}>{t('tabAbout')}</Nav.Link>
            <Nav.Link active={page === 'where'} onClick={() => setPage('where')}>{t('tabWhere')}</Nav.Link>
            <Button variant="primary" className="ms-3" href="https://cal.com/urluur" target="_blank" rel="noopener noreferrer">{t('bookOnline')}</Button>
            <Dropdown align="end" className="ms-2">
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-flags">
                {i18n.language === 'sl' && '🇸🇮'}
                {i18n.language === 'en' && '🇬🇧'}
                {i18n.language === 'it' && '🇮🇹'}
                {i18n.language === 'de' && '🇩🇪'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage('sl')}>🇸🇮 Slovenščina</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('en')}>🇬🇧 English</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('it')}>🇮🇹 Italiano</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('de')}>🇩🇪 Deutsch</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="flex-grow-1">
        {page === 'home' && <HomePage />}
        {page === 'about' && <AboutPage t={t} />}
        {page === 'where' && <WherePage t={t} />}
      </div>
      <footer className="w-100 py-2 bg-light border-top text-center" style={{opacity: 0.7, fontSize: '0.95rem'}}>
        <span>🌸 {t('footer')} &copy; 2025</span>
      </footer>
    </div>
  );
}

export default App;