/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Vision UI Dashboard React example components
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Images
import profile1 from "assets/images/companies/logo-pragma-v3.png";
import profile2 from "assets/images/companies/logo-bancolombia-v2.jpg";
import profile3 from "assets/images/companies/logo-mercantil-v2.png";
import profile4 from "assets/images/companies/logo-inditex-v1.png";
import profile5 from "assets/images/companies/logo-itau-v1.png";

// Technology Icons (temporary placeholders)
import javaIcon from "assets/images/technologies/java.png";
import awsIcon from "assets/images/technologies/aws-light.png";
import dockerIcon from "assets/images/technologies/docker.png";
import kubernetesIcon from "assets/images/technologies/kubernetes.png";
import lambdaIcon from "assets/images/technologies/aws-lambda.png";
import pipelineIcon from "assets/images/technologies/file-type-azurepipelines.png";
import azureIcon from "assets/images/technologies/azure-light.png";
import leadershipIcon from "assets/images/technologies/star-32.png";

export default function data() {
  return {
    projects: [
      {
        xs: 12,
        md: 6,
        xl: 4,
        component: (
          <DefaultProjectCard
            image={profile4}
            label="Desarrollador Backend"
            title="Inditex - PeopleNow"
            location="Málaga, España"
            date="Septiembre 2025 - Febrero 2026"
            description="Desarrollé y mantuve microservicios backend en Java 21 + Spring Boot, siguiendo enfoque API-First. Implementé tests unitarios e integración, optimicé consultas SQL complejas para mejorar rendimiento y aseguré despliegues estables a preproducción y producción mediante Git/CI-CD"
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "white",
              label: "VIEW ALL",
            }}
            authors={[
              { image: javaIcon, name: "Java" },
              { image: azureIcon, name: "Azure Cloud" },
              { image: dockerIcon, name: "Docker" },
              { image: kubernetesIcon, name: "Kubernetes" },
            ]}
          />
        ),
      },
      {
        xs: 12,
        md: 6,
        xl: 4,
        component: (
          <DefaultProjectCard
            image={profile1}
            label="Desarrollador Backend"
            title="Pragma S.A.S"
            location="Cali, Colombia"
            date="Diciembre 2021 - Diciembre 2025"
            description="Consultora tecnológica que me delegó como desarrollador en los diferentes clientes (bancos en Colombia). En su proyecto interno, desarrollé servicios backend con Java y Spring Boot para la gestión de vacaciones y anticipos bajo la orquestación en la nube."
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "white",
              label: "VIEW ALL",
            }}
            authors={[
              { image: javaIcon, name: "Java" },
              { image: awsIcon, name: "AWS" },
              { image: dockerIcon, name: "Docker" },
              { image: kubernetesIcon, name: "Kubernetes" },
              { image: lambdaIcon, name: "Lambda" },
            ]}
          />
        ),
      },
      {
        xs: 12,
        md: 6,
        xl: 4,
        component: (
          <DefaultProjectCard
            image={profile3}
            label="Líder de equipo y Desarrollador Backend"
            title="Mercantil - Capa Intermedia Banca"
            location="Cali, Colombia"
            date="Diciembre 2024 - Octubre 2025"
            description="Gestioné un equipo de desarrollo para la creación de la capa intermedia de un banco en Latinoamérica, utilizando una arquitectura de microservicios con Java y Spring Boot con la nube de Azure."
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "white",
              label: "VIEW ALL",
            }}
            authors={[
              { image: leadershipIcon, name: "Liderazgo" },
              { image: javaIcon, name: "Java" },
              { image: azureIcon, name: "Azure Cloud" },
              { image: pipelineIcon, name: "Pipeline" },
              { image: kubernetesIcon, name: "Kubernetes" },
            ]}
          />
        ),
      },
      {
        xs: 12,
        md: 6,
        xl: 4,
        component: (
          <DefaultProjectCard
            image={profile5}
            label="Desarrollador de software"
            title="Banco Itaú Colombia"
            location="Cali, Colombia"
            date="Febrero 2024 - Octubre 2024"
            description="Desarrolle actividades de actualización de versiones de Java, de la 1.8 a la 17. Creé microservicios nuevos con SpringBoot en Java 17. Desplegué los cambios de código y solucione problemas de pipelines de CI y CD. Aplique seguridad soluciones de vulnerabilidades, de coverage y ajustes de SonarQube."
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "white",
              label: "VIEW ALL",
            }}
            authors={[
              { image: javaIcon, name: "Java 17" },
              { image: pipelineIcon, name: "CI/CD" },
              { image: dockerIcon, name: "Docker" }
            ]}
          />
        ),
      },
      {
        xs: 12,
        md: 6,
        xl: 4,
        component: (
          <DefaultProjectCard
            image={profile2}
            label="Desarrollador Backend"
            title="Bancolombia - Entre Cuentas"
            location="Cali, Colombia"
            date="Diciembre 2021 - Enero 2024"
            description="Desarrollé servicios de pagos interbancarios utilizando Java y Spring Boot. El despliegue y la orquestación se gestionaron en la nube de AWS y Azure DevOps."
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "white",
              label: "VIEW ALL",
            }}
            authors={[
              { image: javaIcon, name: "Java" },
              { image: awsIcon, name: "AWS" },
              { image: pipelineIcon, name: "Pipeline" },
              { image: dockerIcon, name: "Docker" },
              { image: kubernetesIcon, name: "Kubernetes" },
            ]}
          />
        ),
      },
    ],
  };
}