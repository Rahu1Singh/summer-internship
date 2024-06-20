import ProductCard from "./ProductCard"

const ProductsGrid = ({productlist}) => {
  if (!productlist || !Array.isArray(productlist)) {
    return <div>No products available.</div>;
  }

  return (
    <div className='container mx-auto my-5 p-4 pt-6 flex flex-col items-center'>
      <h1 className="relative text-b-900 font-semibold text-3xl max-xl:text-3xl mb-4">RELATED PRODUCTS</h1>
      <div className="relative grid grid-cols-4 gap-8">
        {productlist.map((item) => (
          <ProductCard key={item.id} name={item.name} img={item.img} desc={item.desc} link={item.link} />
        ))}
        {/* <a href="/products" className="p-2">See more..</a> */}
      </div>
    </div>
   
  )
}

export default ProductsGrid
