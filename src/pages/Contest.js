import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Contender from "../components/Contender";
import { isAuthorized } from "../auth";
import { showContestURL, getContendersURL } from "../apiConfig";
const axios = require("axios").default;

export default function Contest(props) {
    const [contest, setContest] = useState({});
    const [contenders, setContenders] = useState(null);
    const contestID = useParams().contestID;

    const contestURL = showContestURL(contestID);

    useEffect(() => {
        axios.get(contestURL).then( res => {
            setContest(res.data.contest);
        });

        const contenderAction = getContendersURL(contestID);
        axios.get(contenderAction, { contestID: contestID }).then( res => {
            setContenders(res.data.contenders);
        });
    }, [setContest, setContenders]);

    return (
        <div className="Contest flex gap-5 items-center flex-col">
            <h1 className="text-5xl m-5 text-center">{ contest.contestName }</h1>
            <p className="mb-5 text-center">Contest managed by { contest.contestManager }</p>

            { 
                isAuthorized() && contest.contestManager === localStorage.getItem("username") 
                ? <Link className="text-blue-500 p-2 border hover:bg-white transition" to={`/contests/${ contest.contestID }/new_contender`}>New Contender</Link>
                : ""
            } 


            <div className="Contenders w-[100%] flex gap-5 items-center flex-col">
                { 
                    contenders 
                    ? contenders.map(c => {return <Contender key={ c.name } contender={ c } contest={ contest } />})
                    : "No contenders" 
                }
            </div>
        </div>
    );
}