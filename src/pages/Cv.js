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
                    <h3>Email: {Data.informations[0].email}</h3>
                    <p>{Data.apropos}</p>
                    <h3>Linkedin: <a href={Data.url}  rel="noreferrer" target="_blank">Visiter Linkedin</a></h3>
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
                        <h2>Formation</h2>
                    {
                    Data.formation.map((data, index) => (
                        <div key={index}>
                            <h3>{data.ecole} - {data.annee}</h3>
                            <p>{data.specialité}</p>
                        </div>
                    ))
                    }
                    </section>
                    <section id='competences'>
                        <h2>Compétences</h2>
                    {
                    Data.competences.map((data, index) => (
                        <div key={index}>
                            <h3>{data.nom} - {data.niveau}</h3>
                        </div>
                    ))
                    }
                    </section>
                    <section id='diplomes'>
                        <h2>Diplômes</h2>
                    {
                    Data.diplomes.map((data, index) => (
                        <div key={index}>
                            <h3>{data.diplome} - {data.annee}</h3>
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