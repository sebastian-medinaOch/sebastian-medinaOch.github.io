


import { useState } from "react";


import Card from "@mui/material/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";


import Table from "examples/Tables/Table";


import data from "layouts/developer/components/Skills/data";


import {
  projectsCard,
  filtersContainer,
  skillFilterInput,
  levelFilterInput,
  tableContainer,
  paginationContainer
} from "layouts/developer/components/Skills/styles";

function Skills() {
  
  const { columns, rows } = data();
  const [page, setPage] = useState(1);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const rowsPerPage = 5;

  
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

  
  const filteredRows = rows.filter(row => {
    const matchesLevel = selectedLevels.length === 0 || 
      selectedLevels.some(selected => selected.value === getSkillLevel(row));
    
    const matchesSkill = selectedSkills.length === 0 || 
      selectedSkills.some(selected => selected.value === getSkillName(row));
    
    return matchesLevel && matchesSkill;
  });

  
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  const paginatedRows = filteredRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  return (
    <Card sx={projectsCard}>
      {}
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
        <VuiBox mb="auto">
          <VuiTypography color="white" variant="lg" mb="6px" gutterBottom>
            Habilidades - Tecnológicas
          </VuiTypography>
        </VuiBox>
        <VuiBox sx={filtersContainer}>
          {}
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
          {}
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
      {}
      <VuiBox sx={tableContainer}>
        <Table columns={columns} rows={paginatedRows} />
      </VuiBox>
      
      {}
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

export default Skills;
