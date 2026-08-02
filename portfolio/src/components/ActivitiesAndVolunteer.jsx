import React from 'react';
import { Heart, Globe, Users, Briefcase, CheckCircle2, Clock } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ActivitiesAndVolunteer() {
  const { activities } = resumeData;

  return (
    <section id="experience" style={{ padding: '4rem 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Experience & Social Contribution</div>
          <h2 className="section-title">경력사항 및 교내외/봉사활동</h2>
          <p className="section-desc">팀워크, 소통 역량 및 꾸준한 봉사 나눔의 기록입니다.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
          
          {/* Box 1: Workplace Experience */}
          <div className="card" style={{ padding: '1.75rem', borderLeft: '4px solid #2563eb' }}>
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
                <Briefcase size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>
                경력 사항 (직무 & 아르바이트)
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {activities.experience.map((exp, idx) => (
                <div key={idx} style={{ paddingBottom: idx < activities.experience.length - 1 ? '1rem' : 0, borderBottom: idx < activities.experience.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem' }}>
                    <div style={{ fontWeight: '700', fontSize: '1rem', color: '#0f172a' }}>
                      {exp.company}
                    </div>
                    <span className="badge badge-gray" style={{ fontSize: '0.75rem' }}>
                      {exp.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#2563eb', fontWeight: '600', marginTop: '0.125rem' }}>
                    {exp.role}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#475569', marginTop: '0.375rem', lineHeight: 1.5 }}>
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: Extracurricular & Social Groups */}
          <div className="card" style={{ padding: '1.75rem' }}>
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
                <Users size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>
                교내외 활동 및 동호회
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {activities.extracurricular.map((act, idx) => (
                <div key={idx} style={{ paddingBottom: idx < activities.extracurricular.length - 1 ? '1rem' : 0, borderBottom: idx < activities.extracurricular.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem' }}>
                    <div style={{ fontWeight: '700', fontSize: '1rem', color: '#0f172a' }}>
                      {act.name}
                    </div>
                    <span className="badge badge-gray" style={{ fontSize: '0.75rem' }}>
                      {act.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#2563eb', fontWeight: '600', marginTop: '0.125rem' }}>
                    {act.role}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#475569', marginTop: '0.375rem', lineHeight: 1.5 }}>
                    {act.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Box 3: Volunteer & Languages */}
          <div className="card" style={{ padding: '1.75rem' }}>
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
                <Heart size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>
                어학 성적 & 봉사활동
              </h3>
            </div>

            {/* Language Box */}
            <div style={{ padding: '1rem', background: '#eff6ff', borderRadius: '12px', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', color: '#1e3a8a' }}>
                <Globe size={16} color="#2563eb" /> 어학 사항
              </div>
              <div style={{ fontSize: '1.125rem', fontWeight: '800', color: '#2563eb', marginTop: '0.25rem' }}>
                {activities.language.name} {activities.language.score}
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#475569', marginTop: '0.125rem' }}>
                {activities.language.date}
              </div>
            </div>

            {/* Volunteer List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {activities.volunteer.map((vol, idx) => (
                <div key={idx} style={{ fontSize: '0.875rem', color: '#334155' }}>
                  <div style={{ fontWeight: '700', color: '#0f172a', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{vol.name}</span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{vol.period}</span>
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.8125rem', marginTop: '0.125rem' }}>
                    {vol.details}
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
