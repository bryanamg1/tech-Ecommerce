import "../css/loader.css";

const Loader = ({ text = "Cargando..." }) => {
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