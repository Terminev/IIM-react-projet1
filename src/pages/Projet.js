import Data from "../data/projets.json";
import ProjetCard from "../components/ProjetCard";
import "../Sass/components/_Projet.scss"
import Nav from "../components/Nav";


const Projet = () => {
    return (
        <>
        <Nav></Nav>
        <div id="Projet">
            <h1>Projets</h1>
            <div className="ProjetContainer">    
            {/* envoyer la data vers le composant PorjetCard pour chaque projet             */}
                {
                    Data.projets.map((data, index) => (
                        <ProjetCard key={index} title={data.title} img={data.images[0]} desc={data.description} id={data.id}/>
                    ))
                }
            </div>
        </div>
        </>
    );
};

export default Projet;