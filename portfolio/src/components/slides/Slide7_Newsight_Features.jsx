import React, { useState } from "react";
import { Image as ImageIcon, LayoutGrid, TrendingUp, Zap } from "lucide-react";

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "0.35rem 0.75rem",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 69, 176, 0.12)",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              border: "1px solid #B8D3FF",
            }}
          >
            <ImageIcon size={17} color="#0045B0" />
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
              fontSize: "0.75rem",
              color: "#1E65D6",
              maxWidth: "92%",
              lineHeight: 1.35,
              fontWeight: "500",
            }}
          >
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

export default function Slide7_Newsight_Features() {
  return (
    <div className="ppt-slide">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 07 / 08</span>
            <h1 className="ppt-slide-title">
              프로젝트 상세 #1-2: newsight (주요 기능 & UI)
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            실시간 뉴스 Ticker Tape · 카테고리별 헤드라인 · AI 주가 예측
            대시보드
          </div>
        </div>

        {/* 2 Column Layout: Feature Explanation (Left) vs UI Screen Image Placeholders (Right) */}
        <div
          className="ppt-grid-2"
          style={{ gap: "1.25rem", alignItems: "start" }}
        >
          {/* Left Column: UI Component Features */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            {/* Feature Box 1: Ticker Tape & Header */}
            <div className="ppt-box">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#0045B0",
                  fontWeight: "800",
                  marginBottom: "0.5rem",
                }}
              >
                <Zap size={18} />
                <span style={{ fontSize: "0.9375rem" }}>
                  실시간 증시 & 뉴스 Ticker Tape 바
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "#2d3748",
                  lineHeight: 1.5,
                }}
              >
                웹 화면 상단에 멈춤 없는 CSS Keyframe 무한 애니메이션 스크롤을
                적용하여 <strong>주요 증시 지수(KOSPI/NASDAQ)</strong> 및{" "}
                <strong>실시간 AI 추천 뉴스 헤드라인</strong>을 실시간 스트리밍
                제공.
              </p>
            </div>

            {/* Feature Box 2: Category AI News Grid */}
            <div className="ppt-box">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#0045B0",
                  fontWeight: "800",
                  marginBottom: "0.5rem",
                }}
              >
                <LayoutGrid size={18} />
                <span style={{ fontSize: "0.9375rem" }}>
                  4개 카테고리별 AI 뉴스 피드
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
                    padding: "0.4rem 0.6rem",
                    borderRadius: "6px",
                    border: "1px solid #B8D3FF",
                  }}
                >
                  <strong style={{ color: "#0045B0" }}>💻 Tech (기술):</strong>{" "}
                  AI, 반도체, IT
                </div>
                <div
                  style={{
                    background: "#EEF4FF",
                    padding: "0.4rem 0.6rem",
                    borderRadius: "6px",
                    border: "1px solid #B8D3FF",
                  }}
                >
                  <strong style={{ color: "#0045B0" }}>💰 Econ (경제):</strong>{" "}
                  거시경제, 금리, 공모주
                </div>
                <div
                  style={{
                    background: "#EEF4FF",
                    padding: "0.4rem 0.6rem",
                    borderRadius: "6px",
                    border: "1px solid #B8D3FF",
                  }}
                >
                  <strong style={{ color: "#0045B0" }}>
                    🔬 Science (과학):
                  </strong>{" "}
                  바이오, 우주항공
                </div>
                <div
                  style={{
                    background: "#EEF4FF",
                    padding: "0.4rem 0.6rem",
                    borderRadius: "6px",
                    border: "1px solid #B8D3FF",
                  }}
                >
                  <strong style={{ color: "#0045B0" }}>
                    🩺 Health (헬스):
                  </strong>{" "}
                  제약, 신약개발
                </div>
              </div>
            </div>

            {/* Feature Box 3: Stock Prediction Chart */}
            <div className="ppt-box">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#0045B0",
                  fontWeight: "800",
                  marginBottom: "0.5rem",
                }}
              >
                <TrendingUp size={18} />
                <span style={{ fontSize: "0.9375rem" }}>
                  AI 뉴스 감성분석 & 주가 예측 차트
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "#2d3748",
                  lineHeight: 1.5,
                }}
              >
                특정 기업 뉴스에 수집된{" "}
                <strong>호재(Positive) / 악재(Negative) AI 확률 점수</strong>를
                듀얼 축 선형 그래프(Recharts)로 매핑하여 뉴스와 주가 변동성 간의
                상관관계를 직관적 시각화.
              </p>
            </div>
          </div>

          {/* Right Column: 2 Image Placeholders for UI Screenshots */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            {/* Image Placeholder 1: Main Dashboard Screen */}
            <ImagePlaceholderBox
              id="newsight-dashboard"
              label="[UI 스크린샷 1] newsight 메인 대시보드 화면"
              alt="newsight 메인 대시보드 스크린샷 - 상단 무한 스크롤 Ticker Tape, 4개 카테고리별 AI 뉴스 헤드라인 카드, 실시간 주가 지수 차트가 배치된 반응형 퍼블리싱 UI"
              aspectRatio="16/9"
              subText="상단 Ticker Tape, 4대 카테고리 뉴스 피드, 실시간 증시 차트 통합 퍼블리싱 화면"
            />

            {/* Image Placeholder 2: AI Prediction Page Screen */}
            <ImagePlaceholderBox
              id="newsight-prediction"
              label="[UI 스크린샷 2] AI 주가 예측 & 감성분석 상세 화면"
              alt="newsight AI 주가 예측 상세 화면 스크린샷 - 긍정/부정 뉴스 감성지수 비율, 예측 주가 그래프, 키워드 연관성 클라우드 및 AI 인사이트 보고서"
              aspectRatio="16/9"
              subText="뉴스 감성분석 호재/악재 점수 비율, 주가 변동 추이 듀얼 축 차트, AI 예측 인사이트 리포트"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="ppt-slide-footer">
        <span>포트폴리오 | 유준열 (JunYeol Yu)</span>
        <span>SLIDE 07 OF 08</span>
      </div>
    </div>
  );
}
