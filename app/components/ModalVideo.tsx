"use client";
import React, { useState } from "react";

export default function ModalVideo({ videoId, thumbnail, title }: { videoId: string; thumbnail: string; title?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label={`Play video ${title ?? ""}`}
        onClick={() => setOpen(true)}
        className="group relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-200"
      
      >
        <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={title ?? "Video thumbnail"} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 grid place-items-center bg-black/30">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="white" className="drop-shadow"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title ?? "YouTube video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <button onClick={() => setOpen(false)} className="mt-4 w-full rounded-md bg-white px-4 py-2 font-medium hover:bg-neutral-100">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
