import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, LayoutGrid, Monitor, Layers } from 'lucide-react';
import Slide1_Profile from './slides/Slide1_Profile';
import Slide2_Training from './slides/Slide2_Training';
import Slide3_Projects from './slides/Slide3_Projects';
import Slide4_Skills from './slides/Slide4_Skills';
import Slide5_CertificationsAndExperience from './slides/Slide5_CertificationsAndExperience';

export default function PPTDeck() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [viewMode, setViewMode] = useState('slide'); // 'slide' or 'all'

  const totalSlides = 5;

  const slides = [
    { id: 1, title: '지원이력서 & 인적사항', component: <Slide1_Profile /> },
    { id: 2, title: '교육 및 연수사항', component: <Slide2_Training /> },
    { id: 3, title: '프로젝트 수행사항 요약', component: <Slide3_Projects /> },
    { id: 4, title: '사용 가능 기술', component: <Slide4_Skills /> },
    { id: 5, title: '자격·수상 & 경력/활동', component: <Slide5_CertificationsAndExperience /> },
  ];

  // Keyboard arrow listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode !== 'slide') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentSlide((prev) => Math.max(prev - 1, 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, totalSlides]);

  return (
    <div className="ppt-wrapper" style={{ minHeight: '100vh', background: '#f1f5f9', paddingBottom: '3rem' }}>
      
      {/* Top PPT Controls Navigation Bar */}
      <div className="ppt-controls-bar">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          
          {/* Logo / Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
              color: '#ffffff',
              fontWeight: '800',
              padding: '0.375rem 0.75rem',
              borderRadius: '8px',
              fontSize: '0.875rem',
              letterSpacing: '0.05em'
            }}>
              PPT DECK
            </div>
            <div style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a' }}>
              유준열 포트폴리오 <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: '500' }}>(UI · 웹퍼블리셔)</span>
            </div>
          </div>

          {/* Slide Tabs Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap' }}>
            {slides.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentSlide(s.id);
                  if (viewMode === 'all') {
                    const el = document.getElementById(`slide-card-${s.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`ppt-tab-btn ${currentSlide === s.id && viewMode === 'slide' ? 'active' : ''}`}
              >
                <span>[{s.id}]</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Prev/Next & View Toggle Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {viewMode === 'slide' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', background: '#f8fafc', padding: '0.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <button
                  onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 1))}
                  disabled={currentSlide === 1}
                  style={{
                    border: 'none',
                    background: currentSlide === 1 ? 'transparent' : '#ffffff',
                    color: currentSlide === 1 ? '#cbd5e1' : '#0f172a',
                    padding: '0.375rem 0.625rem',
                    borderRadius: '6px',
                    cursor: currentSlide === 1 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: '700',
                    fontSize: '0.8125rem'
                  }}
                >
                  <ChevronLeft size={16} /> 이전
                </button>

                <span style={{ fontSize: '0.875rem', fontWeight: '800', color: '#2563eb', padding: '0 0.5rem' }}>
                  {currentSlide} / {totalSlides}
                </span>

                <button
                  onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides))}
                  disabled={currentSlide === totalSlides}
                  style={{
                    border: 'none',
                    background: currentSlide === totalSlides ? 'transparent' : '#ffffff',
                    color: currentSlide === totalSlides ? '#cbd5e1' : '#0f172a',
                    padding: '0.375rem 0.625rem',
                    borderRadius: '6px',
                    cursor: currentSlide === totalSlides ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: '700',
                    fontSize: '0.8125rem'
                  }}
                >
                  다음 <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* View Mode Toggle */}
            <button
              onClick={() => setViewMode(viewMode === 'slide' ? 'all' : 'slide')}
              style={{
                padding: '0.5rem 0.875rem',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                color: '#334155',
                fontSize: '0.8125rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem'
              }}
            >
              {viewMode === 'slide' ? (
                <>
                  <LayoutGrid size={15} /> 전체 펼쳐보기
                </>
              ) : (
                <>
                  <Monitor size={15} /> 슬라이드 모드
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Main Viewport Container */}
      <div className="ppt-viewport" style={{ marginTop: '1.5rem' }}>
        {viewMode === 'slide' ? (
          /* Presentation Mode: Shows Current Slide */
          <div>
            {slides.find((s) => s.id === currentSlide)?.component}
          </div>
        ) : (
          /* Scroll All Mode: Renders all slides in sequence */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {slides.map((s) => (
              <div key={s.id} id={`slide-card-${s.id}`}>
                {s.component}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
