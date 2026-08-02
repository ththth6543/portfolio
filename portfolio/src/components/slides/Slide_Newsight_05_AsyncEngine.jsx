import React from "react";
import { Zap, Code, Clock } from "lucide-react";

export default function Slide_Newsight_05_AsyncEngine() {
  return (
    <div className="ppt-slide ppt-slide-dark">
      <div>
        {/* Header */}
        <div
          className="ppt-slide-header"
          style={{ marginBottom: "0.55rem", paddingBottom: "0.4rem" }}
        >
          <div>
            <span className="ppt-slide-num">SLIDE 10 / 16 [newsight #05]</span>
            <h1 className="ppt-slide-title">
              [Backend] 비동기 멀티트랙 AI 추론 & 캐싱 엔진
            </h1>
          </div>
          <div className="ppt-slide-subtitle">
            4-Track CompletableFuture 병렬 처리 & Redis 분산 캐싱
          </div>
        </div>

        {/* Full-width Main Body Container (No Image Box) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.55rem",
          }}
        >
          {/* 1. 4-Track Parallel Grid Details */}
          <div
            className="ppt-box"
            style={{
              padding: "0.65rem 0.95rem",
              background: "#1e1d25",
              borderColor: "#2e2c38",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.4rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#a79ffd",
                  fontWeight: "800",
                  fontSize: "0.90625rem",
                }}
              >
                <Zap size={17} /> CompletableFuture 4-Track 독립 병렬 파이프라인
              </div>
              <span
                style={{
                  fontSize: "0.75rem",
                  background: "rgba(112, 102, 224, 0.2)",
                  color: "#a79ffd",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "4px",
                  fontWeight: "700",
                  border: "1px solid #7066e0",
                }}
              >
                Executors.newFixedThreadPool(4)
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "0.45rem",
                fontSize: "0.75rem",
              }}
            >
              <div
                style={{
                  background: "rgba(112, 102, 224, 0.15)",
                  padding: "0.45rem 0.6rem",
                  borderRadius: "6px",
                  border: "1px solid #7066e0",
                }}
              >
                <strong style={{ color: "#a79ffd" }}>
                  Track 1 (단기 호재)
                </strong>
                <br />
                최근 2일, 감성 &ge; 0.5 (LIMIT 300)
                <br />
                <span style={{ color: "#b3b1c2", fontSize: "0.71875rem" }}>
                  어제/오늘 단기 수급 상승 모멘텀
                </span>
              </div>

              <div
                style={{
                  background: "rgba(112, 102, 224, 0.15)",
                  padding: "0.45rem 0.6rem",
                  borderRadius: "6px",
                  border: "1px solid #7066e0",
                }}
              >
                <strong style={{ color: "#a79ffd" }}>
                  Track 2 (공급망 호재)
                </strong>
                <br />
                최근 7일, 감성 &ge; 0.4 (LIMIT 500)
                <br />
                <span style={{ color: "#b3b1c2", fontSize: "0.71875rem" }}>
                  글로벌 공급망 계약 & 점유율
                </span>
              </div>

              <div
                style={{
                  background: "rgba(112, 102, 224, 0.15)",
                  padding: "0.45rem 0.6rem",
                  borderRadius: "6px",
                  border: "1px solid #7066e0",
                }}
              >
                <strong style={{ color: "#a79ffd" }}>
                  Track 3 (단기 악재)
                </strong>
                <br />
                최근 2일, 감성 &le; -0.5 (LIMIT 300)
                <br />
                <span style={{ color: "#b3b1c2", fontSize: "0.71875rem" }}>
                  급락 위험 & 실적 리스크
                </span>
              </div>

              <div
                style={{
                  background: "rgba(112, 102, 224, 0.15)",
                  padding: "0.45rem 0.6rem",
                  borderRadius: "6px",
                  border: "1px solid #7066e0",
                }}
              >
                <strong style={{ color: "#a79ffd" }}>
                  Track 4 (장기 악재 전이)
                </strong>
                <br />
                최근 7일, 감성 &le; -0.4 (LIMIT 500)
                <br />
                <span style={{ color: "#b3b1c2", fontSize: "0.71875rem" }}>
                  경쟁사 추월 & 공급망 파장
                </span>
              </div>
            </div>
          </div>

          {/* 2. Production Code Evidence Box */}
          <div
            className="ppt-box"
            style={{
              background: "#16151b",
              borderColor: "#7066e0",
              borderLeft: "4px solid #7066e0",
              padding: "0.6rem 0.95rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#a79ffd",
                fontWeight: "800",
                marginBottom: "0.3rem",
                fontSize: "0.875rem",
              }}
            >
              <Code size={16} /> NewsInferenceServiceImpl.java 핵심 병렬 처리
              코드
            </div>
            <pre
              style={{
                background: "#14131a",
                padding: "0.55rem 0.75rem",
                borderRadius: "6px",
                fontSize: "0.75rem",
                color: "#63d6f0",
                overflowX: "auto",
                border: "1px solid #2e2c38",
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              {`// 1. Redis 캐시 확인 (Hit 시 수 ms 내 즉시 반환)
String cached = redisTemplate.opsForValue().get("weekly_stock_briefing");
if (cached != null) return cached;

// 2. CompletableFuture 4-Track 독립 병렬 연산 실행 (Executors.newFixedThreadPool)
CompletableFuture<List<Map>> f1 = processTrackAsync(1, "단기호재", query1, prompt1);
CompletableFuture<List<Map>> f2 = processTrackAsync(2, "공급망호재", query2, prompt2);
CompletableFuture<List<Map>> f3 = processTrackAsync(3, "단기악재", query3, prompt3);
CompletableFuture<List<Map>> f4 = processTrackAsync(4, "장기악재", query4, prompt4);

// 3. 4개 트랙 합산 및 Redis 1시간 TTL 캐싱 (12.4s ➔ 2.5s 75% 절감)
CompletableFuture.allOf(f1, f2, f3, f4).join();
redisTemplate.opsForValue().set("weekly_stock_briefing", resultJson, Duration.ofHours(1));`}
            </pre>
          </div>

          {/* 3. Performance Impact Summary */}
          <div
            className="ppt-box"
            style={{
              padding: "0.55rem 0.85rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#1e1d25",
              borderColor: "#2e2c38",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#a79ffd",
                fontWeight: "800",
                fontSize: "0.84375rem",
              }}
            >
              <Clock size={16} /> 성능 개선 지표: 4개 직렬 연산 대비 처리 시간
              75% 절감 (12s ➔ 2.5s) / Redis 히트 시 15ms 반환
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
