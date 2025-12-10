"use client";
import Button from "@/components/Button";
import React from "react";

const EmailSubscriptionForm = () => {
  const APPS_SCRIPT_URL =
    process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ||
    "https://script.google.com/macros/s/REPLACE_YOUR_WEBAPP_ID/exec";
  const APPS_SCRIPT_TOKEN =
    process.env.NEXT_PUBLIC_APPS_SCRIPT_TOKEN ||
    "REPLACE_WITH_A_LONG_RANDOM_TOKEN";
  const USE_PROXY = process.env.NEXT_PUBLIC_USE_PROXY === "true";
  const SERVER_ENDPOINT = "/api/subscribe";

  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(null);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Auto-hide message after 5 seconds
  React.useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Handle modal visibility with animation delay
  React.useEffect(() => {
    if (showSuccessModal) {
      // Small delay to ensure the DOM element is rendered before triggering animation
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [showSuccessModal]);

  const handleEmailSubscribe = async (e) => {
    e.preventDefault();
    setMessage(null);
    const trimmed = (email || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }
    setLoading(true);
    try {
      const endpoint = USE_PROXY ? SERVER_ENDPOINT : APPS_SCRIPT_URL;
      const body = USE_PROXY
        ? { email: trimmed }
        : { email: trimmed, token: APPS_SCRIPT_TOKEN };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && (json.ok || USE_PROXY)) {
        setShowSuccessModal(true);
        setMessage({ type: "success", text: "Thanks — you'll get updates!" });
        setEmail("");
      } else {
        setMessage({ type: "error", text: json.error || "Submission failed." });
      }
    } catch (err) {
      setMessage({ type: "error", text: err.message || "Network error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleEmailSubscribe}
        className="w-full space-y-2 mt-6 min-h-[120px] flex flex-col"
      >
        <p>Enter Your Email Address</p>
        <div className="flex-1 flex flex-col gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Address"
            className="bg-white text-black placeholder:text-[#727272] rounded-xl w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#61cb08] transition"
            disabled={loading}
          />

          <Button
            className={"w-full! max-w-full! text-black"}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-3 border-t-[#61cb08] border-gray-100 rounded-full animate-spin"></div>
                <span>Subscribing...</span>
              </div>
            ) : (
              "Get Launch Updates"
            )}
          </Button>
        </div>

        {message && message.type === "error" && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-red-500 mt-2 text-sm font-medium flex items-center gap-2">
              <svg
                className="w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              {message.text}
            </p>
          </div>
        )}
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
            isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setShowSuccessModal(false)}
          ></div>

          {/* Modal Content */}
          <div
            className={`relative bg-linear-to-b from-white to-gray-50 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 overflow-hidden transition-all duration-500 transform ${
              isAnimating
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-75 translate-y-8"
            }`}
          >
            {/* Gradient background effect - Brand Green */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-72 h-72 bg-[#61cb08]/10 rounded-full filter blur-3xl opacity-20 -z-10"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-72 h-72 bg-[#61cb08]/5 rounded-full filter blur-3xl opacity-10 -z-10"></div>

            {/* Close button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-[#61cb08]/20 rounded-full flex items-center justify-center animate-pulse">
                  <svg
                    className="w-10 h-10 text-[#61cb08] animate-bounce"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold text-gray-800">Success!</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Thanks for subscribing! We'll send you the latest updates about
                EpicRides.
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full mt-6 bg-[#61cb08] hover:bg-[#54af07] text-white font-semibold py-2.5 rounded-lg transition duration-200 transform hover:scale-105"
            >
              Got It!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailSubscriptionForm;
