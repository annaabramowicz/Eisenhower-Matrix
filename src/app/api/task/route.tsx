import { NextResponse } from "next/server";
import connectDB from "../../lib/connectDB";
import Task from "../../model/task";

export async function POST(request: Request) {
  try {
    await connectDB();
    console.log(request);
    // const { id, title, positionActiveTask, quarterActiveTask } = await request.json();
    // const newTask1 = new Task({ id, title, positionActiveTask, quarterActiveTask });
    // await newTask1.save();
    // return NextResponse.json(newTask1, { status: 200 });

    const newTask = await Task.create({
      id: "03",
      title: "przykladowy tytul",
      positionActiveTask: 4,
      quarterActiveTask: "SCHEDULE",
    });
    return NextResponse.json({ task: newTask, message: "task created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error", error: error.message }, { status: 500 });
  }
}

// // export async function GET() {
// //   return Response.json(users);
// // }
// export const dynamic = "force-static";

// export async function GET() {
//   const res = await fetch("http://localhost:3000/api", {
//     headers: {
//       "Content-Type": "application/json",
//       "API-Key": process.env.DATA_API_KEY,
//     },
//   });
//   const data = await res.json();

//   return Response.json({ data });
// }