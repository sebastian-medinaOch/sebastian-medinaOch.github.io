// @mui material components
import Rating from "@mui/material/Rating";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Images
import Java from "examples/Icons/Java";
import SpringBoot from "examples/Icons/SpringBoot";
import AWS from "examples/Icons/AWS";
import Docker from "examples/Icons/Docker";
import Kubernetes from "examples/Icons/Kubernetes";
import Microservicios from "examples/Icons/Microservicios";
import Hexagonal from "examples/Icons/Hexagonal";
import JavaScript from "examples/Icons/JavaScript";
import Git from "examples/Icons/Git";
import APIs from "examples/Icons/APIs";
import SQS from "examples/Icons/SQS";
import SNS from "examples/Icons/SNS";
import RabbitMQ from "examples/Icons/RabbitMQ";
import AzureCloud from "examples/Icons/AzureCloud";
import WebFlux from "examples/Icons/WebFlux";
import SonarQube from "examples/Icons/SonarQube";
import CopilotIA from "examples/Icons/CopilotIA";
import MongoDB from "examples/Icons/MongoDB";
import PostgreSQL from "examples/Icons/PostgreSQL";
import Elastic from "examples/Icons/Elastic";
import Dynatrace from "examples/Icons/Dynatrace";
import Lambdas from "examples/Icons/Lambdas";
import NodeJS from "examples/Icons/NodeJS";
import Gradle from "examples/Icons/Gradle";
import Maven from "examples/Icons/Maven";
import React from "examples/Icons/React";
import SpringFramework from "examples/Icons/SpringFramework";
import Hibernate from "examples/Icons/Hibernate";
import JUnit from "examples/Icons/JUnit";
import Swagger from "examples/Icons/Swagger";
import TechIcon from "examples/Icons/TechIcon";
import Pipeline from "examples/Icons/Pipeline";
import SqlIcon from "examples/Icons/SqlIcon";
import NoSQL from "examples/Icons/NoSQL";

export default function data() {
  // Función para convertir porcentaje a estrellas (0-5)
  const getStarsFromPercentage = (percentage) => {
    return (percentage / 100) * 5;
  };

  // Función para obtener el texto del nivel de habilidad
  const getSkillLevelText = (stars) => {
    if (stars >= 4.5) return "Experto";
    if (stars >= 3.5) return "Avanzado";
    if (stars >= 2.5) return "Intermedio";
    if (stars >= 1.5) return "Básico";
    return "Principiante";
  };

  return {
    columns: [
      { name: "tecnologias", align: "left" },
      { name: "años", align: "center" },
      { name: "nivel", align: "center" },
    ],

    rows: [
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Java size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Java
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            5 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(100)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(100))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <SpringBoot size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Spring Boot
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(100)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(100))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <AWS size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              AWS
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Docker size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Docker
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Kubernetes size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Kubernetes
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Pipeline size="20px" color="#F7931E" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              CI/CD
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <SqlIcon size="20px" color="#336791" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              SQL
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <NoSQL size="20px" color="#4DB33D" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              NoSQL
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Microservicios size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Microservicios
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            5 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(100)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(100))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Hexagonal size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Arquitectura Hexagonal
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            5 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(100)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(100))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <JavaScript size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              JavaScript
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            2 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(40)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(40))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Git size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Git
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <APIs size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              APIs
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(100)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(100))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <SQS size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              SQS
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <SNS size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              SNS
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <RabbitMQ size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              RabbitMQ
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <AzureCloud size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Azure Cloud
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(70)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(70))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <WebFlux size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              WebFlux
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(70)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(70))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <SonarQube size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              SonarQube
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(100)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(100))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#E74C3C" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              FluidAttacks
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(70)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(70))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#9B59B6" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Checkmarx
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#FF9900" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Amazon Q IA
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            2 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(85)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(85))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <CopilotIA size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Copilot IA
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            2 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(85)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(85))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <MongoDB size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              MongoDB
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <PostgreSQL size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              PostgreSQL
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Elastic size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Elastic
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Dynatrace size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Dynatrace
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(70)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(70))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <AzureCloud size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Key Vault Azure
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Lambdas size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Lambdas
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(70)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(70))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <NodeJS size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              NodeJS
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(60)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(60))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Gradle size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Gradle
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(85)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(85))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Maven size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Maven
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(85)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(85))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <React size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              React
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            1 año
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(40)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(40))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <SpringFramework size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Spring Framework
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(100)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(100))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Hibernate size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Hibernate
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(75)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(75))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Mockito
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(100)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(100))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <JUnit size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              JUnit
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(100)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(100))}
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Swagger size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              OpenAPI Swagger
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox display="flex" alignItems="center" gap={1}>
            <Rating
              value={getStarsFromPercentage(80)}
              readOnly
              precision={0.5}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#238680",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#444",
                },
              }}
            />
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {getSkillLevelText(getStarsFromPercentage(80))}
            </VuiTypography>
          </VuiBox>
        ),
      }
    ],
  };
}