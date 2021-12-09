import { Button, Grid, Paper, TextField } from '@material-ui/core'
import React from 'react'

import LockOpenIcon from '@mui/icons-material/LockOpen';

//Styles
import './Login.scss'

const Login = () => {
    return (
        <Grid
        id="login-container"
            
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Paper
                id="login-paper"
                style={{
                    
                }}
            >
                <LockOpenIcon 
                    className="login-icon"
                    color="white"
                    />

                <h1>Ingresa</h1>

                <TextField 
                    className="standard-basic" 
                    label="Usuario" 
                    variant="standard" 
                />
                <TextField 
                    className="standard-basic" 
                    label="Contraseña" 
                    variant="standard" 
                />
                <Button 
                    id="login-button"
                    variant="contained"
                    color="primary"
                    style={{
                        margin: '20px'
                    }}
                >
                    Ingresar
                </Button>
            </Paper>
        </Grid>
    )
}

export default Login
