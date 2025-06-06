import MoveUp from "@mui/icons-material/MoveUp"
import Badge from "@mui/material/Badge"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store" // Adjust the path to your store file
import { addItem } from "../store/shoppingCarSlice"

function ShoppingCar() {
    const shoppingCarStore = useSelector((state: RootState) => state.shoppingCar)
    const dispatch = useDispatch()

    const handleDrop = (e: React.DragEvent) => {
        const productId = e.dataTransfer.getData('productId')
    
        if (productId) {
            dispatch(addItem(productId))
        }
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()  
      }

  return (
    <Card onDrop={handleDrop} onDragOver={handleDragOver} variant="outlined" sx={{maxWidth:345}} >
        
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
        <Badge badgeContent={shoppingCarStore.length} color="primary">
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
