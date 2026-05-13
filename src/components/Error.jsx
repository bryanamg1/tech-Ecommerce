import { Link } from "react-router-dom";
import "../css/error.css";

const Error = () => {
    return (
        <section className="error-container">
            <div className="error-card">

                <h1 className="error-code">404</h1>

                <h2 className="error-title">
                    Página no encontrada
                </h2>

                <p className="error-text">
                    La ruta que intentaste visitar no existe o fue movida.
                </p>

                <Link to="/" className="error-button">
                    Volver al inicio
                </Link>

            </div>
        </section>
    );
};

export default Error;