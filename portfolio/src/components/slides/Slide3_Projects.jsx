import React, { useState } from 'react';
import { Layers, ArrowRight, Sparkles } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import ProjectModal from '../ProjectModal';

export default function Slide3_Projects() {
  const { projectsOverview } = resumeData;
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="ppt-slide">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 03 / 05</span>
            <h1 className="ppt-slide-title">프로젝트 수행사항 요약</h1>
          </div>
          <div className="ppt-slide-subtitle">
            개인 및 팀 프로젝트 · 기업과제 총 8건 (클릭 시 상세정보 레이어)
          </div>
        </div>

        {/* Projects Grid 4x2 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.875rem'
        }}>
          {projectsOverview.map((project) => (
            <div
              key={project.id}
              className="ppt-box"
              onClick={() => setActiveProject(project)}
              style={{
                padding: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '190px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(37, 99, 235, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.375rem' }}>
                  <span className="ppt-badge" style={{ fontSize: '0.7rem' }}>{project.category}</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{project.period}</span>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a', lineHeight: 1.2 }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '0.78125rem',
                  color: '#475569',
                  marginTop: '0.375rem',
                  lineHeight: 1.4,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {project.desc}
                </p>
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '0.5rem' }}>
                {project.techStack.slice(0, 3).map((t, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.6875rem',
                    padding: '0.15rem 0.4rem',
                    borderRadius: '4px',
                    background: '#f1f5f9',
                    color: '#334155',
                    fontWeight: '600'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal layer */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>

      {/* Footer */}
      <div className="ppt-slide-footer">
        <span>포트폴리오 | 유준열 (JunYeol Yu)</span>
        <span>SLIDE 03 OF 05</span>
      </div>
    </div>
  );
}
