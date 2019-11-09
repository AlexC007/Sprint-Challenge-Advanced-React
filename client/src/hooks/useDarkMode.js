import React, {useState, useEffect} from 'react';
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [values, setValues]= useLocalStorage("true");
    useEffect (() => {
  if (values === true) {
         document.body.classList.add("dark-mode")
  } else{
      document.body.classList.remove("dark-mode")
  }
 }, [values]);
 return [values, setValues];

}
export default useDarkMode;