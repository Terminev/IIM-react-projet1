// import '../Sass/components/_MeteoCard.scss';

// const MeteoCard = ({temp, name, icon}) => {

//     const iconImg = 'http://openweathermap.org/img/wn/'+ icon +'@2x.png'
//     return ( 
//         <div id='MeteoCard'>
//             <div>
//                 <h2>{name} :</h2>
//                 <div>
//                     <h3>{temp} °C</h3>
//                     <img src={iconImg} alt="WeatherCondition" />
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default MeteoCard;

import '../Sass/components/_MeteoCard.scss';

const MeteoCard = () => {


    return ( 
        <div id='MeteoCard'>
            <h2>Il fait actuellement:</h2>
            <div id='MeteoBackground'>
                <div>
                    <h3>Paris</h3>
                    <h4>13 °C</h4>
                </div>
                <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="WeatherCondition" />
            </div>
        </div>
    );
};

export default MeteoCard;