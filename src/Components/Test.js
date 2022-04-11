// import React, {useState} from 'react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

// function Test() {
//     const [date, setDate] = useState(null)
//     return (
//         <div>
//             <p>pick your birthday</p>
//             <DatePicker selected={date} onChange={date => setDate(date)}
//             dateFormat='dd/MM/yyyy'
//             // minDate={new Date()}
//             showYearDropdown
//             filterDate={date => date.getDay() !== 6 && date.getDay() !== 5 }
//             isClearable
//             // showYearDropdown
//             // scrollableMonthYearDropdown
//             />
//             {console.log(date)}
//             <br/>            <br/>
//             <br/>
//             <br/>
//             <input type="date" name="begin"
//         placeholder="dd-mm-yyyy"
//         min="1997-01-01" max="2030-12-31"/>
//         </div>
//     )
// }

// export default Test

// import React from 'react';

// class RegisterForm extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         fields: {},
//         errors: {}
//       }
//       this.handleChange = this.handleChange.bind(this);
//       this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
//     };
//     handleChange(e) {
//       let fields = this.state.fields;
//       fields[e.target.name] = e.target.value;
//       this.setState({
//         fields
//       });
//     }
//     submituserRegistrationForm(e) {
//       if (this.validateForm()) {
//           let fields = {};
//           fields["emailid"] = "";
//           fields["password"] = "";
//           this.setState({fields:fields});
//           alert("Form submitted");
//       }
//     }
//     validateForm() {

//       let fields = this.state.fields;
//       let errors = {};
//       let formIsValid = true;
//       if (typeof fields["username"] !== "undefined") {
//         if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
//           formIsValid = false;
//           errors["username"] = "*Please enter alphabet characters only.";
//         }
//       }
//       if (!fields["emailid"]) {
//         formIsValid = false;
//         errors["emailid"] = "*Please enter your email-ID.";
//       }
//       if (typeof fields["emailid"] !== "undefined") {
//         //regular expression for email validation
//         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//         if (!pattern.test(fields["emailid"])) {
//           formIsValid = false;
//           errors["emailid"] = "*Please enter valid email-ID.";
//         }
//       }
//       if (!fields["password"]) {
//         formIsValid = false;
//         errors["password"] = "*Please enter your password.";
//       }
//       if (typeof fields["password"] !== "undefined") {
//         if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
//           formIsValid = false;
//           errors["password"] = "*Please enter secure and strong password.";
//         }
//       }
//       this.setState({
//         errors: errors
//       });
//       return formIsValid;
//     }
//   render() {
//     return (
//     <div id="main-registration-container">
//      <div id="register">
//         <h3>Registration page</h3>
//         <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
//         <label>Email ID:</label>
//         <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
//         <div className="errorMsg">{this.state.errors.emailid}</div>
//         <label>Password</label>
//         <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
//         <div className="errorMsg">{this.state.errors.password}</div>
//         <input type="submit" className="button"  value="Register"/>
//         </form>
//     </div>
// </div>

//       );
//   }

// }

// export default RegisterForm;

// ************************************************************

// import React ,{useState , useEffect} from 'react';
// import { useNavigate } from "react-router-dom";

// function Testoo() {

//     const initialValues = { username: "", email: "", password: "" };
//     const [formValues, setFormValues] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormValues({ ...formValues, [name]: value });
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setFormErrors(validate(formValues));
//       setIsSubmit(true);
//     };

//     useEffect(() => {
//       console.log(formErrors);
//       if (Object.keys(formErrors).length === 0 && isSubmit) {
//         console.log(formValues);
//       }
//     }, [formErrors]);
//     const validate = (values) => {
//       const errors = {};
//       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//       if (!values.username) {
//         errors.username = "Username is required!";
//       }
//       if (!values.email) {
//         errors.email = "Email is required!";
//       } else if (!regex.test(values.email)) {
//         errors.email = "This is not a valid email format!";
//       }
//       if (!values.password) {
//         errors.password = "Password is required";
//       } else if (values.password.length < 4) {
//         errors.password = "Password must be more than 4 characters";
//       } else if (values.password.length > 10) {
//         errors.password = "Password cannot exceed more than 10 characters";
//       }
//       return errors;
//     };
//       return (
//   <>
// <div className="container">
//       {Object.keys(formErrors).length === 0 && isSubmit ? (
//             navigate("/dashboard")
//       )
//       : (
//         <></>
//       )}

//       <form onSubmit={handleSubmit}>
//         <h1>Login Form</h1>
//         <div className="ui divider"></div>
//         <div className="ui form">
//           <div className="field">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//           </div>
//           <p className='error'>{formErrors.username}</p>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p className='error'>{formErrors.email}</p>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p className='error'>{formErrors.password}</p>
//           <button className="fluid ui button blue">Submit</button>
//         </div>
//       </form>
//     </div>
//   </>
// )
// }

// export default Testoo;


