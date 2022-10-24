
// Inicio de la Funcion

const ButtonBox = ({ actionButtonBox, colourButton }) => {

    return (

        <div className="containerright">
            <i className="fa-solid fa-angle-right arrow-right buttonright"
                onClick={actionButtonBox}
                style={{ background: `${colourButton}` }}></i>
            <div className="displayno">
                <img src="https://i.postimg.cc/CL9ZTyxf/displayno300.png" alt="" />
            </div>
        </div>

    );
};

// Inicio de la Funcion

export default ButtonBox;