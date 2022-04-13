import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./App.css";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

import React, { useState } from "react";

export default function App() {
  
  const handleSubmit = (e) => {
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get("username"),
      password: data.get("password"),
    };
    console.log(actualData);
  };

  const [proceed, setProceed] = useState(false);

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} id="login-form">
        <Grid container justifyContent="center">
          <Grid
            item
            lg={12}
            sm={6}
            sx={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
              backgroundRepeat: "no-repeat",
              maxHeight: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            style={{ minHeight: "100vh" }}
          >
            <Grid container justifyContent="center">
              <Grid
                item
                lg={8}
                sm={4}
                mt={10}
                sx={{ backgroundColor: "whitesmoke" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, mb: 2, mt: 2 }}
                >
                  <EditIcon color="primary" /> <b>Change Default Password</b>
                  <Typography variant="h11" sx={{ flexGrow: 1, mb: 2, ml: 27 }}>
                    <b>Welcome, Alok Sahoo</b>
                    <Button variant="outlined" size="small" color="warning">
                      <LogoutIcon /> LOGOUT
                    </Button>
                  </Typography>
                </Typography>
                <Grid lg={8} sm={2}>
                  <card sx={{ maxHeight: "100%", maxWidth: "80%" }}>
                    <Box m={3}>
                      <TextField
                        label="Password"
                        variant="outlined"
                        type="text"
                        name="password"
                        id="password"
                        margin="normal"
                        fullWidth
                      />
                      <TextField
                        autoComplete="defaultpassword"
                        label=" Default Password"
                        variant="outlined"
                        type="password"
                        name="defaultpassword"
                        id="defaultpassword"
                        margin="normal"
                        fullWidth
                      />

                      <TextField
                        label=" Confirm New Password"
                        variant="outlined"
                        type="password"
                        name="confirmnewpassword"
                        id="confirmnewpassword"
                        margin="normal"
                        fullWidth
                      />

                      <Button
                        variant="contained"
                        size="medium"
                        color="success"
                        endIcon={<ChangeCircleIcon />}
                        fullWidth
                        mt="2"
                        type="submit"
                        margin="normal"
                      >
                        change
                      </Button>
                    </Box>
                  </card>
                </Grid>
                
              </Grid>
            </Grid>
          </Grid>
        
                
        </Grid>
      </Box>
    </>
  );
}
