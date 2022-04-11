import React , { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import {useNavigate} from 'react-router-dom'
import Loading from './Loading'


const History = () => {

  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  const navigate = useNavigate();
  const [showloading, setShowloading] = useState(false);


  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login");
    }
  });

  useEffect(() =>{
    function getHistory() {
      setShowloading(true);
      fetch("https://www.clinc.somee.com/api/1.0/Visits/ListArchive").then(
        (result) => {
          result.json().then((result) => {
            setData(result);
            setAllData(result)
            setShowloading(false);
          });
        }
      );
    }
    getHistory();
  },[])

  async function search(key) {
    console.warn(key);

    let result = await fetch(
      `https://www.clinc.somee.com/api/1.0/Visits/SearchArchive/${key}`
    );
    result = await result.json();
    setData(result);
  }



  function isEven(value) {
    if (value % 2 === 0) return true;
    else return false;
  }

    return (
        <>
            <Header nameList={allData} setData={setData} search={search} />
              <br/>
              
              {showloading && <Loading />}

            {data.map((item, index) => (
        <div key={item.id}>
          <br />
          <div className="moob">
            <div className={isEven(data.indexOf(item)) ? "cardy4" : "cardy3"}>
              <Row style={{ textAlign: "start" }}>
                <Col
                  lg={1}
                  md={2}
                  sm={6}
                  className=" ml-auto mr-auto mt-auto mb-auto"
                >
                  <p className="bobo">{index + 1}|</p>
                </Col>
                <Col lg={2} md={2} sm={6} className=" ml-1 mt-auto mb-auto">

                  <p className="bo " style={{ fontWeight: "600" }}>
                    {item.firstName} {item.lastName}
                  </p>
                </Col>
                <Col lg={2} md={4} sm={6} className=" ml-auto mr-auto mt-2 ">
                  <p className="bo">{item.phone}</p>
                  <p className="bo">{item.email}</p>
                </Col>
                <Col
                  lg={2}
                  md={4}
                  sm={6}
                  className="ml-auto mr-auto mt-auto mb-auto "
                >
                  <p className="bo">{item.age} years</p>
                </Col>
                <Col lg={2} md={3} sm={6} className=" ml-auto mr-auto mt-auto ">
                  <p className="bo">{item.date}</p>
                  <p className="bo">{item.time}</p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      ))}

        </>
    )
}

export default History