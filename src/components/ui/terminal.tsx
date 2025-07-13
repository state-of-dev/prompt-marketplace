"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  showCopy?: boolean;
  className?: string;
}

export function Terminal({ children, title = "Prompt", showCopy = true, className }: TerminalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof children === 'string') {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(children);
        } else {
          // Fallback para contextos no seguros
          const textArea = document.createElement('textarea');
          textArea.value = children;
          textArea.style.position = 'absolute';
          textArea.style.left = '-999999px';
          document.body.prepend(textArea);
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <div className={cn("bg-gray-950 rounded-lg border border-gray-800 overflow-hidden", className)}>
      {/* Terminal Header */}
      <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-300 text-sm font-mono ml-2">{title}</span>
        </div>
        {showCopy && (
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white transition-colors"
            title="Copiar prompt"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 text-green-400 font-mono text-sm leading-relaxed overflow-x-auto">
        <div className="whitespace-pre-wrap">{children}</div>
      </div>
    </div>
  );
}

interface PromptPreviewProps {
  preview: string;
  isLoggedIn?: boolean;
  className?: string;
}

export function PromptPreview({ preview, isLoggedIn = false, className }: PromptPreviewProps) {
  return (
    <div className={cn("relative", className)}>
      <Terminal title="Preview" showCopy={false} className="relative">
        <div className="text-gray-400">
          <span className="text-blue-400">$</span> {preview}
          {!isLoggedIn && <span className="animate-pulse">_</span>}
        </div>
      </Terminal>
      {!isLoggedIn && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent flex items-end justify-center pb-4">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">
            🔒 Inicia sesión para ver el prompt completo
          </div>
        </div>
      )}
    </div>
  );
}