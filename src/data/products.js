import {collection,doc,getDoc,getDocs,query,where } from "firebase/firestore";
import { db } from "../service/firebase";

const productsCollection = collection(db, "products");

// FIREBASE FUNTIONS

export const getProducts = async (category, brand) => {
    let productsQuery = productsCollection;

    if (category && brand) {
        productsQuery = query(
        productsCollection,
        where("category", "==", category),
        where("brand", "==", brand)
        );
    } else if (category) {
        productsQuery = query(
        productsCollection,
        where("category", "==", category)
        );
    }

    const snapshot = await getDocs(productsQuery);

    return snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
    }));
};

export const getProduct = async (id) => {
    const documentRef = doc(db, "products", id);

    const snapshot = await getDoc(documentRef);

    if (!snapshot.exists()) {
        throw new Error("Producto no encontrado");
    }

    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
};



export const getCategoriesWithBrands = async () => {
    const snapshot = await getDocs(productsCollection);

    const productsFromFirebase = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
    }));

    const categories = productsFromFirebase.reduce((acc, product) => {
        const categoryFound = acc.find(
        (item) => item.name === product.category
        );

        if (categoryFound) {
        if (!categoryFound.brands.includes(product.brand)) {
            categoryFound.brands.push(product.brand);
        }
        } else {
        acc.push({
            name: product.category,
            path: `/category/${product.category}`,
            brands: [product.brand],
        });
        }

        return acc;
    }, []);

    return categories;
};