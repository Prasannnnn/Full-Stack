import myImage from './tees.png';
import './App.css';

function App(){
  return (
    <div>
      <h1>Hello, World!</h1>{/*Display a heading with hello world*/}
      <img src={myImage} alt="My Favorite" style={{ width: '300px', height: '200px' }} />

    </div>
  )
}
export default App;
