//  Read Component 

import Books from "./Books";
import { useEffect, useState } from 'react';
import axios from "axios";

function Read() {

    const [data, setData] = useState([]);   // useState() docs. => https://react.dev/reference/react/useState

    useEffect(() => {
        axios.get('http://localhost:4000/api/books')  //  Generate request
            .then(          //  What we do with what comes back
                (response) => {
                    setData(response.data.myBooks)    //  response.data.books to get specifically whats between books=[]
                    //  Setting our const data to the response, rather then hardcoding it in
                }

            )
            .catch(
                (error) => {
                    console.log(error); //  Incase of an Error that it will display in console log
                });
            },[]

    )


    return (
        <div>
            <h3>Hello World this is Read</h3>
            {/* Importing books */}
            <Books myBooks={data}></Books>




        </div>
    );
}

export default Read;