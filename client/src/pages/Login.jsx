import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from '../components/StyledComponents';
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from '../utils/validator';
import { bgGradient } from '../constants/color';
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword("");
  const avatar = useFileHandler("single");

  return (
    <div style={{ backgroundImage: bgGradient }}>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
          {
            isLogin ?
              (
                <>
                  <Typography variant='h5'> Login </Typography>
                  <form style={{
                    width: "100%",
                    marginTop: "1rem"
                  }}
                  >
                    <TextField
                      required
                      fullWidth
                      label="Username"
                      variant='outlined'
                      margin='normal'
                      value={username.value}
                      onChange={username.changeHandler}


                    />
                    <TextField

                      required
                      fullWidth
                      label="Password"
                      variant='outlined'
                      margin='normal'
                      type='password'
                      value={password.value}
                      onChange={password.changeHandler}


                    />
                    <Button

                      sx={{
                        marginTop: "1rem",

                      }}
                      fullWidth
                      type='submit'
                      variant='contained'
                      color='primary'
                    >
                      Login

                    </Button>
                    <Typography textAlign={"center"} m={"1rem"}> OR </Typography>
                    <Button
                      fullWidth
                      onClick={toggleLogin}
                      variant='text'
                    >
                      Sign Up Instead
                    </Button>
                  </form>

                </>
              )
              :
              (<>
                <Typography variant='h5'> Sign Up </Typography>
                <form style={{
                  width: "100%",
                  marginTop: "1rem"
                }}
                >
                  <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                    <Avatar

                      sx={{
                        width: "10rem",
                        height: "10rem",
                        objectFit: 'cover',
                      }}
                      src={avatar.preview}
                    />
                    <IconButton
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        color: "white",
                        bgcolor: "rgba(0,0,0.5)",
                        ":hover": {
                          bgcolor: "rgba(0,0,0.7)",
                        }
                      }}
                      component={"label"}
                    >
                      <>
                        <CameraAltIcon />
                        <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                      </>

                    </IconButton>
                  </Stack>
                  {avatar.error && (
                    <Typography
                      m={"1rem auto"}
                      width={"fit-content"}
                      display={"block"}
                      color="error"
                      variant="caption"
                    >
                      {avatar.error}
                    </Typography>
                  )}

                  <TextField
                    required
                    fullWidth
                    label="Name"
                    variant='outlined'
                    margin='normal'
                    value={name.value}
                    onChange={name.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Bio"
                    variant='outlined'
                    margin='normal'
                    value={bio.value}
                    onChange={bio.changeHandler}

                  />
                  <TextField
                    required
                    fullWidth
                    label="Username"
                    variant='outlined'
                    margin='normal'
                    value={username.value}
                    onChange={username.changeHandler}
                  />
                  {
                    username.error && (
                      <Typography color="error" variant='caption'>{username.error}</Typography>
                    )
                  }
                  <TextField

                    required
                    fullWidth
                    label="Password"
                    variant='outlined'
                    margin='normal'
                    type='password'
                    value={password.value}
                    onChange={password.changeHandler}
                  />
                  {
                    password.error && (
                      <Typography color="error" variant='caption'>{password.error}</Typography>
                    )
                  }
                  <Button

                    sx={{
                      marginTop: "1rem",

                    }}
                    fullWidth
                    type='submit'
                    variant='contained'
                    color='primary'
                  >
                    Sign Up

                  </Button>
                  <Typography textAlign={"center"} m={"1rem"}> OR </Typography>
                  <Button
                    fullWidth
                    onClick={toggleLogin}
                    variant='text'
                  >
                    Login Instead
                  </Button>
                </form>
              </>
              )
          }
        </Paper>
      </Container>
    </div>
  )
}

export default Login