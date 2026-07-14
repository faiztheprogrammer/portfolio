import { NextResponse } from "next/server";

// Launch task: wire to Resend (RESEND_API_KEY env) — until then submissions
// are accepted and logged server-side only.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email) ||
    !body.message.trim()
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  console.log("[contact]", {
    name: body.name.slice(0, 200),
    email: body.email.slice(0, 200),
    message: body.message.slice(0, 5000),
  });

  return NextResponse.json({ ok: true });
}
