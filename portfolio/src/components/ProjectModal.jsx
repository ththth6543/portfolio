import React from 'react';
import { X, ExternalLink, Code, Layers, Calendar, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>
              {project.category}
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', lineHeight: 1.2 }}>
              {project.title}
            </h2>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} /> 수행 기간: {project.period}
            </div>
          </div>
          
          <button 
            onClick={onClose}
            style={{
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '50%',
              width: '2.25rem',
              height: '2.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#64748b'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Description */}
        <div style={{ padding: '1rem', background: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #2563eb', marginBottom: '1.5rem' }}>
          <p style={{ color: '#1e3a8a', fontSize: '1rem', lineHeight: 1.6, fontWeight: '500' }}>
            {project.desc}
          </p>
        </div>

        {/* Tech Stack List */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={18} color="#2563eb" /> 사용 기술 스택 (Tech Stack)
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="badge badge-gray" style={{ fontSize: '0.875rem', padding: '0.375rem 0.75rem', fontWeight: '600' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Close Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
          <button className="btn btn-primary" onClick={onClose}>
            확인 및 닫기
          </button>
        </div>

      </div>
    </div>
  );
}
