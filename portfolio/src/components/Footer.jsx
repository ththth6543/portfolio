import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Heart } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const { personalInfo } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0f172a', color: '#f8fafc', padding: '3.5rem 0 2rem', borderTop: '4px solid #2563eb' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '8px',
                background: '#2563eb',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800'
              }}>
                JY
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>
                {personalInfo.name} 포트폴리오
              </h2>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9375rem', maxWidth: '480px', lineHeight: 1.6 }}>
              {personalInfo.desiredRole} | {personalInfo.summary}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#cbd5e1' }}>
            <div style={{ fontWeight: '700', color: '#ffffff', marginBottom: '0.25rem' }}>연락처 및 거주지</div>
            <div>이메일: <a href={`mailto:${personalInfo.email}`} style={{ color: '#60a5fa', textDecoration: 'none' }}>{personalInfo.email}</a></div>
            <div>전화번호: {personalInfo.phone}</div>
            <div>주소: {personalInfo.address}</div>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              padding: '0.75rem 1.25rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#2563eb'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            <ArrowUp size={16} /> 맨 위로 이동
          </button>

        </div>

        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8125rem', color: '#64748b' }}>
          © 2026 {personalInfo.name} ({personalInfo.nameEn}). All rights reserved. Designed with React & Blue Aesthetic System.
        </div>
      </div>
    </footer>
  );
}
