import ProductCard from "./ProductCard";



const productListing = (valor) => {

  const products = [
    {
       name: "Tênis Air Jordan 1 Mid Masculino",
      value: "R$ 759,90",
      discount: "R$ 659,90",
      image: "/product-thumb-1.jpeg",
      link: "/products/:id"
     
    
    
    }
     ];

  const list = [];
 
  let number = parseInt(valor.valor);
  
  for (let i = 0; i < number; i++) { 
    list.push(...products);
  }


  return (
    <div className=" flex justify-content-between align-items-center flex-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mr-8 mt-5 mb-5">
      {list.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          value={product.value}
          discount={product.discount}
          image={product.image}
          link={product.link}
        />
      ))}
    </div>
  );
};
 
export default productListing;