import { useState } from "react";
import { useParams } from "react-router-dom";
import { authHeader, userIsContestManager } from "../auth";
import If from "./If";
import { UPDATE_POINTS_URL } from "../apiConfig";
const axios = require("axios").default;

export function PointButton(props) {
    return (
        <a onClick={ (e) => props.onClick(e) } className="border bg-slate-50 text-3xl p-2 w-10 aspect-square rounded-lg text-center hover:bg-white hover:translate-y-[-0.1rem] transition cursor-pointer">{ props.children }</a>
    );
}

export default function Contender({ contender, contest }) {
    const contestID = contest.contestID;
    const [updatedPoints, setPoints] = useState(contender.points);

    
    function updatePoints(amount) {
        const data = {
            contenderName: contender.name,
            contestID: contestID,
            points: amount
        };

        axios.post(UPDATE_POINTS_URL, data, {headers: { ...authHeader() }}).then(res => {
            console.log(res.data);
        });
    }
    
    function addPoints(amount) {
        setPoints(updatedPoints + amount);
        updatePoints(amount);
    }

    function subtractPoints(amount) {
        setPoints(updatedPoints - amount);
        updatePoints(-amount);
    }

    return (
        <div className="Contender grid place-items-center mb-5 w-[100%] max-w-[30rem] p-2 border border-gray-300 rounded-md">
            <div className="flex gap-5 justify-center">
                
                <If condition={ userIsContestManager(contest.contestManager) }>
                    <PointButton onClick={() => subtractPoints(5) } >-</PointButton>
                </If>
                
                <p className="font-bold text-2xl text-center [word-break:break-word] flex items-center">{ contender.name }</p>
                
                <If condition={ userIsContestManager(contest.contestManager) }>
                    <PointButton onClick={ () => addPoints(5) }>+</PointButton>
                </If>
            </div>

            <p className="text-xl mt-2">{ contest.pointType }: { updatedPoints }</p>
        </div>
    );
}