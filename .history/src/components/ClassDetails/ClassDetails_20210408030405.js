import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ClassDetails = () => {
    const { id } = useParams();
    const [classDetails, setClassDetails] = useState({});
    useEffect(() => {
        axios
          .get(`http://localhost:5000/eventDetails/${id}`)
          .then((res) => setClassDetails(res.data))
          .catch((err) => console.log(err));
    }, [id]);
    return (
        <div>
            <h2>class details</h2>
        </div>
    );
};

export default ClassDetails;