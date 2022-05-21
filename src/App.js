import Imagen from './components/Imagen';
import Description from './components/Description';
// import axios from 'axios';
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
      <Imagen url={publication.url} />
      <Description description={publication.description} />
</div>
</div>
</>
  );
}

export default App;
