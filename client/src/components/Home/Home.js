import { Redirect } from 'react-router-dom'
import { useState } from 'react'

function Home () {

    const [path, setPath] = useState(null)

    if (path === '/signupp') {
       return <Redirect to={'/signupp'}/>
    }
    if (path === '/login') {
        return <Redirect to={'/login'}/>
    }

    return (
        <>
            <h1 className='title'>Do you want to save your contacts?</h1>
            <div className='btn-wrapper'>
                <div className='rrr'>
                    <button onClick={() => setPath('/signupp')} className='btn'>
                        Sign up
                    </button>
                </div>
                <div className='rrr'>
                    <button onClick={ () => setPath('/login')} className='btn'>
                        Login
                    </button>
                </div>
            </div>

        </>
    )
}

export default Home