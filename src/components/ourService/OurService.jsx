import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const OurService = ({ service }) => {
    const { id, title, image, type_of_event, short_description, price } = service;
    return (
        <div
            className="card glass"
            data-aos="zoom-out-up"
            data-aos-duration="500"
            data-aos-easing="linear"
        >
            <div>
                <span className="btn btn-sm btn-error text-white absolute top-4 right-4">{price}</span>
                <figure><img src={image} alt="car!" className="w-full h-40 xl:h-56" /></figure>
            </div>
            <div className="card-body max-xl:p-4">
                <h2 className="card-title">{title}</h2>
                <p>{short_description}</p>
                <div className="card-actions justify-between max-md:flex-col">
                    <span className="font-bold text-lg">{type_of_event}</span>

                    <Link to={`/serviceDetails/${id}`} className="btn btn-sm btn-neutral text-white">More details</Link>
                </div>
            </div>
        </div>
    );
};

OurService.propTypes = {
    service: PropTypes.object
}

export default OurService;