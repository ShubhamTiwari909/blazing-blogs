// app/api/revalidate/route.js
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { path, secret } = await req.json();

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    revalidatePath(path);

    return NextResponse.json({ revalidated: true, path });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating", error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}
