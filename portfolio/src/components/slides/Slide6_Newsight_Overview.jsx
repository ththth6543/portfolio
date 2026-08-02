import React, { useState } from "react";
import { Image as ImageIcon, Cpu, Server, Boxes } from "lucide-react";

// Image Placeholder Component with alt text and fallback UI
const ImagePlaceholderBox = ({ id, label, alt, aspectRatio = "16/9", subText }) => {
  const [imgError, setImgError] = useState(true);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: aspectRatio,
        background: "#EEF4FF",
        border: "2px dashed #B8D3FF",
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
          objectFit: "cover",
          position: "absolute",
          inset: 0,
        }}
      />

      {imgError && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <div
            style={{
              background: "#ffffff",
              padding: "0.4rem 0.8rem",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 69, 176, 0.12)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid #B8D3FF"
            }}
          >
            <ImageIcon size={18} color="#0045B0" />
            <span style={{ fontSize: "0.875rem", fontWeight: "800", color: "#0045B0" }}>{label}</span>
          </div>
          <p style={{ fontSize: "0.78125rem", color: "#1E65D6", maxWidth: "90%", lineHeight: 1.4, fontWeight: "500" }}>
            {subText}
          </p>
          <span style={{ fontSize: "0.6875rem", color: "#5B96F5" }}>
            (이미지 경로: /images/projects/{id}.png)
          </span>
        </div>
      )}
    </div>
  );
};

export default function Slide6_Newsight_Overview() {
  return (
    <div className="ppt-slide">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 06 / 08</span>
            <h1 className="ppt-slide-title">
              프로젝트 상세 #1-1: newsight (개요 & 아키텍처)
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            실시간 AI 뉴스 수집 파이프라인 & 멀티에이전트 기반 증시 변동성 예측 플랫폼
          </div>
        </div>

        {/* Top Overview Banner */}
        <div
          className="ppt-box ppt-box-blue"
          style={{
            padding: "1rem 1.25rem",
            marginBottom: "1.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="ppt-badge" style={{ background: "#0045B0", color: "#ffffff", border: "none" }}>
                팀 프로젝트 (3인)
              </span>
              <span className="ppt-badge">2026.07 ~ 2026.07</span>
              <span className="ppt-badge" style={{ background: "#ffffff", color: "#1E65D6" }}>
                역할: 프론트엔드 UI/UX 구축 & 백엔드/AI API 통합 연동
              </span>
            </div>
            <h2 style={{ fontSize: "1.125rem", fontWeight: "800", color: "#0a192f", marginTop: "0.375rem" }}>
              뉴스 데이터 감성분석과 증시 변동성 예측을 결합한 통합 금융 AI 플랫폼
            </h2>
          </div>

          <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
            {["React 19", "TypeScript", "Vite", "Spring Boot", "Python AI", "pnpm Monorepo", "Docker"].map((t, idx) => (
              <span key={idx} className="badge badge-blue">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 2 Column Layout: Technical Features vs Architecture Image Placeholder */}
        <div className="ppt-grid-2" style={{ gap: "1.25rem", alignItems: "start" }}>
          
          {/* Left Column: Monorepo & Core Architecture Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            
            {/* Box 1: Monorepo Structure */}
            <div className="ppt-box">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#0045B0", fontWeight: "800", marginBottom: "0.5rem" }}>
                <Boxes size={18} />
                <span style={{ fontSize: "0.9375rem" }}>pnpm Monorepo & Turborepo 구조</span>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem", fontSize: "0.8125rem", color: "#2d3748", paddingLeft: "1.2rem" }}>
                <li>
                  <strong style={{ color: "#0a192f" }}>`apps/web`:</strong> React 19, Vite, Tailwind CSS v4 기반 차세대 웹 대시보드
                </li>
                <li>
                  <strong style={{ color: "#0a192f" }}>`apps/api`:</strong> Java 21, Spring Boot 기반 RESTful API 및 데이터 처리
                </li>
                <li>
                  <strong style={{ color: "#0a192f" }}>`news_collect_pipeline`:</strong> Python AI 수집/태깅 엔진 파이프라인
                </li>
              </ul>
            </div>

            {/* Box 2: Key Infrastructure & Deployment */}
            <div className="ppt-box">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#0045B0", fontWeight: "800", marginBottom: "0.5rem" }}>
                <Server size={18} />
                <span style={{ fontSize: "0.9375rem" }}>인프라 & 컨테이너 배포 환경</span>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem", fontSize: "0.8125rem", color: "#2d3748", paddingLeft: "1.2rem" }}>
                <li>
                  <strong style={{ color: "#0a192f" }}>Docker & Docker Compose:</strong> 웹, API, AI 서버 및 Nginx 멀티 컨테이너 오케스트레이션
                </li>
                <li>
                  <strong style={{ color: "#0a192f" }}>Nginx Reverse Proxy:</strong> CORS 이슈 해결 및 로드 밸런싱/라우팅 최적화
                </li>
                <li>
                  <strong style={{ color: "#0a192f" }}>CI/CD Git Flow:</strong> Feature 브랜치 전략 기반 모노레포 개별 빌드 파이프라인
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Large System Architecture Diagram Placeholder */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <ImagePlaceholderBox
              id="newsight-architecture"
              label="[아키텍처 다이어그램] newsight 전체 시스템 데이터 흐름도"
              alt="newsight 시스템 아키텍처 다이어그램 - React 19 웹 클라이언트, Spring Boot API 서버, Python 뉴스 데이터 수집 파이프라인, pnpm Turborepo 모노레포 구조 및 Docker 배포 구성도"
              aspectRatio="4/3"
              subText="React 19 Frontend ↔ Spring Boot Backend API ↔ Python AI News Engine & Docker Container Flow Architecture"
            />
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="ppt-slide-footer">
        <span>포트폴리오 | 유준열 (JunYeol Yu)</span>
        <span>SLIDE 06 OF 08</span>
      </div>
    </div>
  );
}
