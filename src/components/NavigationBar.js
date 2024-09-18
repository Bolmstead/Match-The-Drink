import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SportsBarIcon from "@mui/icons-material/SportsBar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  minWidth: 250,
  bgcolor: "#3b3b3b",
  color: "white",
  boxShadow: 24,
  p: 4,
  fontFamily: "Poppins",
};

export default function NavigationBar() {
  const [openHelpModal, setOpenHelpModal] = React.useState(false);
  const handleOpen = () => setOpenHelpModal(true);
  const handleClose = () => setOpenHelpModal(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#121212" }}>
        <Container maxWidth="lg">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              width: "100%",
              height: "100%",
              alignContent: "center",
            }}
          >
            {" "}
            <Grid
              container
              style={{ width: "100%", alignContent: "center" }}
              spacing={2}
            >
              <Grid
                size={{ xs: 1, md: 2 }}
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleOpen}
                >
                  <HelpOutlineIcon
                    aria-describedby="help"
                    style={{ color: "grey" }}
                    onClick={handleOpen}
                  />
                </IconButton>{" "}
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                }}
                size={{ xs: 10, md: 8 }}
              >
                <Typography
                  variant="h3"
                  component="div"
                  style={{ fontFamily: "poppins" }}
                  sx={{
                    flexGrow: 1,
                    fontSize: { xs: "30px", md: "40px" },
                  }}
                >
                  Match The Drink
                </Typography>{" "}
              </Grid>
              <Grid
                size={{ xs: 1, md: 2 }}
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <a
                    className="buyButton"
                    target="_blank"
                    href="https://buymeacoffee.com/berkley"
                  >
                    <img
                      className="coffeeImage"
                      src="/buyCoffee.png"
                      alt="Buy me a coffee"
                    />
                  </a>{" "}
                </Box>
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <a
                    className="buyButton"
                    target="_blank"
                    href="https://buymeacoffee.com/berkley"
                  >
                    <img
                      className="coffeeImage"
                      src="/buyCoffeeSmall.png"
                      alt="Buy me a coffee"
                    />
                  </a>{" "}
                </Box>
              </Grid>
            </Grid>
          </div>
        </Container>
      </AppBar>
      <div>
        <Modal
          open={openHelpModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              sx={{ fontFamily: "Poppins" }}
              component="h2"
            >
              How to Play
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                mt: 2,
                fontFamily: "Poppins",
              }}
            >
              <span>
                Try to guess the correct drink order! After each guess, you will
                be given the number of drinks that are in the correct spot. Use
                this to help figure out the correct order. <br />
                <br />
                Cheers!{" "}
                <SportsBarIcon
                  key="beer"
                  sx={{
                    fontSize: "20px",
                    color: "#FBB117",
                    verticalAlign: "top",
                  }}
                />
              </span>
            </Typography>
          </Box>
        </Modal>
      </div>
    </Box>
  );
}
