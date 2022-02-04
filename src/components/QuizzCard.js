import "../Sass/components/_QuizzCard.scss";

const QuizzCard = ({theme, titre, img, id}) => {
    console.log(theme, titre, img, id);
    const link = '/quizz/' + id
    return (
        <section id="QuizzCard">
            <a href={link}>
                <img src={img} alt="quizz" />
                <p>{theme}</p>
                <h3>{titre}</h3>
            </a>
        </section>
    )
};

export default QuizzCard;