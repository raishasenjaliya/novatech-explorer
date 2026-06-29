import { useEffect } from "react";

const SCRIPT_SRC = "https://www.noupe.com/embed/019f1072e97e7bdf8613ef27de7ea2fb8b23.js";

export function NovaAssistant() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return null;
}
