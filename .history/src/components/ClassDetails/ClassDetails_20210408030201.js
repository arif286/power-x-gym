import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ClassDetails = () => {
    const { id } = useParams();
    const [classDetails, setClassDetails] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/eventDelaits/${id}`)
            .then(res => console.log(res.data))
        .catch(err=> console.log(err))
    }, [id]);
    return (
        <div>
            <h2>class details</h2>
        </div>
    );
};

export default ClassDetails;