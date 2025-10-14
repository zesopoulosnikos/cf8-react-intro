import { Link } from "react-router";
import {useEffect} from "react";

const HomePage = () => {
    const links = [
        {path: "/", label: "Home Page"},
        {path: "/name-changer", label: "Name Changer Example"},
        {path: "/examples/timer", label: "Timer Example"},
        {path: "/examples/controlled-input", label: "Controlled Input Example"},
        {path: "/examples/uncontrolled-input", label: "Uncontrolled Input Example"}
    ];

    useEffect(()=> {
        document.title = "CF8 Home Page";
    }, []);

    return (
        <>
            <h1 className="text-2xl text-center my-12">Home Page</h1>
            <div className="flex flex-col items-start max-w-sm mx-auto gap-4">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className="bg-gray-200 w-full px-4 py-2 rounded"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </>
    )
}
export default HomePage;