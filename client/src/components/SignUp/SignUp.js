import { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { useData } from '../Context/Context'


function SignUp() {

    const [data, setData, host] = useData()

    const usernameRef = useRef('')
    const passwordRef = useRef('')
    
    const username = usernameRef.current.value
    const password = passwordRef.current.value
    
    const [submit, setSubmit] = useState(false)
    const [err, setErr] = useState()
    const [succes, setSucces] = useState()

    const [path, setPathname] = useState()

    


    useEffect(() => {
        if (submit && username && password) {

            ;(async () => {
                const res = await fetch(`${host}/signupp`, {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    })
                })

                const { mass, succes, json } = await res.json()
                setErr(mass)
                setSucces(succes)
                setData(json)
            })()

            setSubmit(false)
        }

    }, [submit, username, password, setErr, setData, host])

    if (succes && data) {
        return <Redirect to={'/contacts'}/>
    }

    if (path === '/') {
        return <Redirect to = {'/'} />
    }

    return (
        <>
            <button onClick={() => setPathname('/')}>Home</button>
            <h1 className='title'>Do you want to save your contacts?</h1>
            <div className='container-form'>
                    {err}
                <div className='form-wrapper'>
                    <form 
                        className='forma'
                        onSubmit={ e => {
                        e.preventDefault()
                        setSubmit(true)
                        
                    }}
                    >
                        <label htmlFor="user">username
                            <input ref={usernameRef} id='user' type="text" spellCheck='off' autoComplete='off' />
                        </label>
                        <label htmlFor="pass">password
                            <input ref={passwordRef} id='pass' type="text" spellCheck='off' autoComplete='off' />
                        </label>
                        <button>SignUp</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp