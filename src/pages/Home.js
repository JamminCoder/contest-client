import { isLoggedIn } from '../cookies';
import { useEffect, useState } from 'react';

export default function Home(props) {

    return (
        <div className='Home min-h-[90vh]'>
            <p>Logged in status: {`${ isLoggedIn() }`} </p>
            home!
            
            
        </div>
    );
}