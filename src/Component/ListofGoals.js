import React from 'react'

    function ListofGoals(props) {
        return (
            <ul>
                {props.allGoals.map((g) => (
                    <li key={g.goal}>
                        <span>My goal is to {g.goal}, by {g.by}</span>
    
                    </li>
                ))}
            </ul>
        );
      }


export default ListofGoals
