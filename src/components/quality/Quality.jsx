import { FaPeopleCarry, FaGlassCheers } from "react-icons/fa";
import { GiBalloons, GiPartyPopper } from "react-icons/gi";
import { Link } from "react-router-dom";
const Quality = () => {
    return (
        <div className="min-h-[70vh] mx-12 md:mx-20 xl:mx-28 my-20">
            <h2
                className="text-3xl md:text-5xl text-center mb-8 md:mb-16 font-bold"
                data-aos="zoom-out-down"
                data-aos-duration="500"
                data-aos-easing="linear"
            >Why choose us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div
                    className="card bg-base-100 shadow-xl"
                    data-aos="zoom-out-up"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                >
                    <figure className="px-10 pt-10">
                        <FaPeopleCarry className="text-8xl text-error"></FaPeopleCarry>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Friendly Team</h2>
                        <p>Our friendly team is here to assist and create a positive, collaborative atmosphere.</p>
                        <div className="card-actions">
                            <Link to={"/about"} className="btn btn-sm btn-neutral text-white">About Us</Link>
                        </div>
                    </div>
                </div>

                <div
                    className="card bg-base-100 shadow-xl"
                    data-aos="zoom-out-up"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                >
                    <figure className="px-10 pt-10">
                        <GiBalloons className="text-8xl text-error"></GiBalloons>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Perfect Venues</h2>
                        <p>Our friendly team is here to assist and create a positive, collaborative atmosphere.</p>
                        <div className="card-actions">
                            <Link to={"/about"} className="btn btn-sm btn-neutral text-white">About Us</Link>
                        </div>
                    </div>
                </div>

                <div
                    className="card bg-base-100 shadow-xl"
                    data-aos="zoom-out-up"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                >
                    <figure className="px-10 pt-10">
                        <FaGlassCheers className="text-8xl text-error"></FaGlassCheers>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Unique Scenarios</h2>
                        <p>Our friendly team is here to assist and create a positive, collaborative atmosphere.</p>
                        <div className="card-actions">
                            <Link to={"/about"} className="btn btn-sm btn-neutral text-white">About Us</Link>
                        </div>
                    </div>
                </div>

                <div
                    className="card bg-base-100 shadow-xl"
                    data-aos="zoom-out-up"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                >
                    <figure className="px-10 pt-10">
                        <GiPartyPopper className="text-8xl text-error"></GiPartyPopper>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Unforgettable Time</h2>
                        <p>Our friendly team is here to assist and create a positive, collaborative atmosphere.</p>
                        <div className="card-actions">
                            <Link to={"/about"} className="btn btn-sm btn-neutral text-white">About Us</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    );
};

export default Quality;