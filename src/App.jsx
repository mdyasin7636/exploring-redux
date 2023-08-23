// import CaseOne from "./pages/CaseOne/CaseOne";
import CounterContext from "./context/CounterContext";
import CaseTwo from "./pages/CaseTwo/CaseTwo";

const App = () => {
  return (
    <CounterContext>
      {/* <CaseOne/> */}
      <CaseTwo/>
    </CounterContext>
  );
};

export default App;