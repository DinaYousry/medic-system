import React, { useState, useEffect } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Loading from "./Loading";

function Dashboard() {
  const navigate = useNavigate();
  const [showloading, setShowloading] = useState(false);

  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [showCalModal, setshowCalModal] = useState(false);

  const [date, setDate] = useState("");
  // const [date, setDate] = useState(new Date());
  const [caldate, setCalDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [id, setId] = useState(null);
  const [isAttendedDoctor, setIsAttendedDoctor] = useState("true");
  const [isAttendedPatient, setIsAttendedPatient] = useState("false");
  const [applicationUserId, setApplicationUserId] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login");
    }
  });

  useEffect(() => {
    const day = () => {
      let test = new Date();
      let dateMDY = `${test.getFullYear()}-${
        test.getMonth() + 1
      }-${test.getDate()}`;
      console.log(dateMDY);

      setShowloading(true);
      fetch(`https://www.clinc.somee.com/api/1.0/Visits/List/${dateMDY}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setAllData(json);
          // getUsers();
          setShowloading(false);
        });
    };
    day();
  }, []);

  const day = () => {
    let test = new Date();
    let dateMDY = `${test.getFullYear()}-${
      test.getMonth() + 1
    }-${test.getDate()}`;
    console.log(dateMDY);

    fetch(`https://www.clinc.somee.com/api/1.0/Visits/List/${dateMDY}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        // getUsers();
      });
  };

  function getUsers() {
    setShowloading(true);
    fetch("https://www.clinc.somee.com/api/1.0/Visits/List").then(
      (result) => {
        result.json().then((result) => {
          setData(result);
          setAllData(result);
          console.warn("result", data);
          setShowloading(false);
          setShowEditModal(false);
          setShowDeleteModal(false);
        });
      }
    );
  }

  function check(item) {
    console.warn("check", item.id);
    setShowloading(true);
    fetch(
      `https://www.clinc.somee.com/api/1.0/Visits/IsAttendedPatient/${item.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    ).then((result) => {
      console.log("aly result", result);
      // getUsers();
      setShowloading(false);
      day();
      // onChangeCal();
    });
  }

  function checkFinish(item) {
    console.warn("check", item.id);
    fetch(
      `https://www.clinc.somee.com/api/1.0/Visits/IsFinished/${item.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    ).then((result) => {
      console.log("aly result", result);
      day();
      // getUsers();
      // onChangeCal();
    });
  }

  function selectUser(item) {
    setShowEditModal(true);
    setDate(item.date);
    setCalDate(item.caldate);
    setTime(item.time);
    setId(item.id);
    setIsAttendedDoctor(item.isAttendedDoctor);
    setIsAttendedPatient(item.isAttendedPatient);
    setIsAttendedPatient(item.isAttendedPatient);
    setApplicationUserId(item.applicationUserId);
  }
  function selectUserd(item) {
    setShowDeleteModal(true);
    setId(item.id);
  }


  function ShowCal() {
    setshowCalModal(true);
  }

  function updateUser() {
    console.warn(
      date,
      time,
      id,
      isAttendedPatient,
      isAttendedDoctor,
      applicationUserId
    );
    let item = {
      isAttendedPatient,
      isAttendedDoctor,
      date,
      time,
      id,
      applicationUserId,
    };
    fetch("https://www.clinc.somee.com/api/1.0/Visits/Visit", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      // console.log("aly result", result);
      getUsers();
      // day();
      // onChangeCal(daty);
      setShowEditModal(false);
    });
  }

  function deleteUser(id) {
    fetch(`https://www.clinc.somee.com/api/1.0/Visits/Visit/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    }).then((result) => {
      console.log(id);
      getUsers();
      // day();
      setShowDeleteModal(false);
    });
    console.warn(id);
  }

  function isEven(value) {
    if (value % 2 === 0) return true;
    else return false;
  }

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };
  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  const handleCalModalClose = () => {
    setshowCalModal(false);
  };

  const dark = {
    fontSize: "25px",
    color: "#FFF",
    fontWeight: "500",
    // border: "3px solid #FFF",
    // borderRadius: "5px",
    // height: "22px",
    // padding: "3px 3px 3px 3px",
  };
  const light = {
    fontSize: "25px",
    color: "#43425Ded",
    fontWeight: "500",
    // border: "3px solid #43425Ded",
    // borderRadius: "5px",
    // height: "22px",
    // padding: "3px 3px 3px 3px",
  };

  const dark2 = {
    fontSize: "23px",
    color: "#FFF",
    fontWeight: "510",
  };
  const light2 = {
    fontSize: "22px",
    color: "#43425Ded",
    fontWeight: "510",
  };

  async function search(key) {
    console.warn(key);

    let result = await fetch(
      `https://www.clinc.somee.com/api/1.0/Visits/Search/${key}`
    );
    result = await result.json();
    setData(result);
  }

  const onChangeCal = (daty) => {
    setCalDate(daty);
    console.log("setCalDate", daty);
    console.log("setCalDate", caldate);

    let testd = daty.getUTCDate() + 1;
    console.log(testd);
    let testy = daty.getUTCFullYear();
    console.log(testy);
    let testm = daty.getUTCMonth() + 1;
    console.log(testm);

    let test = daty;
    let dateMDY = `${test.getFullYear()}-${
      test.getMonth() + 1
    }-${test.getDate()}`;
    console.log(dateMDY);

    fetch(`https://www.clinc.somee.com/api/1.0/Visits/List/${dateMDY}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        // getUsers();
      });

    setshowCalModal(false);
  };

  let test = new Date();
  let dateMDY = `${test.getDate()}-${
    test.getMonth() + 1
  }-${test.getFullYear()}`;

  return (
    <>
      <Header
        nameList={allData}
        setData={setData}
        search={search}
        getUsers={getUsers}
      />

      <Row>
        <Modal show={showCalModal} onHide={handleCalModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pick date</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Calendar
              onChange={onChangeCal}
              value={caldate}
              dateFormat="dd/MM/yyyy"
            />
          </Modal.Body>
        </Modal>
        <Col
          lg={4}
          md={4}
          xs={5}
          className=" ml-auto mr-auto  mb-auto"
          style={{
            fontSize: "27px",
            color: "#43425D",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {dateMDY}
        </Col>

        <Col
          lg={4}
          md={1}
          xs={2}
          className=" ml-auto mr-auto mt-auto mb-auto"
          style={{ fontSize: "18px", color: "#43425D", fontWeight: "300" }}
        >
          <button
            style={{ fontSize: "18px", color: "#43425D" }}
            // className="far b"
            className=" b"
            onClick={ShowCal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-calendar-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </Col>

        <Col lg={4} md={6} xs={5} className=" ml-auto mr-auto mb-auto">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button className="btn-block do" onClick={getUsers}>
              All users
            </Button>
          </div>
        </Col>
      </Row>

      {showloading && <Loading />}
      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit info</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">ID </p>
          <input
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            className="inp"
            readOnly
          />

          <input
            // type="text"
            value={applicationUserId}
            type="hidden"
            onChange={(e) => {
              setApplicationUserId(e.target.value);
            }}
            className="inp"
            readOnly
          />
          <p className="labe">Visit Time</p>

          <input
            type="text"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            className="inp"
          />
          <p className="labe">Visit Date</p>
          <input
            type="text"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className="inp"
          />
          <input type="hidden" value={isAttendedPatient} className="inp" />
          <input type="hidden" value={isAttendedDoctor} className="inp" />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block mo" onClick={updateUser}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleDeleteModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this User ?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <br/><br/><br/>
          <Button variant="btn btn-block mo" onClick={() => deleteUser(id)}>
            Yes
          </Button>
          <Button variant="btn btn-block mo" onClick={handleDeleteModalClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

      {data.map((item, index) => (
        <div key={item.id}>
          <br />
          <div className="moob" style={{ textAlign: "center" }}>
            <div className={isEven(data.indexOf(item)) ? "cardy2" : "cardy3"}>
              <Row style={{ textAlign: "start" }}>
                <Col lg={1} md={1} xs={2} className="  mt-auto mb-auto">
                  <p className="bobo">{index + 1}|</p>
                </Col>
                <Col
                  lg={5}
                  md={5}
                  xs={9}
                  className="  mt-auto mb-auto mr-auto ml-auto"
                >
                  <button
                    style={isEven(data.indexOf(item)) ? dark : light}
                    className=" b"
                    onClick={() => selectUserd(item)}
                  >
                    x
                  </button>
                  <button
                    className="  mt-auto mb-auto b"
                    style={isEven(data.indexOf(item)) ? dark2 : light2}
                    // onClick={handleEditModalShow}
                    onClick={() => selectUser(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="22"
                      fill="currentColor"
                      className="bi bi-pencil-square b"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>
                  <p
                    className="bo "
                    style={{
                      fontWeight: "600",
                      padding: "0px",
                      fontSize: "18px",
                    }}
                  >
                    {item.firstName} {item.lastName} / {item.age} yrs
                  </p>
                </Col>
                {/* <Col lg={2} md={2} xs={4} className="  mt-auto mb-auto ">
                  <p className="bo" style={{ fontSize: "15px" }}>
                    {item.phone} / {item.email}
                  </p>
                </Col> */}
                {/* <Col
                  lg={2}
                  md={4}
                  xs={4}
                  className="ml-auto mr-auto mt-auto mb-auto "
                >
                  <p className="bo">{item.age} years</p>
                </Col> */}
                <Col lg={4} md={4} xs={6} className="mt-auto mb-auto ">
                  <p className="bo">
                    {item.date} / {item.time}
                    <p className="bo" style={{ fontSize: "15px" }}>
                      {item.phone} / {item.email}
                    </p>
                  </p>
                  {/* <p className="bo">{item.time}</p> */}
                </Col>
                <Col lg={2} md={2} xs={6} className=" mt-auto mb-auto">
                  {/* <div className="boo"> */}
                  {/* <div className="check-box-group"> */}
                  <label
                    className="custom-checkbox"
                    tab-index="0"
                    aria-label="Checkbox Label"
                  >
                    <input
                      type="checkbox"
                      onClick={() => {
                        check(item);
                      }}
                      checked={item.isAttendedPatient}
                    />
                    <span className="checkmark"></span>
                    <span className="label">Arrived</span>
                  </label>

                  <label
                    className="custom-checkbox"
                    tab-index="0"
                    aria-label="Another Label"
                  >
                    <input
                      type="checkbox"
                      onClick={() => {
                        checkFinish(item);
                      }}
                    />
                    <span className="checkmark"></span>
                    <span className="label">Finished</span>
                  </label>
                  {/* </div> */}
                  {/* </div> */}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Dashboard;
