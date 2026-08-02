import React, { useState } from "react";
import {
  Image as ImageIcon,
  Layout,
  FolderTree
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

export default function Slide_Newsight_06_Frontend() {
  return (
    <div className="ppt-slide ppt-slide-dark">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 11 / 15 [newsight #06]</span>
            <h1 className="ppt-slide-title">
              [Frontend] React 19 Feature-based 아키텍처 & UI
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            Clean Code 모듈화 (features/*), 실시간 Ticker Tape 및 인터랙티브 지식 그래프 UI
          </div>
        </div>

        {/* 2 Column Layout: Folder Structure & Features (Left) vs Frontend UI Screenshot (Right) */}
        <div className="ppt-grid-2" style={{ gap: "1.25rem", alignItems: "stretch" }}>
          
          {/* Left Column: Feature-based Folder & Tech Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", justifyContent: "space-between" }}>
            
            <div className="ppt-box" style={{ padding: "0.85rem 1.1rem", background: "#1e1d25", borderColor: "#2e2c38" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#a79ffd", fontWeight: "800", marginBottom: "0.4rem", fontSize: "0.90625rem" }}>
                <FolderTree size={17} /> 1. Feature-based (`features/*`) 폴더 구조
              </div>
              <pre style={{ background: "#14131a", padding: "0.5rem", borderRadius: "6px", fontSize: "0.75rem", color: "#63d6f0", overflowX: "auto", border: "1px solid #2e2c38", lineHeight: 1.35, margin: 0, fontWeight: "700" }}>
{`src/
├── features/
│   ├── news/          # 4대 카테고리 뉴스 피드 & Ticker
│   ├── graph/         # Neo4j 연관 그래프 시각화
│   └── inference/     # AI 위클리 브리핑 리포트 Card
└── components/        # 공통 UI Component`}
              </pre>
            </div>

            <div className="ppt-box" style={{ padding: "0.85rem 1.1rem", background: "#1e1d25", borderColor: "#2e2c38" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#a79ffd", fontWeight: "800", marginBottom: "0.4rem", fontSize: "0.90625rem" }}>
                <Layout size={17} /> 2. 프론트엔드 반응형 대시보드 스펙
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.8125rem", color: "#b3b1c2", paddingLeft: "1.1rem" }}>
                <li><strong style={{ color: "#ffffff" }}>React 19 & TypeScript:</strong> 최신 React Compiler & Strict Type 적용</li>
                <li><strong style={{ color: "#ffffff" }}>실시간 Ticker Tape:</strong> 증시 변동성 및 뉴스 감성점수 실시간 롤링</li>
                <li><strong style={{ color: "#ffffff" }}>반응형 레이아웃:</strong> CSS Vanilla Grid & Flexbox 모바일/데스크톱 대응</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Frontend UI Showcase Placeholder */}
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <ImagePlaceholderBox
              id="newsight-frontend-ui"
              label="[React 19 반응형 대시보드 UI 스크린샷]"
              alt="newsight React 19 웹 대시보드 화면 - 실시간 Ticker Tape, 4대 카테고리 뉴스 카드 피드, Neo4j 인터랙티브 노드 연결 그래프 및 AI 브리핑 카드 UI"
              aspectRatio="4/3"
              subText="실시간 증시 Ticker Tape, 4대 뉴스 피드, Neo4j 지식 그래프 및 AI 브리핑 반응형 UI 스크린샷"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
