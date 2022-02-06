import '../Sass/components/_MeteoCard.scss';

const MeteoCard = ({temp, name, icon}) => {

    const iconImg = 'http://openweathermap.org/img/wn/'+ icon +'@2x.png'
    console.log(iconImg);
    return ( 
        <div id='MeteoCard'>
            <div>
                <h2>{name}</h2>
                <div>
                    <h3>{temp} °C</h3>
                    <img src={iconImg} alt="WeatherCondition" />
                </div>
                
            </div>
        </div>
    );
};

export default MeteoCard;