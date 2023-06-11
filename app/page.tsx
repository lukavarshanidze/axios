'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import axios from 'axios'
import SetHeaders from './axios/setHeaders/SetHeaders'
import PostRequest from './axios/postRequest/PostRequest'

// const API = 'https://jsonplaceholder.typicode.com/users'
const API2 = 'https://icanhazdadjoke.com/';

export default function Home(){


  return (
      <div className={styles.center}>
          {/* <SetHeaders /> */}
          <PostRequest />
      </div>
  )
}
