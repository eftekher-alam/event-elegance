import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [service, setService] = useState({});

    const { title, image, type_of_event, details, price } = service;
    // console.log();


    useEffect(() => {
        const result = data.find(service => service.id === Number(id));
        setService(result);
    }, [data, id]);

    return (
        <div className="my-6 max-w-4xl mx-auto">
            <div className="max-lg:mx-8  space-y-8">
                <h1 className="text-5xl font-bold text-center">Service Details</h1>
                <hr></hr>
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 space-y-4">
                        <img src={image} className="w-full mx-auto" alt="" />
                        <p className="text-justify">{details?.long_description}</p>
                    </div>
                    <div className="font-semibold space-y-2 md:col-span-4">
                        <p className="text-lg font-extrabold" >Detail info</p>
                        <hr />
                        <p>Category : {type_of_event}</p>
                        <hr />
                        <p>Duration : <span>{details?.duration}</span></p>
                        <hr />
                        <p>Number of people : {details?.number_of_people}</p>
                        <hr />
                        <p>Price : <span >{price}</span></p>
                        <hr />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;