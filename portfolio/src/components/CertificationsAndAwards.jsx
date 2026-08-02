import React from 'react';
import { Award, ShieldCheck, Calendar, Trophy, Medal, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function CertificationsAndAwards() {
  const { certifications, awards } = resumeData;

  return (
    <section id="certs" style={{ padding: '4rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Qualifications & Honors</div>
          <h2 className="section-title">자격사항 및 수상경력</h2>
          <p className="section-desc">지속적인 자기계발 및 성과 달성 기록입니다.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          
          {/* Column 1: Certifications */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '8px',
                background: '#eff6ff',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldCheck size={20} />
              </div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: '800', color: '#0f172a' }}>
                자격 및 면허 ({certifications.length}건)
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} className="card" style={{ padding: '1rem 1.25rem', background: '#ffffff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a' }}>
                        {cert.name}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '0.125rem' }}>
                        발행기관: {cert.issuer}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className="badge badge-blue" style={{ fontSize: '0.75rem' }}>
                        {cert.category}
                      </span>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Awards */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '8px',
                background: '#eff6ff',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Trophy size={20} />
              </div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: '800', color: '#0f172a' }}>
                수상 경력 ({awards.length}건)
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {awards.map((award, idx) => (
                <div key={idx} className="card" style={{ padding: '1rem 1.25rem', background: '#ffffff', borderLeft: idx === 0 ? '4px solid #2563eb' : '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        {idx === 0 && <Medal size={16} color="#2563eb" />}
                        <span>{award.title}</span>
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '0.125rem' }}>
                        {award.organization}
                      </div>
                    </div>
                    <span className="badge badge-gray" style={{ fontSize: '0.75rem' }}>
                      {award.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
