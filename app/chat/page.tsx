"use client";
import ChatBubble from "@/components/ChatBubble";
import ChatInput from "@/components/ChatInput";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function ChatPage() {
  const params = useSearchParams();
  const hotel = params.get("hotel");
  const theme = params.get("theme") || "#ffffff";
  const color = params.get("color") || "#000000";

  return (
    <>
      <div className="bg-neutral-primary-soft block max-w-sm border border-slate-200 rounded-xl shadow-lg">
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
        <div className="mb-4 overflow-y-auto space-y-4 h-screen max-h-95 p-4 bg-neutral-50">
          <ChatBubble
            isUser={false}
            time="11:50"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime, cumque rem ab voluptatum earum, beatae amet nobis eveniet odit aliquid illo alias tenetur, eum tempore necessitatibus natus iste praesentium!"
          />
          <ChatBubble
            isUser={true}
            time="11:52"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime, cumque rem ab voluptatum"
          />
          <ChatBubble
            isUser={false}
            time="11:50"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime, cumque rem ab voluptatum earum, beatae amet nobis eveniet odit aliquid illo alias tenetur, eum tempore necessitatibus natus iste praesentium!"
          />
          <ChatBubble
            isUser={true}
            time="11:52"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime, cumque rem ab voluptatum"
          />
          <ChatBubble
            isUser={false}
            time="11:50"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime, cumque rem ab voluptatum earum, beatae amet nobis eveniet odit aliquid illo alias tenetur, eum tempore necessitatibus natus iste praesentium!"
          />
          <ChatBubble
            isUser={true}
            time="11:52"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime, cumque rem ab voluptatum"
          />
          <ChatBubble
            isUser={false}
            time="11:50"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime, cumque rem ab voluptatum earum, beatae amet nobis eveniet odit aliquid illo alias tenetur, eum tempore necessitatibus natus iste praesentium!"
          />
          <ChatBubble
            isUser={true}
            time="11:52"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime, cumque rem ab voluptatum"
          />
          <ChatBubble
            isUser={false}
            time="11:50"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime, cumque rem ab voluptatum earum, beatae amet nobis eveniet odit aliquid illo alias tenetur, eum tempore necessitatibus natus iste praesentium!"
          />
          <ChatBubble
            isUser={true}
            time="11:52"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad maxime, cumque rem ab voluptatum"
          />
        </div>
        {/* Input Message */}
        <div className="p-1">
          <ChatInput color={color} theme={theme} />
        </div>
      </div>
    </>
  );
}
