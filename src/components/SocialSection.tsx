import { BookOpen, ExternalLink, Mail, MessageCircle } from 'lucide-react';
import { PROFILE } from '@/data/profile';
import { SOCIALS } from '@/data/socials';
import { Section, SectionHeader } from '@/components/Section';
import PrintButton from '@/components/PrintButton';

const ICONS = {
  book: BookOpen,
  message: MessageCircle,
  mail: Mail,
} as const;

const TONE_CLASS = {
  red: 'bg-red-50 text-red-400 border-red-100 hover:bg-red-500 hover:text-white hover:border-red-500',
  accent:
    'bg-morandi-accent-light text-morandi-accent border-morandi-accent/20 hover:bg-morandi-accent hover:text-white hover:border-morandi-accent',
} as const;

const ICON_SIZE = {
  book: 'w-5 h-5',
  message: 'w-5 h-5',
  mail: 'w-6 h-6',
} as const;

export default function SocialSection() {
  return (
    <Section id="social">
      <SectionHeader
        icon={<ExternalLink className="w-4 h-4 text-morandi-lavender" />}
        title="联系 & 社交"
        badgeClass="bg-morandi-lavender/15"
      />

      <div className="md:ml-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {SOCIALS.map((social, i) => {
            const Icon = ICONS[social.icon];
            const content = (
              <>
                <Icon className={ICON_SIZE[social.icon]} aria-hidden />
                <h3 className="font-semibold text-sm mt-2.5">{social.name}</h3>
                <p className="text-[0.7rem] opacity-70 mt-0.5">{social.description}</p>
              </>
            );

            return social.url ? (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rise mod-card border p-4 sm:p-5 transition-all duration-300 ${TONE_CLASS[social.tone]}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {content}
              </a>
            ) : (
              <div
                key={social.name}
                className={`rise mod-card border p-4 sm:p-5 ${TONE_CLASS[social.tone].split(' hover:')[0]}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {content}
              </div>
            );
          })}

          <div className="rise" style={{ animationDelay: '120ms' }}>
            <PrintButton />
          </div>
        </div>

        <a
          href={`mailto:${PROFILE.email}`}
          className="rise block"
          style={{ animationDelay: '180ms' }}
        >
          <div className="mod-card bg-morandi-rose border border-morandi-rose/30 p-5 sm:p-6 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-white" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">发送邮件联系我</h3>
                <p className="text-xs text-white/80 mt-0.5">
                  期待与你交流学术、合作项目或任何有趣的事
                </p>
              </div>
            </div>
            <ExternalLink
              className="w-5 h-5 text-white/60 group-hover:text-white transition-colors arrow-nudge shrink-0"
              aria-hidden
            />
          </div>
        </a>
      </div>
    </Section>
  );
}
