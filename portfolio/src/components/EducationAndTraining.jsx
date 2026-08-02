import React, { useState } from "react";
import {
  BookOpen,
  GraduationCap,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";
import { resumeData } from "../data/resumeData";

export default function EducationAndTraining() {
  const { trainings, education } = resumeData;
  const [activeTab, setActiveTab] = useState("trainings");

  return (
    <section id="training" style={{ padding: "4rem 0", background: "#ffffff" }}>
      <div className="container">
        {/* Section Header */}
        <div
          className="section-header"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div className="section-subtitle">Education & Training</div>
            <h2 className="section-title">교육 · 연수 및 학력 사항</h2>
            <p className="section-desc">
              웹퍼블리싱, UI 개발 및 프론트엔드 역량을 위해 이수한 정규 교육
              과정 및 학력입니다.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              background: "#f1f5f9",
              padding: "0.25rem",
              borderRadius: "12px",
            }}
          >
            <button
              onClick={() => setActiveTab("trainings")}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: "700",
                border: "none",
                cursor: "pointer",
                background:
                  activeTab === "trainings" ? "#2563eb" : "transparent",
                color: activeTab === "trainings" ? "#ffffff" : "#64748b",
                transition: "all 0.2s ease",
              }}
            >
              전문 교육 및 연수 (3건)
            </button>
            <button
              onClick={() => setActiveTab("education")}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: "700",
                border: "none",
                cursor: "pointer",
                background:
                  activeTab === "education" ? "#2563eb" : "transparent",
                color: activeTab === "education" ? "#ffffff" : "#64748b",
                transition: "all 0.2s ease",
              }}
            >
              학력 사항 (2건)
            </button>
          </div>
        </div>

        {/* Tab Content 1: Training & Courses */}
        {activeTab === "trainings" && (
          <div
            className="animate-fade-in"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {trainings.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{ padding: "1.75rem", borderLeft: "4px solid #2563eb" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span className="badge badge-blue">{item.badge}</span>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "700",
                          color: "#2563eb",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <Clock size={14} /> {item.hours}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "800",
                        color: "#0f172a",
                        marginTop: "0.5rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: "#64748b",
                        marginTop: "0.25rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.375rem",
                      }}
                    >
                      <Building2 size={14} /> {item.organizer}
                    </div>
                  </div>

                  <span
                    className="badge badge-gray"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <Calendar size={13} /> {item.period}
                  </span>
                </div>

                {/* Course details list */}
                <div
                  style={{
                    marginTop: "1.25rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid #f1f5f9",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      color: "#334155",
                      marginBottom: "0.5rem",
                    }}
                  >
                    주요 교육 내용 및 성과:
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {item.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          fontSize: "0.9375rem",
                          color: "#475569",
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="#2563eb"
                          style={{ marginTop: "3px", flexShrink: 0 }}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: Education History */}
        {activeTab === "education" && (
          <div
            className="animate-fade-in"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {education.map((edu, idx) => (
              <div key={idx} className="card" style={{ padding: "1.75rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "12px",
                      background: "#eff6ff",
                      color: "#2563eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "800",
                        color: "#0f172a",
                      }}
                    >
                      {edu.institution}
                    </h3>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: "#2563eb",
                        fontWeight: "600",
                      }}
                    >
                      {edu.major} ({edu.status})
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid #f1f5f9",
                    fontSize: "0.875rem",
                    color: "#475569",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>재학 기간:</span>
                    <strong>{edu.period}</strong>
                  </div>
                  {edu.score !== "-" && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>성적 (학점):</span>
                      <strong style={{ color: "#1d4ed8" }}>{edu.score}</strong>
                    </div>
                  )}
                  {edu.type !== "-" && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>구분:</span>
                      <span>{edu.type}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
