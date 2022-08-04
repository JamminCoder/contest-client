import { useState, useEffect } from "react";
import ContestListing from "./ContestListing";

const axios = require('axios').default;

export default function ContestsList(props) {
    const [contests, setContests] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/contests/list")
            .then(res => setContests(res.data.contests));

    }, [setContests]);
    
    
    return (
        <div className="mt-5 flex flex-col gap-5">
            { contests.length > 0 ? contests.map(contest => {
                return <ContestListing
                    key={contest.contestID}
                    contestName={ contest.contestName }  
                    contestID={ contest.contestID } 
                    contestOwner={ contest.contestManager }/>
            }): "No contests! Be the first to create one!" }
        </div>
    );
}