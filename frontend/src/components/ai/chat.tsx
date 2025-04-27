"use client";
import { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "./ai.scss";
import Ai from "@/app/api/ai/ai";

export default function AiChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [aiInput, setAiInput] = useState<string | null>(null);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const responseHandled = useRef(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const newMessages = [...messages, { sender: "user", text: message }];
    setMessages(newMessages);
    setMessage("");
    setLoading(true);
    responseHandled.current = false; 
    try {
      const studentId = "S1002";
      const studentResponse = await fetch(`http://localhost:5000/api/students/${studentId}`);

      if (!studentResponse.ok) {
        throw new Error(`Student fetch failed! Status: ${studentResponse.status}`);
      }

      const studentDetail = await studentResponse.json();

      const studentInfo = `Student Name: ${studentDetail.name.first} ${studentDetail.name.last}\nGPA: ${studentDetail.gpa}\nCourses: ${studentDetail.courses.map((course: any) => course.course_name).join(", ")}`;

      const chatbotPrompt = `${message}\n\nRelevant Student Info:\n${studentInfo}`;

      setAiInput(chatbotPrompt);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        { sender: "ai", text: "⚠️ Something went wrong. Please try again." },
      ]);
      setLoading(false);
    }
  };

  const handleAiResponse = (reply: any) => {
    if (responseHandled.current) return; // Prevent double reply
    responseHandled.current = true;

    setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    setLoading(false);
    setAiInput(null);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {aiInput && <Ai input={aiInput} onResponse={handleAiResponse} />}
      <div className="chat-container">
        <div className="chat-box">
          <div className="chat-messages" ref={chatRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {msg.text}
                </Markdown>
              </div>
            ))}
            {loading && <div className="chat-typing">Typing...</div>}
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="chat-send-button"
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
