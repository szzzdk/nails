import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./functions/utils";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
