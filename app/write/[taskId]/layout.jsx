import { Header } from '@/components/Header'

export default function TaskLayout({children}){
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}
