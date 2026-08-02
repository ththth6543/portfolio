import React, { useState } from "react";
import { Image as ImageIcon, Code, Share2, Cpu } from "lucide-react";
import modelDiagramImg from "../../assets/newsight/04modelDiagram.png";

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
        minHeight: "220px",
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

export default function Slide_Newsight_04_DataPipeline() {
  return (
    <div className="ppt-slide ppt-slide-dark">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 09 / 15 [newsight #04]</span>
            <h1 className="ppt-slide-title">
              [Data/AI] 데이터 수집 파이프라인 & Neo4j 지식 그래프
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            Python 뉴스 크롤링, LLM 감성점수 태깅, Cypher Query 지식 그래프
            모델링
          </div>
        </div>

        {/* 2 Column Layout: Data Pipeline Details (Left) vs Neo4j Graph Model (Right) */}
        <div
          className="ppt-grid-2"
          style={{ gap: "1.25rem", alignItems: "stretch" }}
        >
          {/* Left Column: Python Scraper & Cypher Code Snippet */}
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
                <Cpu size={17} /> 1. Python 뉴스 수집기 & LLM 감성태깅
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
                  <strong style={{ color: "#ffffff" }}>5대 카테고리:</strong>{" "}
                  헤드라인, 비즈니스, 기술, 과학, 건강 실시간 뉴스 정기 수집
                </li>
                <li>
                  <strong style={{ color: "#ffffff" }}>
                    LLM을 이용한 감성 분석 및 태그 추출:
                  </strong>{" "}
                  기사 내용 기반 호재/악재 점수 (-1.0 ~ +1.0) 및 뉴스에서 태그를
                  추출
                </li>
                <li>
                  <strong style={{ color: "#ffffff" }}>
                    뉴스 데이터 저장:
                  </strong>{" "}
                  Supabase와 Neo4j에 저장
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
                <Share2 size={17} /> 2. Neo4j Graph DB 온톨로지 설계
              </div>
              <div
                style={{
                  background: "rgba(112, 102, 224, 0.15)",
                  padding: "0.45rem 0.75rem",
                  borderRadius: "6px",
                  fontSize: "0.78125rem",
                  color: "#a79ffd",
                  fontWeight: "700",
                  border: "1px solid #7066e0",
                }}
              >
                Node: (News), (Tag), (Stock)
                <br />
                Relation: HAS_TAG, SUBSIDIARY_OF, SUPPLIES_TO, PARTNER_WITH,
                COMPETE_WITH, RELATED_TO
              </div>
            </div>

            {/* Production Cypher Query Box in Dark Theme */}
            <div
              className="ppt-box"
              style={{
                background: "#16151b",
                borderColor: "#7066e0",
                borderLeft: "4px solid #7066e0",
                padding: "0.75rem 1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  color: "#a79ffd",
                  fontWeight: "800",
                  marginBottom: "0.3rem",
                  fontSize: "0.875rem",
                }}
              >
                <Code size={16} /> 프로덕션 Cypher Query 스니펫
              </div>
              <pre
                style={{
                  background: "#14131a",
                  padding: "0.5rem",
                  borderRadius: "6px",
                  fontSize: "0.75rem",
                  color: "#63d6f0",
                  overflowX: "auto",
                  border: "1px solid #2e2c38",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {`MATCH (n:News)-[r:HAS_TAG]->(t:Tag)-[:SUBSIDIARY_OF]->(s:Stock)
WHERE n.sentimentScore >= 0.5 AND n.createdAt >= datetime() - duration('P2D')
RETURN n, t, s ORDER BY n.sentimentScore DESC LIMIT 100`}
              </pre>
            </div>
          </div>

          {/* Right Column: Neo4j Graph Model Diagram Image */}
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <ImagePlaceholderBox
              id="newsight-graph-pipeline"
              imageSrc={modelDiagramImg}
              label="[Neo4j 지식 그래프 데이터 모델 다이어그램]"
              alt="newsight Neo4j 지식 그래프 데이터 모델 다이어그램 - News 기사 노드, Tag 핵심주제 노드, Stock 종목 노드의 관계 연결 및 Cypher 쿼리 추론 구조 시각화"
              aspectRatio="4/3"
              subText="(News) ➔ HAS_TAG ➔ (Tag) ➔ SUBSIDIARY_OF ➔ (Stock) Neo4j 그래프 모델 및 Cypher 파이프라인 다이어그램"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
