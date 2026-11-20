import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from "react";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

  



    
const Header = () => {
    const value = useState('')
    
    return ( 
        < header className="m-3  " >
       <div className="flex align-items-center justify-content-between flex-row  m-3 mr-8 ml-8 gap-3">
            <Logo />
               
               <IconField className=" mr-5 ml-5" iconPosition="right">
                        <InputIcon onClick={value} className="pi pi-search"> </InputIcon>
                        <InputText  className="w-30rem"  placeholder="Pesquisar Produto" />
                       
               </IconField>
                 <Link to="" style={{ color: '#8F8F8F' }} >Cadastre-se</Link>
                 <Link to="" className="p-button font-bold" style={{ backgroundColor: '#c92071', borderColor: '#c92071' }}>Entrar</Link>
                <img src="../assets/mini-cart.svg" alt="Carrinho"></img>
                
     </div>
        <div className=" flex flex-row gap-3 no-underline mr-8 ml-8" >
            <NavLink to="/"   
            className={({ isActive }) => (isActive ? "meu-link ativo" : "meu-link")}>Home</NavLink>
            <NavLink to="/products"  className={({ isActive }) => (isActive ? "meu-link ativo" : "meu-link")}>Produtos</NavLink>
            <NavLink to="/categorias/construction"  className={({ isActive }) => (isActive ? "meu-link ativo" : "meu-link")}>Categorias</NavLink>
            <NavLink to="/pedidos/construction"  className={({ isActive }) => (isActive ? "meu-link ativo" : "meu-link")}>Meus Pedidos</NavLink>
        
           </div>
        </header>
     );
}

 
export default Header;