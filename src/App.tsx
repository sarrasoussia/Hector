import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';
import ServiceDetailPage from './components/ServiceDetailPage';
import { getServicePageBySlug, type ServicePage } from './data/services';

type AppRoute =
  | { page: 'home' | 'about' | 'services' | 'projects' | 'clients' | 'contact' }
  | { page: 'service-detail'; service: ServicePage };

function getRouteFromHash(hash: string): AppRoute {
  const path = hash.replace(/^#/, '') || '/';

  if (path.startsWith('/services/')) {
    const slug = path.replace('/services/', '');
    const service = getServicePageBySlug(slug);

    if (service) {
      return { page: 'service-detail', service };
    }
  }

  switch (path) {
    case '/about':
      return { page: 'about' };
    case '/services':
      return { page: 'services' };
    case '/projects':
      return { page: 'projects' };
    case '/clients':
      return { page: 'clients' };
    case '/contact':
      return { page: 'contact' };
    default:
      return { page: 'home' };
  }
}

export default function App() {
  const [ready, setReady] = useState(false);
  const [route, setRoute] = useState<AppRoute>(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    setRoute(getRouteFromHash(window.location.hash));
  }, []);

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
    switch (route.page) {
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
      case 'service-detail':
        return <ServiceDetailPage service={route.service} />;
      default:
        return <HeroSlider />;
    }
  };

  return (
    <div className={`app ${ready ? 'app--ready' : ''}`}>
      <Preloader onComplete={() => setReady(true)} />
      <Header />
      <main className={route.page === 'home' ? 'page-main page-main--home' : 'page-main'}>
        {renderPage()}
      </main>
      {route.page !== 'home' && <SiteFooter />}
    </div>
  );
}
