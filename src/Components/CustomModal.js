import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import No_Image_Available from "../images/No_Image_Available.jpg";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 350, sm: 600, md: 800 },
  maxHeight: { xs: 550 },
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "0.2em",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "slategrey",
  },
};

export default function CustomModal({ open, handleClose, items }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Image */}
        <CardMedia
          component="img"
          height="300"
          border="1px solid"
          sx={{ borderRadius: 1 }}
          image={
            items.links.mission_patch_small !== null
              ? items.links.mission_patch_small
              : No_Image_Available
          }
          alt="image"
        />

        {/* Title */}
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h1"
          textAlign="center"
          fontSize="22px"
          marginTop="1rem"
        >
          {items.mission_name ? items.mission_name : "No Title Available"}
        </Typography>

        {/* Flight Number */}
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h6"
          fontSize="16px"
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
          id="modal-modal-description"
          sx={{ mt: 2, fontSize: ".8rem" }}
        >
          {items.details ? items.details : "No details Available"}
        </Typography>
      </Box>
    </Modal>
  );
}
