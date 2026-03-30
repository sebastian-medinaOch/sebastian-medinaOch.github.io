import React, { useState } from "react";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Lightweight inline Markdown → React renderer
function MarkdownBody({ content }) {
  if (!content) return null;

  const lines = content.split("\n");
  const elements = [];
  let listBuffer = [];
  let listType = null; // 'ul' | 'ol'
  let key = 0;

  const flushList = () => {
    if (listBuffer.length === 0) return;
    const Tag = listType === "ol" ? "ol" : "ul";
    elements.push(
      <Tag
        key={key++}
        style={{
          margin: "10px 0 10px 20px",
          padding: 0,
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.8,
          fontSize: "0.875rem",
        }}
      >
        {listBuffer.map((item, i) => (
          <li key={i} style={{ marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
        ))}
      </Tag>
    );
    listBuffer = [];
    listType = null;
  };

  const parseInline = (text) =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code style='background:rgba(0,195,255,0.12);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.85em;'>$1</code>");

  lines.forEach((raw) => {
    const line = raw.trimEnd();

    // H2
    if (/^## (.+)/.test(line)) {
      flushList();
      elements.push(
        <h2
          key={key++}
          style={{ color: "#00c3ff", fontSize: "1.1rem", fontWeight: 700, margin: "22px 0 8px", letterSpacing: "0.5px" }}
          dangerouslySetInnerHTML={{ __html: parseInline(line.replace(/^## /, "")) }}
        />
      );
      return;
    }

    // H3
    if (/^### (.+)/.test(line)) {
      flushList();
      elements.push(
        <h3
          key={key++}
          style={{ color: "rgba(0,195,255,0.8)", fontSize: "0.95rem", fontWeight: 600, margin: "16px 0 6px" }}
          dangerouslySetInnerHTML={{ __html: parseInline(line.replace(/^### /, "")) }}
        />
      );
      return;
    }

    // Horizontal rule
    if (/^---+$/.test(line)) {
      flushList();
      elements.push(<hr key={key++} style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.1)", margin: "16px 0" }} />);
      return;
    }

    // Unordered list
    const ulMatch = line.match(/^[-*] (.+)/);
    if (ulMatch) {
      if (listType !== "ul") flushList();
      listType = "ul";
      listBuffer.push(ulMatch[1]);
      return;
    }

    // Numbered list
    const olMatch = line.match(/^\d+\.\s+(.+)/);
    if (olMatch) {
      if (listType !== "ol") flushList();
      listType = "ol";
      listBuffer.push(olMatch[1]);
      return;
    }

    // Blank line → flush list, add spacing
    if (line.trim() === "") {
      flushList();
      elements.push(<div key={key++} style={{ height: 12 }} />);
      return;
    }

    // Normal paragraph line
    flushList();
    elements.push(
      <p
        key={key++}
        style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", lineHeight: 1.85, margin: "0 0 2px" }}
        dangerouslySetInnerHTML={{ __html: parseInline(line) }}
      />
    );
  });

  flushList(); // flush any remaining list
  return <div style={{ marginTop: 8 }}>{elements}</div>;
}

const scanline = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 0.1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

const neonPulse = keyframes`
  0% { text-shadow: 0 0 5px rgba(0, 195, 255, 0.2), 0 0 10px rgba(0, 195, 255, 0.2); }
  50% { text-shadow: 0 0 10px rgba(0, 195, 255, 0.8), 0 0 20px rgba(0, 195, 255, 0.5), 0 0 30px rgba(0, 195, 255, 0.3); transform: scale(1.02); }
  100% { text-shadow: 0 0 5px rgba(0, 195, 255, 0.2), 0 0 10px rgba(0, 195, 255, 0.2); }
`;

const CyberCard = styled(VuiBox)`
  position: relative;
  background: rgba(0, 0, 0, 0.87);
  border: 1px solid rgba(0, 114, 255, 0.35);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 195, 255, 0.05);
  transition: all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;
  padding: 24px;
  margin-bottom: 32px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 195, 255, 0.04) 0%, transparent 60%);
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(0, 195, 255, 0.12), transparent);
    animation: ${scanline} 7s linear infinite;
    z-index: 0;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    background: rgba(0, 0, 0, 0.92);
    border-color: rgba(0, 195, 255, 0.85);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.7),
      0 0 25px rgba(0, 195, 255, 0.35),
      0 0 60px rgba(0, 114, 255, 0.15) inset;

    .cyber-title {
      animation: ${neonPulse} 2s ease-in-out infinite;
      color: #00f0ff;
    }
  }
`;

const CyberImage = styled("img")`
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  max-height: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
  filter: sepia(10%) hue-rotate(180deg) brightness(85%) contrast(120%);
  transition: all 0.3s ease;

  &:hover {
    filter: sepia(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
  }
`;

function Publication({ data }) {
  const { title, topic, date, description, body, mediaType, mediaData, socialLinks } = data;
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderMedia = () => {
    if (!mediaData || mediaData.length === 0) return null;

    if (mediaType === "image") {
      return <CyberImage src={mediaData[0]} alt={title} />;
    }

    if (mediaType === "carousel") {
      return (
        <VuiBox position="relative" mb={2}>
          <CyberImage src={mediaData[currentSlide]} alt={`${title} slide ${currentSlide}`} />
          {mediaData.length > 1 && (
            <VuiBox display="flex" justifyContent="center" gap={2} mt={1}>
              {mediaData.map((_, idx) => (
                <VuiBox
                  key={idx}
                  width="12px"
                  height="12px"
                  borderRadius="50%"
                  bgColor={currentSlide === idx ? "info" : "white"}
                  sx={{ cursor: "pointer", transition: "0.3s", opacity: currentSlide === idx ? 1 : 0.5 }}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </VuiBox>
          )}
        </VuiBox>
      );
    }

    if (mediaType === "video") {
      return (
        <VuiBox mb={2} sx={{ position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <video width="100%" controls style={{ display: "block" }}>
            <source src={mediaData[0]} type="video/mp4" />
            Su navegador no soporta video HTML5.
          </video>
        </VuiBox>
      );
    }

    return null;
  };

  return (
    <CyberCard>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <VuiTypography variant="caption" color="info" fontWeight="bold">
          {topic}
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          {date}
        </VuiTypography>
      </VuiBox>

      <VuiTypography
        variant="h4"
        color="white"
        fontWeight="bold"
        mb={1}
        className="cyber-title"
        sx={{
          position: "relative",
          display: "inline-block"
        }}
        data-text={title}
      >
        {title}
      </VuiTypography>

      <VuiTypography variant="body2" color="white" mb={2} sx={{ opacity: 0.8 }}>
        {description}
      </VuiTypography>

      {renderMedia()}

      <VuiBox mt={2} mb={3}>
        <MarkdownBody content={body} />
      </VuiBox>

    </CyberCard>
  );
}

export default Publication;
