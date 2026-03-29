


import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";


import profile1 from "assets/images/companies/logo-pragma-v3.png";
import profile2 from "assets/images/companies/logo-bancolombia-v2.jpg";
import profile3 from "assets/images/companies/logo-mercantil-v2.png";
import profile4 from "assets/images/companies/logo-inditex-v1.png";
import profile5 from "assets/images/companies/logo-itau-v1.png";


import javaIcon from "assets/images/technologies/java.png";
import awsIcon from "assets/images/technologies/aws-light.png";
import dockerIcon from "assets/images/technologies/docker.png";
import kubernetesIcon from "assets/images/technologies/kubernetes.png";
import lambdaIcon from "assets/images/technologies/aws-lambda.png";
import pipelineIcon from "assets/images/technologies/file-type-azurepipelines.png";
import azureIcon from "assets/images/technologies/azure-light.png";
import leadershipIcon from "assets/images/technologies/star-32.png";

export default function data(t) {
  return {
    projects: [
      {
        xs: 12,
        md: 6,
        xl: 4,
        component: (
          <DefaultProjectCard
            image={profile4}
            label={t("experience.roles.backend")}
            title={t("experience.projects.inditex.title")}
            location={t("experience.projects.inditex.location")}
            date={t("experience.projects.inditex.date")}
            description={t("experience.projects.inditex.desc")}
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "white",
              label: "",
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
            label={t("experience.roles.backend")}
            title={t("experience.projects.pragma.title")}
            location={t("experience.projects.pragma.location")}
            date={t("experience.projects.pragma.date")}
            description={t("experience.projects.pragma.desc")}
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "white",
              label: "",
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
            label={t("experience.roles.leader")}
            title={t("experience.projects.mercantil.title")}
            location={t("experience.projects.mercantil.location")}
            date={t("experience.projects.mercantil.date")}
            description={t("experience.projects.mercantil.desc")}
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "white",
              label: "",
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
            label={t("experience.roles.software")}
            title={t("experience.projects.itau.title")}
            location={t("experience.projects.itau.location")}
            date={t("experience.projects.itau.date")}
            description={t("experience.projects.itau.desc")}
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "white",
              label: "",
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
            label={t("experience.roles.backend")}
            title={t("experience.projects.bancolombia.title")}
            location={t("experience.projects.bancolombia.location")}
            date={t("experience.projects.bancolombia.date")}
            description={t("experience.projects.bancolombia.desc")}
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "white",
              label: "",
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