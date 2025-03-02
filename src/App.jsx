import "./App.css";
import "./index.css";
import AdminPage from "./pages/admin/adminPage";
import { BrowserRouter, Routes ,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/*" element={<h1>Not Found</h1>}/>


      </Routes>
   </BrowserRouter>
  );
  
}

export default App;
