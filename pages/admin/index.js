import { useEffect, useState } from 'react'
import Nav from '../../components/navigation'
import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from "next-auth/react"
export default function App() {
    useEffect(() => {
        alert()
    }, [])
    return null
}
