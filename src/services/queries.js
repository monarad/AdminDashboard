import { useQuery } from "@tanstack/react-query"
import api from "../configs/api"

const useGetAllProducts=(page)=>{
    const queryFn = () =>
      api.get(`products?page=${page}&limit=10`).then((res) => res.data.data);
    const queryKey = ["all-products", page];

    return useQuery({queryFn,queryKey})
}
export {useGetAllProducts}