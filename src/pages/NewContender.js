import { useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import CenterPage from "../components/CenterPage";
import Form from "../components/Form";
import { authHeader, getVerifiedUsername, isAuthorized } from "../auth";
const axios = require("axios").default;


export default function NewContender(props) {
    const [message, setMessage] = useState({color: "green", text: ""});
    const [username, setUsername] = useState(null);
    const contestID = useParams().contestID;
    const navigate = useNavigate();
    const action = props.action || "http://localhost:8000/contests/new_contender";

    
    
    useEffect(() => {
        getVerifiedUsername(setUsername);
        console.log(username);
    })

    if (!isAuthorized()) {
        return <Navigate to="/login"/>
    }

    

    function onSubmit(e) {
        e.preventDefault();

        const contender = document.querySelector("#contender").value;
        const points = document.querySelector("#points").value;
        const data = {
            contender: contender,
            points: points,
            contestID: contestID
        };

        axios.post(action, data, {headers: { ...authHeader() }})
            .then(res => {
            if (res.data.ok) {
                navigate("/");
                window.location.reload();
                
            } else {
                setMessage({ color: "red", text: res.data });
            }
            
        })
    }

    return (
        <CenterPage>
            <Form id="loginForm" method="POST" action={ action } onSubmit={ (e) => onSubmit(e) }>
                <h1 className="text-3xl">New Contender</h1>

                <p className='text-center mt-2 h-3' style={{ color: message.color }}>{ message.text }</p>

                <div className="my-5">
                    <div className="mb-4">
                        <label htmlFor="contender">Contender Name</label><br/>
                        <input  className="px-1" type="text" name="contender" id="contender"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="points">Starting Point Count</label><br/>
                        <input type="number" className="px-1" name="points" id="points" defaultValue="0"/>

                    </div>

                </div>
                
                <button className="border border-gray-500 px-2 py-1 rounded">Create Contender</button>

            </Form>
        </CenterPage>
    );;
}