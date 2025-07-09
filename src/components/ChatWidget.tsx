// src/components/ChatWidget.tsx
import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/YOUR_PROPERTY_ID_HERE/1gpt4chat";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
