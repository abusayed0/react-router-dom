import { Link, useLoaderData } from "react-router-dom";

// loader function 
export const careersLoader = async () => {
    const res = await fetch("http://localhost:4000/careers");
    if(!res.ok){
        throw Error("Could not fetch the careers.")
    }
    const data = await res.json();
    return data;
    
}
const Careers = () => {
    const careers = useLoaderData();

    return (
        <div className="careers">
            {
                careers.map(career => <Link
                    to={career.id.toString()}
                    key={career.id}>
                    <p>{career.title}</p>
                    <p>{career.location}</p>
                </Link>)
            }
        </div>
    );
};

export default Careers;