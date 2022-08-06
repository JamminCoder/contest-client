import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Contender from "../components/Contender";
import { isAuthorized } from "../auth";
const axios = require("axios").default;

export default function Contest(props) {
    const [contest, setContest] = useState({});
    const [contenders, setContenders] = useState(null);
    const location = useLocation();
    const contestID = useParams().contestID;

    useEffect(() => {
        const contestAction = `http://localhost:8000${location.pathname}/show`;
        const contenderAction = `http://localhost:8000${location.pathname}/contenders`;
        console.log(contenderAction);
        axios.get(contestAction).then( res => {
            setContest(res.data.contest);
        });

        axios.get(contenderAction, { contestID: contestID }).then( res => {
            setContenders(res.data.contenders);
        });
    }, [setContest, setContenders]);

    return (
        <div className="Contest flex gap-5 items-center flex-col">
            <h1 className="text-5xl m-5 text-center">{ contest.contestName }</h1>
  
            { 
                isAuthorized() && contest.contestManager === localStorage.getItem("username") 
                ? <Link className="text-blue-500" to={`/contests/${ contest.contestID }/new_contender`}>New Contender</Link>
                : ""
            } 


            <div className="Contenders w-[100%] flex gap-5 items-center flex-col">
                { 
                    contenders 
                    ? contenders.map(c => {return <Contender key={ c.name } username={ c.name } points={ c.points } pointType={ contest.pointType }/>})
                    : "No contenders" 
                }
            </div>

            <h3 className="text-3xl m-5 text-center">Contest Manager: { contest.contestManager }</h3>

        </div>
    );
}