import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';

type AppRoute = 'home' | 'about' | 'services' | 'projects' | 'clients' | 'contact';

function getRouteFromHash(hash: string): AppRoute {
  const path = hash.replace(/^#/, '') || '/';

  switch (path) {
    case '/about':
      return 'about';
    case '/services':
      return 'services';
    case '/projects':
      return 'projects';
    case '/clients':
      return 'clients';
    case '/contact':
      return 'contact';
    default:
      return 'home';
  }
}

export default function App() {
  const [ready, setReady] = useState(false);
  const [route, setRoute] = useState<AppRoute>(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case 'about':
        return <AboutSection />;
      case 'services':
        return <ServicesSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'clients':
        return <PartnersSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSlider />;
    }
  };

  return (
    <div className={`app ${ready ? 'app--ready' : ''}`}>
      <Preloader onComplete={() => setReady(true)} />
      <Header />
      <main className={route === 'home' ? 'page-main page-main--home' : 'page-main'}>
        {renderPage()}
      </main>
    </div>
  );
}
