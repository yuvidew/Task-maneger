import { Button } from '@/components/ui/button'
import { UserCircle } from 'lucide-react'
import React from 'react'
import ModeToggle from './ModeToggle'
import Link from 'next/link'

export const Header = () => {
    return (
        <header>
            <div className = " container">
                <main className = "flex items-center justify-between">
                    <div className = "flex items-center justify-start h-[5rem]">
                        <Link href = "/">
                            <h1 className = "text-[1.3rem]">Task.<span className = "text-blue-600">Manager</span></h1>
                        </Link>
                    </div>
                    <div className = "flex items-center justify-end h-[5rem] gap-2">
                        <ModeToggle/>
                        <Button size = "icon" variant = "secondary" >
                            <UserCircle className = "h-[1.2rem] w-[1.2rem]" />
                        </Button>
                    </div>
                </main>
            </div>
        </header>
    )
}
