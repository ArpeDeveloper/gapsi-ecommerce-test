import './App.css'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import RestartAlt from '@mui/icons-material/RestartAlt'
import ECommerceContainer from './containers/ECommerceContainer'

function App() {

  const handleOnclick = () => {
    window.location.reload()
  }

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
              onClick={handleOnclick}
            >
            <RestartAlt />
          </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <ECommerceContainer />
    </>
  )
}

export default App
