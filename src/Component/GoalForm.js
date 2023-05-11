import React from 'react'
import ListofGoals from './ListofGoals';
import AllGoals from './AllGoals';

function GoalForm(props) {
    const [formData, setFormData] = React.useState({goal: "", by: ""});

    function changeHandler(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal: "", by: ""});
    };
  return (
    <>
    <h1>My Little lemon Goals</h1>
    <form onSubmit={submitHandler}>
        <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler} />
        <input type='text' name='by' placeholder='By' value={formData.by} onChange={changeHandler} />

        <button>Submit Goal</button>

    </form>
    <ListofGoals/>
    <AllGoals/>


    </>
    
  );
}

export default GoalForm
