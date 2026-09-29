import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
export const alt = 'Sochona | Performance Marketing & Revenue Systems';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #050505, #080b12, #00122e)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Deep Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '800px',
            height: '800px',
            background: 'rgba(0, 122, 255, 0.12)',
            filter: 'blur(120px)',
            borderRadius: '50%',
          }}
        />

        {/* TOP CONTENT WRAPPER */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          
          {/* LOGO */}
          <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '60px' }}>
            <span style={{ fontSize: '72px', fontWeight: 900, letterSpacing: '-0.05em', color: 'white', lineHeight: 1 }}>
              sochona
            </span>
            <div 
              style={{ 
                width: '18px', 
                height: '18px', 
                backgroundColor: '#007AFF', 
                borderRadius: '50%', 
                marginBottom: '6px', 
                marginLeft: '4px' 
              }} 
            />
          </div>

          {/* VALUE PROPOSITION: Shifted to Performance Marketing */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h1 style={{ display: 'flex', flexDirection: 'column', fontSize: '76px', fontWeight: 800, color: 'white', lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>
              <span>Architecting</span>
              <span>High-Intent</span>
              <span style={{ color: '#007AFF' }}>Revenue Systems.</span>
            </h1>
            
            <p style={{ fontSize: '30px', color: '#a3a3a3', margin: 0, marginTop: '10px', maxWidth: '900px', lineHeight: 1.4, fontWeight: 500 }}>
              Precision performance marketing, Google Ads architecture, technical SEO, and AI-automated conversion pipelines.
            </p>
          </div>
        </div>

        {/* BOTTOM FOOTER WRAPPER */}
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            borderTop: '1px solid rgba(255,255,255,0.15)', 
            paddingTop: '35px', 
            width: '100%' 
        }}>
          <span style={{ fontSize: '24px', color: 'white', fontWeight: 600, letterSpacing: '0.02em' }}>
            sochona.net
          </span>
          <span style={{ fontSize: '24px', color: '#007AFF', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
            UDYAM-BR-26-0248887
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}