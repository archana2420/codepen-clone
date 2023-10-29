import { useEffect, useState } from 'react'

const useLocalStorage = (storageKey,fallbackCode) => {
    const [code,setGetCode] = useState(JSON.parse(localStorage.getItem(storageKey))??fallbackCode)
    useEffect(()=>{
      
        localStorage.setItem(storageKey,JSON.stringify(code))

      
    },[storageKey])
    
    const setNewCodeInStorage = (updatedCode)=>{
      localStorage.setItem(storageKey,JSON.stringify(updatedCode))
      setGetCode(updatedCode)
    }
  return [code,setNewCodeInStorage]
}

export default useLocalStorage