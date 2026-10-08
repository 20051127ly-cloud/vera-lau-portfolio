import { PROFILE } from '@/data/profile';
import { NAV_ITEMS } from '@/data/navigation';

/** 页脚改为服务端组件，锚点用原生 href，无需 JS 即可跳转 */
export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg font-bold">{PROFILE.name}</h3>
            <p className="text-xs text-background/70 mt-1">{PROFILE.school} · 汉语言文学</p>
          </div>
          <nav aria-label="页脚导航">
            <ul className="flex flex-wrap justify-center gap-3">
              {NAV_ITEMS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-xs text-background/70 hover:text-morandi-rose transition-colors px-2 py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-background/15 text-center">
          <p className="text-xs text-background/60 italic font-serif">
            &ldquo;Echte Liebe&rdquo; — 真正的爱，是对知识的不懈追求
          </p>
          <p className="text-[0.7rem] text-background/45 mt-3">
            © {new Date().getFullYear()} {PROFILE.name} · Built with Morandi colors & Dortmund spirit
          </p>
        </div>
      </div>
    </footer>
  );
}
