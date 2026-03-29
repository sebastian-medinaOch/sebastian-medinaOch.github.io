
import { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { BsFillFlagFill } from "react-icons/bs";
import { FaBookBookmark } from "react-icons/fa6";
import TimelineItem from "examples/Timeline/TimelineItem";
import { useTranslation } from "react-i18next";
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

function PersonalCharacteristics() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const aptitudes = [
    { icon: <ProblemSolving size="16px" />, title: t("characteristics.aptitudes.items.problemSolving") },
    { icon: <Architecture size="16px" />, title: t("characteristics.aptitudes.items.architecture") },
    { icon: <API size="16px" />, title: t("characteristics.aptitudes.items.api") },
    { icon: <Performance size="16px" />, title: t("characteristics.aptitudes.items.performance") },
    { icon: <Testing size="16px" />, title: t("characteristics.aptitudes.items.testing") },
    { icon: <CICD size="16px" />, title: t("characteristics.aptitudes.items.cicd") },
    { icon: <Docker size="16px" />, title: t("characteristics.aptitudes.items.docker") },
    { icon: <Monitoring size="16px" />, title: t("characteristics.aptitudes.items.monitoring") },
    { icon: <Database size="16px" />, title: t("characteristics.aptitudes.items.database") },
    { icon: <Messaging size="16px" />, title: t("characteristics.aptitudes.items.messaging") },
    { icon: <Security size="16px" />, title: t("characteristics.aptitudes.items.security") },
    { icon: <Collaboration size="16px" />, title: t("characteristics.aptitudes.items.collaboration") },
    { icon: <Teaching size="16px" />, title: t("characteristics.aptitudes.items.teaching") },
    { icon: <Learning size="16px" />, title: t("characteristics.aptitudes.items.learning") },
  ];

  const totalPages = Math.ceil(aptitudes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAptitudes = aptitudes.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Grid container spacing={3} direction="column">
      <Grid item xs={12}>
        <Card>
          <VuiBox >
            <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
              {t("characteristics.aptitudes.title")}
            </VuiTypography>
          </VuiBox>
          <VuiBox mb={1}>
            <VuiBox display="flex" alignItems="center">
              <VuiTypography variant="button" color="text" fontWeight="regular" ml="5px">
                {t("characteristics.aptitudes.subtitle")}
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

      <Grid item xs={12}>
        <Card>
          <VuiBox>
            <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
              {t("characteristics.languages.title")}
            </VuiTypography>
            <VuiBox mb={2}>
              <VuiBox display="flex" alignItems="center">
                <BsFillFlagFill color="green" size="15px" mr="60px" />
                <VuiTypography variant="button" color="text" fontWeight="regular" ml="5px">
                  {t("characteristics.languages.subtitle")}
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </VuiBox>
          <VuiBox>
            <TimelineItem
              icon={<Spain size="16px" />}
              title={t("characteristics.languages.spanish")}
              dateTime={t("characteristics.languages.native")}
            />
            <TimelineItem
              icon={<English size="16px" />}
              title={t("characteristics.languages.english")}
              dateTime={t("characteristics.languages.basic")}
            />
          </VuiBox>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <VuiBox>
            <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
              {t("characteristics.education.title")}
            </VuiTypography>
            <VuiBox mb={2}>
              <VuiBox display="flex" alignItems="center">
                <FaBookBookmark color="white" size="15px" mr="60px" />
                <VuiTypography variant="button" color="text" fontWeight="regular" ml="5px">
                  {t("characteristics.education.subtitle")}
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </VuiBox>
          <VuiBox textAlign="center" mb={3}>
            <VuiTypography variant="h5" color="white" fontWeight="bold">
              2019 - 2020
            </VuiTypography>
            <VuiTypography variant="button" color="white" fontWeight="bold" display="block" mt={0.5}>
              {t("characteristics.education.degree1")}
            </VuiTypography>
            <VuiTypography variant="caption" color="text" fontWeight="regular">
              {t("characteristics.education.school1")}
            </VuiTypography>
          </VuiBox>
          <VuiBox textAlign="center" mb={1}>
            <VuiTypography variant="h5" color="white" fontWeight="bold">
              2020 - 2021
            </VuiTypography>
            <VuiTypography variant="button" color="white" fontWeight="bold" display="block" mt={0.5}>
              {t("characteristics.education.degree2")}
            </VuiTypography>
            <VuiTypography variant="caption" color="text" fontWeight="regular">
              {t("characteristics.education.school2")}
            </VuiTypography>
          </VuiBox>
        </Card>
      </Grid>
    </Grid>
  );
}

export default PersonalCharacteristics;
