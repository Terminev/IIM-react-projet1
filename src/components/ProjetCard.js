import "../Sass/components/_ProjetCard.scss";
import imgHello from '../img/img/hello.png'

const ProjetCard = ({title, desc, id}) => {
    const link = '/projets/' + id
    return (
        <section id="ProjetCard">
            <a href={link}>
                <img src={imgHello} alt="" />
                <h3>{title}</h3>
                <p>{desc}</p>
            </a>
        </section>
    )
};

export default ProjetCard;