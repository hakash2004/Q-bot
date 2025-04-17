"use client";
import { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./ai.scss";

export default function AiChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const newMessages = [...messages, { sender: "user", text: message }];
    setMessages(newMessages);
    setMessage("");
    setLoading(true);

    try {
      const studentId = "S1002";
      const studentResponse = await fetch(
        `http://localhost:5000/api/students/${studentId}`
      );
      

      if (!studentResponse.ok) {
        throw new Error(
          `Student fetch failed! Status: ${studentResponse.status}`
        );
      }


      const studentDetail = await studentResponse.json();

      const studentInfo = `Student Name: ${
        studentDetail.name.first
      } ${studentDetail.name.last}\nGPA: ${
        studentDetail.gpa
      }\nCourses: ${studentDetail.courses
        .map((course: any) => course.course_name)
        .join(", ")}`;

      console.log(studentInfo);
      const chatbotPrompt = `${message}\n\nRelevant Student Info:\n${studentInfo}`;

      // Chatbot
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatbotPrompt }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      const cleanedReply = data.reply.replace(/```markdown|```/g, "").trim();

      setMessages([...newMessages, { sender: "ai", text: cleanedReply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        { sender: "ai", text: "⚠️ Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-box">

        <div className="chat-messages" ref={chatRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {/* <strong className="message-sender">
                {msg.sender === "user" ? "You: " : "AI: "}
              </strong> */}
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                // codeblock -> incomplete
                components={{
                  p: ({ children }) => <p className="mb-2">{children}</p>,
                  h1: ({ children }) => (
                    <h1 className="text-2xl font-bold my-2">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl font-semibold my-2">{children}</h2>
                  ),
                  code({ inline = false, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");
                    return inline ? (
                      <code
                        className="inline-code bg-gray-700 p-1 rounded text-sm"
                        {...props}
                      >
                        {children}
                      </code>
                    ) : (
                      <SyntaxHighlighter
                        style={dracula}
                        language={match ? match[1] : "plaintext"}
                        PreTag="pre"
                        className="code-block"
                        wrapLines={true} // ✅ Fix for multiline formatting
                        {...props}
                      >
                        {String(children)}
                      </SyntaxHighlighter>
                    );
                  },
                }}
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
  );
}
