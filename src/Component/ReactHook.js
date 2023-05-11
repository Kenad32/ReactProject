import React from 'react';
import { useState } from 'react';

function ReactHook() {
    const [restaurantName, setRestaurantName]= useState('Lemon');
    function updateRestaurantName() {
        setRestaurantName('Little Lemon')
    };
  return (
    <div>
        <h1>{restaurantName}</h1>
        <button onClick={updateRestaurantName}>
            Update restaurant name
        </button>
    </div>
    );
};

export default ReactHook
