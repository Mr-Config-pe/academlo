
// Inicio de la Funcion

const ButtonBox = ({ actionButtonBox, colourButton }) => {

    return (

        <div className="containerright">
            <button
                className="buttonright"
                onClick={actionButtonBox}
                style={{ background: `${colourButton}` }}
            >
                <i className="fa-solid fa-angle-right arrow-right"></i>
            </button>
            <div className="displayno">
                <img src="./src/assets/images/display-300.png" alt="" />
            </div>
        </div>

    );
};

// Inicio de la Funcion

export default ButtonBox;