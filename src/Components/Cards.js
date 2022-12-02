import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Spinner from "./Spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";
import Item from "./Item.js";

const Cards = (props) => {
  const { apiData, fetchMoreData, totalResults, newLimit } = props;

  return (
    apiData && (
      <React.Fragment>
        {/* InfiniteScroll */}
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={newLimit}
          next={fetchMoreData}
          hasMore={newLimit <= totalResults}
          //Spinner
          loader={<Spinner />}
        >
          {/* Container */}
          <Box sx={{ width: "100%", margin: "0 0 2rem 0" }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {apiData &&
                apiData.map((items, index) => {
                  //Single Launch Item
                  return <Item key={index} items={items} index={index} />;
                })}
            </Grid>
          </Box>
        </InfiniteScroll>
      </React.Fragment>
    )
  );
};

export default Cards;
