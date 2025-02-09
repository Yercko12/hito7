import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Pizza = () => {
    const { pizzaId } = useParams(); 
    const navigate = useNavigate();
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/pizzas/${pizzaId}`)
            .then((response) => response.json())
            .then((data) => setPizza(data))
            .catch(() => setError("Error al obtener los detalles de la pizza"));
    }, [pizzaId]);

    if (error) return <p>{error}</p>;
    if (!pizza) return <p>Cargando...</p>;

    return (
        <div className="pizza-detail">
            <img src={pizza.img} alt={pizza.name} />
            <h1>Pizza {pizza.name}</h1>
            <p><strong>Descripción:</strong> {pizza.desc}</p>
            <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
            <p><strong>Precio:</strong> ${pizza.price}</p>
            <button onClick={() => navigate("/")} className="btn btn-secondary">Volver al inicio</button>
        </div>
    );
};

export default Pizza;
