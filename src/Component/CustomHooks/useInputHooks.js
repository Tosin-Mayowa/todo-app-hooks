import {useState} from 'react';

export default function useInputHooks(initVal){
    const [value,setValue] =useState("");
    const handleChange=(e)=>{
        setValue(e.target.value);
    };

    const reset=()=>{
    
       setValue("");
        
    };
    return [value,handleChange,reset];

}