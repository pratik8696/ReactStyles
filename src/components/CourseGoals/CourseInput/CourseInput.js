import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid,setisvalid]=useState(true);

  const goalInputChangeHandler = event => {
    if(enteredValue.trim().length>0)
    {
      setisvalid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    if(enteredValue.trim().length == 0)
    {
      setisvalid(false);
      return;
    }
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isvalid ? 'black' : 'red' }} >Course Goal</label>
        <input style={{ borderColor: isvalid ? 'black' : 'red', backgroundColor : !isvalid? 'salmon': 'transparent' }} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
