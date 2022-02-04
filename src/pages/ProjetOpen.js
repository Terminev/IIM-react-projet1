import Data from "../data/projets.json";
import "../Sass/components/_ProjetOpen.scss";

const ProjetOpen = (props) => {
    // Recuperer l'id dans l'url
    const idProject = props.match.params.projetId

    // permet de récupérer la data en lien avec le projet ouvert
    const data = Data.projets[idProject-1];

    // function Carrousel(){
    //     if(data.images.length > 1){
    //         const picture1 = document.getElementById(0)
    //         const picture2 = document.getElementById(1)
    //         const picture3 = document.getElementById(2)

    //         if(picture1.style.display === 'none' && picture2.style.display === 'none' && picture3.style.display === 'none'){
    //             picture1.style.display = 'flex'
    //             picture2.style.display = "none"
    //             picture3.style.display = "none"
    //         }else if(picture1.style.display === 'flex'){
    //             console.log("dans le 1er if");
    //             picture1.style.display = "none"
    //             picture2.style.display = "flex"
    //             picture3.style.display = "none"
    //         }else if(picture2.style.display === 'flex'){
    //             console.log("dans le 2er if");
    //             picture1.style.display = "none"
    //             picture2.style.display = "none"
    //             picture3.style.display = "flex"
    //         }else if(picture3.style.display === 'flex'){
    //             console.log("dans le 3er if");
    //             picture1.style.display = "flex"
    //             picture2.style.display = "none"
    //             picture3.style.display = "none"
    //         }
    //         setTimeout(Carrousel, 10000);
    //         return null
    //     }
    // }

    // Carrousel()

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