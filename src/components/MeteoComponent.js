import React, { useEffect, useState} from 'react';
import axios from 'axios';
import '../Sass/components/_MeteoComponent.scss';
import MeteoCard from './MeteoCard';

const MeteoComponent = () => {

    const [data, setData] = useState('');
    const [ville, setVille]= useState('paris');

    console.log(ville);

    useEffect(() => {
        axios.get(
            'https://api.openweathermap.org/data/2.5/weather?q='+ville+'&appid=ea47585d5d7af6136536556b8101c20d&units=metric&lang=fr'
            )
        .then((res) => setData(res.data));
        console.log(data);
    }, [ville]);

    function submit(){
        const InputVille = document.getElementById('villeinput').value
        setVille(InputVille)
    }
    

    return ( 
        <div id='MeteoComponent'>
            <div>
                <input type="text" id='villeinput' />
                <input type="submit" value="Valider" onClick={()=>submit()}/>
                <MeteoCard ville={data.name} temp={data.main.temp} icon={data.weather.icon}  />
            </div>
        </div>
    );
};

export default MeteoComponent;