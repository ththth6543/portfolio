import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  GraduationCap,
  Award,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { resumeData } from "../../data/resumeData";
import resumePhoto from "../../assets/resumePhoto.png";

export default function Slide1_Profile() {
  const { personalInfo, stats, education } = resumeData;

  const getAge = (birthStr) => {
    const matches = birthStr?.match(/\d+/g);
    if (!matches || matches.length < 3) return "";
    const [year, month, day] = matches.map(Number);
    const today = new Date();
    let age = today.getFullYear() - year;
    const m = today.getMonth() + 1 - month;
    if (m < 0 || (m === 0 && today.getDate() < day)) {
      age--;
    }
    return age;
  };

  return (
    <div className="ppt-slide">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 01 / 05</span>
            <h1 className="ppt-slide-title">지원이력서 및 인적사항</h1>
          </div>
          <div className="ppt-slide-subtitle">
            기본 인적사항 · 학력사항 · 핵심 프로필
          </div>
        </div>

        {/* Slide Body Content */}
        <div className="ppt-grid-2" style={{ alignItems: "start" }}>
          {/* Left Column: Personal Info Card */}
          <div className="ppt-box ppt-box-blue">
            <div
              style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid #2563eb",
                  boxShadow: "0 8px 16px rgba(37, 99, 235, 0.15)",
                  background: "#eff6ff",
                  flexShrink: 0,
                }}
              >
                <img
                  src={resumePhoto}
                  alt={personalInfo.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#dbeafe;color:#1d4ed8;font-size:2.5rem;font-weight:800;">유</div>`;
                  }}
                />
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "0.375rem",
                  }}
                ></div>
                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "800",
                    color: "#0f172a",
                  }}
                >
                  {personalInfo.name}{" "}
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "#64748b",
                      fontWeight: "500",
                    }}
                  >
                    ({personalInfo.nameEn} / {personalInfo.nameHanja})
                  </span>
                </h2>
              </div>
            </div>

            {/* Info Table */}
            <div
              style={{
                marginTop: "1.25rem",
                paddingTop: "1rem",
                borderTop: "1px solid #dbeafe",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.625rem 1rem",
                fontSize: "0.875rem",
              }}
            >
              <div>
                <strong style={{ color: "#1e3a8a" }}>생년월일 (연령):</strong>{" "}
                {personalInfo.birth} (만 {getAge(personalInfo.birth)}세)
              </div>
              <div>
                <strong style={{ color: "#1e3a8a" }}>이메일:</strong>{" "}
                {personalInfo.email}
              </div>
              <div>
                <strong style={{ color: "#1e3a8a" }}>핸드폰:</strong>{" "}
                {personalInfo.phone}
              </div>
              <div>
                <strong style={{ color: "#1e3a8a" }}>병역사항:</strong>{" "}
                {personalInfo.military}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Stat Callouts */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Education Box */}
            <div className="ppt-box">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#2563eb",
                  fontWeight: "800",
                  marginBottom: "0.75rem",
                }}
              >
                <GraduationCap size={20} />
                <span>학력 사항 (Education)</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.875rem",
                      borderBottom: idx === 0 ? "1px dashed #e2e8f0" : "none",
                      paddingBottom: idx === 0 ? "0.5rem" : 0,
                    }}
                  >
                    <div>
                      <strong
                        style={{ fontSize: "0.9375rem", color: "#0f172a" }}
                      >
                        {edu.institution}
                      </strong>{" "}
                      ({edu.major})
                      <span
                        style={{
                          color: "#2563eb",
                          marginLeft: "0.5rem",
                          fontWeight: "600",
                        }}
                      >
                        [{edu.status}]
                      </span>
                    </div>
                    <div style={{ textAlign: "right", color: "#64748b" }}>
                      {edu.period}{" "}
                      {edu.score !== "-" && (
                        <span
                          style={{
                            fontWeight: "700",
                            color: "#1d4ed8",
                            marginLeft: "4px",
                          }}
                        >
                          ({edu.score})
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Highlights Stats Grid */}
            <div className="ppt-grid-2" style={{ gap: "0.75rem" }}>
              {stats.map((st, idx) => (
                <div
                  key={idx}
                  className="ppt-box"
                  style={{ background: "#f8fafc", padding: "0.875rem 1rem" }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      color: "#64748b",
                    }}
                  >
                    {st.label}
                  </div>
                  <div
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "800",
                      color: "#1e40af",
                      marginTop: "0.125rem",
                    }}
                  >
                    {st.value}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#475569" }}>
                    {st.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="ppt-slide-footer">
        <span>포트폴리오 | 유준열 (JunYeol Yu)</span>
        <span>SLIDE 01 OF 05</span>
      </div>
    </div>
  );
}
