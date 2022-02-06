import "../Sass/components/_QuizzOpen.scss";
import React, { useState, useEffect } from 'react';
import quizzData from '../data/quizz.json'

const QuizzOpen = (props) => {
    // Recuperer l'id dans l'url
    const idQuizz = props.match.params.quizzId - 1
    // Recuperer les question en lien avec le Quizz
    const QuestionQuizz = quizzData.quizz[idQuizz].questions
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);

    // Permets de mélanger les réponses
    for(var i = 0; i < QuestionQuizz.length; i++){
        QuestionQuizz[i].reponses.sort(() => Math.random() - 0.5);
    }
    useEffect(()=> {
        // Enregistrer le score de l'utilisateur dans le localStorage
        localStorage.setItem(quizzData.quizz[idQuizz].slug, score)
    },[score])

    // Permet de vérifier la réponse en fonction de l'input sélectionné
    function validation(){
        if(count < 9){
            const valueResponse = document.querySelector('input[name="quizz"]:checked').value
            if(valueResponse === QuestionQuizz[count].answer){
                setScore(score + 1)
            }
            document.querySelector('input[name="quizz"]:checked').checked = false;
            setCount(count + 1)
        }else{
            const valueResponse = document.querySelector('input[name="quizz"]:checked').value
            if(valueResponse === QuestionQuizz[count].answer){
                setScore(score + 1)
            }
            document.getElementById("QuizzEnCours").style.display = "none"
            document.getElementById("QuizzTermine").style.display = "block"
        }
    }

    function relancer(){
        // Permets de relancer le quizz une fois qu'il est terminé
        document.getElementById("QuizzEnCours").style.display = "block"
        document.getElementById("QuizzTermine").style.display = "none"
        document.querySelector('input[name="quizz"]:checked').checked = false;
        setCount(0)
        setScore(0)
    }

    return (
        <section id="QuizzOpen">
            <div id="QuizzEnCours">
                <h2>Score: {score} </h2>
                <h3>{QuestionQuizz[count].titrequestion}</h3>
                {
                    QuestionQuizz[count].reponses.map((data, index) => (
                        <div key={index}>
                            <input type="radio" id={index} name="quizz" value={data.reponse} />
                            <label htmlFor={index} > {data.reponse} </label>
                        </div>
                    ))
                }
                <button id="submit" onClick={()=> validation()}>Valider</button>
            </div>
            <div id="QuizzTermine">
                <h2>Le Quizz est terminé</h2>
                <p>Vous avez eu {score}/10</p>
                <button><a href="/quizz">Accueil</a></button>
                <button onClick={()=> relancer()}>Rejouer</button>
            </div>
        </section>
    )
};

export default QuizzOpen;