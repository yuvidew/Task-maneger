import { schema } from "@/app/model/schema";
import { NextResponse } from "next/server";

const { DBConnect } = require("@/app/util/db");

DBConnect()

export const DELETE = async (req , {params}) => {
    const id = params.id;
    const result = await schema.findByIdAndDelete(id)

    if(result){
        return NextResponse.json({
            msg : 'Task is successfully deleted!'
        }, {
            status : '200'
        })
    }
}

export const GET = async (req , {params}) => {
    const id = params.id; 
    const result = await schema.findById(id)

    return NextResponse.json({
        task : result
    } ,{
        status : 200
    })
}

export const PATCH = async (req , {params}) => {
    const id = params.id;
    const payload = await req.json();
    const result = await schema.findByIdAndUpdate(id , payload , {new : true})
    
    return NextResponse.json({
        task : result
    } ,{
        status : 201
    })
}