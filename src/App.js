import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
    "Teléfono",
    //Link
    {
      name: "Ubicación",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <a href={value}>Click</a>
            
          );
        }
      }
    },
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
      clientes.map( ({nombre,sobrenombre,direccion,referencias,telefono,ubicacion} ) => {
        dataLocal.push([nombre,sobrenombre,direccion,referencias,telefono,ubicacion]);
      });
      setData(dataLocal);
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={createTheme()}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Responsive Option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={responsive}
          style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
          onChange={(e) => setResponsive(e.target.value)}
        >
          <MenuItem value={"vertical"}>vertical</MenuItem>
          <MenuItem value={"standard"}>standard</MenuItem>
          <MenuItem value={"simple"}>simple</MenuItem>

          <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
          <MenuItem value={"scrollMaxHeight"}>
            scrollMaxHeight (deprecated)
          </MenuItem>
          <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
        </Select>
      </FormControl>
       <FormControl>
        <InputLabel id="demo-simple-select-label">Table Body Height</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tableBodyHeight}
          style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
          onChange={(e) => setTableBodyHeight(e.target.value)}
        >
          <MenuItem value={""}>[blank]</MenuItem>
          <MenuItem value={"400px"}>400px</MenuItem>
          <MenuItem value={"800px"}>800px</MenuItem>
          <MenuItem value={"100%"}>100%</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">
          Max Table Body Height
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tableBodyMaxHeight}
          style={{ width: "200px", marginBottom: "10px" }}
          onChange={(e) => setTableBodyMaxHeight(e.target.value)}
        >
          <MenuItem value={""}>[blank]</MenuItem>
          <MenuItem value={"400px"}>400px</MenuItem>
          <MenuItem value={"800px"}>800px</MenuItem>
          <MenuItem value={"100%"}>100%</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Search Button</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchBtn}
          style={{ width: "200px", marginBottom: "10px" }}
          onChange={(e) => setSearchBtn(e.target.value)}
        >
          <MenuItem value={"true"}>{"true"}</MenuItem>
          <MenuItem value={"false"}>{"false"}</MenuItem>
          <MenuItem value={"disabled"}>disabled</MenuItem>
        </Select>
      </FormControl> 
      /* <FormControl>
        <InputLabel id="demo-simple-select-label">Download Button</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={downloadBtn}
          style={{ width: "200px", marginBottom: "10px" }}
          onChange={(e) => setDownloadBtn(e.target.value)}
        >
          <MenuItem value={"true"}>{"true"}</MenuItem>
          <MenuItem value={"false"}>{"false"}</MenuItem>
          <MenuItem value={"disabled"}>disabled</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Print Button</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={printBtn}
          style={{ width: "200px", marginBottom: "10px" }}
          onChange={(e) => setPrintBtn(e.target.value)}
        >
          <MenuItem value={"true"}>{"true"}</MenuItem>
          <MenuItem value={"false"}>{"false"}</MenuItem>
          <MenuItem value={"disabled"}>disabled</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">
          View Column Button
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={viewColumnBtn}
          style={{ width: "200px", marginBottom: "10px" }}
          onChange={(e) => setViewColumnBtn(e.target.value)}
        >
          <MenuItem value={"true"}>{"true"}</MenuItem>
          <MenuItem value={"false"}>{"false"}</MenuItem>
          <MenuItem value={"disabled"}>disabled</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Filter Button</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterBtn}
          style={{ width: "200px", marginBottom: "10px" }}
          onChange={(e) => setFilterBtn(e.target.value)}
        >
          <MenuItem value={"true"}>{"true"}</MenuItem>
          <MenuItem value={"false"}>{"false"}</MenuItem>
          <MenuItem value={"disabled"}>disabled</MenuItem>
        </Select>
      </FormControl>
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
