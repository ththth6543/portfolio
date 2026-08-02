import React, { useState } from "react";
import { Image as ImageIcon, Award, BookOpen, Rocket } from "lucide-react";

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

export default function Slide_Newsight_10_Takeaways() {
  return (
    <div className="ppt-slide ppt-slide-dark">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 15 / 15 [newsight #10]</span>
            <h1 className="ppt-slide-title">
              프로젝트 성과, 배운 점 & 향후 발전 방향
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            성능 최적화 성과 종합, 엔지니어로서의 성장 및 Next Roadmap
          </div>
        </div>

        {/* 2 Column Layout: Achievements & Lessons (Left) vs Project Conclusion Showcase (Right) */}
        <div
          className="ppt-grid-2"
          style={{ gap: "1.25rem", alignItems: "stretch" }}
        >
          {/* Left Column: Achievements, Lessons, Next Steps */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
              justifyContent: "space-between",
            }}
          >
            <div
              className="ppt-box"
              style={{
                padding: "0.85rem 1.1rem",
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
                  marginBottom: "0.4rem",
                  fontSize: "0.90625rem",
                }}
              >
                <Award size={17} /> 1. 핵심 엔지니어링 성과 (Achievements)
              </div>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                  fontSize: "0.8125rem",
                  color: "#b3b1c2",
                  paddingLeft: "1.1rem",
                }}
              >
                <li>
                  <strong style={{ color: "#ffffff" }}>
                    98% Latency 단축:
                  </strong>{" "}
                  4-Track CompletableFuture 병렬화 & Redis 캐시
                </li>
                <li>
                  <strong style={{ color: "#ffffff" }}>
                    풀스택 파이프라인 완성:
                  </strong>{" "}
                  Python 수집 ➔ Neo4j Graph ➔ Ollama LLM ➔ React 19
                </li>
              </ul>
            </div>

            <div
              className="ppt-box"
              style={{
                padding: "0.85rem 1.1rem",
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
                  marginBottom: "0.4rem",
                  fontSize: "0.90625rem",
                }}
              >
                <BookOpen size={17} /> 2. 배운 점 & 역량 성장 (Lessons Learned)
              </div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "#b3b1c2",
                  marginTop: "0.2rem",
                }}
              >
                비동기 동시성 처리의 이점과 캐시 무효화(Cache Invalidation)
                전략의 중요성 습득, Graph DB Cypher 쿼리 튜닝 경험 체득
              </p>
            </div>

            <div
              className="ppt-box"
              style={{
                padding: "0.85rem 1.1rem",
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
                  marginBottom: "0.4rem",
                  fontSize: "0.90625rem",
                }}
              >
                <Rocket size={17} /> 3. 향후 발전 방향 (Next Steps Roadmap)
              </div>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                  fontSize: "0.8125rem",
                  color: "#b3b1c2",
                  paddingLeft: "1.1rem",
                }}
              >
                <li>
                  <strong style={{ color: "#ffffff" }}>
                    Apache Kafka 도입:
                  </strong>{" "}
                  실시간 뉴스 스트리밍 파이프라인 이벤트 기반(EDA) 전환
                </li>
                <li>
                  <strong style={{ color: "#ffffff" }}>
                    금융 도메인 Fine-tuning:
                  </strong>{" "}
                  Llama 3 / Gemma 모델 파이낸스 특화 파인튜닝
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Final Conclusion Showcase Placeholder */}
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <ImagePlaceholderBox
              id="newsight-conclusion"
              label="[newsight 대표 최종 성과 인포그래픽]"
              alt="newsight 프로젝트 최종 성과 및 미래 로드맵 시각화 - 4-Track AI 추론 엔진, Neo4j 지식 그래프, React 19 웹 플랫폼 성과 지표 및 Apache Kafka 연동 로드맵 인포그래픽"
              aspectRatio="4/3"
              subText="newsight 4-Track AI 추론, Neo4j 지식 그래프, React 19 웹 플랫폼 성과 지표 및 Apache Kafka 로드맵 시각화"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
