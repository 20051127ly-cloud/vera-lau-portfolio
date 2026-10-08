import Image from 'next/image';
import { MapPin, School, Sparkles, Mail, ArrowDown } from 'lucide-react';
import { CORE_STRENGTHS, EDUCATION, LANGUAGES, PROFILE, STATS } from '@/data/profile';
import { STAT_TONE } from '@/lib/tone';
import MaskedPhone from '@/components/MaskedPhone';

/**
 * Hero：Bento Grid 概览。
 * 改为服务端组件，入场与循环光晕全部用 CSS 动画实现（不依赖 JS），
 * 首屏更快且 JS 失效时内容依然完整可见。
 */
export default function HeroSection() {
  return (
    <section id="profile" className="min-h-screen flex items-center pt-20 pb-12 relative scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute inset-0 dortmund-stripe" />
        <div className="float-glow-a absolute -top-20 -right-20 w-80 h-80 rounded-full bg-morandi-rose/10 blur-3xl" />
        <div className="float-glow-b absolute bottom-20 -left-20 w-64 h-64 rounded-full bg-morandi-accent/12 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* 头像 + 基本信息 */}
          <div className="rise lg:col-span-4 lg:row-span-2" style={{ animationDelay: '0ms' }}>
            <div className="mod-card bg-card border border-border/50 p-6 h-full flex flex-col items-center justify-center text-center glow-pulse">
              <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-morandi-rose/30 shadow-lg shadow-morandi-rose/10 mb-5">
                <Image
                  src="/avatar.jpeg"
                  alt={`${PROFILE.name} 的头像`}
                  width={144}
                  height={144}
                  sizes="144px"
                  quality={82}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="font-serif text-2xl font-bold text-foreground">{PROFILE.name}</h1>
              <p className="text-sm text-morandi-accent font-medium mt-1">{PROFILE.school}</p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="pill bg-morandi-rose/15 text-morandi-rose border border-morandi-rose/25">
                  <MapPin className="w-3 h-3" aria-hidden />
                  {PROFILE.location}
                </span>
                <span className="pill bg-morandi-accent/12 text-morandi-accent border border-morandi-accent/25">
                  <School className="w-3 h-3" aria-hidden />
                  {PROFILE.grade}
                </span>
              </div>

              <p className="text-xs text-muted-foreground mt-4 leading-relaxed max-w-[240px]">
                {PROFILE.intro}
              </p>

              <div className="mt-4 space-y-2 w-full">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-2 text-xs text-morandi-accent hover:text-morandi-rose transition-colors justify-center"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden />
                  {PROFILE.email}
                </a>
                <MaskedPhone />
              </div>
            </div>
          </div>

          {/* 主标题 */}
          <div className="rise lg:col-span-8" style={{ animationDelay: '80ms' }}>
            <div className="mod-card bg-morandi-rose border border-morandi-rose/30 p-6 sm:p-8 h-full flex flex-col justify-center">
              <div className="flex items-start justify-between">
                <div>
                  <div className="h-1 w-12 bg-white/25 rounded-full mb-4" />
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                    {PROFILE.headlinePrimary}
                    <br />
                    <span className="text-white/80">{PROFILE.headlineSecondary}</span>
                  </h2>
                </div>
                <Sparkles className="w-8 h-8 text-white/25 shrink-0" aria-hidden />
              </div>
              <p className="text-sm text-white/85 mt-4 leading-relaxed max-w-lg">{PROFILE.summary}</p>
            </div>
          </div>

          {/* 关键数据 */}
          <div className="rise lg:col-span-8" style={{ animationDelay: '160ms' }}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map((stat) => (
                <div key={stat.label} className={`mod-card p-4 text-center border ${STAT_TONE[stat.tone]}`}>
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs mt-0.5 opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 语言能力 + 教育 */}
          <div className="rise lg:col-span-4 lg:row-span-2" style={{ animationDelay: '240ms' }}>
            <div className="mod-card bg-card border border-border/50 p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="icon-badge bg-morandi-accent/12">
                  <span className="text-lg" aria-hidden>
                    🌐
                  </span>
                </div>
                <h3 className="font-semibold text-sm">语言能力</h3>
              </div>
              <div className="space-y-3">
                {LANGUAGES.map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium">{l.lang}</span>
                      <span className="text-muted-foreground">{l.level}</span>
                    </div>
                    <div
                      className="h-1.5 bg-muted rounded-full overflow-hidden"
                      role="progressbar"
                      aria-label={`${l.lang} 熟练度`}
                      aria-valuenow={l.pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="bar-fill h-full rounded-full bg-gradient-to-r from-morandi-accent to-morandi-rose"
                        style={{ '--pct': `${l.pct}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="icon-badge bg-morandi-rose/12">
                    <span className="text-lg" aria-hidden>
                      🎓
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm">教育</h3>
                </div>
                <div className="space-y-2">
                  {EDUCATION.map((e) => (
                    <div
                      key={e.name}
                      className={`p-2.5 rounded-lg ${
                        e.tone === 'blue'
                          ? 'bg-morandi-blue/10 border border-morandi-blue/20'
                          : 'bg-muted/50'
                      }`}
                    >
                      <p className={`text-xs font-medium ${e.tone === 'blue' ? 'text-morandi-blue' : ''}`}>
                        {e.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{e.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 核心竞争力 */}
          <div className="rise lg:col-span-7" style={{ animationDelay: '320ms' }}>
            <div className="mod-card bg-card border border-border/50 p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="icon-badge bg-morandi-amber/15">
                  <span className="text-lg" aria-hidden>
                    ✨
                  </span>
                </div>
                <h3 className="font-semibold text-sm">核心竞争力</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CORE_STRENGTHS.map((skill) => (
                  <span
                    key={skill}
                    className="pill bg-morandi-accent/8 text-morandi-accent border border-morandi-accent/15 justify-center py-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Motto */}
          <div className="rise lg:col-span-5" style={{ animationDelay: '400ms' }}>
            <div className="mod-card bg-gradient-to-br from-morandi-rose/12 via-morandi-accent/8 to-morandi-blue/12 border border-morandi-rose/20 p-5 h-full flex flex-col items-center justify-center text-center">
              <div className="icon-badge bg-morandi-rose/12 mb-3">
                <span className="text-lg" aria-hidden>
                  💛
                </span>
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Motto</p>
              <p className="font-serif italic text-lg text-morandi-rose leading-relaxed">
                {PROFILE.mottoLatin}
              </p>
              <p className="font-serif italic text-lg text-morandi-accent leading-relaxed">
                {PROFILE.mottoEnglish}
              </p>
            </div>
          </div>

          {/* 滚动提示（Hero 卡片本身不可展开，原「点击卡片展开详情」为误导文案） */}
          <div className="rise lg:col-span-12" style={{ animationDelay: '480ms' }}>
            <a
              href="#academic"
              className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-morandi-rose transition-colors mt-2"
            >
              <ArrowDown className="w-3.5 h-3.5 arrow-nudge" aria-hidden />
              向下滚动查看完整简历
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
