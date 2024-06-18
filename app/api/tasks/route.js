import { schema } from "@/app/model/schema";
import { DBConnect } from "@/app/util/db";
import { NextResponse } from "next/server";

DBConnect()

export const POST = async (req) =>{
    const payload = await req.json();
    const data = await schema.create(payload);
    if(data){
        return NextResponse.json({
            msg : 'Task is successfully created!'
        },{
            status : '201'
        })
    }else{
        return NextResponse.json({result :  'failed to create task!'} , {status : 404})
    }
}


export const GET = async (req , res) => {
    const data = await schema.find()

    return NextResponse.json(
        {
            msg : data
        },
        {
            status : '200'
        }
    )
}