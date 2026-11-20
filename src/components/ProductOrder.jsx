import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";


const options = [
    { name: 'Menor Preço', code: 'priceAsc' },
    { name: 'Maior Preço', code: 'priceDesc' },
   
];

const optionSelected = (option) => {
    
    if (option){
        return (
            <span>
                <strong> Ordenar por: </strong> {option.name}
            </span>
        )
    }else{
        return (
            <span>
                <strong> Ordenar por: </strong> 
            </span>
        )
    }
};


const ProductOrder = () => {
     const [selectedOrder, setSelectedOrder] = useState();
    return ( 
        <>         
         <Dropdown value={selectedOrder} onChange={(e) => setSelectedOrder(e.value)} valueTemplate={optionSelected} options={options} optionLabel="name" 
            placeholder="Ordenar por:" className="align-items-center ml-3" 
            style={{ color: '#474747',width: '308px', height: '60px', fontsize: '16px' }} />
        </>
           
        
     );
}
 
export default ProductOrder;