import { useParams } from "react-router-dom";
import Contender from "../components/Contender";

export default function Contest(props) {
    const contestID = useParams().contestID;
    return (
        <div className="Contest flex gap-5 items-center flex-col">
            <h1 className="text-5xl m-5 text-center">Contest { contestID }</h1>

            <div className="Contenders w-[100%] flex gap-5 items-center flex-col">
                <Contender username="Tim" />
                <Contender username="Timmers" />
                <Contender username="Timothy" />
                <Contender username="Wimp" />
                <Contender username="Shrimp" />
            </div>
        </div>
    );
}