import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const API = 'https://icanhazdadjoke.com/';

const SetHeaders = () => {

    
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios(API, {
          headers: {
            accept: 'application/json'
          }
        })
        console.log(resp.data.joke);

      } catch (err:any) {
        console.log(err.response);
      }
    }
    getData()
  }, [])

  return (
    <div></div>
  )
}

export default SetHeaders