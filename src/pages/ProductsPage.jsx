import AddProductForm from "../components/AddProductForm";
import { useGetAllProducts } from "../services/queries";

function ProductsPage() {
  const {data,isPending,error}=useGetAllProducts()
  console.log(data)
 if (isPending) return <p>Loading...</p>;

 if (error) return <p>Something went wrong!</p>;

  return <div>
      <h4>Products List:</h4>
      <ul>{data?.map((product)=>(<li key={product.id}>{product.name}</li>))}</ul>

      <AddProductForm/>
      </div>
}

export default ProductsPage;
