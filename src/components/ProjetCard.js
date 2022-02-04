import "../Sass/components/_ProjetCard.scss";

const ProjetCard = ({title, desc, id, img}) => {
    // console.log(data.description.substr(0,10));
    const link = '/projets/' + id
    return (
        <section id="ProjetCard">
            <a href={link}>
                <img src={img} alt="Projet" />
                <h3>{title}</h3>
                <p>{desc.substr(0,60)}...</p>
            </a>
        </section>
    )
};

export default ProjetCard;