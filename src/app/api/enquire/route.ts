import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const ENQUIRIES_FILE = path.join(process.cwd(), "enquiries.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      teamSize,
      message,
      domain,
      candidates,
      deliveryMode,
      location,
    } = body;

    // Common field validations
    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { message: "Missing required fields. Please fill in all details." },
        { status: 400 }
      );
    }

    const newEnquiry = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company,
      teamSize: teamSize || "",
      message: message || "",
      domain: domain || "",
      candidates: candidates || "",
      deliveryMode: deliveryMode || "",
      location: location || "",
      timestamp: new Date().toISOString(),
    };

    let enquiries = [];

    // Read existing database file if it exists
    try {
      const fileData = await fs.readFile(ENQUIRIES_FILE, "utf-8");
      enquiries = JSON.parse(fileData);
    } catch (err: any) {
      // File doesn't exist or is invalid, start with empty list
      if (err.code !== "ENOENT") {
        console.error("Error reading enquiries file:", err);
      }
    }

    enquiries.push(newEnquiry);

    // Save updated database (Wrap in try-catch for read-only filesystems like Vercel)
    try {
      await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), "utf-8");
      console.log("New corporate lead registered and saved:", newEnquiry);
    } catch (writeErr) {
      console.warn("Failed to write to enquiries.json (Likely read-only filesystem), but lead was processed:", newEnquiry);
    }

    return NextResponse.json(
      { message: "Enquiry logged successfully.", lead: newEnquiry },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("API error in enquire route:", err);
    return NextResponse.json(
      { message: "Internal server error. Failed to log lead." },
      { status: 500 }
    );
  }
}
