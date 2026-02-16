import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";

/**
 * LiveChat Component
 * Design Philosophy: Minimalist Luxury
 * - Floating widget with elegant animations
 * - Clean message interface with silver accents
 * - Smooth transitions and professional appearance
 * - Responsive design for all devices
 */

interface Message {
  id: string;
  text: string;
  sender: "user" | "support";
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to obsidianH2O support! How can we help you today?",
      sender: "support",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate support response after a delay
    setTimeout(() => {
      const supportResponses = [
        "Thank you for your message! Our team is reviewing your inquiry.",
        "We appreciate your interest in obsidianH2O. How else can we assist?",
        "Great question! Let me help you with that.",
        "I'm here to help. What would you like to know about our premium water?",
        "Thanks for reaching out! We'll get back to you shortly.",
      ];

      const randomResponse =
        supportResponses[Math.floor(Math.random() * supportResponses.length)];

      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "support",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, supportMessage]);
    }, 800);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-background shadow-lg transition-all duration-300 flex items-center justify-center group"
        aria-label="Open live chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] bg-card border border-border rounded-lg shadow-2xl flex flex-col max-h-96 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-b border-border p-4 rounded-t-lg">
            <h3 className="font-semibold text-foreground">obsidianH2O Support</h3>
            <p className="text-xs text-foreground/60">We typically reply within minutes</p>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-accent text-background rounded-br-none"
                      : "bg-card border border-border text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-background/70"
                        : "text-foreground/50"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-border p-4 bg-background/50 rounded-b-lg"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-sm"
              />
              <Button
                type="submit"
                size="sm"
                className="bg-accent hover:bg-accent/90 text-background"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
