import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MoreVert from '@mui/icons-material/MoreVert'
import Grid from '@mui/material/Grid'
import SearchInput from './components/SearchInput'
import ShoppingCar from './components/ShoppingCar'
import ListProductsContainer from './containers/ListProductsContainer'

function App() {

  return (
    < >
      <Box >
        <AppBar position="static">
          <Toolbar>
            <img src='/img/logo.png' className="logo" alt="Gapsi logo" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              e-Commerce Gapsi
            </Typography>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
            <MoreVert />
          </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
      <Grid container spacing={2}>
        <Grid size={{xs: 12, md:6}}>
          <SearchInput />
        </Grid>
        <Grid size={{xs: 12, md:6}}>
          <ShoppingCar />
        </Grid>
      </Grid>
      <ListProductsContainer />
      </Container>
    </>
  )
}

export default App
