import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Product } from "../models/Product"


function ProductItem({product}: { product: Product }) {
    const formattedPrice = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2,
      }).format(product.price ?? 0)

      const handleDragStart = (e: React.DragEvent, product: Product) => {
        e.dataTransfer.setData('productId', product.id)
      }

    return (
        <Card draggable
        onDragStart={(e) => handleDragStart(e, product)} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="body2" component="div">
                    {formattedPrice}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
  }
  
  export default ProductItem
  