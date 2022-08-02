import { useState } from "react";

export function PointButton(props) {
    return (
        <a onClick={ (e) => props.onClick(e) } className="border bg-slate-50 text-3xl p-2 w-10 aspect-square rounded-lg text-center hover:bg-white hover:translate-y-[-0.1rem] transition cursor-pointer">{ props.children }</a>
    );
}



export default function Contender({ username }) {
    const [points, setPoints] = useState(0);

    function addPoints(amount) {
        setPoints(points + amount);
    }

    function subtractPoints(amount) {
        setPoints(points - amount);
    }

    return (
        <div className="Contender m-5 grid place-items-center p-2 border border-gray-300 rounded-md">
            <img src="/img/tim.jpg" className="w-20 aspect-square rounded-full"/>
            <p className="font-bold text-center [word-break:break-word]">{ username }</p>
            <p>Points: { points }</p>
            <div className="flex w-[100%] justify-between">
                <PointButton onClick={() => subtractPoints(5) } >-</PointButton>
                <PointButton onClick={ () => addPoints(5) }>+</PointButton>
            </div>
        </div>
    );
}