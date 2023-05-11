import React from 'react'

function UseEffect() {
    const [toggle, setToggle] = React.useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    };
    React.useEffect(()=> {
        document.title = toggle? "Welcome to Little Lemon!" : "Using the use effect hook!"; 
        // add a dependency variable to make the document.title respond to 
        // only one click eveent and become independent on whatever happens to thwe code.
        // the empty arrays makes the dependency variable static, but the toggle keyword in the array
        // make the dependency variable toggle on each click event.
    },[toggle]);
  return (
    <div>
        <h1>using the useEffect hook</h1>

        <button onClick={clickHandler}>
            Toggle message

        </button>
        {toggle && <h2>Welcome to little Lemon</h2>}
      
    </div>
  );
}

export default UseEffect

