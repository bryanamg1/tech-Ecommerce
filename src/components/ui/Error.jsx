import { Link } from "react-router-dom";
import "../../css/error.css";
import {ERROR_TEXTS, ROUTES} from "../../constants/index"

const Error = () => {
    return (
        <section className="error-container">
            <div className="error-card">

                <h1 className="error-code">{ERROR_TEXTS.CODE}</h1>

                <h2 className="error-title">
                    {ERROR_TEXTS.TITLE}
                </h2>

                <p className="error-text">
                    {ERROR_TEXTS.DESCRIPTION}
                </p>

                <Link to={ROUTES.HOME} className="error-button">
                    {ERROR_TEXTS.BUTTON}
                </Link>

            </div>
        </section>
    );
};

export default Error;