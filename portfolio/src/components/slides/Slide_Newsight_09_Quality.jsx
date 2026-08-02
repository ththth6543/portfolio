import React, { useState } from "react";
import {
  Image as ImageIcon,
  GitBranch,
  Boxes,
  FileCode,
} from "lucide-react";

// Image Placeholder Component in Dark Theme (#14131a / #1e1d25)
const ImagePlaceholderBox = ({ id, label, alt, aspectRatio = "16/9", subText }) => {
  const [imgError, setImgError] = useState(true);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "220px",
        aspectRatio: aspectRatio,
        background: "#1e1d25",
        border: "2px dashed #7066e0",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        textAlign: "center",
        transition: "all 0.2s ease",
      }}
    >
      <img
        src={`/images/projects/${id}.png`}
        alt={alt}
        onError={() => setImgError(true)}
        style={{
          display: imgError ? "none" : "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          position: "absolute",
          inset: 0,
        }}
      />

      {imgError && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <div
            style={{
              background: "#14131a",
              padding: "0.4rem 0.8rem",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid #7066e0",
            }}
          >
            <ImageIcon size={18} color="#a79ffd" />
            <span style={{ fontSize: "0.9375rem", fontWeight: "800", color: "#a79ffd" }}>{label}</span>
          </div>
          <p style={{ fontSize: "0.84375rem", color: "#b3b1c2", maxWidth: "90%", lineHeight: 1.4, fontWeight: "500" }}>
            {subText}
          </p>
          <span style={{ fontSize: "0.75rem", color: "#7066e0" }}>
            (이미지 경로: /images/projects/{id}.png)
          </span>
        </div>
      )}
    </div>
  );
};

export default function Slide_Newsight_09_Quality() {
  return (
    <div className="ppt-slide ppt-slide-dark">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 14 / 15 [newsight #09]</span>
            <h1 className="ppt-slide-title">
              [Engineering Quality] 코드 품질 & 팀 협업 프로세스
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            Git Flow 브랜치 전략, Turborepo 모노레포 빌드 캐싱, Swagger API 명세 관리
          </div>
        </div>

        {/* 2 Column Layout: Quality Specs (Left) vs Quality Showcase Placeholder (Right) */}
        <div className="ppt-grid-2" style={{ gap: "1.25rem", alignItems: "stretch" }}>
          
          {/* Left Column: Git Flow & Turborepo Monorepo */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", justifyContent: "space-between" }}>
            
            <div className="ppt-box" style={{ padding: "0.85rem 1.1rem", background: "#1e1d25", borderColor: "#2e2c38" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#a79ffd", fontWeight: "800", marginBottom: "0.4rem", fontSize: "0.90625rem" }}>
                <GitBranch size={17} /> 1. Git Branch Flow & PR 코드 리뷰
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.8125rem", color: "#b3b1c2", paddingLeft: "1.1rem" }}>
                <li><strong style={{ color: "#ffffff" }}>브랜치 전략:</strong> `main` ➔ `develop` ➔ `feature/issue-#` 체계적 분리</li>
                <li><strong style={{ color: "#ffffff" }}>코드 리뷰:</strong> 2인 이상 승인(Approve) 후 Merge 규칙 준수로 안정성 확보</li>
              </ul>
            </div>

            <div className="ppt-box" style={{ padding: "0.85rem 1.1rem", background: "#1e1d25", borderColor: "#2e2c38" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#a79ffd", fontWeight: "800", marginBottom: "0.4rem", fontSize: "0.90625rem" }}>
                <Boxes size={17} /> 2. pnpm Turborepo 빌드 Caching
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#b3b1c2", marginTop: "0.2rem" }}>
                모노레포 빌드 타임 의존성 그래프 분석 및 Incremental Build 적용으로 CI/CD <strong style={{ color: "#ffffff" }}>빌드 시간 60% 단축</strong>
              </p>
            </div>

            <div className="ppt-box" style={{ padding: "0.85rem 1.1rem", background: "#1e1d25", borderColor: "#2e2c38" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#a79ffd", fontWeight: "800", marginBottom: "0.4rem", fontSize: "0.90625rem" }}>
                <FileCode size={17} /> 3. OpenAPI 3.0 & Swagger UI API 명세
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#b3b1c2", marginTop: "0.2rem" }}>
                Springdoc OpenAPI 자동 명세화로 프론트엔드-백엔드 간 타입 일치 및 통신 커뮤니케이션 비용 최소화
              </p>
            </div>

          </div>

          {/* Right Column: Quality Showcase Diagram Placeholder */}
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <ImagePlaceholderBox
              id="newsight-engineering-quality"
              label="[Git Branch Flow & Turborepo 빌드 캐시 다이어그램]"
              alt="newsight 코드 품질 및 협업 인포그래픽 - Git feature 브리핑 병합 전략, Turborepo 모노레포 캐싱 구조 및 Swagger API 인터페이스 명세 화면"
              aspectRatio="4/3"
              subText="Git feature 브랜치 전략, Turborepo 모노레포 캐싱 구조 및 Swagger API 명세서 스크린샷"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
