"use client";
import ChatBubble from "@/src/components/ChatBubble";
import ChatInput from "@/src/components/ChatInput";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ChatPage() {
  const params = useSearchParams();
  const hotel = params.get("hotel");
  const theme = params.get("theme") || "#ffffff";
  const color = params.get("color") || "#000000";

  const [chats, setChats] = useState<any>([]);
  const [loadingChat, setLoadingChat] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollTop = chatEndRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats, loadingChat]);

  useEffect(() => {
    const saved = localStorage.getItem("historyChat");
    saved && setChats(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem("historyChat", JSON.stringify(chats));
    }
  }, [chats]);

  return (
    <>
      <div className="flex flex-col h-125 bg-neutral-primary-soft max-w-sm border border-slate-200 rounded-xl shadow-lg w-full">
        {/* Header */}
        <div
          className="px-4 py-2 flex items-center shadow-sm border-b border-gray-200"
          style={{ backgroundColor: theme }}
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1778903613220-2092adb7af4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
            alt="Avatar"
            width={40}
            height={40}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <h2 className="font-semibold text-base" style={{ color }}>
              {hotel}
            </h2>
            {/* <p className="text-xs text-green-500 font-medium">Online</p> */}
          </div>
        </div>
        {/* Content Chat */}
        <div
          ref={chatEndRef}
          className="mb-4 flex-1 overflow-y-auto overflow-x-hidden space-y-4 h-screen max-h-95 p-4 bg-neutral-50"
        >
          {chats.length > 0 &&
            chats.map((chat: any, index: any) => (
              <ChatBubble
                key={index}
                isUser={chat.user === "User"}
                time={chat.time}
                message={chat.message}
              />
            ))}
          {loadingChat && (
            <div className="flex space-x-2 justify-center items-center h-8">
              <span className="sr-only">Loading...</span>
              <div className="h-3 w-3 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-3 w-3 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-3 w-3 bg-neutral-400 rounded-full animate-bounce"></div>
            </div>
          )}
          {/* <div ref={chatEndRef} /> */}
        </div>
        {/* Input Message */}
        <div className="p-1">
          <ChatInput
            color={color}
            theme={theme}
            chats={chats}
            setChats={setChats}
            setLoadingChat={setLoadingChat}
          />
        </div>
      </div>
    </>
  );
}
