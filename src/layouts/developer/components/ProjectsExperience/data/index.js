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
import profile1 from "assets/images/logo-pragma-v3.png";
import profile2 from "assets/images/logo-bancolombia-v2.jpg";
import profile3 from "assets/images/logo-mercantil-v2.png";

// Technology Icons (temporary placeholders)
import javaIcon from "assets/images/java.png";
import awsIcon from "assets/images/aws-light.png";
import dockerIcon from "assets/images/docker.png";
import kubernetesIcon from "assets/images/kubernetes.png";
import lambdaIcon from "assets/images/aws-lambda.png";
import pipelineIcon from "assets/images/file-type-azurepipelines.png";
import azureIcon from "assets/images/azure-light.png";
import leadershipIcon from "assets/images/star-32.png";

export default function data() {
  return {
    projects: [
      {
        xs: 12,
        md: 6,
        xl: 4,
        component: (
          <DefaultProjectCard
            image={profile1}
            label="project #1 - Desarrollador Backend"
            title="Pragma S.A.S - Proyecto Interno"
            description="Desarrollé servicios backend con Java y Spring Boot para la gestión interna de vacaciones y anticipos bajo la orquestación en la nube de AWS."
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
            image={profile2}
            label="project #2 - Desarrollador Backend"
            title="Bancolombia - Entre Cuentas"
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
      {
        xs: 12,
        md: 6,
        xl: 4,
        component: (
          <DefaultProjectCard
            image={profile3}
            label="project #3 - Líder de equipo y Desarrollador Backend"
            title="Mercantil - Capa Intermedia Banca"
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
    ],
  };
}