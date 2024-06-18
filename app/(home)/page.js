import { Header } from "@/components/Header";
import { CreateTask } from "./_components/CreateTask";
import { Skeleton } from "@/components/ui/skeleton"
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { format } from "date-fns";
import { DeleteTask } from "./_components/DeleteTask";



const fetchData = async () =>{
  try {
    const res = await axios.get('http://localhost:3000/api/tasks')
    return res.data.msg
  } catch (error) {
    return null
  }
}

export default async function Home() {

  const data = await fetchData()
  return (
    <div>
      <Header></Header>
      <div className = "container">
        <section className = "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-[2.5rem]">
          <CreateTask/>
          {data == null ? 
            (
              <Skeleton className="w-full h-[15rem] rounded-full" />
            ) : 
            (
              data.map((ele) => (
                <Card className = "h-[15rem]">
                    <Link key = {ele._id} href = {`/write/${ele._id}`} >
                      <CardHeader>
                          <CardDescription>{format(ele.date , "dd EEE yyyy")}</CardDescription>
                          <CardTitle className = "text-[1.8rem] font-medium dark:text-stone-200">
                            {ele.title}
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                      </CardContent>
                    </Link>
                    <DeleteTask id = {ele._id} />
                  </Card>
              ))
            )
          }
        </section>
      </div>
    </div>
  );
}
