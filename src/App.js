import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import axios from 'axios';
//Styles
import "./App.scss";

function App() {
  const [responsive, setResponsive] = useState("standard");
  const [tableBodyHeight, setTableBodyHeight] = useState("100%");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(false);
  const [printBtn, setPrintBtn] = useState(false);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(false); 
  const [data, setData] = useState([]);


  const columns = [
    { name: "Nombre", options: { filterOptions: { fullWidth: true } } },
    "Alias",
    "Dirección",
    "Referencias",
    
    {
      name: "Teléfono",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          //Si hay valor, se muestra el valor, sino, se muestra un input
          return (
            <div>
              {value!=="Sin_telefono" ? (
                <a href={`tel:${value}`}>Llamar</a>
              ) : (
                <span>No numero</span>
              )
          }
            </div>
          )
        }
      }
    },
    //Link
    {
      name: "Ubicación",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <a target="_blank" href={value}  rel="noopener noreferrer" align="center">Click</a>
            
          );
        }
      }
    },
    //Img
    {
      name: "Imagen",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            
            <a href={value} align="center" target="_blank"  rel="noopener noreferrer">Img</a>
          );
        }
      }
        
    }
  ];

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
  useEffect(async () => {
    const fetchData = async () => {
      const {data} = await axios.get('https://azaderos-rest-service.herokuapp.com/api/clientes');
      const {clientes} = data;
      const dataLocal = [];
      clientes.map( ({nombre,sobrenombre,direccion,referencias,telefono,ubicacion,img} ) => {
        dataLocal.push([nombre,sobrenombre,direccion,referencias,telefono,ubicacion,img]);
      });
      setData(dataLocal);
    };
    fetchData();
  }, []);
  // Hacer una post request para crear nuevo cliente
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const nombre = data.get('nombre');
    const sobrenombre = data.get('sobrenombre');
    const mz = data.get('mz');
    const lt = data.get('lt');
    const calle = data.get('calle');
    const referencias = data.get('referencias');
    const telefono = data.get('telefono');
    let direccion = `${calle} mz ${mz} lt ${lt}`;    
    //HTTP POST
    try{

      const {data} = await axios.post('https://azaderos-rest-service.herokuapp.com/api/clientes',{
        //Si no hay nombre, "Sin_nombre"
        nombre: nombre ? nombre : "Sin_nombre",
        sobrenombre: sobrenombre ? sobrenombre : null,
        direccion: direccion ? direccion : "Sin_direccion",
        referencias: referencias ? referencias : "",
        telefono: telefono ? telefono : "Sin_telefono",
        
      });
      console.log(data);
      alert('Cliente creado');
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <ThemeProvider theme={createTheme()}>
        
        <MUIDataTable
          title={"Clientes Azaderos"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider> 
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
    </div>
  );
}

export default App;
