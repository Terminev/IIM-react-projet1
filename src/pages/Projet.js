import Data from "../data/data.json";
import ProjetCard from "../components/ProjetCard";
import "../Sass/components/_Projet.scss"


const Projet = () => {
    console.log(Data.projets);
    return (
        <div id="Projet">
            <h1>Projets</h1>
            <div className="ProjetContainer">                
                {
                    Data.projets.map((data, index) => (
                        <ProjetCard title={data.title} desc={data.description} id={data.id}/>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Projet;