import logo from './logo.svg';
import './App.css';
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Decision from "./components/Decision";
import Loop from "./components/Loop";
import Form from "./components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Counter from "./components/Counter";
import Datatype from "./components/Datatype";

function App() {

    function clickMe() {
        alert('You clicked me!');
    }

    return (
        <div className="App">
            <Menu/>
            {/*<h1>Hello World</h1>*/}
            {/*<FirstComponent name="John" age="30" clickMe={clickMe}/>*/}
            {/*<SecondComponent name="John" age="30" clickMe={clickMe}/>*/}
            {/*<Decision tempurature={30}/>*/}
            {/*<Loop names={["Lei Song",*/}
            {/*    "Gerard Lovell", "Simon Dacey", "John Doe"]}/>*/}
            {/*<Form/>*/}
            <Router>
                <Routes>
                    <Route path="/" element=<FirstComponent name="John" age="30" clickMe={clickMe}/>/>
                    <Route path="/second" element=<SecondComponent name="John" age="30" clickMe={clickMe}/> />
                    <Route path="/decision" element=<Decision tempurature={30}/> />
                    <Route path="/loop" element=<Loop names={["Lei Song",
                        "Gerard Lovell", "Simon Dacey", "John Doe"]}/> />
                    <Route path="/form" element=<Form/> />
                    <Route path={'/counter'} element={<Counter/>}/>
                    <Route path={'/datatype'} element={<Datatype/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
