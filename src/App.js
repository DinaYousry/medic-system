import "./App.css";
import Dashboard from "./Components/Dashboard";
import Loading from "./Components/Loading";
import Login from "./Components/Login";
import PatiantLog from "./Components/PatiantLog";
import WaitingPage from "./Components/WaitingPage";
// import Header from './Components/Header';
import History from "./Components/History";
import Post from "./Components/Post";
// import PostLogin from './Components/PostLogin'
// import Test from "./Components/Test";
import Testoo from "./Components/Testoo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Login/>      */}
        {/* <Loading /> */}
        {/* <PatiantLog /> */}
        {/* <WaitingPage /> */}
        {/* <Dashboard/> */}
        {/* <UseFetch /> */}
        {/* <Header /> */}
        {/* <History /> */}
        {/* <Post /> */}

        <Routes>
          <Route path="/PatiantLog" exact element={<PatiantLog />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Post />} />
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/History" exact element={<History />} />
          <Route path="/waiting" exact element={<WaitingPage />} />
          <Route path="/loading" exact element={<Loading />} />
          {/* <Route path="/test" exact element={<Test/>}/> */}
          <Route path="/testoo" exact element={<Testoo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
