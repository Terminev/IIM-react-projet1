import "../Sass/components/_QuizzOpen.scss";
import React, { useState } from 'react';
import quizzData from '../data/quizz.json'

const QuizzOpen = (props) => {
    // Recuperer l'id dans l'url
    const idQuizz = props.match.params.quizzId - 1
    // Recuperer les question en lien avec le Quizz
    const QuestionQuizz = quizzData.quizz[idQuizz].questions
    
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    // Permet de vérifier la réponse en fonction de l'input séléctionné
    const validation = () => {
        if(count <= 8){
            const valueResponse = document.querySelector('input[name="quizz"]:checked').value
            console.log(valueResponse);
            if(valueResponse === QuestionQuizz[count].answer){
                setScore(score + 1)
            }
            document.querySelector('input[name="quizz"]:checked').checked = false;
            setCount(count + 1)
        }else{
            document.getElementById("submit").style.display = "none"
        }
    }

    return (
        <section id="QuizzOpen">
            <h2>Score: {score} </h2>
            {
                    QuestionQuizz[count].reponses.map((data, index) => (
                        <div key={index}>
                            <input type="radio" id={index} name="quizz" value={data.reponse} />
                            <label htmlFor={index} > {data.reponse} </label>
                        </div>
                    ))
            }
            <button id="submit" onClick={()=> validation()}>Valider</button>
        </section>
    )
};

export default QuizzOpen;