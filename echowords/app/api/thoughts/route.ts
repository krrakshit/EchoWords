import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateToken } from "@/lib/auth";

export async function GET() {
  try {
    const thoughts = await prisma.thought.findMany({
      select: {
        id: true,
        text: true,
        createdAt: true,
        author: { select: { name: true } }, // Fetch only the author's name
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(thoughts, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to fetch thoughts" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const authData = await authenticateToken(req);
    
    // Check if authData is an error response
    if (!authData || typeof authData === "object" && "error" in authData) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { text } = await req.json();
    if (!text || text.length > 60) {
      return NextResponse.json({ error: "Thought must be under 60 words" }, { status: 400 });
    }

    const newThought = await prisma.thought.create({
      data: {
        text,
        authorId: (authData as { userId: string }).userId, // Type assertion to access userId
      },
    });

    return NextResponse.json(newThought, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to add thought" }, { status: 500 });
  }
}
