import Data from "../data/projets.json";
import "../Sass/components/_ProjetOpen.scss";

const ProjetOpen = () => {
    // Recuperer l'id dans l'url
    const currentURL = window.location.pathname.split('/')[2];

    // permet de récupérer la data en lien avec le projet ouvert
    const data = Data.projets[currentURL-1];

    return (
        <div id="ProjetOpen">
            <h2>{data.title}</h2>
            {/* afficher toutes les photos */}
            {
                data.images.map((img, index)=>{
                return(
                    <img src={img} alt="projet" key={index} value={index}/>
                )
                })
            }
            <div id="link">
                <a href={data.url} rel="noreferrer" target="_blank">Visiter</a>
            </div>
            <p>{data.description}</p>
        </div>
    );
};

export default ProjetOpen;