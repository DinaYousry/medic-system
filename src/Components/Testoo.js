import React ,{
  // useState ,
   useEffect} from 'react';
import { useNavigate } from "react-router-dom";


function Testoo() {

  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
        navigate("/");
    }
})

// const initialValues = { username: "", email: "", password: "" , };
// const [formValues, setFormValues] = useState(initialValues);
// const [formErrors, setFormErrors] = useState({});
// const [isSubmit, setIsSubmit] = useState(false);
const navigate = useNavigate();

    
      return (
  <>
      
  </>
)
}

export default Testoo;

