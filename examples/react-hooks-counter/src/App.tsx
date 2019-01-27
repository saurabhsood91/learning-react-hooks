import * as React from 'react';
import './App.css';

const fruits: string[] = ['Banana', 'Apple', 'Mango']

const getNewFruit = (count: number): string => {
  const index = count % fruits.length
  return fruits[index]
}

const App = () => {

  // The only argument to `useState` is the initialState
  // Here, we are initializing the value of the counter to 0.
  const [count, setCount] = React.useState(0)
  const [fruit, setFruit] = React.useState(fruits[0])

  return (
    <div className="counter">
      <p>You clicked {count} times</p><br />
      <p>Current Fruit: <b>{fruit}</b></p><br />
      <button onClick={() => {
        const newCount = count + 1;
        setCount(newCount);
        setFruit(getNewFruit(newCount));
      }
      }>Click me!</button>
    </div>
  );

}

export default App;
