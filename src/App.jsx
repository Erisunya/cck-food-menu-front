import "./App.css";
import Router from "./Router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/layout/Header";
import Places from "./components/pages/Places";
import Stalls from "./components/pages/Stalls";
import Menu from "./components/pages/Menu";
import Feedback from "./components/pages/Feedback";

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
