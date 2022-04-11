import React, { useState } from "react";
// import {LogoImage} from '../assets';
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

function PatiantLog() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showloading, setShowloading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  async function Log() {
    if (
      error.email ||
      error.date ||
      error.dateOfBirth ||
      error.firstName ||
      error.lastName ||
      error.time ||
      error.lastName
    ) {
      alert("برجاء ادخال البيانات ");
      navigate("/patiantlog");
    } else {
      setShowloading(true);
      //   let datee  = moment(date).toISOString(true);
      //  setDate(datee)
      date.setDate(date.getDate() + 1);
      let item = { firstName, lastName, date, email, time, dateOfBirth, phone };
      console.warn(item);

      let result = await fetch(
        "https://www.clinc.somee.com/api/1.0/Visits/RegisterUserAndVisit",
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      result = await result.json();
      console.warn("result", result);
      navigate("/waiting");
      setShowloading(false);
    }
  }

  const onChangeCal = (daty) => {
    // let test = daty;
    // let dateMDY = `${test.getDate()}-${
    //   test.getMonth() + 1
    // }-${test.getFullYear()}`;
    // console.log("date",dateMDY);

    setDate(daty);
    console.log("setDate", daty);
    console.log("setDate final", date);
  };

  if (!email) {
    error.email = "يرجى كتابة البريد الالكتروني";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
    error.email = "ُ البريد الالكتروني غير صحيح";
  } else {
    error.email = "";
  }
  if (!phone) {
    error.phone = "يرجى كتابة رقم الهاتف";
  } else {
    error.phone = "";
  }
  if (!firstName) {
    error.firstName = "يرجى كتابة الاسم الاول";
  } else {
    error.firstName = "";
  }
  if (!lastName) {
    error.lastName = "يرجى كتابة الاسم الاخير ";
  } else {
    error.lastName = "";
  }
  if (!date) {
    error.date = "يرجى اختيار يوم زيارتك ";
  } else {
    error.date = "";
  }
  if (!time) {
    error.time = "يرجى اختيار ميعاد زيارتك ";
  } else {
    error.time = "";
  }
  if (!dateOfBirth) {
    error.dateOfBirth = "يرجى كتابة تاريخ الميلاد ";
  } else {
    error.dateOfBirth = "";
  }

  return (
    <>
      {showloading && <Loading />}
      <Container className="fonts" style={{ width: "55%", color: "#43425D" }}>
        <h1 className=" mt-5 text-center rounded b" style={{ fontSize: "48" }}>
          احجز ميعادك اونلاين
        </h1>
        <br />
        <div className="slider"></div>
        <h4 className=" mt-2 text-center b" style={{ fontSize: "48" }}>
          املىء بياناتك الان وسنقوم بالاتصال بك لتأكيد الحجز
        </h4>
        <br />
        <Row className="mt-3 mr-20 ml-20 ">
          <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
            <Form className="rb">
              <Form.Group className="mb-3 rb" controlId="formBasicLname ">
                <Form.Control
                  style={{ color: "#43425D" }}
                  className="text-right "
                  type="text"
                  placeholder=" الاسم الاخير"
                  value={lastName}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
                {error.lastName && <p className="error2">{error.lastName}</p>}
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg ">
            <Form className="ra">
              <Form.Group
                className="mb-3 text-right ra"
                controlId="formBasicEmail"
              >
                <Form.Control
                  className="text-right "
                  type="email"
                  placeholder="الاسم الاول"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {error.firstName && <p className="error">{error.firstName}</p>}
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
            <Form className="rc">
              <Form.Group className="mb-3 rc" controlId="formBasicFname">
                <Form.Control
                  className="text-right "
                  type="text"
                  placeholder="البريد الالكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error.email && <p className="error2">{error.email}</p>}
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
            <Form className="rd">
              <Form.Group className="mb-3 rd" controlId="formBasicPassword">
                <Form.Control
                  className="text-right "
                  type="text"
                  placeholder="رقم الهاتف"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {error.phone && <p className="error2">{error.phone}</p>}
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={12} className=" ml-auto mr-auto rounded-lg">
            <Form>
              <Form.Select
                aria-label="Default select example"
                className="text-right"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option dir="rtl">الوقت</option>
                <option> 13:00:00 </option>
                <option> 14:00:00 </option>
                <option> 15:00:00 </option>
                <option> 16:00:00 </option>
                <option> 17:00:00 </option>
                <option> 18:00:00 </option>
                <option> 19:00:00 </option>
                <option> 20:00:00 </option>
                <option> 21:00:00 </option>
              </Form.Select>
              {error.time && <p className="error2">{error.time}</p>}
            </Form>
          </Col>
          <Col lg={3} md={3} sm={12} className=" ml-auto mr-auto rounded-lg">
            <div>
              <input
                type="date"
                className="date"
                min="1980-01-01"
                max="2030-12-31"
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
              {error.dateOfBirth && (
                <p className="error2">{error.dateOfBirth}</p>
              )}
            </div>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <p className="par">ادخل تاريخ الميلاد</p>
          </Col>
          <br /> <br />
          <br /> <br />
          <p className="par2">{date.toString()} اختر يوم زيارتك </p>
          {error.date && <p className="error">{error.date}</p>}
          <Calendar
            onChange={onChangeCal}
            value={date}
            // dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
          {console.log(date)}
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br /> <br />
          <Button
            className=" btn-block mo ml-auto mr-auto  "
            type="submit"
            onClick={Log}
          >
            إرســـال
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default PatiantLog;
