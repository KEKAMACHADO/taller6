import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import CatList from "../pages/CatList";
import DogList from "../pages/DogList";

function AppRouter() {
    return( 
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
}
export default AppRouter