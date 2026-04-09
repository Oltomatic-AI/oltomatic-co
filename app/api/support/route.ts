import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, product, issue, description } = body;
    if (!name || !email || !issue) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }
    console.log("Support ticket:", { name, email, product, issue, description, timestamp: new Date().toISOString() });
    // Wire to n8n or email forwarding here when ready
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
