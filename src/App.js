import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import NavBar from "./Components/NavBar.js";
import Cards from "./Components/Cards.js";
import { Container } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [limit, setLimit] = useState(0);
  const [newLimit, setNewLimit] = useState(6);
  const [apiData, setApiData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 6;

  const fetchSpacexApi = async () => {
    try {
      const spacexApiData = await axios.get(
        `https://api.spacexdata.com/v3/launches`
      );

      setTotalResults(spacexApiData.data.length);
      setApiData(apiData.concat(spacexApiData.data.slice(limit, newLimit)));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMoreData = () => {
    setLimit(newLimit);
    setNewLimit(newLimit + pageSize);
    console.log("newlimit - ", newLimit);
  };

  useEffect(() => {
    fetchSpacexApi();
    // eslint-disable-next-line
  }, [newLimit]);

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar />
        <Container>
          <Cards
            apiData={apiData}
            totalResults={totalResults}
            fetchMoreData={fetchMoreData}
            newLimit={newLimit}
          />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
