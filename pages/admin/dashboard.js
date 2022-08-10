import { useEffect, useState } from 'react'
import Nav from '../../components/navigation'
import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from "next-auth/react"
export default function App() {
    useEffect(() => {

    }, [])
    return (
        <div className="w-full">
            <Head>
                <title>Custom Head Title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Nav />
            <h1 className='mb-5 text-3xl text-center'>Dashboard</h1>
        </div>
    )
}
