import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import Skeleton from "@mui/material/Skeleton"


function SkeletonProducts({quantity}: { quantity: number }) {
    
    return (
        <Grid container spacing={2} sx={{marginTop: 2}}>
        {
            quantity > 0 ?
            Array.from({ length: quantity }).map((_, i) => (
                <Grid size={{xs: 12, sm:6, md:6}} key={i}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <Skeleton variant="rectangular" width={210} height={118} />
                            <CardContent>
                                <Skeleton />
                                <Skeleton />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))
            : <Skeleton />
        }
        </Grid>
    )
  }
  
  export default SkeletonProducts
  