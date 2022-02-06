const CvFormation = ({ecole, annee, index, specialite}) => {

    return (
        <div key={index}>
            <h3>{ecole} - {annee}</h3>
            <p>{specialite}</p>
        </div>
    );
};

export default CvFormation;