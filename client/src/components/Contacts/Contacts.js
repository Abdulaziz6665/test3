import { Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useData } from '../Context/Context'

function Contacts () {

    const [data, setData] = useData()

    const [info, setInfo] = useState()

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState(null)
    const [succes, setSucces] = useState(false)

    const [path, setPathname] = useState()
    
    useEffect(() => {
   
        if (data) {
             window.localStorage.setItem('data', JSON.stringify(data))

            ;(async () => {
    
                const res = await fetch('https://ec2-3-218-71-191.compute-1.amazonaws.com/contacts', {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        data
                    })
                })
    
                const json = await res.json()
                setInfo(json)
            })()
        }

    }, [data, setInfo])

    useEffect(() => {
        
        if (!data) {
            const dataa = JSON.parse(window.localStorage.getItem('data'))
            setData(dataa)
        }

    }, [data, setData])

    useEffect(() => {
        if (name && phone && succes) {
            
            ;(async () => {
                const res = await fetch('https://ec2-3-218-71-191.compute-1.amazonaws.com/contacts', {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        data,
                        name,
                        phone,
                        email
                    })
                })
    
                const json = await res.json()
                setInfo(json)
            })()
            
            setSucces(false)
            setName(null)
            setPhone(null)
            setEmail(null)
        }
    }, [data, name, phone, email, succes])

    if (path === '/') {
        window.localStorage.removeItem('data')
        return <Redirect to = {'/'}/>
    }


    return (
        <>
            <button onClick={() => setPathname('/')}>Sign out</button>
            <h1>Contacts page</h1>
            <div className='contact-edit'>

                <form 
                    className='form-contact'
                        onSubmit={e => {
                        e.preventDefault()
                        setSucces(true)
                        e.target.reset()
                    }}
                >
                    <div>
                        <input onChange={e => setName(e.target.value)} type="text" placeholder='Enter name' name='user' spellCheck='off' autoComplete='off' autoFocus={true} required />
                    </div>
                    <div>
                        <input onChange={e => setPhone(e.target.value)} type="text" placeholder='Phone number' name='phone' spellCheck='off' autoComplete='off' required />
                    </div>
                    <div>
                        <input onChange={e => setEmail(e.target.value)} type="text" placeholder='Optional' name='email' spellCheck='off' autoComplete='off' />
                    </div>
                    <div>
                        <button>Add contact</button>
                    </div>
                </form>
            </div>

            {info && (
                <div className='sss'>
                   { info.map((e, key) => (
                    <div className='ddd' key={key}>
                        <span>{e.user_username}</span>
                        <span>{e.user_phone}</span>
                        <span>{e.user_email || 'empty'}</span>
                    </div>
                    ))
                   }
                </div>
            )}
        </>
    )
}

export default Contacts