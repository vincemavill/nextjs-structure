import { useEffect } from 'react'
import Nav from '../../components/navigation'
import { useRouter } from 'next/router'
export default function App() {
    const router = useRouter()
    useEffect(() => {
    }, [])
    return (
        <div className="w-full">
            <Nav />
            <h1 className='text-3xl text-center'>HELLO TEAM! {router.query.name}</h1>
        </div>
    )
}
