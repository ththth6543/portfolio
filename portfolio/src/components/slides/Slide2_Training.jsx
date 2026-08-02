import React from 'react';
import { BookOpen, Clock, Building2, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export default function Slide2_Training() {
  const { trainings } = resumeData;

  return (
    <div className="ppt-slide">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 02 / 05</span>
            <h1 className="ppt-slide-title">교육 및 연수사항</h1>
          </div>
          <div className="ppt-slide-subtitle">
            웹퍼블리셔 · UI 개발 전문가 과정 (480시간) 및 전문 이수 교육
          </div>
        </div>

        {/* Slide Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Main 480hr Course Highlight */}
          <div className="ppt-box ppt-box-blue" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="ppt-badge" style={{ background: '#2563eb', color: '#fff' }}>핵심 실무 과정</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: '800', color: '#1d4ed8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={16} /> 480시간 수료
                  </span>
                </div>
                <h2 style={{ fontSize: '1.375rem', fontWeight: '800', color: '#0f172a', marginTop: '0.375rem' }}>
                  {trainings[0].title}
                </h2>
                <div style={{ fontSize: '0.875rem', color: '#475569', marginTop: '0.25rem' }}>
                  주관 기관: <strong>{trainings[0].organizer}</strong> ({trainings[0].period})
                </div>
              </div>
            </div>

            {/* Course breakdown 4 Columns */}
            <div className="ppt-grid-2" style={{ marginTop: '1.25rem', gap: '1rem' }}>
              {trainings[0].details.map((detail, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  border: '1px solid #dbeafe',
                  borderRadius: '10px',
                  padding: '0.875rem 1rem',
                  fontSize: '0.875rem',
                  color: '#334155',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem'
                }}>
                  <CheckCircle2 size={16} color="#2563eb" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sub Courses Grid */}
          <div className="ppt-grid-2" style={{ gap: '1.25rem' }}>
            
            {/* FastCampus iOS Course */}
            <div className="ppt-box" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="ppt-badge">{trainings[1].badge}</span>
                <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: '600' }}>{trainings[1].period} ({trainings[1].hours})</span>
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: '800', color: '#0f172a' }}>
                {trainings[1].title}
              </h3>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1.2rem', fontSize: '0.8125rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {trainings[1].details.map((d, dIdx) => (
                  <li key={dIdx}>{d}</li>
                ))}
              </ul>
            </div>

            {/* Upbit Course */}
            <div className="ppt-box" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="ppt-badge">{trainings[2].badge}</span>
                <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: '600' }}>{trainings[2].period} ({trainings[2].hours})</span>
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: '800', color: '#0f172a' }}>
                {trainings[2].title}
              </h3>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1.2rem', fontSize: '0.8125rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {trainings[2].details.map((d, dIdx) => (
                  <li key={dIdx}>{d}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="ppt-slide-footer">
        <span>포트폴리오 | 유준열 (JunYeol Yu)</span>
        <span>SLIDE 02 OF 05</span>
      </div>
    </div>
  );
}
