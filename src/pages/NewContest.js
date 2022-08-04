import Form from '../components/Form';
import { useState } from "react";
import { authHeader } from "../auth";
import CenterPage from '../components/CenterPage';
import { useNavigate } from "react-router-dom";
const axios = require("axios").default;


export default function NewContest(props) {
    const [message, setMessage] = useState(null);
    const action = props.action || "http://localhost:8000/contests/new";
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const pointType = document.querySelector("#pointType").value;

        const data = {name: name, pointType: pointType};
        const headers = { headers: { ...authHeader() } };
        
        axios.post(action, data, headers)
            .then(res => {
                if (res.data.ok) {
                    setMessage("Submitted new contest!");
                    navigate("/");
                    
                } else {
                    setMessage(res.data);
                }
            });
    }

    return (
        <CenterPage>
            <Form onSubmit={ (e) => onSubmit(e) } action={ action } method='POST'>
                <h1 className="text-3xl">New Contest</h1>

                <p className='text-center mt-2 h-3' style={{ color: "green" } }>{ message }</p>

                <div className="my-5">
                    <div className="mb-4">
                        <label htmlFor="name">Contest Name:</label><br/>
                        <input type="text" name="name" id="name" required/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name">Point type:</label><br/>
                        <input type="text" name="pointType" id="pointType"/>
                    </div>

                </div>
                
                <button className="border border-gray-500 px-2 py-1 rounded">Submit</button>
            </Form>
        </CenterPage>
    );
}