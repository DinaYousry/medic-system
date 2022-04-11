import React , {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
// import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import Calendar from 'react-calendar';
import {render} from 'react-dom';

const ReactCalendar = () =>{
    const[date, setDate] = useState(new Date());
    
    const onChange = date => {
        setDate(date);
    };

    return(
        <div>
                <Calendar className="pop" onChange={onChange} value={date} />
                {console.log(date)}
        </div>
    )
};

render(<ReactCalendar/> , document.querySelector("#root"));
export default ReactCalendar