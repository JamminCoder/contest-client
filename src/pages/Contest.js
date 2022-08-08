import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Contender from "../components/Contender";
import { authHeader, isAuthorized, userIsContestManager } from "../auth";
import { showContestURL, getContendersURL, deleteContestURL } from "../apiConfig";
import If from "../components/If";
const axios = require("axios").default;

export default function Contest(props) {
    const [contest, setContest] = useState({});
    const [contenders, setContenders] = useState(null);
    const [hideDelete, setHideDelete] = useState(true);
    const [deleteMessage, setDeleteMessage] = useState("Delete Contest");

    const navigate = useNavigate();
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

    function handleDelete() {
        if (hideDelete) {
            setHideDelete(false);
            setDeleteMessage("Cancel");
        } else {
            setHideDelete(true);
            setDeleteMessage("Delete Contest");
        }

    }

    function deleteContest() {
        axios.delete(
            deleteContestURL(contestID),
            {headers: {...authHeader()} }
        ).then( res => {
            navigate("/");
        });
    }

    return (
        <div className="Contest flex gap-5 items-center flex-col">
            <h1 className="text-5xl m-5 text-center">{ contest.contestName }</h1>
            <p className="mb-5 text-center">Contest managed by { contest.contestManager }</p>
            <If condition={ userIsContestManager(contest.contestManager) }>
                <If condition={ !hideDelete }>
                    <p>Are you sure you want to delete this contest?</p>
                </If>

                <div className="flex gap-5 mb-5">
                    <a onClick={ handleDelete } className="text-blue-500 p-2 border hover:bg-white transition cursor-pointer">{ deleteMessage }</a>
                    <If condition={ !hideDelete }>
                        <a onClick={ deleteContest } className="text-red-500 p-2 border hover:bg-red-500 hover:text-white transition cursor-pointer">DELETE</a>

                    </If>
                </div>
                
            </If>
            { 
                isAuthorized() && contest.contestManager === localStorage.getItem("username") 
                ? <Link className="text-blue-500 p-2 border hover:bg-white transition cursor-pointer" to={`/contests/${ contest.contestID }/new_contender`}>New Contender</Link>
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