export const columns = [
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

    
