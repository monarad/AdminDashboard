import { useQuery } from "@tanstack/react-query"
import api from "../configs/api"

const useGetAllProducts=()=>{
    const queryFn=()=>api.get("products").then(res=>res.data.data)
    const queryKey=["all-products"]

    return useQuery({queryFn,queryKey})
}
export {useGetAllProducts}