import axios from "axios";
import React, {useState, useEffect} from "react";

function Publicaciones(){

    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        obtenerPublicaciones();
    },[]);

    const obtenerPublicaciones = (id) => {
        axios.get(`http://localhost:4000/publicaciones/${id}`)
        .then(res => {
        setPublicaciones(res.data);
    })
    .catch(err => console.log(err));
    }

    return(
        <>
        
        <div>
        <input type="text" placeholder="id imagen"></input>
        <button onClick={() => obtenerPublicaciones(
            document.querySelector("input").value
        )}>Buscar</button>
        </div>
        <div>
        {
           <>
                <img src={publicaciones.image}></img>
                <li>nombre: {publicaciones.name}</li>
                <li>description: {publicaciones.description}</li>
                <li>likes: {publicaciones.likes}</li>
                <li>dislikes: {publicaciones.dislikes}</li>
           </>
        }
        </div> 

        </>
    );

}

export default Publicaciones;