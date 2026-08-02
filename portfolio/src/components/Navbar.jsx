import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Code, Sparkles, FileText, Menu, X } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: '자기소개' },
    { id: 'training', label: '교육 & 학력' },
    { id: 'projects', label: '프로젝트' },
    { id: 'skills', label: '보유기술' },
    { id: 'certs', label: '자격 & 수상' },
    { id: 'experience', label: '경력 & 활동' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`glass-header transition-all duration-300 ${scrolled ? 'shadow-md py-3' : 'py-4'}`}>
      <div className="container flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand / Logo */}
        <div 
          onClick={() => scrollToSection('hero')} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', cursor: 'pointer' }}
        >
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: '800',
            boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)'
          }}>
            JY
          </div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.125rem', color: '#0f172a', lineHeight: 1.2 }}>
              {resumeData.personalInfo.name}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: '600' }}>
              {resumeData.personalInfo.desiredRole}
            </div>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  padding: '0.5rem 0.875rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  border: 'none',
                  background: isActive ? '#eff6ff' : 'transparent',
                  color: isActive ? '#2563eb' : '#475569',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Quick Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href={`mailto:${resumeData.personalInfo.email}`}
            className="btn btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
          >
            <Mail size={16} />
            <span>이메일 문의</span>
          </a>
        </div>

      </div>
    </header>
  );
}
