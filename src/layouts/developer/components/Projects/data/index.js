// @mui material components

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
import TechIcon from "examples/Icons/TechIcon";
import Pipeline from "examples/Icons/Pipeline";
import SqlIcon from "examples/Icons/SqlIcon";
import NoSQL from "examples/Icons/NoSQL";

export default function data() {

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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              90%
            </VuiTypography>
            <VuiProgress value={90} color="info" label={false} sx={{ background: "#2D2E5F" }} />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#FF6B6B" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              90%
            </VuiTypography>
            <VuiProgress value={90} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#4ECDC4" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              90%
            </VuiTypography>
            <VuiProgress value={90} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#F7DF1E" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              40%
            </VuiTypography>
            <VuiProgress value={40} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#F05032" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#61DAFB" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              90%
            </VuiTypography>
            <VuiProgress value={90} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#FF9900" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#FF9900" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#FF6600" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#0078D4" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#6DB33F" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#CB3837" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              90%
            </VuiTypography>
            <VuiProgress value={90} color="info" label={false} sx={{ background: "#2D2E5F" }} />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#24292E" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#47A248" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#336791" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#005571" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#4F2EE8" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#0078D4" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              70%
            </VuiTypography>
            <VuiProgress value={70} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#FF9900" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#339933" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              60%
            </VuiTypography>
            <VuiProgress value={60} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#02303A" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              90%
            </VuiTypography>
            <VuiProgress value={90} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#C71A36" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              90%
            </VuiTypography>
            <VuiProgress value={90} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#61DAFB" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              50%
            </VuiTypography>
            <VuiProgress value={50} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#6DB33F" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#59666C" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              70%
            </VuiTypography>
            <VuiProgress value={70} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#25A162" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#25A162" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <TechIcon size="20px" color="#85EA2D" />
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
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              90%
            </VuiTypography>
            <VuiProgress value={90} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      }
    ],
  };
}
