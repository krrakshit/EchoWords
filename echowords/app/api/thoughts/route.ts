import {  NextResponse } from "next/server";
import prisma from "@/lib/prisma"


export async function GET() {
  try {
    const thoughts = await prisma.thought.findMany({
      include: { author: true }, // Ensure author data is included
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(thoughts);
  } catch (error) {
    console.error("Error fetching thoughts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { text, userId } = await req.json(); // Make sure `userId` is received

    if (!userId) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    const newThought = await prisma.thought.create({
      data: {
        text,
        authorId: userId, // Ensure the thought is linked to a user
      },
      include: { author: true }, // Include author data in response
    });

    return NextResponse.json(newThought);
  } catch (error) {
    console.error("Error adding thought:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
