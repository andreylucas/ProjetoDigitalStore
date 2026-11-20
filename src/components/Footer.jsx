import Logo from "./Logo";
import InfoComponent from "./Informations";
import { Divider } from 'primereact/divider';




const Footer = () => {
    return ( 
        <footer className="grid justify-content-center text-center  " style={{ backgroundColor: '#1F1F1F', color: '#FFFFFF' }}>
        <div className="col-2 mr-5 text-left m-4">
            <Logo color="#ffffff"/>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         <img className="mr-5" src="./assets/facebook.svg" alt="Facebook"></img>
         <img className="mr-5"   src="./assets/instagram.svg" alt="Instagram"></img>
         <img className="mr-5" src="./assets/twitter.svg" alt="Twiter"></img>
         </div>
          <div className="col m-4">
           <InfoComponent title="Informações" informations={[
              { text: "Sobre Drip Store", link: "/about" },
              { text: "Segurança", link: "/security" },
                { text: "Whishlist", link: "/wishlist" },
                { text: "Blog", link: "/blog" },
                { text: "Trabalhe Conosco", link: "/careers" },
                { text: "Meus Pedidos", link: "/orders" },
            ]} />
          </div>  
          <div className="col m-4">
            <InfoComponent title="Categorias" informations={[
              { text: "Camisetas", link: "/categories/t-shirts" },
              { text: "Calças", link: "/categories/trousers" },
                { text: "Bonés", link: "/categories/hats" },
                { text: "Headphones", link: "/categories/headphones" },
                { text: "Tênis", link: "/categories/shoes" },
               
            ]} />

          </div>
          <div className="col m-4">
            <InfoComponent title="Contato" informations={[
              { text: "Av. Santos Dumount, 1510-1 andar - Aldeota, Fortaleza - Ce, 60150-161" },
              { text: "(85) 3051-3411"},
                
            ]} />
          </div>
          <Divider />
          <div className="col flex justify-content-center align-items-center">
            <p>© 2026 Digital Store. Todos os direitos reservados.</p>
          </div>

      
        </footer>
     );
}
 
export default Footer;