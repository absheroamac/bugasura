import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { cookies } from "next/headers";

export async function GET(_req: NextRequest) {
  const session = cookies().get("admin_session")?.value;
  if (!session || session !== process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabaseAdmin
    .from("waitlist")
    .select("*")
    .order("position", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const today = new Date().toISOString().slice(0, 10);
  const metrics = {
    total: data.length,
    bumped: data.filter(r => r.bumps > 0).length,
    not_shared: data.filter(r => r.bumps === 0).length,
    today: data.filter(r => r.created_at?.slice(0, 10) === today).length,
  };

  return NextResponse.json({ metrics, rows: data });
}
