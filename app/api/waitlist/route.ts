import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, product } = await request.json();

  if (!email || !product) {
    return NextResponse.json(
      { error: "email and product are required" },
      { status: 400 }
    );
  }

  const notionApiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_WAITLIST_DB_ID;

  if (!notionApiKey || !databaseId) {
    return NextResponse.json(
      { error: "server configuration error" },
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
            rich_text: [{ text: { content: email } }],
          },
          Name: {
            title: [{ text: { content: product } }],
          },
        },
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Notion API error:", err);
      return NextResponse.json(
        { error: err.message || "failed to join waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "failed to join waitlist" },
      { status: 500 }
    );
  }
}
