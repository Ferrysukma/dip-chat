interface ChatInputProps {
  theme: string;
  color: string;
}

export default function ChatInput(props: ChatInputProps) {
  const { theme, color } = props;
  return (
    <div className="flex items-center px-1 pb-1 rounded-xl bg-white">
      <textarea
        id="chat"
        rows={1}
        className="mr-2 bg-neutral-primary-medium border border-neutral-400 text-heading text-sm rounded-full focus:outline-none focus:ring-0 block w-full px-3 py-2.5 placeholder:text-body resize-none"
        placeholder="Your message..."
      ></textarea>
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
    </div>
  );
}
