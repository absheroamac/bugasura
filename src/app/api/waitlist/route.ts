import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, mobile, company, role } = body;

  if (!name || !email || !role) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Check for existing entry
  const { data: existing } = await supabaseAdmin
    .from("waitlist")
    .select("position, share_token, bumps")
    .eq("email", email.toLowerCase().trim())
    .single();

  if (existing) {
    return NextResponse.json({ position: existing.position, share_token: existing.share_token, bumps: existing.bumps });
  }

  // Get next position
  const { count } = await supabaseAdmin
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  const position = 500 + (count ?? 0);
  const share_token = crypto.randomUUID().replace(/-/g, "").slice(0, 12);

  const { error } = await supabaseAdmin.from("waitlist").insert({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    mobile: mobile?.trim() || null,
    company: company?.trim() || null,
    role,
    position,
    share_token,
    bumps: 0,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ position, share_token, bumps: 0 });
}
