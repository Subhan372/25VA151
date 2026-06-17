function Greetings({ count }) {
return (
<>
<h1>React Counter Application</h1>
<h2 className="count">{count}</h2>
</>
);
}
export default Greetings;
APP.JSX
import { useState } from "react";
import Greetings from "./Components/Greetings";
import "./App.css";
const App = () => {
const [count, setCount] = useState(0);
const increment = () => {
setCount(count + 1);
};
const decrement = () => {
setCount(count - 1);
};
const reset = () => {
setCount(0);
};
return (
<div className="outer-box">
<div className="container">
<Greetings count={count} />
<div className="buttons">
<button onClick={increment}>Increment (+)</button>
<button onClick={decrement}>Decrement (-)</button>
</div>
<button className="reset-btn" onClick={reset}>
Reset
</button>
</div>
</div>
);
}
export default App;