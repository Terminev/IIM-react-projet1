import Data from "../data/projets.json";
import "../Sass/components/_ProjetOpen.scss";

const ProjetOpen = (props) => {
    // Recuperer l'id dans l'url
    const idProject = props.match.params.projetId

    // permet de récupérer la data en lien avec le projet ouvert
    const data = Data.projets[idProject-1];

    return (
        <div id="ProjetOpen">
            <h2>{data.title}</h2>
            {/* afficher toutes les photos */}
            <div id="imgContainer">
            {
                data.images.map((img, index)=>{
                return(
                    <img src={img} alt="projet" id={index} key={index} value={index}/>
                )
                })
            }
            </div>
            <div id="link">
                <a href={data.url} rel="noreferrer" target="_blank">Visiter</a>
            </div>
            <p>{data.description}</p>
        </div>
    );
};

export default ProjetOpen;