import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col gap-8">
            <div className="relative">
                <h1 className="text-9xl font-bold">E R R O R</h1>
                <p className="absolute text-2xl top-24 left-24 bg-white">{`404 - THE PAGE CAN'T BE FOUND.`}</p>
            </div>
            <Link to={"/"} className="btn btn-neutral">GO TO HOME PAGE</Link>
        </div>
    );
};

export default ErrorPage;