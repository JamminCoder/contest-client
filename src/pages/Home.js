import { Link } from "react-router-dom";
import ContestsList from "../components/ContestsList";

export default function Home(props) {
    return (
        <div className="Home min-h-[90vh] w-[90%] mx-auto">
            <div className="flex gap-3">
                <Link to="/contests/new" className="text-blue-500">New Contest</Link>
            </div>

            <h1 className="text-3xl mt-5">Contests</h1>
            
            <div className="mt-5 flex flex-col gap-5">
                <ContestsList/>
            </div>
        </div>
    );
}