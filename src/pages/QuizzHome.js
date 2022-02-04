import QuizzData from "../data/quizz.json";
import QuizzCard from "../components/QuizzCard";
import '../Sass/components/_QuizzHome.scss';

const QuizzHome = () => {
    return (
        <section id="QuizzHome">
            <div id="QuizzContainer">
                {
                    QuizzData.quizz.map((data, index)=>(
                        <QuizzCard key={index} theme={data.theme} titre={data.titre} img={data.img} id={data.id}  />
                    ))
                }
            </div>
        </section>
    );
};

export default QuizzHome;