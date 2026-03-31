import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import Publication from "./components/Publication";
import mockPosts from "./data/mockPosts";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { IoArrowBackCircle } from "react-icons/io5";

const GoBackButton = styled(VuiBox)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 10px 22px;
  background: rgba(255, 255, 255, 1);
  border: 1.5px solid rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(1, 181, 116, 0.35), transparent);
    transition: all 0.5s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 18px rgba(1, 181, 116, 0.45), 0 0 6px rgba(1, 181, 116, 0.2) inset;
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }
`;

function Blog() {
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    // Dynamic SEO
    document.title = "Blog - Sebastian Medina Ochoa";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explora la Bitácora de Sebastian Medina Ochoa. Publicaciones sobre inteligencia artificial, arquitectura de software, y ciberseguridad."
      );
    }

    // Particles.js — green matching developer page success color
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 900 } },
          color: { value: "#01B574" },
          shape: { type: "circle" },
          opacity: { value: 0.4, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#01B574", opacity: 0.15, width: 1 },
          move: { enable: true, speed: 1.5, direction: "none", random: true, out_mode: "out" },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 130, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    }

    // Scroll-reveal via IntersectionObserver
    const items = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));

    return () => {
      document.title = "Sebastian Medina Ochoa";
      observer.disconnect();
    };
  }, []);

  return (
    <DashboardLayout>
      <div
        id="particles-js"
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
      />

      {/* Scroll-reveal global styles */}
      <style>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(55px) scale(0.97);
          transition:
            opacity 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .scroll-reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>

      <VuiBox mt={4} mb={3} position="relative" zIndex={1}>
        <GoBackButton onClick={() => history.push("/developer")} mb={4}>
          <IoArrowBackCircle size="20px" color="#000000" />
          <VuiTypography variant="button" fontWeight="bold" sx={{ textTransform: "uppercase", letterSpacing: "1px", color: "#000000" }}>
            {t("blog.backToProfile", "Volver al Perfil Developer")}
          </VuiTypography>
        </GoBackButton>

        <VuiBox textAlign="center" mb={6} mt={2}>
          <VuiTypography
            variant="h1"
            color="white"
            fontWeight="bold"
            sx={{ textShadow: "none", letterSpacing: "2px" }}
          >
            {t("blog.title", "Bitácora")}
          </VuiTypography>
          <VuiTypography variant="body1" color="text" mt={1}>
            {t("blog.subtitle", "Publicaciones y novedades.")}
          </VuiTypography>
        </VuiBox>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8} xl={7}>
            {mockPosts.map((post, index) => (
              <div
                key={post.id}
                className="scroll-reveal"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <Publication data={{ ...post }} />
              </div>
            ))}
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Blog;
