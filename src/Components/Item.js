import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import No_Image_Available from "../images/No_Image_Available.jpg";
import CustomModal from "./CustomModal";

export default function Item(props) {
  const { items, index } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  // const handleClose = () => setOpen(false);

  return (
    // Grids
    <Grid xs={12} sm={6} md={4} key={index}>
      <Card sx={{ height: 420 }}>
        {/* <Link
          target="_blank"
          underline="none"
          href={items.links.article_link}
          onClick={() => {}}
          color="inherit"
        > */}

        <CardActionArea onClick={handleOpen}>
          {open && <CustomModal open={open} items={items} />}

          {/* Image */}
          <CardMedia
            component="img"
            height="150"
            image={
              items.links.mission_patch_small !== null
                ? items.links.mission_patch_small
                : No_Image_Available
            }
            alt="image"
          />
          <CardContent
            sx={{
              py: 1,
              px: 2,
            }}
          >
            {/* Title */}
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                height: 70,
                overflow: "hidden",
              }}
            >
              {items.mission_name && items.mission_name.length >= 75
                ? `${items.mission_name.slice(0, 75)}...`
                : items.mission_name === null
                ? "No Title Available"
                : items.mission_name}
            </Typography>

            {/* Flight Number */}
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{
                height: 14,
                overflow: "hidden",
                fontStyle: "italic",
                fontSize: "0.7rem",
              }}
            >
              {`Flight No - ${
                items.flight_number ? items.flight_number : "Unknown"
              }`}
            </Typography>

            {/* Date */}
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{
                height: 16,
                overflow: "hidden",
                fontStyle: "italic",
                fontSize: "0.7rem",
              }}
            >
              {items.launch_date_local
                ? new Date(items.launch_date_local).toGMTString()
                : "Unknown"}
            </Typography>

            {/* Details */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ height: 100, overflow: "hidden" }}
            >
              {items.details && items.details.length >= 215
                ? `${items.details.slice(0, 212)}...`
                : items.details === null
                ? "No details Available"
                : items.details}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            px: 2,
            py: 0,
          }}
        >
          <Link
            target="_blank"
            underline="none"
            href={items.links.article_link}
            onClick={() => {}}
            color="inherit"
          >
            <Button
              size="small"
              color="primary"
              sx={{
                px: 0,
              }}
            >
              Read More
            </Button>
          </Link>
        </CardActions>
        {/* </Link> */}
      </Card>
    </Grid>
  );
}
