import { Link } from "react-router-dom";

const ProductCard = ({name, value, discount, image, link}) => {
    return (
        <>
        <Link to={link} className="no-underline text-color">
           <li className="flex flex-column items-center gap-2 border border-b-blue-400 w-fit p-2 ">
                <img src={image} alt="" width="292px" height="292px" className="rounded-[50%]" />
                <div className="flex flex-column items-center gap-1 ">
                    <span style={{ color: '#474747', fontSize: '19px' }}>{name}</span>
                   <div className=" flex align-items-baseline gap-2 my-2">   
                        <span style={{fontSize: '16px',
                         color: 'var(--light-gray-2)',
                        textDecoration: 'line-through',}}>
                            {value}
                        </span>
                        <span style={{fontSize: '24px',
                         fontWeight: '700',
                         color: 'var(--dark-gray-2)'}}>
                            {discount}
                         </span>                   
                    </div>
                    
                </div>
            </li>
           </Link>
        </>
    )
}

export default ProductCard;