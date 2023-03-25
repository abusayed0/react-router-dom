import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

// loader function 
export const CareerDetailsLoader=async({params})=>{
    const {id}=params;
    const res = await fetch(`http://localhost:4000/careers/${id}`)
    if(!res.ok){
        throw Error("Could not find the career.")
    }
    const data = res.json();
    return data;
}
const CareerDetails = () => {
    const {id} = useParams();
    
    const career = useLoaderData();
    return (
        <div className="career-details">
           <h2>Career details for : {career.title}</h2>
           <p>Starting salary : {career.salary}</p>
           <p>Location : {career.location}</p>
           <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laborum similique in natus id laboriosam, voluptates consequuntur explicabo veniam accusamus.</p>
           </div>
        </div>
    );
};

export default CareerDetails;