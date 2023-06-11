import { useState } from "react"

export const App = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "my first post",
            datetime: "june 10, 2023 16:33 AM",
            body: "lorem ipmus dolor sit amet consesturo" 
        },
        {
            id: 2,
            title: "my 2d post",
            datetime: "june 10, 2023 16:33 AM",
            body: "lorem ipmus dolor sit amet consesturo" 
        },
        {
            id: 3,
            title: "my 3d post",
            datetime: "june 10, 2023 16:33 AM",
            body: "lorem ipmus dolor sit amet consesturo" 
        },
        {
            id: 4,
            title: "my 4d post",
            datetime: "june 10, 2023 16:33 AM",
            body: "lorem ipmus dolor sit amet consesturo" 
        },
        {
            id: 5,
            title: "my 5d post",
            datetime: "june 10, 2023 16:33 AM",
            body: "lorem ipmus dolor sit amet consesturo" 
        }
    ])
}