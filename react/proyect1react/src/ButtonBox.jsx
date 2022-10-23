
// Inicio de la Funcion

const ButtonBox = ({ actionButtonBox, colourButton }) => {

    return (

        <div className="containerright">
            <div
                className="buttonright"
                onClick={actionButtonBox}
                style={{ background: `${colourButton}` }}
            >
                <i className="fa-solid fa-angle-right arrow-right"></i>
            </div>
        </div>

    );
};

// Inicio de la Funcion

export default ButtonBox;