import ContestListing from "../components/ContestListing";
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
        <div className="Home min-h-[90vh] w-[90%] mx-auto">
            <div className="flex gap-3">
                <Link to="/contests/new" className="text-blue-500">New Contest</Link>
            </div>

            <h1 className="text-3xl mt-5">Contests</h1>
            
            <div className="mt-5 flex flex-col gap-5">
                <ContestListing contestName="Test" contestOwner="tim" contestID={1} />
                <ContestListing contestName="Test" contestOwner="tim" contestID={2}/>
                <ContestListing contestName="Test" contestOwner="tim" contestID={3}/>
                <ContestListing contestName="Test" contestOwner="tim" contestID={4}/>
            </div>
        </div>
    );
}