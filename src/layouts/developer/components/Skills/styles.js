


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
  width: '180px',
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#ffffffff !important",
    color: "#1e293b !important",
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
  width: '180px',
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fbfbfbff !important",
    color: "#1e293b !important",
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