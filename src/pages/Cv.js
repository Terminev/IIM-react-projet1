import '../Sass/components/_Cv.scss';
import Me from '../img/img/profile-pic.png';
import CvData from "../data/cv.json";
import CvDiplome from '../components/CvDiplome';
import CvCompetences from '../components/CvCompetences';
import CvFormation from '../components/CvFormation';
import CvExperiences from '../components/CvExperiences';
import CvInformations from '../components/CvInformations';


const Cv = () => {

    const Data = CvData.cv[0];

    return (
        <section id="Cv">
            <h1>CV</h1>
            <div className='CvContainer'>
                <img src={Me} alt="me" />
                <div id='informations'>
                    <CvInformations title={Data.title} telephone={Data.informations[0].telephone} adresse={Data.informations[0].adresse} email={Data.informations[0].email} apropos={Data.apropos} url={Data.url} />
                    <section id='experience'>
                        <h2>Expériences</h2>
                        {/* permets d'afficher toutes les expériences présente dans le JSON */}
                    {
                    Data.experiences.map((data, index) => (
                        <CvExperiences index={index} duree={data.durée} poste={data.poste} entreprise={data.entreprise} mission={data.mission} />
                    ))
                    }
                    </section>
                    <section id='formation'>
                        <h2>Formation</h2>
                        {/* permets d'afficher toutes les formations présente dans le JSON */}
                    {
                    Data.formation.map((data, index) => (
                        <CvFormation index={index} ecole={data.ecole} annee={data.annee} specialite={data.specialité} />
                    ))
                    }
                    </section>
                    <section id='competences'>
                        <h2>Compétences</h2>
                    {/* permets d'afficher toutes les compétences présente dans le JSON */}
                    {
                    Data.competences.map((data, index) => (
                        <CvCompetences nom={data.nom} index={index} niveau={data.niveau}/>
                    ))
                    }
                    </section>
                    <section id='diplomes'>
                        <h2>Diplômes</h2>
                    {/* permets d'afficher tous les displômes présents dans le JSON */}
                    {
                    Data.diplomes.map((data, index) => (
                        <CvDiplome diplome={data.diplome} annee={data.annee} index={index} />
                    ))
                    }
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Cv;