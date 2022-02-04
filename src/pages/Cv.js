import '../Sass/components/_Cv.scss';
import Me from '../img/img/profile-pic.png';
import CvData from "../data/cv.json";


const Cv = () => {

    const Data = CvData.cv[0];
    console.log(Data);

    return (
        <section id="Cv">
            <h1>CV</h1>
            <div className='CvContainer'>
                <img src={Me} alt="me" />
                <div id='informations'>
                    <h2>{Data.title}</h2>
                    <h3>Téléphone: {Data.informations[0].telephone}</h3>
                    <h3>Adresse: {Data.informations[0].adresse}</h3>
                    <h3>Adresse: {Data.informations[0].email}</h3>
                    <p>{Data.apropos}</p>
                    <a href={Data.url}  rel="noreferrer" target="_blank">Linkedin</a>
                    <section id='experience'>
                        <h2>Expériences</h2>
                    {
                    Data.experiences.map((data, index) => (
                        <div key={index}>
                            <h3>{data.poste} - {data.entreprise}</h3>
                            <h4>{data.durée}</h4>
                            <p>{data.mission}</p>
                        </div>
                    ))
                    }
                    </section>
                    <section id='formation'>
                    {
                    Data.formation.map((data, index) => (
                        <div key={index}>
                            <h3>{data.ecole}</h3>
                            <h4>{data.annee}</h4>
                            <p>{data.specialité}</p>
                        </div>
                    ))
                    }
                    </section>
                    <section id='competences'>
                    {
                    Data.competences.map((data, index) => (
                        <div key={index}>
                            <h3>{data.nom}</h3>
                            <h4>{data.niveau}</h4>
                        </div>
                    ))
                    }
                    </section>
                    <section id='diplomes'>
                    {
                    Data.diplomes.map((data, index) => (
                        <div key={index}>
                            <h3>{data.diplome}</h3>
                            <h4>{data.annee}</h4>
                        </div>
                    ))
                    }
                    </section>
                </div>
            </div>
            
        </section>
    );
};

export default Cv;