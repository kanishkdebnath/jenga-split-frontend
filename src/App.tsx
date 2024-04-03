import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MultipleExpenseSection from "./components/MultipleExpenseSection";
import SingleExpenseSection from "./components/SingleExpenseSection";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/single" Component={SingleExpenseSection} />
      <Route path="/multiple" Component={MultipleExpenseSection} />
    </Routes>
  );
}

export default App;
