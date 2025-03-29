import { Product } from "../models/Product";

export const getProducts = async (keyword: string, page: number):Promise<{ ok: boolean; error: string; data: Product[] }> => {
    try{
        const url = import.meta.env.VITE_API_URL?.toString().replace('[criterio]', keyword).replace('[numeropagina]', page.toString())
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
            }
        })
        const data = await response.json()
        const productsResponse = data.item?.props?.pageProps?.initialData?.searchResult?.itemStacks?.[0]?.items
        const products = productsResponse.filter((item: any) => item.id).map((item: any) => {
            return {
                id: item.id + Date.now(),
                name: item.name,
                price: item.price,
                image: item.image,
                description: item.description
            }
        })
        return {
            ok: true,
            error: "",
            data:products
        }
    } catch (error) {
        console.error("Error fetching products:", error)
        return {ok: false, error: "Error fetching products", data: []}
    }
}