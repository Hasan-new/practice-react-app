import SingleProduct from "./SingleProduct";

const Products = () => {
    return (
        <div>
            <h1 className="m-8">Check our Products</h1>
            <div className="flex gap-4 font-bold text-center">
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>

            </div>
            
        </div>
    );
};

export default Products;