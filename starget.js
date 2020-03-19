/*
  Write JavaScript/React code here and press Ctrl+Enter to execute.

  Try: mountNode.innerHTML = 'Hello World!';
   Or: ReactDOM.render(<h2>Hello React!</h2>, mountNode);
*/
function loghandle(){
  console.log(Math.random())
}
function Button(props){
  const handleClick = () => props.onclickFunction(props.increment)
  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props){
  return(<div>{props.counter}</div>)
}

function App(){
  const  [counter, setCounter] = useState(5)
  const incremmenter = (increment) => setCounter(counter+increment)
  return(
    <>
      <Button onclickFunction = {incremmenter} increment={1}/>
      <Button onclickFunction = {incremmenter} increment={2}/>
      <Button onclickFunction = {incremmenter} increment={3}/>
      <Button onclickFunction = {incremmenter} increment={4}/>
      <Button onclickFunction = {incremmenter} increment={5}/>
      <Button onclickFunction = {incremmenter} increment={6}/>
      <Display counter = {counter}/>
    </>
  );
}

ReactDOM.render(
  <App />, mountNode);
// ReactDOM.render(<HelloWorld />, document.getElementById('mountNode'))
