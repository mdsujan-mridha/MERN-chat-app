import React, { useState } from 'react'
import { Button, Container, Paper, TextField, Typography } from "@mui/material"
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  return (
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

                  />
                  <TextField

                    required
                    fullWidth
                    label="Password"
                    variant='outlined'
                    margin='normal'
                    type='password'


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
                <TextField
                  required
                  fullWidth
                  label="Name"
                  variant='outlined'
                  margin='normal'
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  variant='outlined'
                  margin='normal'

                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  variant='outlined'
                  margin='normal'

                />
                <TextField

                  required
                  fullWidth
                  label="Password"
                  variant='outlined'
                  margin='normal'
                  type='password'


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
  )
}

export default Login