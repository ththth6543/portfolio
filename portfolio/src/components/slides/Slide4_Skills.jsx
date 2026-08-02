import React from 'react';
import { Code, Terminal, Database, Sparkles, Wrench, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export default function Slide4_Skills() {
  const { skills } = resumeData;

  const categories = [
    {
      title: '프레임워크 & Web (8)',
      icon: Code,
      color: '#2563eb',
      items: skills.frameworks
    },
    {
      title: '사용가능 언어 (6)',
      icon: Terminal,
      color: '#1d4ed8',
      items: skills.languages
    },
    {
      title: '데이터베이스 (5)',
      icon: Database,
      color: '#0284c7',
      items: skills.databases
    },
    {
      title: '데이터분석 & AI (5)',
      icon: Sparkles,
      color: '#4f46e5',
      items: skills.libraries
    },
    {
      title: '협업 & 개발도구 (8)',
      icon: Wrench,
      color: '#0f766e',
      items: [...skills.infrastructure, ...skills.tools]
    }
  ];

  return (
    <div className="ppt-slide">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 04 / 05</span>
            <h1 className="ppt-slide-title">사용 가능 기술 (Technical Skills)</h1>
          </div>
          <div className="ppt-slide-subtitle">
            웹 퍼블리싱 · 프론트엔드 · 백엔드 & AI 개발 역량 매트릭스
          </div>
        </div>

        {/* Skills Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '0.875rem'
        }}>
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="ppt-box" style={{ padding: '1rem', borderTop: `4px solid ${cat.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: cat.color, marginBottom: '0.75rem' }}>
                  <Icon size={18} />
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '800', color: '#0f172a' }}>
                    {cat.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  {cat.items.map((item, sIdx) => (
                    <div key={sIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.8125rem',
                      fontWeight: '600',
                      color: '#334155',
                      padding: '0.25rem 0.5rem',
                      background: '#f8fafc',
                      borderRadius: '6px',
                      border: '1px solid #f1f5f9'
                    }}>
                      <CheckCircle2 size={13} color={cat.color} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="ppt-slide-footer">
        <span>포트폴리오 | 유준열 (JunYeol Yu)</span>
        <span>SLIDE 04 OF 05</span>
      </div>
    </div>
  );
}
