import "./css/App.css";
import Header from "./Header";
import Content from "./ContentRouter";
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <div className="warning"><h1 className="warning_h1">שימו לב, האתר נבנה ע"י עמרי שושן והוא דוגמא בלבד</h1></div>
    </div>
  );
}

export default App;
