import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Here you would typically send an email or save to a database
    console.log("Contact form submission:", data);

    return NextResponse.json(
      { message: "Thank you for your message. We'll get back to you soon!" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process the request." },
      { status: 500 },
    );
  }
}
