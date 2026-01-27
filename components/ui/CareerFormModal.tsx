"use client";

import { useState } from "react";
import { X } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function CareerFormModal({ isOpen, onClose, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const submitForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://geniustechnology.in/api/career-application", {
        method: "POST",
        body: new FormData(e.target),
      });
    } catch (_) {}

    setLoading(false);
    onClose();
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">
      <form
        onSubmit={submitForm}
        className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 relative"
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={22} />
        </button>

        <h3 className="text-xl font-semibold mb-6">
          Apply for this position
        </h3>

        <div className="space-y-4">
          <input required placeholder="Full Name" className="input" />
          <input required type="email" placeholder="Email" className="input" />
          <input required placeholder="Phone" className="input" />
          <input required placeholder="Current Location" className="input" />
          <input required type="file" accept=".pdf,.doc,.docx" />
          <textarea placeholder="Cover Letter (optional)" className="input" />
        </div>

        <button
          type="submit"
          className="mt-6 w-full px-6 py-3 rounded-lg bg-[var(--brand-blue)] text-white flex justify-center"
        >
          {loading ? <LoadingSpinner /> : "Submit Application"}
        </button>
      </form>
    </div>
  );
}