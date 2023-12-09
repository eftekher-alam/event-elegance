import user from "../../assets/user.png"

const Reviews = () => {
    return (
        <div className="carousel w-full h-[90vh]"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="linear"
        >
            <div id="slide1" className="carousel-item relative w-full hero" style={{ backgroundImage: 'url(https://i.ibb.co/3WgPMPJ/review-1.jpg)' }}>
                <div className="hero-overlay  bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl text-white">
                        <h1 className="mb-5 text-5xl font-bold pb-6">What People Say</h1>
                        <img src={user} className="rounded-full mx-auto w-20 md:w-28 lg:w-36" alt="" />
                        <p className="mb-5 max-w-lg font-semibold mx-auto">Cakes are special. Every birthday, every celebration ends with something sweet, a cake, and people remember.</p>
                        <h2 className="font-bold text-xl">Sakib Al Hasan</h2>
                        <p>WEDDINGS</p>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-15" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-14" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-13" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-12" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full hero" style={{ backgroundImage: 'url(https://i.ibb.co/QmKZHmc/review-2.jpg)' }}>
                <div className="hero-overlay  bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl text-white">
                        <h1 className="mb-5 text-5xl font-bold pb-6">What People Say</h1>
                        <img src={user} className="rounded-full mx-auto w-36" alt="" />
                        <p className="mb-5 max-w-lg font-semibold mx-auto">Cakes are special. Every birthday, every celebration ends with something sweet, a cake, and people remember.</p>
                        <h2 className="font-bold text-xl">Sakib Al Hasan</h2>
                        <p>WEDDINGS</p>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full hero" style={{ backgroundImage: 'url(https://i.ibb.co/jyqsPtR/review-3.jpg)' }}>
                <div className="hero-overlay  bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl text-white">
                        <h1 className="mb-5 text-5xl font-bold pb-6">What People Say</h1>
                        <img src={user} className="rounded-full mx-auto w-36" alt="" />
                        <p className="mb-5 max-w-lg font-semibold mx-auto">Cakes are special. Every birthday, every celebration ends with something sweet, a cake, and people remember.</p>
                        <h2 className="font-bold text-xl">Sakib Al Hasan</h2>
                        <p>WEDDINGS</p>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Reviews;