import Form from '../components/Form';


export default function Login(props) {
    return (
        <Form method="POST" action="/login">
            <h1 className="text-3xl">Login</h1>
            <div className="my-5">
                <div className="mb-4">
                    <label for="username">Username</label><br/>
                    <input type="text" name="username" id="username"/>
                </div>

                <div className="mb-4">
                    <label for="password">Password</label><br/>
                    <input type="password" name="password" id="password"/>
                </div>
            </div>
            
            <button className="border border-gray-500 px-2 py-1 rounded">Login</button>
        </Form>
    );
}