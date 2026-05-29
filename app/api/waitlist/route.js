import { addToWaitlist, emailExists } from "@lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message, feature, source } = await request.json();

    // Basic validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    // Duplicate check
    if (await emailExists(email.trim().toLowerCase())) {
      return NextResponse.json(
        { error: "This email is already on the waitlist!" },
        { status: 409 }
      );
    }

    // Save
    await addToWaitlist(
      name.trim(),
      email.trim().toLowerCase(),
      message ? message.trim() : null,
      feature ? feature.trim() : null,
      source ? source.trim() : null
    );

    return NextResponse.json(
      { message: "Thank you for helping us get this right. We'll reach out soon." },
      { status: 201 }
    );
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
