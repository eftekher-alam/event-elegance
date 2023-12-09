import { useEffect, useState } from "react";
import OurService from "../ourService/OurService";

const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then(response => response.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="min-h-[70vh]  mx-16 md:mx-28 xl:mx-36 flex justify-center items-center my-20" >
            <div className="space-y-12">
                <h2
                    className="text-5xl text-center font-bold"
                    data-aos="zoom-out-down"
                    data-aos-duration="1000"
                    data-aos-easing="linear"
                >Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        services.map((service, index) => <OurService key={index} service={service}></OurService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurServices;