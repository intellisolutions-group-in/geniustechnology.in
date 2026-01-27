"use client";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        className="w-full h-full object-cover opacity-15"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/60" />
    </div>
  );
};

export default VideoBackground;