import Form from '../components/Form';
import { useState } from "react";
import { authHeader } from "../auth";
import CenterPage from '../components/CenterPage';
const axios = require("axios").default;


export default function NewContest(props) {
    const [message, setMessage] = useState(null);
    const action = props.action || "http://localhost:8000/contests/new";

    function onSubmit(e) {
        e.preventDefault();

        const name = document.querySelector("#name").value;

        axios.post(action, {name: name}, {headers: { ...authHeader() } })
            .then(res => {
                if (res.data.jwt) {
                    setMessage("Submitted new contest!");
                    
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
                        <label htmlFor="name">Contest Name</label><br/>
                        <input type="text" name="name" id="name"/>
                    </div>
                </div>
                
                <button className="border border-gray-500 px-2 py-1 rounded">Submit</button>
            </Form>
        </CenterPage>
    );
}