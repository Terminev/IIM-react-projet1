const CvDiplome = ({diplome, annee, index}) => {

    return (
        <div key={index}>
            <h3>{diplome} - {annee}</h3>
        </div>
    );
};

export default CvDiplome;