import { Box, Button } from "@mui/material";

const Home = () => {
  const handleClickSingle = () => {
    window.location.href = "/single";
  };

  const handleClickMultiple = () => {
    window.location.href = "/multiple";
  };

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Button
        variant="contained"
        sx={{ margin: 2, padding: 2 }}
        onClick={handleClickSingle}
      >
        Add Single Expense
      </Button>
      <Button
        variant="contained"
        sx={{ margin: 2, padding: 2 }}
        onClick={handleClickMultiple}
      >
        Add Multiple Expense
      </Button>
    </Box>
  );
};

export default Home;
