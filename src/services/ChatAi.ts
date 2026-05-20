import axios from "axios";

const chatAi = {
  sendMessage: (data: any) =>
    axios.post(`${process.env.NEXT_PUBLIC_URL}/api/chat`, data),
};

export default chatAi;
