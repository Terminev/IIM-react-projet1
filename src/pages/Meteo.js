import MeteoComponent from '../components/MeteoComponent';
import '../Sass/components/_Meteo.scss';

const Meteo = () => {

    return (
        <section id='Meteo'>
            {/* importation du component Meteo */}
            <MeteoComponent/>
        </section>
    );
};

export default Meteo;