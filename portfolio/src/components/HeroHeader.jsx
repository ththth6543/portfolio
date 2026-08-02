import React from 'react';
import { Mail, Phone, MapPin, User, Award, BookOpen, ShieldCheck, Heart, Sparkles, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function HeroHeader() {
  const { personalInfo, stats } = resumeData;

  return (
    <section id="hero" style={{ padding: '3.5rem 0 2.5rem', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
      <div className="container">
        
        {/* Main Hero Banner */}
        <div 
          className="animate-fade-in"
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 10px 30px -5px rgba(37, 99, 235, 0.08)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Blue Accent Bar */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }} className="hero-grid">
            
            {/* Avatar & Photo Container */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{
                width: '160px',
                height: '160px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '4px solid #ffffff',
                boxShadow: '0 12px 24px -6px rgba(37, 99, 235, 0.2)',
                background: '#eff6ff',
                margin: '0 auto'
              }}>
                <img 
                  src="/profile.png" 
                  alt={personalInfo.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    // Fallback SVG if image not found
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#dbeafe;color:#1d4ed8;font-size:3rem;font-weight:800;">
                        유
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Status Badge below photo */}
              <div style={{ marginTop: '0.875rem' }}>
                <span className="badge badge-blue">
                  <CheckCircle2 size={13} /> 구직중 (인턴 지원)
                </span>
              </div>
            </div>

            {/* Profile Info Summary */}
            <div>
              {/* Header Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                <span className="badge badge-blue-solid" style={{ fontSize: '0.8125rem' }}>
                  {personalInfo.desiredRole}
                </span>
                <span className="badge badge-gray">
                  희망 회사: <strong style={{ color: '#2563eb', marginLeft: '4px' }}>{personalInfo.desiredCompany}</strong>
                </span>
              </div>

              <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
                {personalInfo.name} <span style={{ fontSize: '1.25rem', color: '#64748b', fontWeight: '500' }}>({personalInfo.nameEn} / {personalInfo.nameHanja})</span>
              </h1>

              {/* Bio Summary */}
              <p style={{ color: '#475569', fontSize: '1.0625rem', marginTop: '0.75rem', lineHeight: 1.6, maxWidth: '720px' }}>
                {personalInfo.summary}
              </p>

              {/* Contact Details Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.75rem 1.5rem',
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: '#334155' }}>
                  <User size={16} color="#2563eb" />
                  <span><strong>생년월일:</strong> {personalInfo.birth}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: '#334155' }}>
                  <Mail size={16} color="#2563eb" />
                  <span><strong>이메일:</strong> <a href={`mailto:${personalInfo.email}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{personalInfo.email}</a></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: '#334155' }}>
                  <Phone size={16} color="#2563eb" />
                  <span><strong>전화번호:</strong> {personalInfo.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: '#334155' }}>
                  <MapPin size={16} color="#2563eb" />
                  <span><strong>거주지:</strong> {personalInfo.address}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: '#334155' }}>
                  <ShieldCheck size={16} color="#2563eb" />
                  <span><strong>병역:</strong> {personalInfo.military}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Quick Highlights Stat Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginTop: '1.75rem'
        }}>
          {stats.map((stat, idx) => (
            <div key={idx} className="card" style={{
              background: '#ffffff',
              borderLeft: '4px solid #2563eb',
              padding: '1.25rem'
            }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1e40af', marginTop: '0.25rem' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#475569', marginTop: '0.25rem' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
