import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topic";
import {NextResponse} from 'next/server';

export async function PUT (request,{params}){
    const {id} =params;
     console.log("id",params)
    const {title:title,description:description} =await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"Topic updated"},{status:200});
}
export async function GET(request,{params}){
    const {id} = params;
   await connectMongoDB();
   const topic = await Topic.findOne({_id:id});
   return NextResponse.json({topic},{status:200});
}

export async function DELETE(request){
    console.log("request",request,request.nextUrl.seachParams)
   const id = request.nextUrl.seachParams.get('id');
    console.log("id",id)
   await connectMongoDB();
   await Topic.findByIdAndDelete(id);
   return NextResponse.json({message:"Topic Deleted"},{status:200})
}
