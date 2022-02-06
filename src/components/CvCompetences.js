const CvCompetences = ({nom, niveau, index}) => {

    return (
        <div key={index}>
            <h3>{nom}</h3>
            <input type="range" name='niveau' min="0" max="10" value={niveau} disabled/>
            <label htmlFor="niveau"> {niveau}</label>
        </div>
    );
};

export default CvCompetences;