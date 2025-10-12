'use client';

import Link from 'next/link';
import { usePrivy } from '@privy-io/react-auth';
import { useState } from 'react';

const Navbar = () => {
  const { ready, authenticated, login, logout } = usePrivy();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <i className="fas fa-church"></i>
            <span>Govinda Systems</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <Link href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Início</Link>
            <Link href="#valores" className="nav-link" onClick={() => setMenuOpen(false)}>Valores</Link>
            <Link href="#cerimonias" className="nav-link" onClick={() => setMenuOpen(false)}>Cerimônias</Link>
            <Link href="#doacoes" className="nav-link" onClick={() => setMenuOpen(false)}>Doações</Link>
            <Link href="#sobre" className="nav-link" onClick={() => setMenuOpen(false)}>Sobre</Link>
            <button className="btn btn--primary" onClick={authenticated ? logout : login}>
              <i className="fas fa-wallet"></i>
              {ready && (authenticated ? 'Logout' : 'Connect Wallet')}
            </button>
          </div>
          <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
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