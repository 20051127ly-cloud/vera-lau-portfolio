import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Vera LAU Portfolio';

/**
 * 动态生成社交分享图，无需额外静态资源。
 * 内容使用拉丁字符，避免 satori 在无中文字体环境下出现豆腐块。
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F5F1ED',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 460,
            height: 460,
            borderRadius: 460,
            background: 'rgba(196,166,166,0.35)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -140,
            left: -100,
            width: 380,
            height: 380,
            borderRadius: 380,
            background: 'rgba(163,181,199,0.3)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: '#C4A6A6',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            V
          </div>
          <div style={{ fontSize: 28, color: '#9B7E5E' }}>Portfolio</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 88, fontWeight: 700, color: '#4A4340', lineHeight: 1.1 }}>
            Vera LAU
          </div>
          <div style={{ fontSize: 36, color: '#9B7E5E', marginTop: 20 }}>
            Classics · Content Strategy · Brand Communication
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['GPA 4.15 / 5.00', 'Rank 2 / 14', 'CET-6 605'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '10px 24px',
                borderRadius: 999,
                border: '2px solid #DDD5CC',
                background: '#FDFBF9',
                color: '#5C5652',
                fontSize: 24,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
