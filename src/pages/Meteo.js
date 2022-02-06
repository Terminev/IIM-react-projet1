import MeteoComponent from '../components/MeteoComponent';
import Nav from '../components/Nav';
import '../Sass/components/_Meteo.scss';

const Meteo = () => {

    return (
        <>
        <Nav></Nav>
            <section id='Meteo'>
                {/* importation du component Meteo */}
                <MeteoComponent/>
            </section>
        </>
    );
};

export default Meteo;