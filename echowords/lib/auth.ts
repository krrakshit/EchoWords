import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function authenticateToken(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Access denied. No token provided." }, { status: 401 });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string; username: string };
    return verified;
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
