import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-[95vh]" style={{ backgroundImage: 'url(https://i.ibb.co/hdsxGLC/cover.webp)' }}>
            <div className="hero-overlay bg-error  bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl text-white">
                    <div data-aos="zoom-in-down"
                        data-aos-duration="500"
                        data-aos-easing="linear">
                        <h1 className="mb-5 text-5xl font-bold">The Best Time to Celebrate</h1>
                        <p className="mb-5 max-w-lg font-semibold mx-auto">Cakes are special. Every birthday, every celebration ends with something sweet, a cake, and people remember.</p>
                    </div>
                    <Link to={"/services"} className="btn" data-aos="fade-up" data-aos-duration="500" data-aos-easing="linear" >Our Services</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;