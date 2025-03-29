import TextField from "@mui/material/TextField"

function SearchInput() {

    return (
      <>
        <TextField sx={{width:"100%", margin: "auto 0"}} id="search-input" label="Buscar..." variant="outlined" />
      </>
    )
  }
  
  export default SearchInput
  