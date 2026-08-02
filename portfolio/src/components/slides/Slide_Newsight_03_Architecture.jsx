import React, { useState } from "react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import architectureImg from "../../assets/newsight/03architecture.jpg";

export default function Slide_Newsight_03_Architecture() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="ppt-slide ppt-slide-dark">
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <div
          className="ppt-slide-header"
          style={{ marginBottom: "0.6rem", paddingBottom: "0.5rem" }}
        >
          <div>
            <span className="ppt-slide-num">SLIDE 08 / 15 [newsight #03]</span>
            <h1 className="ppt-slide-title">전체 시스템 아키텍처</h1>
          </div>
          <div className="ppt-slide-subtitle">
            Frontend, Backend API, Graph DB & AI Inference, Infra 계층 전체
            구성도
          </div>
        </div>

        {/* Top Flow Pipeline Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "linear-gradient(90deg, #1e1d25 0%, #16151b 100%)",
            padding: "0.45rem 1rem",
            borderRadius: "8px",
            border: "1px solid #2e2c38",
            marginBottom: "0.6rem",
            fontSize: "0.84375rem",
            fontWeight: "700",
            color: "#a79ffd",
          }}
        >
          <span>1. Python Google News RSS Scraper</span>
          <ArrowRight size={15} />
          <span>2. Neo4j Graph & Entity Tagging</span>
          <ArrowRight size={15} />
          <span>3. Spring Boot CompletableFuture (4-Track)</span>
          <ArrowRight size={15} />
          <span>4. Redis Cache & React 19 UI</span>
        </div>

        {/* Full-bleed Widescreen Architecture Diagram Box */}
        <div
          style={{
            flex: 1,
            position: "relative",
            width: "100%",
            background: "#ffffff",
            border: imgError ? "2px dashed #7066e0" : "2px solid #7066e0",
            borderRadius: "12px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.25rem",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            minHeight: "340px",
          }}
        >
          <img
            src={architectureImg}
            alt="newsight 전체 시스템 아키텍처 다이어그램 (Presentation, Application, Data & AI, Infrastructure Layer)"
            onError={() => setImgError(true)}
            style={{
              display: imgError ? "none" : "block",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
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
                textAlign: "center",
                background: "#16151b",
                width: "100%",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <ImageIcon size={24} color="#a79ffd" />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "800",
                  color: "#a79ffd",
                }}
              >
                [03architecture.jpg 아키텍처 이미지]
              </span>
              <span style={{ fontSize: "0.75rem", color: "#b3b1c2" }}>
                경로: src/assets/newsight/03architecture.jpg
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
