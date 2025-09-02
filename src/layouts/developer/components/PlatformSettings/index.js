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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
// React icons
import { BsFillFlagFill } from "react-icons/bs";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import Spain from "examples/Icons/Spain";
import English from "examples/Icons/English";
import ProblemSolving from "examples/Icons/ProblemSolving";
import Architecture from "examples/Icons/Architecture";
import API from "examples/Icons/API";
import Performance from "examples/Icons/Performance";
import Testing from "examples/Icons/Testing";
import CICD from "examples/Icons/CICD";
import Docker from "examples/Icons/Docker";
import Monitoring from "examples/Icons/Monitoring";
import Database from "examples/Icons/Database";
import Messaging from "examples/Icons/Messaging";
import Security from "examples/Icons/Security";
import Collaboration from "examples/Icons/Collaboration";
import Teaching from "examples/Icons/Teaching";
import Learning from "examples/Icons/Learning";

function PlatformSettings() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const aptitudes = [
    { icon: <ProblemSolving size="16px" />, title: "Resolución de problemas complejos y pensamiento analítico" },
    { icon: <Architecture size="16px" />, title: "Modelado de dominio y diseño de soluciones" },
    { icon: <API size="16px" />, title: "Diseño y versionado de APIs REST con buenas prácticas" },
    { icon: <Performance size="16px" />, title: "Optimización de rendimiento y escalabilidad" },
    { icon: <Testing size="16px" />, title: "Diseño de pruebas y calidad: unitarias/integración, TDD/AAA" },
    { icon: <CICD size="16px" />, title: "Automatización CI/CD y control de versiones" },
    { icon: <Docker size="16px" />, title: "Contenerización y orquestación: Docker/Kubernetes" },
    { icon: <Monitoring size="16px" />, title: "Observabilidad aplicada: logging, métricas y trazas" },
    { icon: <Database size="16px" />, title: "Gestión y modelado de datos: SQL/NoSQL" },
    { icon: <Messaging size="16px" />, title: "Integración asíncrona y mensajería con patrones de resiliencia" },
    { icon: <Security size="16px" />, title: "Seguridad aplicada en software: OWASP, manejo de secretos" },
    { icon: <Collaboration size="16px" />, title: "Colaboración técnica y comunicación clara" },
    { icon: <Teaching size="16px" />, title: "Mentorización y transferencia de conocimiento" },
    { icon: <Learning size="16px" />, title: "Adaptabilidad y aprendizaje autónomo continuo" },
  ];
  
  const totalPages = Math.ceil(aptitudes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAptitudes = aptitudes.slice(startIndex, startIndex + itemsPerPage);
  
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };


  return (
    <Grid container spacing={3} direction="column">
      {/* Aptitudes */}
      <Grid item xs={12}>
        <Card>
          <VuiBox >
            <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
              Aptitudes
            </VuiTypography>
          </VuiBox>
          <VuiBox mb={1}>
            <VuiBox display="flex" alignItems="center">
              <VuiTypography variant="button" color="text" fontWeight="regular" ml="5px">
                Competencias técnicas especializadas
              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <VuiBox>
            {currentAptitudes.map((aptitude, index) => (
              <TimelineItem
                key={startIndex + index}
                icon={aptitude.icon}
                title={aptitude.title}
              />
            ))}
          </VuiBox>
          <VuiBox display="flex" justifyContent="center" mt={2}>
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                    sx={{
                      color: 'white',
                      '&.Mui-selected': {
                        backgroundColor: '#238680',
                        color: 'white',
                      },
                    }}
                  />
                )}
              />
            </Stack>
          </VuiBox>
        </Card>
      </Grid>
      
      {/* Idiomas */}
      <Grid item xs={1}>
        <Card>
          <VuiBox>
            <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
              Idiomas
            </VuiTypography>
            <VuiBox mb={2}>
              <VuiBox display="flex" alignItems="center">
                <BsFillFlagFill color="green" size="15px" mr="60px"  />
                <VuiTypography variant="button" color="text" fontWeight="regular" ml="5px">
                  Competencias lingüísticas
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </VuiBox>
          <VuiBox>
            <TimelineItem
              icon={<Spain size="16px" />}
              title="Español"
              dateTime="Nativo"
            />
            <TimelineItem
              icon={<English size="16px" />}
              title="Inglés"
              dateTime="Básico"
            />
          </VuiBox>
        </Card>
        
      </Grid>
    </Grid>
  );
}

export default PlatformSettings;
