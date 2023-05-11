import React, { useState } from 'react';

function Greeting() {
    const [Greeting, setGreeting] = useState({greet: "Hello World!"});
    console.log(Greeting, setGreeting);
    function updateGreeting() {
        const newGreeting = {...Greeting};
        newGreeting.greet = "Hello, World-Wide Web";
        setGreeting(newGreeting);
    }
  return (
    <div>
        <h1>{Greeting.greet}</h1>
        <button onClick={updateGreeting}>Update Greeting</button>
      
    </div>
  );
};

export default Greeting
