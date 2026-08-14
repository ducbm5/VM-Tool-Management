import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, ExternalLink } from 'lucide-react';

interface ToolItem {
  id: number;
  code: string;
  title: string;
  url: string;
  category: string;
  description: string;
}

const TOOLS: ToolItem[] = [
  {
    id: 1,
    code: '01',
    title: 'Bán vé',
    url: 'https://vm-analytics.vercel.app/',
    category: 'TICKETING',
    description: 'Hệ thống báo cáo và theo dõi bán vé trực tuyến VnExpress Marathon.'
  },
  {
    id: 2,
    code: '02',
    title: '[SALE] Tra cứu nhóm đối tác',
    url: 'https://vm-group-sale.vercel.app/',
    category: 'PARTNERSHIP',
    description: 'Cổng tra cứu danh sách và quản lý nhóm đối tác, câu lạc bộ, doanh nghiệp.'
  },
  {
    id: 3,
    code: '03',
    title: '[SALE] Báo cáo bán vé kênh Herbalife',
    url: 'https://realtime-sales-report.vercel.app/',
    category: 'HERBALIFE',
    description: 'Báo cáo số lượng và tiến độ phân bổ vé kênh đối tác Herbalife.'
  },
  {
    id: 4,
    code: '04',
    title: 'Trang tính SIZE ÁO',
    url: 'https://shirt-size.vercel.app/',
    category: 'RACE OPS',
    description: 'Bảng tính và quy chuẩn kích cỡ áo thi đấu (Singlet / T-shirt) dành cho Runner.'
  },
  {
    id: 5,
    code: '05',
    title: 'Trang Import BIB',
    url: 'https://vm-import.vercel.app/',
    category: 'ATHLETE BIB',
    description: 'Hệ thống tải lên và xử lý danh sách số báo danh (BIB) vận động viên.'
  }
];

export default function App() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (e: React.MouseEvent, id: number, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#2D2D2D] font-serif p-4 sm:p-8 md:p-12 flex flex-col justify-between selection:bg-[#2D2D2D] selection:text-[#F8F6F0]">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <header className="border-b-2 border-[#2D2D2D] pb-6 mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#2D2D2D] uppercase mb-2">
                VNEXPRESS MARATHON // PORTAL
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-[#2D2D2D]">
                VM Tool Management
              </h1>
            </div>
            <div className="font-mono text-xs text-[#2D2D2D] bg-[#E5E2D9] px-3 py-1.5 border border-[#2D2D2D] shrink-0">
              TỔNG SỐ: <strong>5 CÔNG CỤ</strong>
            </div>
          </div>
        </header>

        {/* 5 Menu Cards Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {TOOLS.map((tool) => {
            const isCopied = copiedId === tool.id;
            return (
              <div
                key={tool.id}
                id={`menu-card-${tool.id}`}
                className="bg-white border-2 border-[#2D2D2D] p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top Strip */}
                  <div className="flex items-center justify-between border-b border-[#E5E2D9] pb-3 mb-4">
                    <span className="font-mono text-sm font-bold bg-[#2D2D2D] text-[#F8F6F0] px-2.5 py-0.5">
                      {tool.code}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#666660]">
                      {tool.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2D2D2D] leading-snug">
                    {tool.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-sm font-serif text-[#4A4A4A] leading-relaxed">
                    {tool.description}
                  </p>

                  {/* URL Monospace */}
                  <div className="mt-4 pt-3 border-t border-[#E5E2D9]">
                    <div className="font-mono text-xs text-[#666660] truncate">
                      {tool.url}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t-2 border-[#2D2D2D] flex items-center gap-2">
                  <a
                    id={`btn-open-tool-${tool.id}`}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#2D2D2D] hover:bg-black text-[#F8F6F0] py-3 px-4 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#2D2D2D] cursor-pointer"
                  >
                    <span>TRUY CẬP NGAY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    id={`btn-copy-url-${tool.id}`}
                    onClick={(e) => handleCopy(e, tool.id, tool.url)}
                    title="Sao chép đường dẫn"
                    className="py-3 px-3.5 bg-white hover:bg-[#E5E2D9] text-[#2D2D2D] border border-[#2D2D2D] font-mono text-xs cursor-pointer flex items-center justify-center"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-700" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </main>
      </div>

      {/* Clean Editorial Footer */}
      <footer className="max-w-5xl mx-auto w-full mt-12 pt-4 border-t border-[#E5E2D9] flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-[#666660]">
        <div>© 2026 VnExpress Marathon Portal</div>
        <div>EDITORIAL NEO-BRUTALISM // 0PX RADIUS</div>
      </footer>
    </div>
  );
}
