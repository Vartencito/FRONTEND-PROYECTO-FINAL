// import Imagen from './components/Imagen';
import Description from './components/Description';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  /*axios.get(url)
  .then(function(response{
  }) //cuando termine de hacer la petición
  .catch(function (error){
  //manejar el error
  })
  .then(function(){
  //lo que se ejecuta siempre
  })*/
  
let [imagenes, setImagenes] = useState(''); 

useEffect(() =>{
  async function buscarPublicaciones(){
    const res = await axios.get("http://localhost:4000/publicaciones/1");
    setImagenes(res.data);
    return imagenes;
  }
},[])


const publication = 
{
url: "https://i.imgur.com/3ZNfQJW.jpeg",
user: "sa",
description: "ddd"
}

return (
<>
<div className="container-fluid" >
<div className="text-center-center">
      {/* <Imagen url={publication.url} /> */}
      {/* <img src={imagen} /> */}
      <Description description={publication.description} />
      <input placeholder='Id usuario'/>
      <input placeholder='Id publicacion'/>
      <button>Enviar</button>

      {

          imagenes.map(imagen => (
            <div>
                <p>{ imagen.name }</p>
            </div>
          ))
      }
</div>
</div>
</>
  );
}

export default App;
