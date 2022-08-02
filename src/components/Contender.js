export default function Contender({ username }) {
    return (
        <div className="Contender m-5 grid place-items-center p-2 border border-gray-300 rounded-md">
            <img src="/img/tim.jpg" className="w-20 aspect-square rounded-full"/>
            <p className="font-bold text-center [word-break:break-word]">{ username }</p>
            <p>Points: 100</p>
        </div>
    );
}