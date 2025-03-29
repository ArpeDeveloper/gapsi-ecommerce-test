import MoveUp from "@mui/icons-material/MoveUp"
import Badge from "@mui/material/Badge"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

function ShoppingCar() {

  return (
    <Card variant="outlined" >
        
        <CardMedia
            component="img"
            image="/img/shopping-car.jpg"
            sx={{
                maxHeight: 140,
                width: "auto",
                objectFit: "fill", 
                objectPosition: "center",
                margin: "0 auto",
              }}
            alt="Carrito de compras"
        />
        <Badge badgeContent={4} color="primary">
            <CardContent>
                <MoveUp  style={{ fontSize: 40, float:'left' }} color="primary" />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Arrastra tus productos Aquí
                </Typography>
            </CardContent>
        </Badge>
        <CardActions disableSpacing></CardActions>
    </Card>
  )
}

export default ShoppingCar
