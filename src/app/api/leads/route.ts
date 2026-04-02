import { NextRequest, NextResponse } from "next/server"
import { appendFile } from "fs/promises"
import { join } from "path"

// Power Automate webhook URL — set this in your .env.local file
// Create a Power Automate flow: "When an HTTP request is received" → "Add a row into a table" (Excel Online)
const WEBHOOK_URL = process.env.POWER_AUTOMATE_WEBHOOK_URL

export async function POST(request: NextRequest) {
  const body = await request.json()

  const { nombre, telefono, email, organizacion } = body

  if (!nombre || !telefono || !email || !organizacion) {
    return NextResponse.json(
      { error: "Todos los campos son obligatorios" },
      { status: 400 }
    )
  }

  const lead = {
    nombre,
    telefono,
    email,
    organizacion,
    fecha: new Date().toISOString(),
  }

  // 1. Save locally as backup (JSON lines file)
  try {
    const filePath = join(process.cwd(), "leads.jsonl")
    await appendFile(filePath, JSON.stringify(lead) + "\n", "utf-8")
  } catch {
    console.error("Failed to save lead locally")
  }

  // 2. Forward to Power Automate webhook (OneDrive Excel)
  if (WEBHOOK_URL) {
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      })

      if (!res.ok) {
        console.error("Power Automate webhook failed:", res.status)
      }
    } catch (err) {
      console.error("Power Automate webhook error:", err)
    }
  }

  return NextResponse.json({ success: true })
}
