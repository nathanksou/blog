import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, product } = await request.json();

  if (!email || !product) {
    return NextResponse.json(
      { error: "Email and product are required" },
      { status: 400 }
    );
  }

  const notionApiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_WAITLIST_DATABASE_ID;

  if (!notionApiKey || !databaseId) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionApiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          Email: {
            title: [{ text: { content: email } }],
          },
          Product: {
            select: { name: product },
          },
          "Signed Up": {
            date: { start: new Date().toISOString() },
          },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Notion API error:", error);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
