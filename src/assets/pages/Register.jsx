import { useState, useContext } from 'react'; 
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext"; 

const Register = () => {
    const [Data, setData] = useState({ email: "", password: "", confirmPassword: "" });
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate(); 
    const { login } = useContext(UserContext); 

    const Cambio1 = (e) => {
        const { name, value } = e.target; 
        setData({ ...Data, [name]: value }); 
    };

    const Cambios2 = (e) => {
        e.preventDefault(); 
        const { email, password, confirmPassword } = Data; 

        if (!email || !password || !confirmPassword) {
            setMensaje("Todos los campos son obligatorios.");
        } else if (password.length < 6) {
            setMensaje("La contraseña debe tener al menos 6 caracteres.");
        } else if (password !== confirmPassword) {
            setMensaje("Las contraseñas no coinciden.");
        } else {
            setMensaje("¡Registro exitoso! Redirigiendo...");
            
            setTimeout(() => {
                login(); 
                navigate("/"); 
            }, 2000);
        }
    };

    return (
        <div className='formulario'>
            <h2>Registro</h2>
            <form onSubmit={Cambios2}>
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={Data.email}
                    onChange={Cambio1}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={Data.password}
                    onChange={Cambio1}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    value={Data.confirmPassword}
                    onChange={Cambio1}
                />
                <button type="submit">Registrarse</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default Register;
