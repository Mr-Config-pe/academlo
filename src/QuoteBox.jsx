
// Inicio de la Funcion

const QuoteBox = ({ quotePhrase, quoteAuthor }) => {

    return (
        <div className="container-quotebox">
            <p className="quotebox1">
                {quotePhrase}
            </p>
            <h4 className="quotebox2">
                {quoteAuthor}
            </h4>
        </div>

    );
};

//Fin de la Funcion
export default QuoteBox;
