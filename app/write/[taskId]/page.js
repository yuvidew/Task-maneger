import { Editor } from "@/components/Editor"
import { Skeleton } from "@/components/ui/skeleton"
import axios from "axios"

const onFetchTaskById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/tasks/${id}`)

        return res.data.task
    } catch (error) {
        return null
    }
}

export default async function TaskPage ({
    params
}){
    const data = await onFetchTaskById(params.taskId)


    return (
        <section className = " container mt-[2rem]">
            {data !== null ? (
                <div className = " mt-3 w-[90%] m-auto">
                    <div className = "flex items-start">
                        <h1>{data.title}</h1>
                    </div>
                    <Editor id = {params.taskId} initialContent={data.content} />
                </div>
            ) : (
                <div className = " mt-3 w-[90%] m-auto">
                    <div className = "flex items-start">
                        <Skeleton className={" w-[70%] h-[2rem]"} />
                    </div>
                    <Skeleton className={" h-[20rem] w-full mt-5"} ></Skeleton>
                </div>
            )}
        </section>
    )
}
