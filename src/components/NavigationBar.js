import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

export default function NavigationBar() {
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
                size={4}
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
                >
                  <MenuIcon style={{ marginRight: "20px" }} />
                </IconButton>{" "}
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                }}
                size={4}
              >
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                  Match The Drink
                </Typography>{" "}
              </Grid>
              <Grid
                size={4}
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <a
                  className="buyButton"
                  target="_blank"
                  href="https://buymeacoffee.com/berkley"
                >
                  <img
                    className="coffeeImage"
                    src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                    alt="Buy me a coffee"
                  />
                  <span className="coffeeButtonText">Buy me a coffee</span>
                </a>{" "}
              </Grid>
            </Grid>
          </div>
        </Container>
      </AppBar>
    </Box>
  );
}
