import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
        Pagina não existe
        <Link to="/">Voltar para a Página Inicial</Link>
        </>
     );
}
 
export default NotFound;