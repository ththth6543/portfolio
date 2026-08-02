import React, { useState } from "react";
import { Image as ImageIcon, Database, Zap, Server } from "lucide-react";
import newsightOverviewImg from "../../assets/newsight/01newsight-overview.png";

// Image Placeholder Component in Dark Theme (#14131a / #1e1d25)
const ImagePlaceholderBox = ({
  id,
  label,
  alt,
  aspectRatio = "16/9",
  subText,
  imageSrc,
}) => {
  const [imgError, setImgError] = useState(false);
  const src = imageSrc || `/images/projects/${id}.png`;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "280px",
        background: "#16151b",
        border: imgError ? "2px dashed #7066e0" : "1px solid #7066e0",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.25rem",
        textAlign: "center",
        transition: "all 0.2s ease",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
      }}
    >
      <img
        src={src}
        alt={alt}
        onError={() => setImgError(true)}
        style={{
          display: imgError ? "none" : "block",
          maxWidth: "100%",
          maxHeight: "100%",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          borderRadius: "8px",
        }}
      />

      {imgError && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
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
            <span
              style={{
                fontSize: "0.9375rem",
                fontWeight: "800",
                color: "#a79ffd",
              }}
            >
              {label}
            </span>
          </div>
          <p
            style={{
              fontSize: "0.84375rem",
              color: "#b3b1c2",
              maxWidth: "90%",
              lineHeight: 1.4,
              fontWeight: "500",
            }}
          >
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

export default function Slide_Newsight_01_Cover() {
  return (
    <div className="ppt-slide ppt-slide-dark">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 06 / 15 [newsight #01]</span>
            <h1 className="ppt-slide-title">
              프로젝트 개요 (Project Overview)
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            newsight: 실시간 AI 뉴스 수집 & 지식 그래프 기반 증시 분석 플랫폼
            개요
          </div>
        </div>

        {/* 2 Column Main Layout: Left Project Overview Specs vs Right System Showcase Graphic */}
        <div
          className="ppt-grid-2"
          style={{ gap: "1.25rem", alignItems: "stretch" }}
        >
          {/* Left Column: Project Overview & Core Value Proposition */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              justifyContent: "space-between",
            }}
          >
            {/* Overview Summary Box in Dark Theme */}
            <div
              className="ppt-box"
              style={{
                padding: "1.125rem 1.35rem",
                background: "linear-gradient(135deg, #1e1d25 0%, #16151b 100%)",
                borderLeft: "4px solid #7066e0",
                border: "1px solid #2e2c38",
                borderLeftWidth: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  className="ppt-badge"
                  style={{
                    background: "#7066e0",
                    color: "#ffffff",
                    border: "none",
                    fontSize: "0.8125rem",
                  }}
                >
                  팀 프로젝트 (3인)
                </span>
                <span
                  className="ppt-badge"
                  style={{
                    background: "rgba(112, 102, 224, 0.2)",
                    color: "#a79ffd",
                    border: "1px solid #7066e0",
                    fontSize: "0.8125rem",
                  }}
                >
                  2026.07 ~ 2026.07
                </span>
                <span
                  className="ppt-badge"
                  style={{
                    background: "#14131a",
                    color: "#b3b1c2",
                    border: "1px solid #2e2c38",
                    fontSize: "0.8125rem",
                  }}
                >
                  담당: 아키텍처, 비동기 AI, Neo4j, 일부 UI
                </span>
              </div>

              <h2
                style={{
                  fontSize: "1.375rem",
                  fontWeight: "800",
                  color: "#ffffff",
                  lineHeight: 1.35,
                }}
              >
                "뉴스 수집 ➔ Neo4j 지식 그래프 ➔ Ollama LLM 추론 ➔ 웹 대시보드"
              </h2>

              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#b3b1c2",
                  marginTop: "0.5rem",
                  lineHeight: 1.5,
                }}
              >
                매일 쏟아지는 뉴스 기사에서 기업 간 공급망 연관 관계와 호재/악재
                감성지수를 분석하고, CompletableFuture 4-Track 병렬 추론과 Redis
                캐싱으로 실시간 증시 인사이트를 제공하는 고도화된 AI 엔지니어링
                플랫폼.
              </p>

              {/* Tech Stack Badges */}
              <div
                style={{
                  display: "flex",
                  gap: "0.4rem",
                  marginTop: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  "Java 21",
                  "Spring Boot 3",
                  "React 19",
                  "Neo4j DB",
                  "Python AI",
                  "Redis",
                  "Ollama LLM",
                  "Docker & AWS",
                ].map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "6px",
                      background: "rgba(112, 102, 224, 0.15)",
                      color: "#a79ffd",
                      fontWeight: "700",
                      border: "1px solid #7066e0",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 4 Core Architectural Highlights */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.625rem",
              }}
            >
              <div
                className="ppt-box"
                style={{
                  padding: "0.75rem 1rem",
                  background: "#1e1d25",
                  borderColor: "#2e2c38",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: "#a79ffd",
                    fontWeight: "800",
                    fontSize: "0.875rem",
                  }}
                >
                  <Database size={16} /> Neo4j 지식 그래프 DB
                </div>
                <p
                  style={{
                    fontSize: "0.78125rem",
                    color: "#b3b1c2",
                    marginTop: "0.25rem",
                  }}
                >
                  (News)➔(Tag)➔(Stock) 온톨로지 지식 관계망
                </p>
              </div>

              <div
                className="ppt-box"
                style={{
                  padding: "0.75rem 1rem",
                  background: "#1e1d25",
                  borderColor: "#2e2c38",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: "#a79ffd",
                    fontWeight: "800",
                    fontSize: "0.875rem",
                  }}
                >
                  <Zap size={16} /> 4-Track 비동기 AI 추론
                </div>
                <p
                  style={{
                    fontSize: "0.78125rem",
                    color: "#b3b1c2",
                    marginTop: "0.25rem",
                  }}
                >
                  CompletableFuture 병렬화 & Redis 분산 캐싱
                </p>
              </div>

              <div
                className="ppt-box"
                style={{
                  padding: "0.75rem 1rem",
                  background: "#1e1d25",
                  borderColor: "#2e2c38",
                  gridColumn: "span 2",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: "#a79ffd",
                    fontWeight: "800",
                    fontSize: "0.875rem",
                  }}
                >
                  <Server size={16} /> Docker & AWS 클라우드 배포
                </div>
                <p
                  style={{
                    fontSize: "0.78125rem",
                    color: "#b3b1c2",
                    marginTop: "0.25rem",
                  }}
                >
                  Nginx Reverse Proxy & Certbot HTTPS 구축 및 Docker Compose
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Project Showcase Image */}
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <ImagePlaceholderBox
              id="newsight-overview-showcase"
              imageSrc={newsightOverviewImg}
              label="[newsight 대시보드 & 프로젝트 개요 스크린샷]"
              alt="newsight 메인 대시보드 및 AI 그래프 분석 대표 개요 스크린샷 - 실시간 증시 Ticker Tape, 4대 카테고리 뉴스 피드, Neo4j 연관 그래프 및 AI 위클리 브리핑 통합 개요 화면"
              aspectRatio="16/10"
              subText="실시간 증시 Ticker Tape, 4대 카테고리 뉴스 피드, Neo4j 연관 그래프 및 AI 브리핑 통합 개요 화면"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
