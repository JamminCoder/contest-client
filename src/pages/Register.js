import Form from '../components/Form';
export default function Register(props) {
    return (
        <Form action="/register" method='POST'>
            <h1 className="text-3xl">Register</h1>
            <div className="my-5">
                <div className="mb-4">
                    <label for="username">Username</label><br/>
                    <input type="text" name="username" id="username"/>
                </div>

                <div className="mb-4">
                    <label for="password">Password</label><br/>
                    <input type="password" name="password" id="password"/>
                </div>

                <div className="mb-4">
                    <label for="conf_password">Confirm Password</label><br/>
                    <input type="password" name="conf_password" id="conf_password"/>
                </div>
            </div>
            
            <button className="border border-gray-500 px-2 py-1 rounded">Register</button>
        </Form>
    );
}