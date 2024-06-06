import './App.css';
import Cabecalho from './componentes/arquivojs/cabecalho';
import Inicio from './componentes/arquivojs/Inicio';
import ReactRoutes from './reactroutes/reactroutes'


function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <ReactRoutes>
      <App> </App>
      </ReactRoutes>

       
    </div>
  );
}

export default App;
