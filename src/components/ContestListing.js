import { Link } from "react-router-dom";

export default function ContestListing({ contestName, contestOwner, contestID }) {
    return (
        <Link to={"/contests/" + contestID} className="ContestListing bg-slate-50 p-2 sm:grid sm:grid-cols-2 w-fit max-w-[30rem] border rounded-md hover:translate-y-[-0.1rem] hover:bg-white transition">
            <div className="flex gap-5 items-center">
                <p className="text-gray-500">Owner: { contestOwner }</p>
                <h3 className="text-2xl">{ contestName }</h3>
            </div>
             <div className="flex items-center">
                <p className="place-self-center"><span className="text-gray-500">Leader:</span> so-and-so - 100 units</p>
             </div>
        </Link>
    );
}