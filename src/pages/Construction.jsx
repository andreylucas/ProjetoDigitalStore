import { Link } from "react-router-dom";

const Construction = () => {
    return ( 
        <>
            <div className="flex flex-column justify-content-center align-items-center  p-3">
                <h2 className='text-left' style={{ color: '#474747' }}>Site em construção</h2>
                 <Link to="/">Voltar para a Página Inicial</Link>
                <div className="  p-3">
                    <img src="/site-em-construcao.jpg" alt="Imagem de construção" style={{ width: '700px', height: '600px' }} />
                </div>
            </div>        
        </>
     );
}
 
export default Construction;