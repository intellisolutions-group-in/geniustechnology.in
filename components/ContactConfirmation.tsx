"use client";

import { useEffect, useState } from "react";

export default function ContactConfirmation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      setTimeout(() => {
        setVisible(true);
        (form as HTMLFormElement).reset();
      }, 600);
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  if (!visible) return null;

  return (
    <div className="mt-10 bg-white border border-green-200 rounded-2xl p-8 text-center animate-[fadeUp_0.6s_ease-out_forwards]">
      <h3 className="text-lg font-semibold text-green-600">
        Message Sent Successfully
      </h3>
      <p className="mt-2 text-gray-600">
        Thank you for contacting us. Our team will reach out shortly.
      </p>
    </div>
  );
}