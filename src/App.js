import './App.css';
import Child from './Child/Child';
import HelloWorld from './Class Components/HelloWorld';
import './Function Components/Button'
import Button from './Function Components/Button';

function App() {
  return (
    <div className="App">
      Hello My First React Application
      <Button text="Welcome to Button Component" myButton="Hoping the Best"/>
      <HelloWorld text="Welcome to the Class Component"/>
      <Child />
    </div>
  );
}

export default App;
