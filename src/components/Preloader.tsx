import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const timer = setTimeout(() => {
      setHidden(true);
      onComplete();
    }, 600);
    return () => clearTimeout(timer);
  }, [loaded, onComplete]);

  if (hidden) return null;

  return (
    <div className={`preloader ${loaded ? 'preloader--loaded' : ''}`}>
      <div className="preloader__inner">
        <div className="preloader__logo">
          <img src="/img/logo.png" alt="Hector Qatar" className="preloader__image" />
          <div className="preloader__spinner" />
        </div>
      </div>
    </div>
  );
}
