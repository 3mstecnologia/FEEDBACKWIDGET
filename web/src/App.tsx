interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return (
    <button
      className="
    bg-slate-500
    p-2
    rounded-sm	"
    >
      {props.text}
    </button>
  );
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Hello" />
      <Button text="01" />
      <Button text="qqq" />
      <Button text="aaaa" />
    </div>
  );
}

export default App;
