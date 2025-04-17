import { link } from "fs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { chatbotPrompt } = await req.json();

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.MISTRAL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral-medium",
        messages: [
          { role: "system", content: "" },
          { role: "user", content: chatbotPrompt }
        ]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const replyContent = data.choices?.[0]?.message?.content;

    if (!replyContent) {
      console.error("Invalid API Response Structure:", data);
      throw new Error("Invalid API response structure");
    }
    
    // Automatically preserve all triple backtick code blocks
    const markdownReply = replyContent.replace(/```/g, '````'); // Prevent nesting issues
    return NextResponse.json({ reply: markdownReply });
+0    

  } catch (error) {
    console.error("Mistral API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong: " + error.message },
      { status: 500 }
    );
  }
}