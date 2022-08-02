import { useParams } from "react-router-dom";
import Contender from "../components/Contender";

export default function Contest(props) {
    const contestID = useParams().contestID;
    return (
        <div className="Contest w-[90%] mx-auto flex flex-col items-center">
            <img src='/img/contest_1.png' className="w-72 rounded-full aspect-square"/>
            <h1 className="text-5xl m-5">Contest { contestID }</h1>

            <div className="Contenders w-[80%] grid [grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr))]">
                <Contender username="Tim" />
                <Contender username="tim" />
                <Contender username="tim" />
                <Contender username="tim" />
                <Contender username="tim" />
            </div>
        </div>
    );
}