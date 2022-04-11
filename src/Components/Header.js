import React from "react";
import { Col, Row, Button, Dropdown } from "react-bootstrap";
// import Days from "react-calendar/dist/umd/MonthView/Days";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Header({ nameList, search, setData }) {
  const navigate = useNavigate();

  let userUnwrapped = JSON.parse(localStorage.getItem("user-info"));
  let user = { username: "Aly" };
  if (userUnwrapped) {
    user = userUnwrapped;
  } else {
    navigate("/login");
  }

  function logOut() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col lg={1} md={4} xs={3} className=" ml-auto mr-auto mt-4 mb-auto">
            <Link to="/" className="link">
              LOGO
            </Link>
          </Col>
          <Col lg={4} md={6} xs={9} className=" ml-auto mr-auto mt-4 mb-auto">
            <div className="box">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      search(e.target.value);
                      // search(e.target.value);
                    } else {
                      setData(nameList);
                      //  setDataa(allDataa);
                    }
                  }}
                />
                <label className="icon">
                  {/* <i className="fas fa-search"></i> */}
                  {/* <i className="fa-solid fa-radar"></i> */}
                  {/* <i className="fa-solid fa-magnifying-glass"></i>  */}
                  {/* <Fontawsome className="fa-solid fa-magnifying-glass" /> */}
                  {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square"/> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  {/* <FontAwesomeIcon icon="faCoffee" /> */}
                </label>
              </div>
            </div>
          </Col>
          <Col lg={1} md={6} xs={6}>
            <Button
              href="/History"
              className="btn-block vo ml-auto mr-auto mt-4"
            >
              History
            </Button>
          </Col>
          <Col lg={2} md={4} xs={6} className=" ml-auto mr-auto mt-4 mb-auto">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Hello {user.username ? user.username : "Please sign in."}
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop">
                <Dropdown.Item className="drpdown" href="/patiantlog">
                  Add patient
                </Dropdown.Item>
                <Dropdown.Item className="drpdown" onClick={logOut}>
                  logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <br />
        <FontAwesomeIcon icon="faCoffee" />
      </div>
    </>
  );
}

export default Header;
