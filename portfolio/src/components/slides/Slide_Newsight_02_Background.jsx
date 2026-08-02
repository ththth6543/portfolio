import React, { useState } from "react";
import {
  Image as ImageIcon,
  HelpCircle,
  TrendingUp,
  Building2,
} from "lucide-react";
import connectedNodeImg from "../../assets/newsight/02connectedNode.png";
import connectedNodeImg2 from "../../assets/newsight/02connectedNode2.png";

// Reusable Image Card Slot with White Background & Unclipped Bottom Label
const MiniImageCard = ({ id, label, imageSrc, fallbackSrc }) => {
  const [imgError, setImgError] = useState(false);
  const src = imageSrc || fallbackSrc || `/images/projects/${id}.png`;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "200px",
        background: "#ffffff",
        border: "1.5px solid #7066e0",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      }}
    >
      <img
        src={src}
        alt={label}
        onError={() => setImgError(true)}
        style={{
          display: imgError ? "none" : "block",
          width: "100%",
          height: "calc(100% - 22px)",
          padding: "4px 4px 0 4px",
          boxSizing: "border-box",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      {imgError && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.35rem",
            padding: "0.5rem",
            paddingBottom: "1.5rem",
            textAlign: "center",
            background: "#16151b",
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <ImageIcon size={18} color="#a79ffd" />
          <span
            style={{
              fontSize: "0.78125rem",
              fontWeight: "700",
              color: "#a79ffd",
            }}
          >
            {label}
          </span>
          <span style={{ fontSize: "0.6875rem", color: "#b3b1c2" }}>
            (이미지 첨부 대기중)
          </span>
        </div>
      )}

      {/* Bottom Label Overlay Tag */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "22px",
          lineHeight: "22px",
          background: "rgba(20, 19, 26, 0.9)",
          color: "#a79ffd",
          fontSize: "0.71875rem",
          fontWeight: "700",
          textAlign: "center",
          borderTop: "1px solid rgba(112, 102, 224, 0.4)",
          backdropFilter: "blur(4px)",
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default function Slide_Newsight_02_Background() {
  return (
    <div className="ppt-slide ppt-slide-dark">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 07 / 15 [newsight #02]</span>
            <h1 className="ppt-slide-title">프로젝트 배경 (Background)</h1>
          </div>
          <div className="ppt-slide-subtitle">
            파편화된 뉴스 데이터 연결을 통한 기업 온톨로지 관계 구축 & 연쇄
            호재/악재 도출
          </div>
        </div>

        {/* Hero Motivation Quote Banner */}
        <div
          className="ppt-box"
          style={{
            padding: "0.45rem 0.85rem",
            marginBottom: "0.45rem",
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
              gap: "0.35rem",
              color: "#a79ffd",
              fontWeight: "800",
              marginBottom: "0.15rem",
            }}
          >
            <HelpCircle size={15} />
            <span style={{ fontSize: "0.875rem" }}>
              프로젝트의 출발점: "뉴스를 연결하여 의미 있는 온톨로지 데이터를
              만들 수 없을까?"
            </span>
          </div>
          <p
            style={{
              fontSize: "0.75rem",
              color: "#b3b1c2",
              lineHeight: 1.35,
            }}
          >
            매일 쏟아지는 뉴스 기사에서 기업 간 맥락을 연결하여{" "}
            <strong style={{ color: "#ffffff" }}>
              기업 온톨로지(Ontology) 지식 데이터
            </strong>
            를 구축하고, 연관 회사에 미치는{" "}
            <strong style={{ color: "#ffffff" }}>
              연쇄 호재/악재 파급 효과를 자동 도출
            </strong>
            하기 위해 시작되었습니다.
          </p>
        </div>

        {/* 2 Column Layout: Compact Left Descriptions (0.75fr) vs Expanded Right 2 Horizontal Images (2fr) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.75fr 2fr",
            gap: "0.75rem",
            alignItems: "stretch",
          }}
        >
          {/* Left Column: Relationship Types & Sentiment Deduction */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
              justifyContent: "space-between",
            }}
          >
            {/* Box 1: 5 Core Company Relationship Types (Vertical Stack) */}
            <div
              className="ppt-box"
              style={{
                padding: "0.45rem 0.65rem",
                background: "#1e1d25",
                borderColor: "#2e2c38",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  color: "#a79ffd",
                  fontWeight: "800",
                  marginBottom: "0.3rem",
                  fontSize: "0.78125rem",
                }}
              >
                <Building2 size={14} /> 1. 기업 간 5대 온톨로지 연관 관계
              </div>

              {/* Vertical Stack of 5 Core Relationships */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.2rem",
                  fontSize: "0.71875rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(112, 102, 224, 0.15)",
                    padding: "0.2rem 0.45rem",
                    borderRadius: "4px",
                    border: "1px solid #7066e0",
                  }}
                >
                  <strong style={{ color: "#a79ffd" }}>자회사:</strong> 지분 &
                  실적 연결
                </div>
                <div
                  style={{
                    background: "rgba(112, 102, 224, 0.15)",
                    padding: "0.2rem 0.45rem",
                    borderRadius: "4px",
                    border: "1px solid #7066e0",
                  }}
                >
                  <strong style={{ color: "#a79ffd" }}>공급사:</strong>{" "}
                  부품/소재 공급망
                </div>
                <div
                  style={{
                    background: "rgba(112, 102, 224, 0.15)",
                    padding: "0.2rem 0.45rem",
                    borderRadius: "4px",
                    border: "1px solid #7066e0",
                  }}
                >
                  <strong style={{ color: "#a79ffd" }}>협력사:</strong> 공동
                  개발 & 제휴
                </div>
                <div
                  style={{
                    background: "rgba(112, 102, 224, 0.15)",
                    padding: "0.2rem 0.45rem",
                    borderRadius: "4px",
                    border: "1px solid #7066e0",
                  }}
                >
                  <strong style={{ color: "#a79ffd" }}>경쟁사:</strong> 시장
                  점유율 경쟁
                </div>
                <div
                  style={{
                    background: "rgba(112, 102, 224, 0.15)",
                    padding: "0.2rem 0.45rem",
                    borderRadius: "4px",
                    border: "1px solid #7066e0",
                  }}
                >
                  <strong style={{ color: "#a79ffd" }}>기타 연관:</strong>{" "}
                  기술/생태계
                </div>
              </div>
            </div>

            {/* Box 2: Ripple-Effect Sentiment Deduction */}
            <div
              className="ppt-box"
              style={{
                padding: "0.45rem 0.65rem",
                background: "#1e1d25",
                borderColor: "#2e2c38",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  color: "#a79ffd",
                  fontWeight: "800",
                  marginBottom: "0.25rem",
                  fontSize: "0.78125rem",
                }}
              >
                <TrendingUp size={14} /> 2. 파급 호재/악재 도출 방식
              </div>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.15rem",
                  fontSize: "0.6875rem",
                  color: "#b3b1c2",
                  paddingLeft: "0.85rem",
                }}
              >
                <li>
                  <strong style={{ color: "#ffffff" }}>A사 호재 시:</strong>{" "}
                  공급사 B사{" "}
                  <strong style={{ color: "#e8556c" }}>동반 호재</strong>
                </li>
                <li>
                  <strong style={{ color: "#ffffff" }}>A사 악재 시:</strong>{" "}
                  경쟁사 C사{" "}
                  <strong style={{ color: "#4fa7e0" }}>반사이익</strong>, 자회사
                  D사 <strong style={{ color: "#e8556c" }}>동반 악재</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Expanded 2 Images Side-by-Side Horizontally */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.65rem",
              height: "100%",
              alignItems: "stretch",
            }}
          >
            <MiniImageCard
              id="newsight-bg-img1"
              label="1. 기업 온톨로지 연관 노드 (SUBSIDIARY_OF)"
              imageSrc={connectedNodeImg}
            />
            <MiniImageCard
              id="newsight-bg-img2"
              label="2. 기업 온톨로지 연관 노드 (SUPPLIES_TO)"
              imageSrc={connectedNodeImg2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
