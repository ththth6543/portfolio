import React from 'react';
import { ShieldCheck, Trophy, Briefcase, Heart, Globe, Users } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export default function Slide5_CertificationsAndExperience() {
  const { certifications, awards, activities } = resumeData;

  return (
    <div className="ppt-slide">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 05 / 05</span>
            <h1 className="ppt-slide-title">자격사항 · 수상경력 및 사회/봉사활동</h1>
          </div>
          <div className="ppt-slide-subtitle">
            보유 자격증 (8종) · 수상 기록 (8종) · 어학 · 직무 경력 및 봉사활동
          </div>
        </div>

        {/* 3 Column Layout */}
        <div className="ppt-grid-3" style={{ gap: '1rem' }}>
          
          {/* Column 1: Certifications */}
          <div className="ppt-box" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#2563eb', fontWeight: '800', marginBottom: '0.75rem' }}>
              <ShieldCheck size={18} />
              <span>자격 및 면허 (8종)</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.8125rem',
                  padding: '0.35rem 0.6rem',
                  background: '#f8fafc',
                  borderRadius: '6px',
                  border: '1px solid #f1f5f9'
                }}>
                  <strong style={{ color: '#0f172a' }}>{cert.name}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{cert.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Awards & Language */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* Language Box */}
            <div className="ppt-box ppt-box-blue" style={{ padding: '0.875rem 1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: '800', color: '#1e3a8a' }}>
                <Globe size={16} /> 어학 성적
              </div>
              <div style={{ fontSize: '1.125rem', fontWeight: '800', color: '#2563eb', marginTop: '0.125rem' }}>
                {activities.language.name} {activities.language.score}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{activities.language.date}</div>
            </div>

            {/* Awards List */}
            <div className="ppt-box" style={{ padding: '1rem', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#2563eb', fontWeight: '800', marginBottom: '0.5rem' }}>
                <Trophy size={16} />
                <span style={{ fontSize: '0.875rem' }}>수상 경력 (주요 5건)</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', fontSize: '0.78125rem' }}>
                {awards.slice(0, 5).map((aw, idx) => (
                  <div key={idx} style={{ color: '#334155', borderBottom: '1px dashed #f1f5f9', paddingBottom: '0.25rem' }}>
                    <div style={{ fontWeight: '700', color: '#0f172a' }}>{aw.title}</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{aw.organization} ({aw.date})</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Experience & Volunteer */}
          <div className="ppt-box" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#2563eb', fontWeight: '800', marginBottom: '0.75rem' }}>
              <Briefcase size={18} />
              <span>경력사항 & 봉사활동</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8125rem' }}>
              {/* Experience 1 */}
              <div>
                <strong style={{ color: '#0f172a' }}>{activities.experience[0].company}</strong>
                <div style={{ color: '#2563eb', fontSize: '0.75rem', fontWeight: '600' }}>
                  {activities.experience[0].role} ({activities.experience[0].period})
                </div>
                <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: '0.2rem', lineHeight: 1.3 }}>
                  {activities.experience[0].desc}
                </p>
              </div>

              {/* Volunteer */}
              <div style={{ paddingTop: '0.5rem', borderTop: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#e11d48', fontWeight: '700' }}>
                  <Heart size={14} /> 헌혈 봉사활동
                </div>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700', color: '#0f172a', marginTop: '0.125rem' }}>
                  {activities.volunteer[0].details}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{activities.volunteer[0].period}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="ppt-slide-footer">
        <span>포트폴리오 | 유준열 (JunYeol Yu)</span>
        <span>SLIDE 05 OF 05</span>
      </div>
    </div>
  );
}
