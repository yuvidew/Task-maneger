'use client'
import { useHook } from '@/app/hook/useHook'
import { CardFooter } from '@/components/ui/card'
import Spinner from '@/components/ui/Spinner'
import { useMutation } from '@tanstack/react-query'
import { Trash2 } from 'lucide-react'
import React from 'react'

export const DeleteTask = ({
    id
}) => {

    const {onDelete}  = useHook()

    const {mutate , isPending} = useMutation({
        mutationKey : ['delete test' , id],
        mutationFn : () => onDelete(`http://localhost:3000/api/tasks/${id}`)
    })

    return (
        <CardFooter className = " flex-col items-start mt-4 ">
            <div className = "w-full border border-stone-400"></div>
            <br />
            <div className = "flex items-center justify-end  w-full">
                {!isPending ? <Trash2 onClick = {mutate} className = "cursor-pointer" /> : <Spinner className = "cursor-pointer" />}
            </div>
        </CardFooter>
    )
}
