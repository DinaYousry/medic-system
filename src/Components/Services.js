const alyGetInfo = function (callBack) {
    fetch(`https://hwayaclinc.azurewebsites.net/api/User`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*',
      },
      // mode:'no-cors'
    })
      .then((res) => res.json())
      .then(
        (result) => {
          callBack(result);
          console.log(result);
        },
        (error) => {
          callBack(error);
        }
      );
  };
  
  const alyAddInfo = function (data, callBack) {
    fetch(`https://hwayaclinc.azurewebsites.net/api/Account/Register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
      // mode:'no-cors'
    })
      .then((res) => res.json())
      .then(
        (result) => {
          callBack(result);
          console.log(result);
        },
        (error) => {
          callBack(error);
        }
      );
  };
  
  module.exports.alyAddInfo = alyAddInfo;
  module.exports.alyGetInfo = alyGetInfo;
  