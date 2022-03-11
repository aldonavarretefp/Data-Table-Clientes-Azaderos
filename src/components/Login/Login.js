import React from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'


import { Button, Grid, Paper, TextField } from '@material-ui/core'
import LockOpenIcon from '@mui/icons-material/LockOpen';

import './Login.scss'


const url = "https://azaderos-rest-service.herokuapp.com";

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();

        const { email, password } = e.target;

        axios.post(`${url}/api/auth/login`,
            { email: email.value, password: password.value }
        )
        .then(res => {
            const { token } = res.data;
            console.log(token);
            sessionStorage.setItem('x-token', token);
            const user = parseJwt(token);
            navigate('/clientes',
                { state: { authenticated: true, nombre: user.nombre }, replace: true }
            );
        })
        .catch(err => {
            console.warn(err.msg);
        })

    }


    return (
        <Grid
            id="login-container"
            container
            direction="column"
            alignItems="center"
        >
            <Paper
                id="login-paper"
            >
                <div className="header">
                    <LockOpenIcon
                        className="login-icon"
                        //white
                        style={{ color: 'white' }}
                    />
                    <h1>¡Hola!</h1>
                    <h2>Bienvenido de Nuevo.</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        className="standard-basic" 
                        label="Usuario" 
                        name="email"
                        variant="standard" 
                    />
                    <TextField 
                        className="standard-basic" 
                        label="Contraseña" 
                        name="password"
                        type="password"
                        variant="standard" 
                    />
                    <Button 
                        id="login-button"
                        style={{
                            margin: '20px'
                        }}
                        type="submit"
                    >
                        Ingresar
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login;
