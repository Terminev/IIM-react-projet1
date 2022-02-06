import "../Sass/components/_QuizzCard.scss";

const QuizzCard = ({theme, titre, img, id}) => {
    const link = '/quizz/' + id
    const value = window.localStorage.getItem("quizz" + id)
    return (
        <section id="QuizzCard">
            <a href={link}>
                <img src={img} alt="quizz" />
                <p>{theme}</p>
                <h3>{titre}</h3>
                {(()=> {
                    if(value != null){
                        return(
                            <h4>Votre Score: {value} / 10</h4>
                        )
                    }
                })()}
                <h4></h4>
            </a>
        </section>
    )
};

export default QuizzCard;