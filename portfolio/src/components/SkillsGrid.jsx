import React, { useState } from 'react';
import { Code, Terminal, Database, Server, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function SkillsGrid() {
  const { skills } = resumeData;
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    { key: 'ALL', label: '전체 (All Skills)' },
    { key: 'frameworks', label: '프레임워크 & 웹 (8)' },
    { key: 'languages', label: '사용가능 언어 (6)' },
    { key: 'databases', label: '데이터베이스 (5)' },
    { key: 'libraries', label: '라이브러리 & AI (5)' },
    { key: 'tools', label: '개발도구 & 협업 (8)' }
  ];

  const skillGroups = [
    {
      key: 'frameworks',
      title: '프레임워크 & UI 라이브러리',
      icon: Code,
      items: skills.frameworks,
      color: '#2563eb'
    },
    {
      key: 'languages',
      title: '사용가능 언어',
      icon: Terminal,
      items: skills.languages,
      color: '#1d4ed8'
    },
    {
      key: 'databases',
      title: '데이터베이스 시스템',
      icon: Database,
      items: skills.databases,
      color: '#0284c7'
    },
    {
      key: 'libraries',
      title: '데이터분석 & ML 라이브러리',
      icon: Sparkles,
      items: skills.libraries,
      color: '#4f46e5'
    },
    {
      key: 'tools',
      title: '협업, 배포 & 개발 도구',
      icon: Wrench,
      items: [...skills.infrastructure, ...skills.tools],
      color: '#0f766e'
    }
  ];

  const visibleGroups = activeCategory === 'ALL'
    ? skillGroups
    : skillGroups.filter(g => g.key === activeCategory);

  return (
    <section id="skills" style={{ padding: '4rem 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Technical Competencies</div>
          <h2 className="section-title">사용 가능 기술 (Technical Skills)</h2>
          <p className="section-desc">퍼블리싱, 프론트엔드, 백엔드 및 다양한 개발 도구 활용 역량입니다.</p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '700',
                border: activeCategory === cat.key ? '1px solid #2563eb' : '1px solid #e2e8f0',
                background: activeCategory === cat.key ? '#eff6ff' : '#ffffff',
                color: activeCategory === cat.key ? '#2563eb' : '#475569',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid Cards */}
        <div className="animate-fade-in" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {visibleGroups.map((group) => {
            const IconComponent = group.icon;
            return (
              <div key={group.key} className="card" style={{ padding: '1.75rem', borderTop: `4px solid ${group.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '10px',
                    background: '#eff6ff',
                    color: group.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '800', color: '#0f172a' }}>
                    {group.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '8px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#334155',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = group.color;
                        e.currentTarget.style.color = group.color;
                        e.currentTarget.style.background = '#eff6ff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#e2e8f0';
                        e.currentTarget.style.color = '#334155';
                        e.currentTarget.style.background = '#f8fafc';
                      }}
                    >
                      <CheckCircle2 size={14} color={group.color} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
