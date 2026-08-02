import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  ChevronDown,
} from "lucide-react";
import Slide1_Profile from "./slides/Slide1_Profile";
import Slide2_Training from "./slides/Slide2_Training";
import Slide3_Projects from "./slides/Slide3_Projects";
import Slide4_Skills from "./slides/Slide4_Skills";
import Slide5_CertificationsAndExperience from "./slides/Slide5_CertificationsAndExperience";
import Slide_Newsight_01_Cover from "./slides/Slide_Newsight_01_Cover";
import Slide_Newsight_02_Background from "./slides/Slide_Newsight_02_Background";
import Slide_Newsight_03_Architecture from "./slides/Slide_Newsight_03_Architecture";
import Slide_Newsight_04_DataPipeline from "./slides/Slide_Newsight_04_DataPipeline";
import Slide_Newsight_05_AsyncEngine from "./slides/Slide_Newsight_05_AsyncEngine";
import Slide_Newsight_05_1_AsyncEngineDiagram from "./slides/Slide_Newsight_05_1_AsyncEngineDiagram";
import Slide_Newsight_06_Frontend from "./slides/Slide_Newsight_06_Frontend";
import Slide_Newsight_07_Troubleshooting from "./slides/Slide_Newsight_07_Troubleshooting";
import Slide_Newsight_08_DevOps from "./slides/Slide_Newsight_08_DevOps";
import Slide_Newsight_09_Quality from "./slides/Slide_Newsight_09_Quality";
import Slide_Newsight_10_Takeaways from "./slides/Slide_Newsight_10_Takeaways";

export default function PPTDeck() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [viewMode, setViewMode] = useState("slide"); // 'slide' or 'all'

  // Summary Slides (1-5)
  const summarySlides = [
    {
      id: 1,
      label: "01. 인적사항",
      title: "인적사항",
      component: <Slide1_Profile />,
    },
    {
      id: 2,
      label: "02. 교육 및 연수",
      title: "교육 및 연수사항",
      component: <Slide2_Training />,
    },
    {
      id: 3,
      label: "03. 프로젝트 요약",
      title: "프로젝트 수행 요약",
      component: <Slide3_Projects />,
    },
    {
      id: 4,
      label: "04. 사용 가능 기술",
      title: "사용 가능 기술",
      component: <Slide4_Skills />,
    },
    {
      id: 5,
      label: "05. 자격·수상 & 경력",
      title: "자격·수상 & 경력/활동",
      component: <Slide5_CertificationsAndExperience />,
    },
  ];

  // Newsight Project 10-Slide Deck (6-15)
  const newsightSlides = [
    {
      id: 6,
      step: "01",
      label: "개요",
      title: "[newsight #01] 프로젝트 개요",
      component: <Slide_Newsight_01_Cover />,
    },
    {
      id: 7,
      step: "02",
      label: "프로젝트 배경",
      title: "[newsight #02] 프로젝트 배경",
      component: <Slide_Newsight_02_Background />,
    },
    {
      id: 8,
      step: "03",
      label: "시스템 아키텍처",
      title: "[newsight #03] 시스템 아키텍처",
      component: <Slide_Newsight_03_Architecture />,
    },
    {
      id: 9,
      step: "04",
      label: "Data & Graph DB",
      title: "[newsight #04] Data & Graph DB",
      component: <Slide_Newsight_04_DataPipeline />,
    },
    {
      id: 10,
      step: "05",
      label: "Async AI Engine",
      title: "[newsight #05] Async AI Engine",
      component: <Slide_Newsight_05_AsyncEngine />,
    },
    {
      id: 11,
      step: "05-1",
      label: "AI 추론 시퀀스",
      title: "[newsight #05-1] AI 추론 시퀀스 다이어그램",
      component: <Slide_Newsight_05_1_AsyncEngineDiagram />,
    },
    {
      id: 12,
      step: "06",
      label: "React 19 Frontend",
      title: "[newsight #06] React 19 Frontend",
      component: <Slide_Newsight_06_Frontend />,
    },
    {
      id: 13,
      step: "07",
      label: "트러블슈팅 (STAR)",
      title: "[newsight #07] 트러블슈팅 (STAR)",
      component: <Slide_Newsight_07_Troubleshooting />,
    },
    {
      id: 14,
      step: "08",
      label: "DevOps & Infra",
      title: "[newsight #08] DevOps & Infra",
      component: <Slide_Newsight_08_DevOps />,
    },
    {
      id: 15,
      step: "09",
      label: "코드품질 & 협업",
      title: "[newsight #09] 코드품질 & 협업",
      component: <Slide_Newsight_09_Quality />,
    },
    {
      id: 16,
      step: "10",
      label: "성과 & Next Steps",
      title: "[newsight #10] 성과 & Next Steps",
      component: <Slide_Newsight_10_Takeaways />,
    },
  ];

  const allSlides = [...summarySlides, ...newsightSlides];
  const totalSlides = allSlides.length;

  const isNewsightActive = currentSlide >= 6;

  // Keyboard arrow listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode !== "slide") return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        setCurrentSlide((prev) => Math.max(prev - 1, 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode, totalSlides]);

  const handleSlideSelect = (id) => {
    setCurrentSlide(id);
    if (viewMode === "all") {
      const el = document.getElementById(`slide-card-${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="ppt-wrapper"
      style={{
        minHeight: "100vh",
        background: "#f0f4fa",
        paddingBottom: "3rem",
      }}
    >
      {/* Main Top Navigation Header */}
      <div
        className="ppt-controls-bar"
        style={{ boxShadow: "0 2px 10px rgba(0, 69, 176, 0.08)" }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          {/* Logo & Portfolio Title */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <div
              style={{ fontSize: "1rem", fontWeight: "800", color: "#0a192f" }}
            >
              유준열's 포트폴리오
            </div>
          </div>

          {/* 2 Main Group Category Tabs (Summary vs Project Deep-Dive) */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Category 1: Summary Slides 1-5 */}
            <button
              onClick={() => handleSlideSelect(1)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.45rem 0.875rem",
                borderRadius: "8px",
                border: !isNewsightActive
                  ? "2px solid #0045B0"
                  : "1px solid #B8D3FF",
                background: !isNewsightActive ? "#0045B0" : "#ffffff",
                color: !isNewsightActive ? "#ffffff" : "#0045B0",
                fontSize: "0.8125rem",
                fontWeight: "800",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <FileText size={15} />
              기본 이력서 (1~5)
            </button>

            {/* Category 2: newsight 10-Slide Deep Dive */}
            <button
              onClick={() => handleSlideSelect(6)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.45rem 0.875rem",
                borderRadius: "8px",
                border: isNewsightActive
                  ? "2px solid #7066E0"
                  : "1px solid #c4c0fc",
                background: isNewsightActive ? "#7066E0" : "#ffffff",
                color: isNewsightActive ? "#ffffff" : "#7066E0",
                fontSize: "0.8125rem",
                fontWeight: "800",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <Layers size={15} />
              newsight 프로젝트 상세 (6~15)
            </button>
          </div>

          {/* Right Navigation Controls & View Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {viewMode === "slide" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  background: "#EEF4FF",
                  padding: "0.25rem 0.375rem",
                  borderRadius: "8px",
                  border: "1px solid #B8D3FF",
                }}
              >
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentSlide === 1}
                  style={{
                    border: "none",
                    background: currentSlide === 1 ? "transparent" : "#ffffff",
                    color: currentSlide === 1 ? "#5B96F5" : "#0a192f",
                    padding: "0.35rem 0.5rem",
                    borderRadius: "6px",
                    cursor: currentSlide === 1 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "700",
                    fontSize: "0.78125rem",
                  }}
                >
                  <ChevronLeft size={15} /> 이전
                </button>

                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: "800",
                    color: "#0045B0",
                    padding: "0 0.375rem",
                  }}
                >
                  {currentSlide} / {totalSlides}
                </span>

                <button
                  onClick={() =>
                    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides))
                  }
                  disabled={currentSlide === totalSlides}
                  style={{
                    border: "none",
                    background:
                      currentSlide === totalSlides ? "transparent" : "#ffffff",
                    color: currentSlide === totalSlides ? "#5B96F5" : "#0a192f",
                    padding: "0.35rem 0.5rem",
                    borderRadius: "6px",
                    cursor:
                      currentSlide === totalSlides ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "700",
                    fontSize: "0.78125rem",
                  }}
                >
                  다음 <ChevronRight size={15} />
                </button>
              </div>
            )}

            {/* View Mode Toggle */}
            <button
              onClick={() =>
                setViewMode(viewMode === "slide" ? "all" : "slide")
              }
              style={{
                padding: "0.45rem 0.75rem",
                borderRadius: "8px",
                border: "1px solid #B8D3FF",
                background: "#ffffff",
                color: "#0045B0",
                fontSize: "0.78125rem",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
              }}
            >
              <LayoutGrid size={14} />{" "}
              {viewMode === "slide" ? "전체 펼쳐보기" : "슬라이드 모드"}
            </button>
          </div>
        </div>

        {/* Sub-Pills Bar (Displays Compact Slide Steps for Active Category) */}
        <div
          style={{
            background: "#ffffff",
            borderTop: "1px solid #EEF4FF",
            marginTop: "0.5rem",
            padding: "0.5rem 0 0.1rem 0",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              overflowX: "auto",
              paddingBottom: "0.125rem",
            }}
          >
            {!isNewsightActive
              ? /* Summary Sub-Pills (Slides 1-5) */
                summarySlides.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSlideSelect(s.id)}
                    style={{
                      border:
                        currentSlide === s.id
                          ? "1px solid #0045B0"
                          : "1px solid #E2E8F0",
                      background: currentSlide === s.id ? "#EEF4FF" : "#ffffff",
                      color: currentSlide === s.id ? "#0045B0" : "#4A5568",
                      fontWeight: currentSlide === s.id ? "800" : "600",
                      padding: "0.35rem 0.55rem",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {s.label}
                  </button>
                ))
              : /* Newsight 10-Slide Sub-Pills (Slides 6-15) */
                newsightSlides.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSlideSelect(s.id)}
                    style={{
                      border:
                        currentSlide === s.id
                          ? "1px solid #0045B0"
                          : "1px solid #E2E8F0",
                      background: currentSlide === s.id ? "#EEF4FF" : "#ffffff",
                      color: currentSlide === s.id ? "#0045B0" : "#4A5568",
                      fontWeight: currentSlide === s.id ? "800" : "600",
                      padding: "0.35rem 0.55rem",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "all 0.15s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <span
                      style={{
                        background:
                          currentSlide === s.id ? "#0045B0" : "#CBD5E0",
                        color: "#ffffff",
                        fontSize: "0.625rem",
                        fontWeight: "800",
                        padding: "0.1rem 0.35rem",
                        borderRadius: "10px",
                      }}
                    >
                      #{s.step}
                    </span>
                    <span>{s.label}</span>
                  </button>
                ))}
          </div>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div className="ppt-viewport" style={{ marginTop: "1.5rem" }}>
        {viewMode === "slide" ? (
          /* Presentation Mode: Shows Current Slide */
          <div>{allSlides.find((s) => s.id === currentSlide)?.component}</div>
        ) : (
          /* Scroll All Mode: Renders all slides in sequence */
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {allSlides.map((s) => (
              <div key={s.id} id={`slide-card-${s.id}`}>
                {s.component}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
