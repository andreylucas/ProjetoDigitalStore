
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/themes/lara-light-pink/theme.css"

// 2. Os estilos core do PrimeReact
import "primereact/resources/primereact.min.css";

// 3. Os ícones do PrimeIcons (opcional, mas recomendado)
import "primeicons/primeicons.css";


createRoot(document.getElementById('root')).render(
 
    <App />
  
)
