import Form from '../components/Form';
const axios = require('axios').default;


export default function Login(props) {
    return (
        <Form method="POST" action="http://localhost:8000/login">
            <h1 className="text-3xl">Login</h1>
            <div className="my-5">
                <div className="mb-4">
                    <label htmlFor="username">Username</label><br/>
                    <input type="text" name="username" id="username"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" name="password" id="password"/>
                </div>
            </div>
            
            <button onClick={ (e) => {
                e.preventDefault();

                const password = document.querySelector("#password").value;
                const username = document.querySelector("#username").value;
                console.log("Password: " + password);
                console.log("Username: " + username);

                axios.post("http://localhost:8000/login", 
                    {username: username, password: password}
                ).then(res => {
                    if (res.data.jwt) {
                        console.log("JWT is " + res.data.jwt);
                        document.cookie = `jwt=${ res.data.jwt }; SameSite=None; Secure`;
                    } else {
                        console.log("Incorrect username or password!");
                    }
                    
                })

            } } className="border border-gray-500 px-2 py-1 rounded">Login</button>
        </Form>
    );
}