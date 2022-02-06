const CvInformations = ({title, telephone, adresse, email, apropos, url}) => {

    return (
        <div>
            <h2>{title}</h2>
                <h3>Téléphone: {telephone}</h3>
                <h3>Adresse: {adresse}</h3>
                <h3>Email: {email}</h3>
                <p>{apropos}</p>
                <h3>Linkedin: <a href={url}  rel="noreferrer" target="_blank">Visiter Linkedin</a></h3>
        </div>
    );
};

export default CvInformations;