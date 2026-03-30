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
  padding: 8px 16px;
  background: rgba(0, 114, 255, 0.1);
  border: 1px solid rgba(0, 114, 255, 0.3);
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 114, 255, 0.2);
    box-shadow: 0 0 15px rgba(0, 114, 255, 0.5);
    transform: translateX(-4px);
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

    // Particles.js
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: "#00c3ff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#00c3ff", opacity: 0.2, width: 1 },
          move: { enable: true, speed: 2, direction: "none", random: true, out_mode: "out" },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.8 } },
            push: { particles_nb: 3 },
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
          <IoArrowBackCircle size="24px" color="#0072ff" />
          <VuiTypography variant="button" color="white" fontWeight="medium">
            {t("blog.backToProfile", "Volver al Perfil Developer")}
          </VuiTypography>
        </GoBackButton>

        <VuiBox textAlign="center" mb={6} mt={2}>
          <VuiTypography
            variant="h1"
            color="white"
            fontWeight="bold"
            sx={{ textShadow: "0 0 10px rgba(0, 195, 255, 0.5)" }}
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
