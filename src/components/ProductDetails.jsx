import ProductCard from "./ProductCard";


 const productDetails= (valor) => {

  const products = [
    {
      name: "Tênis Air Jordan 1 Mid Masculino",
      value: "R$ 759,90",
      discount: "10% OFF no pix",
      image: "/product-thumb-1.jpeg",
      link: "/products/"
    
    }];
    
    const list = [];
 
  let number = parseInt(valor.valor);
  
  for (let i = 0; i < number; i++) { 
    list.push(...products);
  }


  return (
    <div className=" flex flex-row justify-content-between align-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
 
export default productDetails;