import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function App() {
  const [responsive, setResponsive] = useState("standard");
  const [tableBodyHeight, setTableBodyHeight] = useState("100%");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
    { name: "Nombre", options: { filterOptions: { fullWidth: true } } },
    "Alias",
    "Teléfono",
    "Dirección",
    "Correo",
    "Referencias",
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
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };
 // Nombre,     Alias,      Telefono,Direccion,Correo,Referencias,Ubicacion
  const data = [
    ["Angelica", "Purificadora", null, "Ferrosquilla", null,"Purificadora de Ferrosquilla","https://goo.gl/maps/GP4kHEnjc43FEt9H8"],
    [
      "Aiden Lloyd",
      "Business Consultant for an International Company and CEO of Tony's Burger Palace",
      "Dallas"
    ],
    ["Jaden Collins", "Attorney", "Santa Ana"],
    ["Aaren Rose", null, "Toledo"],
    ["Johnny Jones", "Business Analyst", "St. Petersburg"],
    ["Jimmy Johns", "Business Analyst", "Baltimore"],
    ["Jack Jackson", "Business Analyst", "El Paso"],
    ["Joe Jones", "Computer Programmer", "El Paso"],
    ["Jacky Jackson", "Business Consultant", "Baltimore"],
    ["Jo Jo", "Software Developer", "Washington DC"],
    ["Franky Rees", "Business Analyst", "St. Petersburg"],
    ["Donna Marie", "Business Manager", "Annapolis"]
  ];

  return (
    <ThemeProvider theme={createTheme()}>
      {/* <FormControl>
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
      </FormControl> */}
      {/* <FormControl>
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
      </FormControl> */}
      {/* <FormControl>
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
      </FormControl> */}
      {/* <FormControl>
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
      </FormControl> */}
      {/* <FormControl>
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
      </FormControl> */}
      {/* <FormControl>
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
      </FormControl> */}
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
