'use client'

import React , {useState} from 'react'
import {
    Card,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { PlusCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { SnackBar } from '@/components/providers/SnackBar'
import { useHook } from '@/app/hook/useHook'
import Spinner from '@/components/ui/Spinner'

export const CreateTask = () => {
    const {onCreateTask} = useHook()
    const [title , setTitle] = useState();

    const onSubmit = (e) => {
        e.preventDefault()
        const taskData = {
            title : title,
            date : new Date(),
            content : JSON.stringify(
                [{
                    id: "f42e30b0-7d98-4fe8-bac8-6a5dc24a9fbc",
                    type: "paragraph",
                    props: {
                        textColor: "default",
                        backgroundColor: "default",
                        textAlignment: "left"
                    },
                    content: [],
                    children: []
                }]
            ) 
        }

        mutate(taskData)
    }

    const {mutate , isPending } = useMutation({
        mutationKey : ['create task'],
        mutationFn : (taskData) => onCreateTask('http://localhost:3000/api/tasks' , taskData)
    })

    return (
        <SnackBar>
            <Dialog>
            <DialogTrigger>
                <Card className = "h-[15rem]">
                    <div className = "w-full h-full flex items-center justify-center flex-col gap-3">
                        <PlusCircle className = "w-[3rem] h-[3rem] font-light opacity-70" />
                        <h1 className = " text-blue-600 text-[1.7rem] font-medium" >Create Task</h1>
                    </div>
                </Card>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className={"text-left"}>
                <DialogTitle>Create Task title</DialogTitle>
                <br />
                <DialogDescription className = "mt-[5rem]">
                    <form action="" onSubmit = {onSubmit}>
                        <Input
                            value = {title}
                            onChange = {(e) => setTitle(e.target.value)}
                            placeholder = "Enter task title.."
                            required
                        />
                        <br />
                        <Button variant = 'blue' size = "sm" >
                            {isPending ? <Spinner  /> : 'Submit'}
                        </Button>
                    </form>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>
        </SnackBar>
    )
}
