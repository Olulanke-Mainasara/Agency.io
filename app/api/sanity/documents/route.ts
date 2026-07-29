import { NextRequest, NextResponse } from "next/server";
import { dataset, projectId } from "@/sanity/env";

export async function DELETE(request: NextRequest) {
  const isLoggedIn = request.cookies.get("isLoggedIn");

  if (!isLoggedIn || isLoggedIn.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await request.json();

  if (typeof id !== "string" || id.length === 0) {
    return NextResponse.json({ error: "Missing document id" }, { status: 400 });
  }

  const response = await fetch(
    `https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`,
    {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.SANITY_API_WRITE_TOKEN}`,
      },
      body: JSON.stringify({ mutations: [{ delete: { id } }] }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    return NextResponse.json({ error }, { status: response.status });
  }

  return NextResponse.json(await response.json());
}
