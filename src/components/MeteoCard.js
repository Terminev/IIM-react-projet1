import '../Sass/components/_MeteoCard.scss';

const MeteoCard = ({temp, name, icon}) => {

    const iconImg = 'http://openweathermap.org/img/wn/'+ icon +'@2x.png'
    return ( 
        <div id='MeteoCard'>
            <h2>Il fait actuellement:</h2>
            <div id='MeteoBackground'>
                <div>
                    <h3>{name}</h3>
                    <h4>{temp} °C</h4>
                </div>
                <img src={iconImg} alt="WeatherCondition" />
            </div>
        </div>
    );
};

export default MeteoCard;
