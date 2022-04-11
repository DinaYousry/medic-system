import PtPersonal from "./Components/ptPersonal";
import { Route, Routes, Link } from "react-router-dom";
import Reservation from "./Components/reservation";

function Home() {
  return (
    <div>
      <h1>Hello Hwaya!!!</h1>
      <ul>
        <li>{/* <Link to="/Components/testYard">testYard</Link> */}</li>
        <li>
          <Link to="/Components/reservation">Reservation</Link>
        </li>
        <li>
          <Link to="/Components/ptPersonal">PtPersonal</Link>
        </li>
      </ul>
      <div>
        <Routes>
          {/* <Route path="/Components/testYard" element={TestYard} /> */}
          <Route path="/Components/reservation" element={<Reservation />} />
          <Route path="/Components/ptPersonal" element={<PtPersonal />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
