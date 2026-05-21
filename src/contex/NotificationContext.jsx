import { createContext, useState } from "react";
import "../css/notification.css";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = "success") => {
        setNotification({
        message,
        type,
        });

        setTimeout(() => {
        setNotification(null);
        }, 2000);
    };

    const closeNotification = () => {
        setNotification(null);
    };

    return (
        <NotificationContext.Provider
        value={{ showNotification }}
        >
        {children}

        {notification && (
            <div className={`notification ${notification.type}`}>
            <span>{notification.message}</span>

            <button onClick={closeNotification}>×</button>
            </div>
        )}
        </NotificationContext.Provider>
    );
};