import React from 'react'

function AllGoals() {
    const [allGoals, updateAllGoals] = React.useState([]);
    function addGoal(goal){updateAllGoals([...allGoals, goal]); }
}

export default AllGoals
