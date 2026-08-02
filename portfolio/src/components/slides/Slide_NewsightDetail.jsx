import React, { useState } from "react";
import {
  Image as ImageIcon,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  GitBranch,
  ExternalLink,
  Zap,
  Globe,
  Database,
  BarChart3,
  Server,
  FolderGit2,
} from "lucide-react";

// Image Placeholder Component with alt text and fallback UI
const ImagePlaceholderBox = ({
  id,
  label,
  alt,
  aspectRatio = "16/9",
  subText,
}) => {
  const [imgError, setImgError] = useState(true);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: aspectRatio,
        background: "#EEF4FF",
        border: "2px dashed #B8D3FF",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.75rem",
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "0.35rem 0.65rem",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0, 69, 176, 0.12)",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              border: "1px solid #B8D3FF",
            }}
          >
            <ImageIcon size={16} color="#0045B0" />
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: "800",
                color: "#0045B0",
              }}
            >
              {label}
            </span>
          </div>
          <p
            style={{
              fontSize: "0.71875rem",
              color: "#1E65D6",
              maxWidth: "95%",
              lineHeight: 1.35,
              fontWeight: "500",
            }}
          >
            {subText}
          </p>
          <span
            style={{ fontSize: "0.625rem", color: "#5B96F5", marginTop: "1px" }}
          >
            (이미지 파일: /images/projects/{id}.png)
          </span>
        </div>
      )}
    </div>
  );
};

export default function Slide_NewsightDetail() {
  return (
    <div className="ppt-slide">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 04 / 06</span>
            <h1 className="ppt-slide-title">
              프로젝트 상세 #1: newsight (뉴스이트)
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            실시간 AI 뉴스 수집 파이프라인 & 증시 변동성 예측 대시보드 플랫폼
          </div>
        </div>

        {/* Top Info Banner */}
        <div
          className="ppt-box ppt-box-blue"
          style={{
            padding: "0.875rem 1.25rem",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span
                className="ppt-badge"
                style={{
                  background: "#0045B0",
                  color: "#ffffff",
                  border: "none",
                }}
              >
                팀 프로젝트 (3인)
              </span>
              <span className="ppt-badge">2026.07 ~ 2026.07</span>
              <span
                className="ppt-badge"
                style={{ background: "#ffffff", color: "#1E65D6" }}
              >
                역할: 프론트엔드 UI/UX 구축 및 AI API 연동
              </span>
            </div>
            <p
              style={{
                fontSize: "0.84375rem",
                color: "#0a192f",
                marginTop: "0.375rem",
                fontWeight: "600",
              }}
            >
              React 19 + TypeScript + Spring Boot + Python AI Pipeline 기반 금융
              뉴스 감성분석 및 예측 웹 서비스
            </p>
          </div>

          <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
            {[
              "React 19",
              "TypeScript",
              "Vite",
              "Spring Boot",
              "Python AI",
              "pnpm Monorepo",
              "Docker",
            ].map((tech, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: "0.6875rem",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "4px",
                  background: "#ffffff",
                  color: "#0045B0",
                  fontWeight: "700",
                  border: "1px solid #B8D3FF",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 2-Column Grid Layout: Features & Architecture (Left) vs Image Placeholders (Right) */}
        <div
          className="ppt-grid-2"
          style={{ gap: "1rem", alignItems: "start" }}
        >
          {/* Left Column: Core Technical Architecture & Achievements */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {/* Box 1: Core System Architecture */}
            <div className="ppt-box" style={{ padding: "0.875rem 1rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  color: "#0045B0",
                  fontWeight: "800",
                  marginBottom: "0.5rem",
                }}
              >
                <Cpu size={16} />
                <span style={{ fontSize: "0.875rem" }}>
                  핵심 기술 구현 및 아키텍처 (Key Architecture)
                </span>
              </div>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                  fontSize: "0.8125rem",
                  color: "#2d3748",
                  paddingLeft: "1.1rem",
                }}
              >
                <li>
                  <strong style={{ color: "#0a192f" }}>
                    pnpm Monorepo & Turborepo:
                  </strong>{" "}
                  프론트엔드(`apps/web`)와 백엔드 API(`apps/api`), 뉴스 수집
                  파이프라인 모듈 분리 및 효율적 의존성 관리
                </li>
                <li>
                  <strong style={{ color: "#0a192f" }}>
                    실시간 AI 뉴스 수집 & 태깅:
                  </strong>{" "}
                  기술, 경제, 과학, 헬스케어 카테고리별 실시간 뉴스 수집 및 AI
                  태깅 분류 자동화
                </li>
                <li>
                  <strong style={{ color: "#0a192f" }}>
                    AI 감성 분석 & 주가 예측 엔진:
                  </strong>{" "}
                  뉴스 텍스트 감성 점수(호재/악재) 산출 및 관련 주가 지수 변동성
                  예측 모델 연동
                </li>
                <li>
                  <strong style={{ color: "#0a192f" }}>
                    Docker & Nginx 리버스 프록시:
                  </strong>{" "}
                  컨테이너 기반 격리 환경 구축 및 프로덕션 배포 파이프라인 구현
                </li>
              </ul>
            </div>

            {/* Box 2: Key Features Highlight */}
            <div className="ppt-box" style={{ padding: "0.875rem 1rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  color: "#0045B0",
                  fontWeight: "800",
                  marginBottom: "0.5rem",
                }}
              >
                <Sparkles size={16} />
                <span style={{ fontSize: "0.875rem" }}>
                  주요 기능 및 화면 구현 (Major Features)
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                  fontSize: "0.78125rem",
                }}
              >
                <div
                  style={{
                    background: "#EEF4FF",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "1px solid #B8D3FF",
                  }}
                >
                  <strong style={{ color: "#0045B0" }}>
                    📊 실시간 Ticker Tape:
                  </strong>
                  <p style={{ color: "#2d3748", marginTop: "2px" }}>
                    상단 실시간 증시 지수 및 핫 뉴스 스트리밍 무한 스크롤 바
                  </p>
                </div>
                <div
                  style={{
                    background: "#EEF4FF",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "1px solid #B8D3FF",
                  }}
                >
                  <strong style={{ color: "#0045B0" }}>
                    📈 예측 차트 대시보드:
                  </strong>
                  <p style={{ color: "#2d3748", marginTop: "2px" }}>
                    Recharts 기반 감성지수-주가 추이 연동 시각화 그래프
                  </p>
                </div>
                <div
                  style={{
                    background: "#EEF4FF",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "1px solid #B8D3FF",
                  }}
                >
                  <strong style={{ color: "#0045B0" }}>
                    📌 관심 종목 스크랩:
                  </strong>
                  <p style={{ color: "#2d3748", marginTop: "2px" }}>
                    개인화된 관심 종목 모니터링 위젯 및 중요 뉴스 저장
                  </p>
                </div>
                <div
                  style={{
                    background: "#EEF4FF",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "1px solid #B8D3FF",
                  }}
                >
                  <strong style={{ color: "#0045B0" }}>
                    ⚡ 다크 테마 디자인:
                  </strong>
                  <p style={{ color: "#2d3748", marginTop: "2px" }}>
                    Tailwind CSS v4 다크 모드 시그니처 색상 커스텀 구축
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Placeholder Diagram (Image 3) */}
            <div>
              <ImagePlaceholderBox
                id="newsight-architecture"
                label="시스템 아키텍처 & 데이터 흐름도"
                alt="newsight 시스템 아키텍처 다이어그램 - React 19 웹 클라이언트, Spring Boot API 서버, Python 뉴스 데이터 수집 파이프라인, pnpm Turborepo 모노레포 구조 및 Docker 배포 구성도"
                aspectRatio="21/9"
                subText="Frontend(React 19) ↔ Backend API(Spring Boot) ↔ AI News Collector Engine & Docker Architecture Flowchart"
              />
            </div>
          </div>

          {/* Right Column: Image Placeholder Gallery Grid */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {/* Image Placeholder 1: Main Dashboard UI */}
            <ImagePlaceholderBox
              id="newsight-dashboard"
              label="[메인 대시보드] 실시간 뉴스 & 증시 인사이트 UI"
              alt="newsight 메인 대시보드 스크린샷 - 상단 무한 스크롤 Ticker Tape, 4개 카테고리별 AI 뉴스 헤드라인 카드, 실시간 주가 지수 차트가 배치된 반응형 퍼블리싱 UI"
              aspectRatio="16/9"
              subText="상단 Ticker Tape, 카테고리별 AI 뉴스 카드 grid, 실시간 주요 증시 지수 차트가 통합된 메인 대시보드 화면"
            />

            {/* Image Placeholder 2: AI Stock Prediction UI */}
            <ImagePlaceholderBox
              id="newsight-prediction"
              label="[AI 주가 예측] 감성 분석 & 예측 모델 상세 UI"
              alt="newsight AI 주가 예측 상세 화면 스크린샷 - 긍정/부정 뉴스 감성지수 비율, 예측 주가 그래프, 키워드 연관성 클라우드 및 AI 인사이트 보고서"
              aspectRatio="16/9"
              subText="뉴스 감성 점수(호재/악재 지수), 주가 변동성 예측 추이 그래프, 연관 키워드 분석 리포트 화면"
            />

            {/* Image Placeholder 4: Favorite Stock & Scrap UI */}
            <ImagePlaceholderBox
              id="newsight-favorites"
              label="[개인화 서비스] 관심 종목 위젯 & 뉴스 스크랩 UI"
              alt="newsight 관심 종목 모니터링 및 스크랩 화면 - 사용자 맞춤 관심 종목 실시간 차트 카드, 북마크한 뉴스 리스트 및 요약 인사이트 UI"
              aspectRatio="16/9"
              subText="관심 종목 퀵 모니터링 카드, 스크랩한 기사 요약 및 개인화 알림 설정 화면"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="ppt-slide-footer">
        <span>포트폴리오 | 유준열 (JunYeol Yu)</span>
        <span>SLIDE 04 OF 06</span>
      </div>
    </div>
  );
}
