import StatusBar from "./Core/StatusBar";
import Theme from "./Core/Theme";

const App = () => {
  return (
    <Theme>
      <div className="App">
        <StatusBar />
        <h1>Hello World!</h1>
      </div>
    </Theme>
  );
};

export default App;
