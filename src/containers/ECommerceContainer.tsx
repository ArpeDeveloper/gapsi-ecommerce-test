import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import ShoppingCar from "../components/ShoppingCar"
import TextField from "@mui/material/TextField"
import { useEffect, useState } from "react"
import { getProducts } from "../services/getProducts"
import { Product } from "../models/Product"
import ProductItem from "../components/ProductItem"
import SkeletonProducts from "../components/SkeletonProducts"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { clearCar } from "../store/shoppingCarSlice"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import RestartAlt from "@mui/icons-material/RestartAlt"

function ECommerceContainer() {
  const dispatch = useDispatch()
  const shoppingCarStore = useSelector((state: RootState) => state.shoppingCar)
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query === "") {
        setProducts([])
      } else setDebouncedQuery(query)
    }, 500) 

    return () => clearTimeout(timeout)
  }, [query])

  useEffect(() => {
    handleSearch()
  }, [debouncedQuery, page])

  useEffect(() => {
    const filteredProducts = products.filter((item: Product) => shoppingCarStore.find(sc => sc.id ==item.id ) === undefined)
        setProducts(filteredProducts)
  }, [shoppingCarStore])

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSearch = async () => {
    if (debouncedQuery) {
      setIsLoading(true)
      const response = await getProducts(debouncedQuery, page)
      if(response.ok){
        const filteredProducts = response.data.filter((item: Product) => shoppingCarStore.find(sc => sc.id ==item.id ) === undefined)
        setProducts([...products, ...filteredProducts])
        setHasMore(filteredProducts.length > 0)
      }
      setIsLoading(false)
    }
  }

  const handleOnclick = () => {
    reloadApp()
  }

  const reloadApp = () => {
    dispatch(clearCar())
    setProducts([])
    setQuery("")
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target as HTMLDivElement;
    if (scrollHeight - scrollTop < clientHeight + 10 && hasMore) {
      setPage((prevPage) => prevPage + 1) // Cargar la siguiente página de productos
    }
  }

  return (
    <>
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
      <Container sx={{paddingTop: 2}} >
        <Grid container spacing={2}>
          <Grid size={{xs: 12, md:6}}>
            <TextField value={query} onChange={handleOnChange} sx={{width:"100%", margin: "auto 0"}} id="search-input" label="Buscar..." variant="outlined" />
          </Grid>
          <Grid size={{xs: 12, md:6}}>
            <ShoppingCar />
          </Grid>
        </Grid>
        {isLoading && page == 1 ? 
          <SkeletonProducts quantity={6} />
          : (
            <Box onScroll={handleScroll} sx={{ maxHeight: "80vh", overflowY: "auto" }}>
              <Grid container spacing={2} sx={{marginTop: 2}}>
                {products.map((product: any) => (
                  <Grid size={{xs: 12, sm:6, md:6}} key={product.id}>
                    <ProductItem product={product} />
                  </Grid>
                ))}
              </Grid>
              {isLoading && <SkeletonProducts quantity={6} /> }
          </Box>
          )
        }
      </Container>
    </>
  )
}

export default ECommerceContainer
