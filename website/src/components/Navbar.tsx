'use client';

import Link from 'next/link';
import { usePrivy } from '@privy-io/react-auth';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { ready, authenticated, login, logout } = usePrivy();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navBrand}>
            <i className="fas fa-church"></i>
            <Link href="/">Govinda Systems</Link>
          </div>
          <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`} id="nav-menu">
            <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>Início</Link>
            <Link href="/pages/sobre" className={styles.navLink} onClick={() => setMenuOpen(false)}>Valores</Link>
            <Link href="/pages/jornada" className={styles.navLink} onClick={() => setMenuOpen(false)}>Jornada</Link>
            <Link href="#cerimonias" className={styles.navLink} onClick={() => setMenuOpen(false)}>Cerimônias</Link>
            <Link href="/pages/app" className={styles.navLink} onClick={() => setMenuOpen(false)}>App</Link>
            <Link href="#doacoes" className={styles.navLink} onClick={() => setMenuOpen(false)}>Doações</Link>
            <Link href="#sobre" className={styles.navLink} onClick={() => setMenuOpen(false)}>Sobre</Link>
            <Link href="/pages/contato" className={styles.navLink} onClick={() => setMenuOpen(false)}>Contato</Link>
            <button className="btn btn--primary" onClick={authenticated ? logout : login}>
              <i className="fas fa-wallet"></i>
              {ready && (authenticated ? 'Logout' : ' Connect Wallet')}
            </button>
          </div>
          <div className={styles.navToggle} id="nav-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
