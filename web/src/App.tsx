interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>;
}

function App() {
  return (
    <div>
      <Button text="Hello" />
      <Button text="01" />
      <Button text="qqq" />
      <Button text="aaaa" />
    </div>
  );
}

export default App;
