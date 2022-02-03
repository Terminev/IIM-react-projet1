import '../Sass/components/_Home.scss';
import imgHello from '../img/img/hello.png'

const Home = () => {

    return (
        <section id='home'>
            <div className='homeContainer'>
                <div className='homeInformations'>
                    <h2>Alexandre Caramel</h2>
                    <p>Développeur Web</p>
                    <p>IIM - Promo 2024</p>
                </div>
                <img src={imgHello} alt="hello" />
            </div>
        </section>
    );
};

export default Home;