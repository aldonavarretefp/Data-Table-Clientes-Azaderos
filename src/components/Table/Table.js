
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

import { columns } from "../../data/table";


//Styles
import './Table.scss';

const url = 'https://azaderos-rest-service.herokuapp.com/api/clientes';


const handleSubmit = async (event) => {
    event.preventDefault();
    //If it is empty do not do anything
    let data = new FormData(event.target);
    const nombre = data.get('nombre');
    const sobrenombre = data.get('sobrenombre');
    const mz = data.get('mz');
    const lt = data.get('lt');
    const calle = data.get('calle');
    const referencias = data.get('referencias');
    const telefono = data.get('telefono');
    let direccion = `${calle} mz ${mz} lt ${lt}`;    
    //si no hay nombre o no hay mz o no hay lt o no hay calle 
    // no hagas el post
    
    try{
        
        if(nombre && mz && lt && calle){

            const {data:newdata} = await axios.post(url,{
                nombre: nombre ? nombre : "Sin_nombre",
                sobrenombre: sobrenombre ? sobrenombre : null,
                direccion: direccion ? direccion : "Sin_direccion",
                referencias: referencias ? referencias : "",
                telefono: telefono ? telefono : "Sin_telefono",
            });
            console.log(newdata);
            alert('Cliente creado');
        }else{
            alert('Faltan datos');
        }

    }catch(error){
        console.log(error);
    }
}
    
export const Table = () => {
    const [responsive, /* setResponsive */] = useState("standard");
    const [tableBodyHeight, /* setTableBodyHeight */] = useState("100%");
    const [tableBodyMaxHeight, /* setTableBodyMaxHeight */] = useState("");
    const [searchBtn, /* setSearchBtn */] = useState(true);
    const [downloadBtn, /* setDownloadBtn */] = useState(false);
    const [printBtn, /* setPrintBtn */] = useState(false);
    const [viewColumnBtn, /* setViewColumnBtn */] = useState(true);
    const [filterBtn, /* setFilterBtn */] = useState(false); 
    const [data, setData] = useState([]);
    //Auth
    const [authenticated, setAuthenticated] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    
    
    const options = {
        search: searchBtn,
        download: downloadBtn,
        print: printBtn,
        viewColumns: viewColumnBtn,
        filter: filterBtn,
        filterType: "dropdown",
        responsive,
        tableBodyHeight,
        tableBodyMaxHeight,
        //Max rows visible
        rowsPerPage: 100,
        //Non-selectable rows
        selectableRows: "none",
        
        onTableChange: (action, state) => {
            console.log(action);
            console.dir(state);
        }
        
    };
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
        try{
            const {data} = await axios.get(url,{
                headers: {
                    'x-token':  sessionStorage.getItem('x-token')
                }
                
            });
            const {clientes} = data;
            const dataLocal = [];
            clientes.map( ({ nombre, sobrenombre, direccion, referencias, telefono, ubicacion, img }) => (
                dataLocal.push([nombre, sobrenombre, direccion, referencias, telefono, ubicacion, img])
                ));
                setData(dataLocal);
                if(location.state.authenticated){
                    setAuthenticated(true);
                }else{
                    if(!authenticated){
                        navigate('/login', { state: { from: location }, replace: true });
                    }
                    navigate('/login');
                }
        }catch(error){
            console.log(error);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    
    
    return (
        !authenticated 
        ? (
            <div>Usuario no ha iniciado sesión...</div> 
        )
        : (
            <div >
                <h1>Bienvenido {location.state.nombre}</h1>
                <h2>Crear Cliente</h2>
                <div className="form-container">
                    <form onSubmit={handleSubmit} >
                        <label>
                        Nombre:
                        <input type="text" name="nombre" />
                        </label>
                        <label>
                        Sobrenombre:
                        <input type="text" name="sobrenombre" />
                        </label>
                        <label>
                        Calle:
                        <input type="text" name="calle" />
                        </label>
                        <label>
                        MZ:
                        <input type="text" name="mz" />
                        </label>
                        <label>
                        LT:
                        <input type="text" name="lt" />
                        </label>
                        <label>
                        Referencias:
                        <input type="text" name="referencias" />
                        </label>
                        <label>
                        Teléfono:
                        <input type="text" name="telefono" />
                        </label>
                        <input className="button" type="submit" value="Submit"/>
                    </form>
                </div>
                <ThemeProvider theme={createTheme()}>
                    <MUIDataTable
                    title={"Clientes Azaderos"}
                    data={data}
                    columns={columns}
                    options={options}
                    />
                </ThemeProvider> 
            </div>
        )
    )
}
