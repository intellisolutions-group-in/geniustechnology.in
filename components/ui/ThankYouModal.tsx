"use client";

import { useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
};

export default function ThankYouModal({ isOpen, onClose, message }: Props) {
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 animate-[fadeUp_0.4s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={22} />
        </button>

        <div className="text-center">
          <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-black mb-2">
            Success
          </h3>
          <p className="text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
}