import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import ShoppingCar from "../components/ShoppingCar"
import TextField from "@mui/material/TextField"
import { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";
import { Product } from "../models/Product";
import ProductItem from "../components/ProductItem";
import SkeletonProducts from "../components/SkeletonProducts";

function ECommerceContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); 

    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    handleSearch()
  }, [debouncedQuery]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSearch = async () => {
    if (debouncedQuery) {
      setIsLoading(true)
      const response = await getProducts(debouncedQuery, 1);
      if(response.ok){
        setProducts(response.data)
      }
      setIsLoading(false)
    }
  }

  return (
    <Container sx={{paddingTop: 2}}>
        <Grid container spacing={2}>
          <Grid size={{xs: 12, md:6}}>
            <TextField onChange={handleOnChange} sx={{width:"100%", margin: "auto 0"}} id="search-input" label="Buscar..." variant="outlined" />
          </Grid>
          <Grid size={{xs: 12, md:6}}>
            <ShoppingCar />
          </Grid>
        </Grid>
        {isLoading ? 
          <SkeletonProducts quantity={6} />
          : (
            <Grid container spacing={2} sx={{marginTop: 2}}>
              {products.map((product: any) => (
                <Grid size={{xs: 12, sm:6, md:6}} key={product.id}>
                  <ProductItem product={product} />
                </Grid>
              ))}
            </Grid>
          )
          }
      </Container>
  )
}

export default ECommerceContainer
