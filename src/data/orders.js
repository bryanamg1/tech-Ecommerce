import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../service/firebase";

export const createOrder = async (orderData) => {
    const ordersCollection = collection(db, "orders");

    const docRef = await addDoc(ordersCollection, {
        ...orderData,
        createdAt: serverTimestamp(),
    });

    return docRef.id;
};