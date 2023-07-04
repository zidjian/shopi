import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/products",
});

export async function getProductos(setDatos) {
    const resultado = await api.get();
    setDatos(resultado.data);
}
