import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Check } from "lucide-react";

/**
 * NewsletterForm Component
 * Design Philosophy: Minimalist Luxury
 * - Clean, elegant form with silver accents
 * - Email validation with helpful feedback
 * - Success state with checkmark animation
 * - Smooth transitions and hover effects
 */

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate email
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate API call
    setIsLoading(true);
    try {
      // In a real application, you would send this to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSubmitted(true);
      setEmail("");

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Enter your email"
                disabled={isSubmitted || isLoading}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all disabled:opacity-50"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitted || isLoading}
              className={`px-6 font-semibold transition-all ${
                isSubmitted
                  ? "bg-accent/20 text-accent hover:bg-accent/20"
                  : "bg-accent hover:bg-accent/90 text-background"
              }`}
            >
              {isSubmitted ? (
                <Check className="w-5 h-5" />
              ) : isLoading ? (
                <span className="animate-spin">⏳</span>
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-400 mt-2 animate-in fade-in">
              {error}
            </p>
          )}

          {/* Success Message */}
          {isSubmitted && (
            <p className="text-sm text-accent mt-2 animate-in fade-in font-medium">
              ✓ Thank you! Check your email for exclusive offers.
            </p>
          )}
        </div>

        {/* Privacy Notice */}
        <p className="text-xs text-foreground/50 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
