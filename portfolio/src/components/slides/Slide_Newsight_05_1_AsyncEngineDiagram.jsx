import React, { useState } from "react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import inferenceDiagramImg from "../../assets/newsight/05InferenceDiagram.jpg";

export default function Slide_Newsight_05_1_AsyncEngineDiagram() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="ppt-slide ppt-slide-dark">
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <div
          className="ppt-slide-header"
          style={{ marginBottom: "0.5rem", paddingBottom: "0.4rem" }}
        >
          <div>
            <span className="ppt-slide-num">
              SLIDE 11 / 16 [newsight #05-1]
            </span>
            <h1 className="ppt-slide-title">
              비동기 AI 추론 시퀀스 다이어그램
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            Spring Boot 4-Track CompletableFuture, Ollama LLM Gemma 4 & Redis
            1시간 TTL 캐싱 시퀀스 구성도
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
            marginBottom: "0.5rem",
            fontSize: "0.8125rem",
            fontWeight: "700",
            color: "#a79ffd",
          }}
        >
          <span>1. Spring Boot API Request</span>
          <ArrowRight size={15} />
          <span>2. Redis Cache Miss</span>
          <ArrowRight size={15} />
          <span>3. CompletableFuture 4-Track Async</span>
          <ArrowRight size={15} />
          <span>4. Ollama LLM Gemma 4</span>
          <ArrowRight size={15} />
          <span>5. Redis 1시간 TTL Caching</span>
        </div>

        {/* Full-bleed Widescreen Diagram Box */}
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
            minHeight: "330px",
          }}
        >
          <img
            src={inferenceDiagramImg}
            alt="newsight 비동기 4-Track AI 추론 시퀀스 다이어그램 (05InferenceDiagram.jpg)"
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
                [05InferenceDiagram.jpg 시퀀스 다이어그램]
              </span>
              <span style={{ fontSize: "0.78125rem", color: "#b3b1c2" }}>
                Spring Boot API ➔ Redis ➔ CompletableFuture 4-Track ➔ Ollama LLM
                ➔ Redis 1h TTL Caching
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
