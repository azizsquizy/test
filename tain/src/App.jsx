import React from 'react'
import Box1 from './components/box1'
import { useContext,createContext } from 'react'
import { useRef } from 'react';
import "./App.css"
 export const textContext = createContext('');

const App = () => {
  const inputRef = useRef(null);
 
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setShow(true); // Trigger animation when component is in view
  //       }
  //     },
  //     {
  //       root: null,
  //       threshold: 0.5, // Adjust the threshold as needed
  //     }
  //   );

  //   if (componentRef.current) {
  //     observer.observe(componentRef.current);
  //   }

  //   return () => {
  //     if (componentRef.current) {
  //       observer.unobserve(componentRef.current);
  //     }
  //   };
  // }, []);

  const handleButtonClick = () => {
    if (inputRef.current) {
      // Accessing properties and methods of the DOM element
      console.log(inputRef.current.value); // Get input value
    inputRef.current.value="Aziz"; 
    
    inputRef.current.disabled = true; 
    }
  };
  const text = "Aziz"

  return (
    <div className='page'>
      <textContext.Provider value={text}>
            <Box1/>
      </textContext.Provider>
      <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Control Input</button>
    </div>
    {/* <div
      ref={componentRef}
      className={`my-component ${show ? 'show' : ''}`}
    >
      Component content
    </div> */}
    </div>
  )
}

export default App