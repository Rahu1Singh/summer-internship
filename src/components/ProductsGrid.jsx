import ProductCard from "./ProductCard"

const ProductsGrid = () => {
  return (
      <div className='container mx-auto p-4 pt-6'>
      <h1 className="relative text-b-900 font-semibold left-[5%] text-3xl max-xl:text-3xl mb-4">PRODUCTS</h1>
      <div className="flex justify-around flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard className="hidden md:block" />
        <ProductCard className="hidden md:block" />
        {/* <a href="/products" className="p-2">See more..</a> */}
      </div>
      </div>
   
  )
}

export default ProductsGrid
