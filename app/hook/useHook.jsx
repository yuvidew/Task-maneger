'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'

export const useHook = () => {
    const router = useRouter()

    const onUpdate = async (url , data) => {
        try {
            const res = await axios.patch(url , {
                content : data , 
                date : new Date()
            })

            return res.status
        } catch (error) {
            return null
        }
    }

    const onDelete = async (url) => {
        try {
            const res = await axios.delete(url);
            if(res.status == 200){
                enqueueSnackbar(res.data.msg , {variant : "success"})
                window.location.reload()
            }else if(res.status == 500){
                enqueueSnackbar(res.data.msg , {variant : "error"})
            }
        } catch (error) {
            enqueueSnackbar("Failed to create Blog" , {variant : "warning"})
        }
    }

    const onCreateTask = async (url , data) => {
        try {
            const res = await axios.post(url , data)
            if(res.status == 201){
                enqueueSnackbar(res.data.msg , {variant : "success"})
                router.push('/write')
            }else if(res.status == 500){
                enqueueSnackbar(res.data.msg , {variant : "error"})
            }
        } catch (error) {
            enqueueSnackbar("Failed to create Blog" , {variant : "warning"})
        }
    }

    return {
        onCreateTask,
        onDelete,
        onUpdate
    }
}
