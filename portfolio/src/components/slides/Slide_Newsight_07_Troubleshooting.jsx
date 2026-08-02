import React, { useState } from "react";
import {
  Image as ImageIcon,
  AlertTriangle,
  Target,
  Wrench,
  TrendingUp,
} from "lucide-react";

// Image Placeholder Component in Dark Theme (#14131a / #1e1d25)
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
        height: "100%",
        minHeight: "200px",
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

export default function Slide_Newsight_07_Troubleshooting() {
  return (
    <div className="ppt-slide ppt-slide-dark">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 12 / 15 [newsight #07]</span>
            <h1 className="ppt-slide-title">
              [Core Deep-Dive] 핵심 트러블슈팅 (STAR)
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            Cypher Full-scan 병목 해결 & Redis TTL 캐싱으로 Latency 98% 성능
            개선
          </div>
        </div>

        {/* 2 Column Layout: STAR Framework (Left) vs Performance Chart Placeholder (Right) */}
        <div
          className="ppt-grid-2"
          style={{ gap: "1.25rem", alignItems: "stretch" }}
        >
          {/* Left Column: Situation, Task, Action, Result */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              justifyContent: "space-between",
            }}
          >
            <div
              className="ppt-box"
              style={{
                padding: "0.6rem 0.95rem",
                background: "rgba(229, 62, 62, 0.15)",
                borderLeft: "4px solid #E53E3E",
                borderColor: "rgba(229, 62, 62, 0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  color: "#FC8181",
                  fontWeight: "800",
                  fontSize: "0.84375rem",
                }}
              >
                <AlertTriangle size={16} /> Situation (문제 상황)
              </div>
              <p
                style={{
                  fontSize: "0.78125rem",
                  color: "#b3b1c2",
                  marginTop: "0.2rem",
                }}
              >
                뉴스 기사 수 만 건 누적 시 Neo4j 지식 그래프 Cypher 풀스캔으로
                API 응답 시간 12초 이상 지연 발생
              </p>
            </div>

            <div
              className="ppt-box"
              style={{
                padding: "0.6rem 0.95rem",
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
                  fontSize: "0.84375rem",
                }}
              >
                <Target size={16} /> Task (개선 목표)
              </div>
              <p
                style={{
                  fontSize: "0.78125rem",
                  color: "#b3b1c2",
                  marginTop: "0.2rem",
                }}
              >
                사용자 응답 타임아웃 방지를 위해 API 응답 속도를 2.5초 이내로
                단축하고, 동일 요청 시 즉시 반환 구조 설계
              </p>
            </div>

            <div
              className="ppt-box"
              style={{
                padding: "0.6rem 0.95rem",
                background: "rgba(112, 102, 224, 0.15)",
                borderLeft: "4px solid #7066e0",
                borderColor: "#7066e0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  color: "#a79ffd",
                  fontWeight: "800",
                  fontSize: "0.84375rem",
                }}
              >
                <Wrench size={16} /> Action (해결 조치)
              </div>
              <p
                style={{
                  fontSize: "0.78125rem",
                  color: "#b3b1c2",
                  marginTop: "0.2rem",
                }}
              >
                1) Neo4j 노드{" "}
                <code style={{ color: "#63d6f0" }}>n.sentimentScore</code> &{" "}
                <code style={{ color: "#63d6f0" }}>n.createdAt</code> 복합
                인덱스 생성
                <br />
                2) CompletableFuture 4개 독립 트랙 병렬화 및 1시간 Redis TTL
                캐시 적용
              </p>
            </div>

            <div
              className="ppt-box"
              style={{
                padding: "0.6rem 0.95rem",
                background: "rgba(72, 187, 120, 0.15)",
                borderLeft: "4px solid #48BB78",
                borderColor: "rgba(72, 187, 120, 0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  color: "#68D391",
                  fontWeight: "800",
                  fontSize: "0.84375rem",
                }}
              >
                <TrendingUp size={16} /> Result (개선 성과)
              </div>
              <p
                style={{
                  fontSize: "0.78125rem",
                  color: "#b3b1c2",
                  marginTop: "0.2rem",
                }}
              >
                응답 속도{" "}
                <strong style={{ color: "#ffffff" }}>
                  12.4초 ➔ 2.5초 (79.8% 단축)
                </strong>
                , Redis Cache Hit 시{" "}
                <strong style={{ color: "#68D391" }}>
                  15ms (99.8% 최적화)
                </strong>{" "}
                달성
              </p>
            </div>
          </div>

          {/* Right Column: Performance Before & After Graph Placeholder */}
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <ImagePlaceholderBox
              id="newsight-troubleshooting-chart"
              label="[성능 개선 Before/After 비교 차트]"
              alt="newsight 트러블슈팅 성능 개선 막대그래프 차트 - 인덱스 적용 및 4-Track CompletableFuture 병렬화와 Redis 캐싱 전후 API 응답 속도 (12.4초 vs 2.5초 vs 15ms) 비교 그래프"
              aspectRatio="4/3"
              subText="Neo4j 복합 인덱스 & CompletableFuture 4-Track & Redis 캐시 전후 Latency 비교 차트"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
