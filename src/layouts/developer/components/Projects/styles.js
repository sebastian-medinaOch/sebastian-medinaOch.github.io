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

// Projects component layout styles
const projectsCard = {
  height: "500px",
  display: "flex",
  flexDirection: "column",
};

const filtersContainer = {
  display: "flex",
  gap: 2,
};

const skillFilterInput = {
  width: '250px',
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#3dc4ba !important",
    color: "white !important",
    "& fieldset": {
      borderColor: "#238680 !important",
    },
    "&:hover fieldset": {
      borderColor: "#2dd4bf !important",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2dd4bf !important",
    },
  },
  "& .MuiInputLabel-root": {
    color: "white !important",
  },
  "& .MuiChip-root": {
    backgroundColor: "#238680 !important",
    color: "white !important",
  },
};

const levelFilterInput = {
  width: '200px',
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#3dc4ba !important",
    color: "white !important",
    "& fieldset": {
      borderColor: "#238680 !important",
    },
    "&:hover fieldset": {
      borderColor: "#2dd4bf !important",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2dd4bf !important",
    },
  },
  "& .MuiInputLabel-root": {
    color: "white !important",
  },
  "& .MuiChip-root": {
    backgroundColor: "#238680 !important",
    color: "white !important",
  },
};

const tableContainer = ({ borders: { borderWidth }, palette: { grey } }) => ({
  flex: 1,
  "& th": {
    borderBottom: `${borderWidth[1]} solid ${grey[700]}`,
  },
  "& .MuiTableRow-root:not(:last-child)": {
    "& td": {
      borderBottom: `${borderWidth[1]} solid ${grey[700]}`,
    },
  },
});

const paginationContainer = {
  display: "flex",
  justifyContent: "center",
  mt: "auto",
  py: 2,
};

export { 
  projectsCard, 
  filtersContainer, 
  skillFilterInput, 
  levelFilterInput, 
  tableContainer, 
  paginationContainer 
};