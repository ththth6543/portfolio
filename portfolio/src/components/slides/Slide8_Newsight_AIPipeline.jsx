import React, { useState } from "react";
import { Image as ImageIcon, Bot, Bookmark, Wrench } from "lucide-react";

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
        padding: "0.875rem",
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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
          <div
            style={{
              background: "#ffffff",
              padding: "0.35rem 0.75rem",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 69, 176, 0.12)",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              border: "1px solid #B8D3FF"
            }}
          >
            <ImageIcon size={17} color="#0045B0" />
            <span style={{ fontSize: "0.8125rem", fontWeight: "800", color: "#0045B0" }}>{label}</span>
          </div>
          <p style={{ fontSize: "0.75rem", color: "#1E65D6", maxWidth: "92%", lineHeight: 1.35, fontWeight: "500" }}>
            {subText}
          </p>
          <span style={{ fontSize: "0.65rem", color: "#5B96F5" }}>
            (이미지 경로: /images/projects/{id}.png)
          </span>
        </div>
      )}
    </div>
  );
};

export default function Slide8_Newsight_AIPipeline() {
  return (
    <div className="ppt-slide">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 08 / 08</span>
            <h1 className="ppt-slide-title">
              프로젝트 상세 #1-3: newsight (AI 파이프라인 & 성과)
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            Python 기반 실시간 데이터 파이프라인 · 개인화 스크랩 · 성과 및 트러블 슈팅
          </div>
        </div>

        {/* 2 Column Layout: AI Pipeline & Troubleshooting (Left) vs 2 Image Placeholders (Right) */}
        <div className="ppt-grid-2" style={{ gap: "1.25rem", alignItems: "start" }}>
          
          {/* Left Column: AI Pipeline & Troubleshooting */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            
            {/* Box 1: Python AI Pipeline */}
            <div className="ppt-box">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#0045B0", fontWeight: "800", marginBottom: "0.5rem" }}>
                <Bot size={18} />
                <span style={{ fontSize: "0.9375rem" }}>Python AI 수집 파이프라인 연동</span>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem", fontSize: "0.8125rem", color: "#2d3748", paddingLeft: "1.2rem" }}>
                <li>
                  <strong style={{ color: "#0a192f" }}>자동화 크롤러 배치:</strong> 주요 언론사 금융/뉴스 RSS & API 데이터 주기적 정제 수집
                </li>
                <li>
                  <strong style={{ color: "#0a192f" }}>LLM 감성 태깅 파이프라인:</strong> 수집된 기사 텍스트를 AI 모델로 전달하여 긍정/부정 감성지수 및 주요 종목 태그 부여
                </li>
              </ul>
            </div>

            {/* Box 2: Personalized Features */}
            <div className="ppt-box">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#0045B0", fontWeight: "800", marginBottom: "0.5rem" }}>
                <Bookmark size={18} />
                <span style={{ fontSize: "0.9375rem" }}>개인화 뉴스 스크랩 & 관심 종목</span>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem", fontSize: "0.8125rem", color: "#2d3748", paddingLeft: "1.2rem" }}>
                <li>
                  <strong style={{ color: "#0a192f" }}>관심 종목 퀵 모니터링:</strong> 사용자가 등록한 관심 주식 종목의 최신 호재 뉴스 실시간 팝업 알림
                </li>
                <li>
                  <strong style={{ color: "#0a192f" }}>뉴스 인사이트 스크랩북:</strong> 분석 완료된 AI 뉴스 리포트를 개인 스크랩함에 보관 및 마이페이지 관리
                </li>
              </ul>
            </div>

            {/* Box 3: Performance Optimization & Troubleshooting */}
            <div className="ppt-box ppt-box-blue">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#0045B0", fontWeight: "800", marginBottom: "0.375rem" }}>
                <Wrench size={18} />
                <span style={{ fontSize: "0.9375rem" }}>성능 최적화 및 문제 해결 (Troubleshooting)</span>
              </div>
              <p style={{ fontSize: "0.78125rem", color: "#2d3748", lineHeight: 1.45 }}>
                <strong style={{ color: "#0045B0" }}>문제:</strong> 대용량 뉴스 리스트 렌더링 시 대시보드 프레임 드롭 발생<br />
                <strong style={{ color: "#0045B0" }}>해결:</strong> React DOM Virtualization 및 이미지 Lazy Loading을 적용하여 최초 렌더링 속도 <strong>65% 향상</strong> 달성.
              </p>
            </div>

          </div>

          {/* Right Column: 2 Image Placeholders for Personalization & Pipeline Flow */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            
            {/* Image Placeholder 1: Personalized Favorites Screen */}
            <ImagePlaceholderBox
              id="newsight-favorites"
              label="[UI 스크린샷 3] 관심 종목 모니터링 & 뉴스 스크랩 화면"
              alt="newsight 관심 종목 모니터링 및 스크랩 화면 - 사용자 맞춤 관심 종목 실시간 차트 카드, 북마크한 뉴스 리스트 및 요약 인사이트 UI"
              aspectRatio="16/9"
              subText="사용자 맞춤 관심 종목 실시간 위젯, 북마크 뉴스 스크랩 리스트 UI"
            />

            {/* Image Placeholder 2: AI Pipeline & Sentiment Scraping Flow */}
            <ImagePlaceholderBox
              id="newsight-pipeline"
              label="[파이프라인 흐름도] Python AI 뉴스 수집 & 태깅 흐름도"
              alt="newsight Python AI 뉴스 수집 파이프라인 구조도 - 실시간 뉴스 크롤링, LLM 감성 분석 태깅, REST API 수신 및 DB 저장 파이프라인 흐름도"
              aspectRatio="16/9"
              subText="뉴스 수집 크롤러 ➔ LLM 감성분석 태깅 ➔ Spring Boot API 수신 ➔ DB 저장 및 클라이언트 전송 구조"
            />

          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="ppt-slide-footer">
        <span>포트폴리오 | 유준열 (JunYeol Yu)</span>
        <span>SLIDE 08 OF 08</span>
      </div>
    </div>
  );
}
