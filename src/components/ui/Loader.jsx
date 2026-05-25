import "../../css/loader.css";
import {LOADER_TEXTS} from "../../constants/index"

const Loader = ({ text = LOADER_TEXTS.DEFAULT }) => {
    return (
        <div className="loader-container">
            <div className="loader-card">
                <div className="loader-spinner"></div>
                <h2>{text}</h2>
            </div>
        </div>
    );
};

export default Loader;