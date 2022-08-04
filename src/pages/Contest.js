import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Contender from "../components/Contender";
const axios = require("axios").default;

export default function Contest(props) {
    const [contest, setContest] = useState({});
    const contestID = useParams().contestID;

    useEffect(() => {
        const action = "http://localhost:8000/contests/show?contestID=" + contestID;
        
        axios.get(action).then( res => {
            setContest(res.data.contest);
        });
    }, [setContest]);

    return (
        <div className="Contest flex gap-5 items-center flex-col">
            <h1 className="text-5xl m-5 text-center">{ contest.contestName }</h1>
            <Link to={`/contests/${ contest.contestID }/new_contender`}>New Contender</Link>

            <div className="Contenders w-[100%] flex gap-5 items-center flex-col">
                { contest.contenders ? contest.contenders.map(contender => {
                    return <Contender key={ contender.contender } username={ contender.contender } points={ contender.points } />
                }): "No contenders" }
            </div>

            <h3 className="text-3xl m-5 text-center">Contest Manager: { contest.contestManager }</h3>

        </div>
    );
}