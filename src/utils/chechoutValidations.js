export const validateCheckoutForm = (buyer) => {


    const errors = {};

    /* NAME */

    if (!buyer.name.trim()) {
        errors.name = "El nombre y apellido es obligatorio";
    }

    /* EMAIL */

    if (!buyer.email.trim()) {
        errors.email = "El email es obligatorio";
    }

    if (!buyer.confirmEmail.trim()) {
        errors.confirmEmail = "Debes repetir el email";
    }

    if ( buyer.email && buyer.confirmEmail && buyer.email !== buyer.confirmEmail
    ) {
        errors.confirmEmail = "Los emails no coinciden";
    }

    /* PHONE */

    if (!buyer.phone.trim()) {
        errors.phone = "El teléfono es obligatorio";
    } else {
        const onlyNumbers = /^\d+$/;

        if (!onlyNumbers.test(buyer.phone)) {
        errors.phone = "El teléfono debe contener solo números";
        }

        if (buyer.phone.length < 10) {
        errors.phone = "El teléfono debe tener al menos 10 caracteres";
        }
    }

    return errors;
};