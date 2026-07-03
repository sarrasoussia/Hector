import type { MouseEventHandler } from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'header' | 'preloader';
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function Logo({ variant = 'light', size = 'header', onClick }: LogoProps) {
  return (
    <a
      href="#/"
      className={`logo logo--${variant} logo--${size}`}
      aria-label="Hector Qatar home"
      onClick={onClick}
    >
      <img src="/img/logo.png" alt="Hector Qatar Construction & Fitout" className="logo__image" />
    </a>
  );
}
