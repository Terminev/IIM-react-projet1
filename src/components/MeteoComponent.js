import React, { useEffect, useState} from 'react';
import axios from 'axios';
import '../Sass/components/_MeteoComponent.scss';

const MeteoComponent = () => {

    const [data, setData] = useState('');
    const [ville, setVille]= useState('paris');

    console.log(ville);

    useEffect(() => {
        console.log('dans le useeffect');
        console.log(ville);
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
                <h2>{data.name}</h2>
                <input type="text" id='villeinput' />
                <input type="submit" value="Valider" onClick={()=>submit()}/>
            </div>
        </div>
    );
};

export default MeteoComponent;