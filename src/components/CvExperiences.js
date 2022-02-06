const CvExperiences = ({poste, entreprise, index, mission, duree}) => {

    return (
        <div key={index}>
            <h3>{poste} - {entreprise}</h3>
            <h4>{duree}</h4>
            <p>{mission}</p>
        </div>
    );
};

export default CvExperiences;