import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Famous Phrases for Programmers:</h1>
        
      <Testimonio
        nombre='Ada Lovelace'
        pais='United kindom'
        imagen='ada-lovelace'
        cargo='Mathematician and Writer'
        empresa='England'
        testimonio='Imagination is the faculty of discovery, preeminently. It is what penetrates 
        the worlds never seen around us, the worlds of science.' />
        <Testimonio
         nombre='Bill Gates'
         pais='USA'
         imagen='bill-gates'
         cargo='Business magnate, software developer, investor, author and philanthropist'
         empresa='USA'
         testimonio='The world will not care about your self-esteem. The world will expect you to 
         achieve something, whether or not you feel good about yourself.' />
        <Testimonio
        nombre='James Gosling'
        pais='Canadá'
        imagen='james-gosling'
        cargo='Software Engineer'
        empresa='Amazon web'
        testimonio="There is one thing worse than a program that doesn't work the way it should: a program that works the way it shouldn't." />
      </div>
      </div>
  );
}

export default App;
