
const About = () => {
    return (
        <div className="mx-10 lg:mx-56 space-y-8 my-10">
            <h1 className="text-5xl font-bold">About Us</h1>
            <div>
                <h2 className="text-2xl font-semibold">Creating Unforgettable Moments</h2>
                <p> Welcome to EVENT ELEGANCE, where we turn your dreams into reality. We are passionate about crafting unforgettable moments and bringing your vision to life. With years of experience and a dedicated team of event professionals, we take pride in being one of the leading event management agencies in the industry.
                </p>
            </div>
            <div>
                <h2 className="text-2xl font-semibold"> Our Story</h2>
                <p> {`EVENT ELEGANCE was founded with a simple yet profound mission - to design and execute events that leave lasting impressions. Our journey began with a handful of creative minds and a shared love for celebrations. Over the years, we've grown, learned, and evolved, but our commitment to excellence and innovation remains unwavering.`}
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold">What Sets Us Apart</h2>
                <ul>
                    <li>            <span className="font-bold">Expertise: </span> {`Our team comprises seasoned professionals who excel in every aspect of event planning. From intimate gatherings to grand extravaganzas, we've successfully executed a diverse range of events.`}</li>
                    <li>            <span className="font-bold">Tailored Approach: </span> We believe that no two events are the same. We work closely with you to understand your unique vision and preferences, ensuring that every detail reflects your style and personality.</li>
                    <li>            <span className="font-bold">Creativity: </span> Creativity is at the heart of what we do. We thrive on designing unique, themed, and immersive experiences that captivate and engage your guests.</li>
                    <li>            <span className="font-bold">Attention to Detail:</span> We leave no stone unturned when it comes to logistics and planning. Our meticulous attention to detail guarantees flawless execution.</li>
                    <li>            <span className="font-bold">Client-Centric: </span> Your satisfaction is our top priority. We listen to your needs, offer guidance, and make sure your event unfolds seamlessly.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold">Our Services</h2>
                <ul>
                    <li><span className="font-bold">Weddings:</span> From intimate ceremonies to lavish affairs, we make your big day perfect.</li>
                    <li><span className="font-bold">Corporate Events:</span> Elevate your brand and engage your audience with memorable corporate events.</li>
                    <li><span className="font-bold">Social Gatherings:</span> Birthdays, anniversaries, and more - we add a touch of magic to your celebrations.</li>
                    <li><span className="font-bold">Themed Parties: </span>Transport your guests to a different world with our creative themes and décor.</li>
                </ul>

            </div>
            <div>
                <h2 className="text-2xl font-semibold">{`Let's Create Together`}</h2>
                {`At EVENT ELEGANCE, we believe that every event should be a reflection of your dreams. We're here to partner with you on this exciting journey, crafting memories that will last a lifetime.

                Contact us today to discuss your upcoming event. Let's make it extraordinary together.`}
            </div>
        </div>
    );
};

export default About;