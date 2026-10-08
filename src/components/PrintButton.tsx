'use client';

import { Printer } from 'lucide-react';

/** 导出 / 打印简历：调用浏览器打印，配合 @media print 样式输出为 PDF */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="mod-card w-full h-full text-left border border-border/60 bg-card p-4 sm:p-5 hover:bg-muted/60 transition-colors bounce-click"
    >
      <Printer className="w-5 h-5 text-morandi-warm" aria-hidden />
      <h3 className="font-semibold text-sm mt-2.5">导出 PDF 简历</h3>
      <p className="text-[0.7rem] text-muted-foreground mt-0.5">浏览器打印 / 另存为 PDF</p>
    </button>
  );
}
