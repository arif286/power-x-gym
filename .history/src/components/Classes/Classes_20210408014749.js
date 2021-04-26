import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Classes = () => {
    const [event, setevent] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/events")
            .then(res => console.log(res.data))
        .catch(err=>console.log(err))
    }, []);
    return (
        <div>
            <h1>Our Classes</h1>
        </div>
    );
};

export default Classes;