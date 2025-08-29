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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import data from "layouts/developer/components/Projects/data";

// Styles
import {
  projectsCard,
  filtersContainer,
  skillFilterInput,
  levelFilterInput,
  tableContainer,
  paginationContainer
} from "layouts/developer/components/Projects/styles";

function Projects() {
  // ===== DATA & STATE =====
  const { columns, rows } = data();
  const [page, setPage] = useState(1);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const rowsPerPage = 5;

  // ===== FILTER OPTIONS =====
  const skillLevels = [
    { label: "Experto", value: "Experto" },
    { label: "Avanzado", value: "Avanzado" },
    { label: "Intermedio", value: "Intermedio" },
    { label: "Básico", value: "Básico" },
    { label: "Principiante", value: "Principiante" }
  ];

  const skillNames = rows.map(row => {
    const skillName = row.tecnologias.props.children[1].props.children;
    return { label: skillName, value: skillName };
  }).sort((a, b) => a.label.localeCompare(b.label));

  // ===== HELPER FUNCTIONS =====
  const getSkillLevelText = (stars) => {
    if (stars >= 4.5) return "Experto";
    if (stars >= 3.5) return "Avanzado";
    if (stars >= 2.5) return "Intermedio";
    if (stars >= 1.5) return "Básico";
    return "Principiante";
  };

  const getSkillName = (row) => {
    return row.tecnologias.props.children[1].props.children;
  };

  const getSkillLevel = (row) => {
    const percentage = row.nivel.props.children[0].props.value * 20;
    const stars = (percentage / 100) * 5;
    return getSkillLevelText(stars);
  };

  // ===== EVENT HANDLERS =====
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleLevelFilterChange = (event, newValue) => {
    setSelectedLevels(newValue);
    setPage(1);
  };

  const handleSkillFilterChange = (event, newValue) => {
    setSelectedSkills(newValue);
    setPage(1);
  };

  // ===== FILTERING LOGIC =====
  const filteredRows = rows.filter(row => {
    const matchesLevel = selectedLevels.length === 0 || 
      selectedLevels.some(selected => selected.value === getSkillLevel(row));
    
    const matchesSkill = selectedSkills.length === 0 || 
      selectedSkills.some(selected => selected.value === getSkillName(row));
    
    return matchesLevel && matchesSkill;
  });

  // ===== PAGINATION =====
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  const paginatedRows = filteredRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  return (
    <Card sx={projectsCard}>
      {/* ===== HEADER & FILTERS ===== */}
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
        <VuiBox mb="auto">
          <VuiTypography color="white" variant="lg" mb="6px" gutterBottom>
            Habilidades - Tecnológicas
          </VuiTypography>
        </VuiBox>
        <VuiBox sx={filtersContainer}>
          {/* Filtro por Habilidad */}
          <Autocomplete
            multiple
            limitTags={1}
            id="skill-name-filter"
            className="filter-input"
            options={skillNames}
            getOptionLabel={(option) => option.label}
            value={selectedSkills}
            onChange={handleSkillFilterChange}
            renderInput={(params) => (
              <TextField 
                {...params} 
                placeholder="Filtrar por habilidad"
              />
            )}
            sx={skillFilterInput}
          />
          {/* Filtro por Nivel */}
          <Autocomplete
            multiple
            limitTags={1}
            id="skill-level-filter"
            className="filter-input"
            options={skillLevels}
            getOptionLabel={(option) => option.label}
            value={selectedLevels}
            onChange={handleLevelFilterChange}
            renderInput={(params) => (
              <TextField 
                {...params} 
                placeholder="Filtrar por nivel"
              />
            )}
            sx={levelFilterInput}
          />
        </VuiBox>
      </VuiBox>
      {/* ===== TABLE ===== */}
      <VuiBox sx={tableContainer}>
        <Table columns={columns} rows={paginatedRows} />
      </VuiBox>
      
      {/* ===== PAGINATION ===== */}
      <VuiBox sx={paginationContainer}>
        <Stack spacing={2}>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handleChangePage}
            variant="outlined" 
            color="primary"
          />
        </Stack>
      </VuiBox>
    </Card>
  );
}

export default Projects;
