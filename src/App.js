import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
