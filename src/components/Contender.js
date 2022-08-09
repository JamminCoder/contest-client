import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { authHeader, userIsContestManager } from "../auth";
import If from "./If";
import { UPDATE_POINTS_URL, deleteContenderURL } from "../apiConfig";
const axios = require("axios").default;

export function PointButton(props) {
    return (
        <a onClick={ (e) => props.onClick(e) } className="border bg-slate-50 text-3xl p-2 w-10 aspect-square rounded-lg text-center hover:bg-white hover:translate-y-[-0.1rem] transition cursor-pointer">{ props.children }</a>
    );
}

export default function Contender({ contender, contest }) {
    const contestID = contest.contestID;
    const [updatedPoints, setPoints] = useState(contender.points);
    const [hideDelete, setHideDelete] = useState(true);
    const [deleteMessage, setDeleteMessage] = useState("Remove Contender");
    const [isDeleted, setIsDeleted] = useState(false);
    const [pointQty, setPointQty] = useState(contender.lastPoints);
    

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

    function handleDeleteClick() {
        if (hideDelete) {
            setHideDelete(false);
            setDeleteMessage("Cancel")
        } else {
            setHideDelete(true);
            setDeleteMessage("Remove Contender");
        }

    }

    function deleteContender() {
        const url = deleteContenderURL(contestID, contender.name);
        console.log(url);
        console.log({ headers: { ...authHeader() } });

        axios.delete(url, { headers: { ...authHeader() } }).then(res => {
            console.log(res.data);
            setIsDeleted(true);
            console.log("deleting");
        });
    }

    function handlePointQty() {
        setPointQty(parseInt(document.querySelector(`#point_qty_${contender.name}`).value));
    }

    useEffect(() => {
        handlePointQty();
    })

    if (isDeleted) return;
    return (
        <div className="Contender grid gap-2 place-items-center mb-5 w-[100%] max-w-[30rem] p-2 border border-gray-300 rounded-md">
            <div className="mx-5">
                <label htmlFor="point_qty">Add/Subtract Amount</label>
                <input onInput={() => handlePointQty() } className="w-10 ml-3 p-1" id={`point_qty_${contender.name}`} type="number" defaultValue={ pointQty }/>
            </div>

            <div className="flex gap-5 justify-center">
                <If condition={ userIsContestManager(contest.contestManager) }>
                    <PointButton onClick={() => subtractPoints(pointQty) } >-</PointButton>
                </If>
                
                <p className="font-bold text-2xl text-center [word-break:break-word] flex items-center">{ contender.name }</p>
                
                <If condition={ userIsContestManager(contest.contestManager) }>
                    <PointButton onClick={ () => addPoints(pointQty) }>+</PointButton>
                </If>
            </div>

            <p className="text-xl m-2">{ contest.pointType }: { updatedPoints }</p>
            
            <If condition={ userIsContestManager(contest.contestManager) }>
                <div>
                    <a onClick={ handleDeleteClick } className="my-1 p-1 border cursor-pointer text-blue-500">{ deleteMessage }</a>
                    
                    <If condition={ !hideDelete }>
                        <p className="mt-2">Are you sure you want to delete "{ contender.name }"?</p>
                        <a onClick={ deleteContender } className="text-red-500 p-1 border cursor-pointer">DELETE</a>
                    </If>
                </div>
            </If>
        </div>
    );
}