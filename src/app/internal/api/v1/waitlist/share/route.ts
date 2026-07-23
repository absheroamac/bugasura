import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("waitlist")
    .update({ bumps: 100, shared_at: new Date().toISOString() })
    .eq("email", email.toLowerCase().trim())
    .is("shared_at", null) // only bump once
    .select("position, bumps")
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Not found or already shared" }, { status: 400 });
  }

  return NextResponse.json({ effective_position: data.position - data.bumps });
}
