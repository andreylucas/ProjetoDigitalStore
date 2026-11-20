import Gallery from "../components/Gallery";
import Section from "../components/Section";

const HomePage = () => {
    return (  
        <homePage className="flex flex-column " style={{backgroundColor: '#F5F5F5' }}>
        <Gallery/>
        <Section/>
        </homePage>
    );
}
 
export default HomePage;