import {BrowserRouter,Route,Routes} from "react-router-dom"
import SignupForm from "./components/SignupForm/SignForm"
import LoginForm from "./components/LoginForm/LoginForm"
import McHomepage from "./components/McHomepage"
import PatientViwer from "./components/PatientViwer"
import CaretakerViwe from "./components/CaretakerViwe"
import ProtectedRoute from './components/ProtectedRoute'
import './App.css';

const App =() =>(
    <BrowserRouter>
       <Routes>
        <Route exact path="/sign" element={<SignupForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        {/* Protected Routes Wrapper */}
        <Route element={<ProtectedRoute />}>
        <Route exact path="/" element={<McHomepage />} />
        <Route exact path="/patient" element={<PatientViwer />} />
        <Route exact path="/caretaker" element={<CaretakerViwe />} />
        </Route>
       </Routes>
    </BrowserRouter>
)
  

export default App;
