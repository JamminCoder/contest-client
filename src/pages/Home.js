import { isAuthorized } from '../auth';
const axios = require('axios').default;

export default function Home(props) {
    return (
        <div className='Home min-h-[90vh]'>
            <p>Logged in status: {`${ isAuthorized() }`} </p>
            home!
            
        </div>
    );
}