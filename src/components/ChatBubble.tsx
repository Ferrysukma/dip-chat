import Image from "next/image";

interface ChatBubbleProps {
  message: string;
  time?: string;
  isUser: boolean;
}

export default function ChatBubble(props: ChatBubbleProps) {
  const { message, time, isUser } = props;
  return (
    <div
      className={`flex items-start gap-2.5` + (isUser ? " justify-end" : "")}
    >
      {!isUser && (
        <Image
          className="w-8 h-8 rounded-full"
          src="https://plus.unsplash.com/premium_photo-1778903613220-2092adb7af4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
          width={20}
          height={20}
          alt="Jese image"
        />
      )}
      <div className="flex flex-col gap-1 max-w-2/3">
        {!isUser && (
          <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-heading">DIP AI</span>
          </div>
        )}
        <div
          className={
            `flex flex-col leading-1.5 p-4 rounded-xl border border-neutral-200 ` +
            (isUser ? "bg-white-200 text-white" : "bg-neutral-200")
          }
        >
          <p className="text-sm text-neutral-700 wrap-break-word">{message}</p>
          <span className="text-xs text-neutral-500 text-right">{time}</span>
        </div>
      </div>
    </div>
  );
}
