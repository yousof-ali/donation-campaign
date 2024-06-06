import Bannar from "../Banner/Bannar";
import Header from "../Header/Header";
import "./Home.css"



const Home = () => {
    return (
        <div className="hero-container ">
            <Header></Header>
            <Bannar></Bannar>
            
        </div>
    );
};

export default Home;