import React, { useState } from 'react';
import { Layers, ArrowRight, Sparkles, Filter, Code2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const { projectsOverview } = resumeData;
  const [selectedFilter, setSelectedFilter] = useState('전체');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['전체', '개인 프로젝트', '개인 미니 프로젝트', '팀 프로젝트', '기업 과제'];

  const filteredProjects = selectedFilter === '전체'
    ? projectsOverview
    : projectsOverview.filter(p => p.category.includes(selectedFilter));

  return (
    <section id="projects" style={{ padding: '4rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-subtitle">Projects Portfolio</div>
            <h2 className="section-title">수행 프로젝트 요약</h2>
            <p className="section-desc">React, Flutter, Python 등 다양한 기술 스택을 활용한 프로젝트 모음입니다.</p>
          </div>

          {/* Filter Chips */}
          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                style={{
                  padding: '0.375rem 0.875rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  border: selectedFilter === cat ? '1px solid #2563eb' : '1px solid #e2e8f0',
                  background: selectedFilter === cat ? '#2563eb' : '#ffffff',
                  color: selectedFilter === cat ? '#ffffff' : '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="animate-fade-in" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card card-interactive"
              onClick={() => setActiveModalProject(project)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                background: '#ffffff',
                border: '1px solid #e2e8f0'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge-blue">{project.category}</span>
                  <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: '500' }}>
                    {project.period}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>

                <p style={{
                  fontSize: '0.9375rem',
                  color: '#475569',
                  lineHeight: 1.5,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  marginBottom: '1.25rem'
                }}>
                  {project.desc}
                </p>
              </div>

              {/* Tech Stack Preview */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="badge badge-gray" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="badge badge-gray" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  color: '#2563eb',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '0.75rem'
                }}>
                  <span>상세 내용 보기</span>
                  <ArrowRight size={16} />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal display if active */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
