"use client";

import { Share2, Check } from 'lucide-react';
import { useState } from 'react';

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof window !== 'undefined') {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
      title="Copiar link"
    >
      {copied ? (
        <Check className="w-4 h-4 text-brand-400" />
      ) : (
        <Share2 className="w-4 h-4 text-white/60" />
      )}
    </button>
  );
}

