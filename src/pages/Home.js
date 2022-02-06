import '../Sass/components/_Home.scss';
import imgHello from '../img/img/hello.png';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <>
        <Nav></Nav>
            <section id='home'>
                <Nav></Nav>
                <div className='homeContainer'>
                    <div className='homeInformations'>
                        <h2>Alexandre Caramel</h2>
                        <p>Développeur Web</p>
                        <p>IIM - Promo 2024</p>
                    </div>
                    <img src={imgHello} alt="hello"/>
                </div>
            </section>
        </>
    );
};

export default Home;