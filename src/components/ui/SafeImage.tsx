"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * next/image with a graceful fallback: if the remote photo fails to load the
 * container shows a brand-coloured gradient instead of a broken-image icon.
 */
export function SafeImage({ className = "", alt, fill, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-primary-container to-secondary-container ${
          fill ? "absolute inset-0" : ""
        } ${className}`}
      />
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      fill={fill}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
