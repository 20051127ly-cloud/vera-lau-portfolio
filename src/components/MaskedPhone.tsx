'use client';

import { useState } from 'react';
import { Phone, Copy, Check } from 'lucide-react';
import { maskPhone, PROFILE } from '@/data/profile';

/**
 * 手机号默认脱敏展示，需用户主动点击后才显示完整号码。
 * 避免个人主页被全网爬取后直接暴露私人号码。
 */
export default function MaskedPhone() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setRevealed(true);
    }
  };

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="flex items-center gap-2 text-xs text-morandi-accent hover:text-morandi-rose transition-colors justify-center"
      >
        <Phone className="w-3.5 h-3.5" aria-hidden />
        <span>{maskPhone(PROFILE.phone)}</span>
        <span className="text-muted-foreground">· 点击查看</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="flex items-center gap-2 text-xs text-morandi-accent hover:text-morandi-rose transition-colors justify-center"
    >
      <Phone className="w-3.5 h-3.5" aria-hidden />
      <span>{PROFILE.phone}</span>
      {copied ? (
        <Check className="w-3.5 h-3.5" aria-hidden />
      ) : (
        <Copy className="w-3.5 h-3.5" aria-hidden />
      )}
      <span className="text-muted-foreground">{copied ? '已复制' : '复制'}</span>
    </button>
  );
}
