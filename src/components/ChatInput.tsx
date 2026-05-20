import {
  Dispatch,
  FormEvent,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
import chatAi from "../services/ChatAi";
import TimeFormater from "../utils/TimeFormater";

interface ChatInputProps {
  theme: string;
  color: string;
  chats: any;
  setChats: Dispatch<SetStateAction<any>>;
  setLoadingChat: Dispatch<SetStateAction<any>>;
}

export default function ChatInput(props: ChatInputProps) {
  const { theme, color, chats, setChats, setLoadingChat } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Submit jika menekan Enter tanpa menahan tombol Shift
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Mencegah enter membuat baris baru
      e.currentTarget.form?.requestSubmit();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    setChats([
      ...chats,
      { user: "User", message: form.text.value, time: TimeFormater },
    ]);
    const newChats = [
      ...chats,
      { user: "User", message: form.text.value, time: TimeFormater },
    ];
    setMessage("");
    setLoadingChat(true);
    if (form.text.value !== "") {
      setIsLoading(true);
      try {
        const res = await chatAi.sendMessage({
          text: form.text.value,
        });
        setChats([
          ...newChats,
          {
            user: "DIP AI",
            message: res.data.content.text ?? "Mohon maaf bisa diulang kembali",
            time: TimeFormater,
          },
        ]);
        setLoadingChat(false);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setLoadingChat(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center px-1 pb-1 rounded-xl bg-white"
    >
      <textarea
        id="text"
        name="text"
        rows={1}
        className="mr-2 bg-neutral-primary-medium border border-neutral-400 text-heading text-sm rounded-full focus:outline-none focus:ring-0 block w-full px-3 py-2.5 placeholder:text-body resize-none"
        placeholder="Your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      ></textarea>
      {!isLoading && (
        <button
          type="submit"
          className="inline-flex justify-center p-2 rounded-full cursor-pointer"
          style={{ backgroundColor: theme, color }}
        >
          <svg
            className="w-6 h-6 rotate-90 rtl:-rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"
            />
          </svg>
        </button>
      )}
    </form>
  );
}
