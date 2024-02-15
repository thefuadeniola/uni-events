'use server'
import React from 'react'
import { currentUser } from '@clerk/nextjs'
import AccountProfile from '@/components/forms/AccountProfile'
import { redirect } from 'next/navigation'
import { createUser } from '@/lib/actions/user.actions'

async function page() {
    const user = await currentUser()
    if (!user) return null; // to avoid typescript warnings

    const userData = {
        id: user?.id,
        username: user?.username,
        name: user?.firstName || '',
        image: user?.imageUrl,
    }
    return (
        <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
            <h1 className='h2-bold'>Onboarding</h1>
            <p className='p-regular-20 md:p-regular-24'>
                Complete your profile now to use Evently
            </p>
            <section className='mt-9 bg-dark-2 p-10'>
                <AccountProfile user={userData} btnTitle='Continue' />
            </section>
        </main>
    )
}

export default page