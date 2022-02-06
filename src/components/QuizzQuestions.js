const QuizzQuestions = ({reponse, index}) => {

    return (
        <div key={index}>
            <input type="radio" id={index} name="quizz" value={reponse} />
            <label htmlFor={index} > {reponse} </label>
        </div>
    );
};

export default QuizzQuestions;