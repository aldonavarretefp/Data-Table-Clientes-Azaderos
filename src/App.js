import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import axios from 'axios';

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

  return (
    <ThemeProvider theme={createTheme()}>
      
       <MUIDataTable
        title={"Clientes Azaderos"}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider> 
  );
}

export default App;
