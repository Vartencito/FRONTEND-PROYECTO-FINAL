import React, {} from 'react';
import Publicaciones from './components/Publicaciones';

function App() {
  

return (
<>  

<div className='container'>
  <div className='row'>
    <div className='col-md-6'>
      <h1>{"My Art (demo)"}</h1>
    </div>
    <div className='col-md-6'>
      <Publicaciones />
    </div>
  </div>
</div>

</>
  );
}

export default App;
