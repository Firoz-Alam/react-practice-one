import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter'
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
     <Counter>
        {
          (count,incrementCounter) => (
            <ClickCounter count={count} incrementCounter = {incrementCounter}/>
          )
        }
      </Counter>

      <Counter>
        {
          (count,incrementCounter) => <HoverCounter count={count} incrementCounter = {incrementCounter}/>
        }
      </Counter>
    </div>
  );
}

export default App;
