import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

function isLinkedInUrl(url: string) {
  try {
    const u = new URL(url);
    return u.hostname === "www.linkedin.com" || u.hostname === "linkedin.com";
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const { email, linkedin_post_url } = await req.json();

  if (!email) return NextResponse.json({ error: "Missing email" }, { status: 400 });
  if (!linkedin_post_url) return NextResponse.json({ error: "Missing LinkedIn post URL" }, { status: 400 });
  if (!isLinkedInUrl(linkedin_post_url)) return NextResponse.json({ error: "Please paste a valid LinkedIn post URL" }, { status: 400 });

  const { data, error } = await supabaseAdmin
    .from("waitlist")
    .update({ bumps: 100, shared_at: new Date().toISOString(), linkedin_post_url })
    .eq("email", email.toLowerCase().trim())
    .is("shared_at", null) // only bump once
    .select("position, bumps")
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Not found or already bumped" }, { status: 400 });
  }

  return NextResponse.json({ effective_position: data.position - data.bumps });
}
