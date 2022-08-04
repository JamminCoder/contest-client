import { useState } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios").default;

export function PointButton(props) {
    return (
        <a onClick={ (e) => props.onClick(e) } className="border bg-slate-50 text-3xl p-2 w-10 aspect-square rounded-lg text-center hover:bg-white hover:translate-y-[-0.1rem] transition cursor-pointer">{ props.children }</a>
    );
}



export default function Contender({ username, points }) {
    const contestID = useParams().contestID;
    const [updatedPoints, setPoints] = useState(points);

    function updatePoints(amount) {
        axios.post(action, 
            {
                contenderName: username,
                contestID: contestID,
                points: amount
            });
    }
    const action = "http://localhost:8000/contests/update_points";
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
                <PointButton onClick={() => subtractPoints(5) } >-</PointButton>
                <p className="font-bold text-2xl text-center [word-break:break-word] flex items-center">{ username }</p>
                <PointButton onClick={ () => addPoints(5) }>+</PointButton>
            </div>

            <p className="text-xl mt-2">Points: { updatedPoints }</p>
        </div>
    );
}