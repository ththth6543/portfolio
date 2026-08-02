import React, { useState } from "react";
import {
  Image as ImageIcon,
  Server,
  Lock,
  Cloud,
} from "lucide-react";

// Image Placeholder Component in Dark Theme (#14131a / #1e1d25)
const ImagePlaceholderBox = ({ id, label, alt, aspectRatio = "16/9", subText }) => {
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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
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
            <span style={{ fontSize: "0.9375rem", fontWeight: "800", color: "#a79ffd" }}>{label}</span>
          </div>
          <p style={{ fontSize: "0.84375rem", color: "#b3b1c2", maxWidth: "90%", lineHeight: 1.4, fontWeight: "500" }}>
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

export default function Slide_Newsight_08_DevOps() {
  return (
    <div className="ppt-slide ppt-slide-dark">
      <div>
        {/* Header */}
        <div className="ppt-slide-header">
          <div>
            <span className="ppt-slide-num">SLIDE 13 / 15 [newsight #08]</span>
            <h1 className="ppt-slide-title">
              [DevOps & Infra] Docker 컨테이너화 및 AWS 클라우드 배포
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            docker-compose.yml 멀티 컨테이너, Nginx Reverse Proxy, Certbot SSL & AWS EC2
          </div>
        </div>

        {/* 2 Column Layout: Docker Specs (Left) vs DevOps Topology Diagram (Right) */}
        <div className="ppt-grid-2" style={{ gap: "1.25rem", alignItems: "stretch" }}>
          
          {/* Left Column: Docker Compose & Nginx Configuration */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", justifyContent: "space-between" }}>
            
            <div className="ppt-box" style={{ padding: "0.85rem 1.1rem", background: "#1e1d25", borderColor: "#2e2c38" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#a79ffd", fontWeight: "800", marginBottom: "0.4rem", fontSize: "0.90625rem" }}>
                <Server size={17} /> 1. Docker Compose 멀티 컨테이너 오케스트레이션
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.8125rem", color: "#b3b1c2", paddingLeft: "1.1rem" }}>
                <li><strong style={{ color: "#ffffff" }}>서비스 분리:</strong> `web`, `api`, `neo4j`, `redis`, `nginx` 독립 컨테이너화</li>
                <li><strong style={{ color: "#ffffff" }}>네트워크 격리:</strong> Docker internal bridge network로 안전한 통신</li>
              </ul>
            </div>

            <div className="ppt-box" style={{ padding: "0.85rem 1.1rem", background: "#1e1d25", borderColor: "#2e2c38" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#a79ffd", fontWeight: "800", marginBottom: "0.4rem", fontSize: "0.90625rem" }}>
                <Lock size={17} /> 2. Nginx Reverse Proxy & Certbot SSL
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.8125rem", color: "#b3b1c2", paddingLeft: "1.1rem" }}>
                <li><strong style={{ color: "#ffffff" }}>보안 통신:</strong> Let's Encrypt Certbot 자동 인증서 발급으로 HTTPS 443 적용</li>
                <li><strong style={{ color: "#ffffff" }}>로드밸런싱 & CORS:</strong> Nginx 프록시 Pass 설정으로 보안 규정 준수</li>
              </ul>
            </div>

            <div className="ppt-box" style={{ padding: "0.85rem 1.1rem", background: "#1e1d25", borderColor: "#2e2c38" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#a79ffd", fontWeight: "800", marginBottom: "0.4rem", fontSize: "0.90625rem" }}>
                <Cloud size={17} /> 3. AWS EC2 인프라 & 로그 로테이션
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#b3b1c2", marginTop: "0.2rem" }}>
                AWS EC2 Ubuntu 인스턴스 구축, Docker volume 덤프 방지 `log-opt max-size: 10m` 적용
              </p>
            </div>

          </div>

          {/* Right Column: DevOps Topology Diagram Placeholder */}
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <ImagePlaceholderBox
              id="newsight-devops-topology"
              label="[AWS & Docker Compose 인프라 구성도]"
              alt="newsight AWS EC2 인프라 및 Docker Compose 컨테이너 구성도 - Internet Client ➔ Nginx (HTTPS Certbot SSL) ➔ React 19 / Spring Boot 3 / Neo4j / Redis 컨테이너 연동 구성도"
              aspectRatio="4/3"
              subText="AWS EC2 ➔ Nginx Proxy (SSL) ➔ React 19 / Spring Boot / Neo4j / Redis Docker 토폴로지"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
