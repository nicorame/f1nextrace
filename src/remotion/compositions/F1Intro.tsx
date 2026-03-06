import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  Easing,
} from 'remotion';

// ─── Timing constants ─────────────────────────────────────────────────────────
const T = {
  // Google
  G_FADE_IN:      0,
  G_TYPE_START:   14,
  G_TYPE_END:     54,
  G_RESULTS_IN:   62,
  G_CLICK:        82,
  G_FADE_OUT:     92,

  // F1 zoom out
  F1_IN:          100,
  F1_ZOOM_DONE:   160,
  F1_OUT:         168,

  // Timer
  TIMER_IN:       175,
  TIMER_OUT:      235,

  // Calendario
  CAL_IN:         242,
  CAL_OUT:        302,

  // Campeonato
  CHAMP_IN:       308,
  TOTAL:          390,
};

const QUERY = 'cuando es la próxima carrera de f1';

// ─── Helpers ──────────────────────────────────────────────────────────────────
const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;
const easeOut = Easing.out(Easing.cubic);

const fi = (frame: number, start: number, dur = 20) =>
  interpolate(frame, [start, start + dur], [0, 1], clamp);
const fo = (frame: number, start: number, dur = 16) =>
  interpolate(frame, [start, start + dur], [1, 0], clamp);
const su = (frame: number, start: number, dur = 20, dist = 40) =>
  interpolate(frame, [start, start + dur], [dist, 0], { ...clamp, easing: easeOut });

// ─── Google logo ──────────────────────────────────────────────────────────────
const GoogleLogo = ({ size = 64 }: { size?: number }) => {
  const colors = ['#4285F4', '#EA4335', '#FBBC05', '#4285F4', '#34A853', '#EA4335'];
  return (
    <div style={{ display: 'flex', lineHeight: 1 }}>
      {'Google'.split('').map((c, i) => (
        <span key={i} style={{ color: colors[i], fontSize: size, fontWeight: 700, fontFamily: 'Arial, sans-serif' }}>
          {c}
        </span>
      ))}
    </div>
  );
};

// ─── Google Search scene ──────────────────────────────────────────────────────
const SceneGoogle = ({ frame }: { frame: number }) => {
  const uiOpacity   = fi(frame, T.G_FADE_IN, 12);
  const sceneOpacity = fo(frame, T.G_FADE_OUT, 18);

  const charsVisible = Math.floor(
    interpolate(frame, [T.G_TYPE_START, T.G_TYPE_END], [0, QUERY.length], clamp)
  );
  const displayedText = QUERY.slice(0, charsVisible);
  const showCursor = frame < T.G_TYPE_END + 8 || Math.floor(frame / 8) % 2 === 0;

  const resultsOpacity = fi(frame, T.G_RESULTS_IN, 20);
  const resultsY       = su(frame, T.G_RESULTS_IN, 20, 28);

  // Click highlight on first result
  const clickGlow = interpolate(frame, [T.G_CLICK, T.G_CLICK + 6, T.G_CLICK + 12], [0, 1, 0], clamp);
  const sceneScale = interpolate(frame, [T.G_FADE_OUT, T.G_FADE_OUT + 18], [1, 1.06], { ...clamp, easing: easeOut });

  return (
    <AbsoluteFill
      style={{
        background: '#fff',
        opacity: uiOpacity * sceneOpacity,
        transform: `scale(${sceneScale})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '70px 80px 0',
      }}
    >
      <GoogleLogo size={62} />

      {/* Search bar */}
      <div
        style={{
          width: '100%', maxWidth: 680,
          border: '1px solid #dfe1e5',
          borderRadius: 28,
          padding: '16px 26px',
          display: 'flex', alignItems: 'center', gap: 14,
          boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
          margin: '32px 0 36px',
          background: '#fff',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="#9aa0a6" strokeWidth="2" />
          <path d="M16.5 16.5L21 21" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 22, color: '#202124', fontFamily: 'Arial, sans-serif', flex: 1 }}>
          {displayedText}
          {showCursor && (
            <span style={{ color: '#1a73e8', marginLeft: 1, fontWeight: 300 }}>|</span>
          )}
        </span>
      </div>

      {/* Results */}
      <div
        style={{
          width: '100%', maxWidth: 680,
          opacity: resultsOpacity,
          transform: `translateY(${resultsY}px)`,
        }}
      >
        {/* ── Result 1: our site ── */}
        <div
          style={{
            padding: '16px 18px',
            borderRadius: 16,
            marginBottom: 8,
            background: clickGlow > 0.01 ? `rgba(26,115,232,${0.06 * clickGlow})` : 'transparent',
            border: `1.5px solid ${clickGlow > 0.01 ? `rgba(26,115,232,${0.4 * clickGlow})` : 'transparent'}`,
            transition: 'background 0.1s',
          }}
        >
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              background: '#e10600',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#fff', fontSize: 10, fontWeight: 900, fontFamily: 'Arial Black, sans-serif' }}>F1</span>
            </div>
            <div>
              <div style={{ color: '#202124', fontSize: 15, fontFamily: 'Arial, sans-serif', fontWeight: 500 }}>
                nicorame.github.io
              </div>
              <div style={{ color: '#4d5156', fontSize: 13, fontFamily: 'Arial, sans-serif' }}>
                https://nicorame.github.io/f1nextrace/
              </div>
            </div>
          </div>
          {/* Title */}
          <div style={{ color: '#1a0dab', fontSize: 22, fontFamily: 'Arial, sans-serif', fontWeight: 400, marginBottom: 6 }}>
            F1 Horarios - Próxima Carrera y Calendario 2026
          </div>
          {/* Description */}
          <div style={{ color: '#4d5156', fontSize: 15, fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
            Cuenta regresiva para la próxima sesión de Fórmula 1. Horarios actualizados de todas
            las carreras, entrenamientos y clasificaciones del campeonato 2026.
          </div>
        </div>

        {/* ── Result 2: generic ── */}
        <div style={{ padding: '14px 18px', opacity: 0.55 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#e5e7eb' }} />
            <div style={{ color: '#4d5156', fontSize: 13, fontFamily: 'Arial, sans-serif' }}>
              https://www.formula1.com › es › racing › 2026
            </div>
          </div>
          <div style={{ color: '#1a0dab', fontSize: 20, fontFamily: 'Arial, sans-serif', marginBottom: 4 }}>
            Calendario oficial Fórmula 1 2026 — Formula1.com
          </div>
          <div style={{ color: '#4d5156', fontSize: 14, fontFamily: 'Arial, sans-serif' }}>
            El calendario oficial de la temporada 2026 con todas las fechas y circuitos...
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ─── Scene: F1 zoom out ───────────────────────────────────────────────────────
const SceneF1 = ({ frame }: { frame: number }) => {
  const localFrame = frame - T.F1_IN;
  const f1Scale = interpolate(
    localFrame, [0, T.F1_ZOOM_DONE - T.F1_IN],
    [7.5, 1],
    { ...clamp, easing: Easing.out(Easing.exp) }
  );
  const f1Blur  = interpolate(localFrame, [0, 35], [10, 0], clamp);
  const opacity = fi(frame, T.F1_IN, 14) * fo(frame, T.F1_OUT, 16);

  return (
    <AbsoluteFill
      style={{
        opacity,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <span
        style={{
          color: '#e10600',
          fontSize: 160,
          fontWeight: 900,
          fontFamily: 'Arial Black, sans-serif',
          letterSpacing: '0.04em',
          transform: `scale(${f1Scale})`,
          filter: `blur(${f1Blur}px)`,
          display: 'inline-block',
          textShadow: '0 0 60px rgba(225,6,0,0.15)',
        }}
      >
        F1
      </span>
    </AbsoluteFill>
  );
};

// ─── Scene: Timer ────────────────────────────────────────────────────────────
const SceneTimer = ({ frame }: { frame: number }) => {
  const opacity = fi(frame, T.TIMER_IN) * fo(frame, T.TIMER_OUT);
  const y       = su(frame, T.TIMER_IN);

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 28, padding: '0 80px',
      }}
    >
      <p style={{ color: '#888', fontSize: 17, letterSpacing: '0.22em', textTransform: 'uppercase', margin: 0 }}>
        próxima carrera
      </p>
      <h2 style={{ color: '#111', fontSize: 58, fontWeight: 900, fontFamily: 'Arial Black, sans-serif', margin: 0, textAlign: 'center', lineHeight: 1.1 }}>
        Gran Premio de <span style={{ color: '#e10600' }}>Bahrein</span>
      </h2>
      {/* Countdown */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-end' }}>
        {[['02', 'días'], ['14', 'horas'], ['37', 'min'], ['08', 'seg']].map(([val, label], i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 80, fontWeight: 900, fontFamily: 'Arial Black, sans-serif', color: '#111', lineHeight: 1 }}>{val}</span>
            <span style={{ fontSize: 14, color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ background: '#e10600', color: 'white', padding: '12px 36px', borderRadius: 14, fontSize: 18, fontWeight: 700, letterSpacing: '0.05em' }}>
        Carrera — 20:00 hs
      </div>
    </AbsoluteFill>
  );
};

// ─── Scene: Calendario ───────────────────────────────────────────────────────
const races = [
  { name: 'Bahrein', fecha: '16/03', sessions: [['Libres 1', false], ['Clasificación', false], ['Carrera', true]] },
  { name: 'Arabia Saudita', fecha: '23/03', sessions: [['Libres 1', false], ['Sprint', false], ['Carrera', true]] },
  { name: 'Australia', fecha: '30/03', sessions: [['Libres 1', false], ['Clasificación', false], ['Carrera', true]] },
] as const;

const SceneCalendario = ({ frame }: { frame: number }) => {
  const opacity = fi(frame, T.CAL_IN) * fo(frame, T.CAL_OUT);
  const y       = su(frame, T.CAL_IN);

  return (
    <AbsoluteFill
      style={{
        opacity, transform: `translateY(${y}px)`,
        padding: '0 72px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28,
      }}
    >
      <h2 style={{ color: '#111', fontSize: 44, fontWeight: 900, fontFamily: 'Arial Black, sans-serif', margin: 0, letterSpacing: '0.08em' }}>
        <span style={{ color: '#e10600' }}>Calendario</span> F1 2026
      </h2>
      <div style={{ display: 'flex', gap: 18 }}>
        {races.map((race, i) => (
          <div key={i} style={{
            flex: 1, background: '#fff', border: '1.5px solid #e5e7eb',
            borderRadius: 18, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 12,
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ background: '#e10600', color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6, letterSpacing: '0.1em' }}>GP</div>
            </div>
            <div style={{ color: '#111', fontSize: 22, fontWeight: 900, fontFamily: 'Arial Black, sans-serif', lineHeight: 1.2 }}>{race.name}</div>
            <div style={{ color: '#888', fontSize: 14 }}>{race.fecha}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {race.sessions.map(([s, isRace], j) => (
                <div key={j} style={{
                  background: isRace ? '#fff0f0' : '#f6f6f6',
                  border: `1px solid ${isRace ? '#fca5a5' : '#e5e7eb'}`,
                  borderRadius: 9, padding: '7px 12px', fontSize: 14,
                  color: isRace ? '#e10600' : '#555', fontWeight: isRace ? 700 : 500,
                }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ─── Scene: Campeonato ───────────────────────────────────────────────────────
const drivers = [
  { pos: 1, code: 'PIA', name: 'Oscar Piastri',    team: 'McLaren',  pts: 234, color: '#FF8000' },
  { pos: 2, code: 'NOR', name: 'Lando Norris',     team: 'McLaren',  pts: 226, color: '#FF8000' },
  { pos: 3, code: 'LEC', name: 'Charles Leclerc',  team: 'Ferrari',  pts: 198, color: '#E8002D' },
  { pos: 4, code: 'VER', name: 'Max Verstappen',   team: 'Red Bull', pts: 185, color: '#3671C6' },
  { pos: 5, code: 'RUS', name: 'George Russell',   team: 'Mercedes', pts: 164, color: '#27F4D2' },
];
const posColors: Record<number, string> = { 1: '#FFD700', 2: '#C0C0C0', 3: '#CD7F32' };

const SceneCampeonato = ({ frame }: { frame: number }) => {
  const opacity = fi(frame, T.CHAMP_IN);
  const y       = su(frame, T.CHAMP_IN);

  return (
    <AbsoluteFill
      style={{
        opacity, transform: `translateY(${y}px)`,
        padding: '0 72px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24,
      }}
    >
      <h2 style={{ color: '#111', fontSize: 44, fontWeight: 900, fontFamily: 'Arial Black, sans-serif', margin: 0, letterSpacing: '0.08em' }}>
        <span style={{ color: '#e10600' }}>Campeonato</span> F1 2026
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {drivers.map((d) => (
          <div key={d.pos} style={{
            display: 'flex', alignItems: 'center', gap: 18,
            background: '#fff', border: '1.5px solid #e5e7eb',
            borderLeft: `4px solid ${d.color}`,
            borderRadius: 14, padding: '16px 22px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 9,
              background: posColors[d.pos] ?? '#f0f0f0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, fontWeight: 900, fontFamily: 'Arial Black, sans-serif',
              color: d.pos <= 2 ? '#000' : d.pos === 3 ? '#fff' : '#555',
              flexShrink: 0,
            }}>
              {d.pos}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 22, fontWeight: 900, fontFamily: 'Arial Black, sans-serif', color: '#111', letterSpacing: '0.1em' }}>{d.code}</div>
              <div style={{ fontSize: 14, color: '#888' }}>{d.name}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: d.color, marginTop: 2 }}>{d.team}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 32, fontWeight: 900, fontFamily: 'Arial Black, sans-serif', color: '#111', lineHeight: 1 }}>{d.pts}</div>
              <div style={{ fontSize: 11, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>pts</div>
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ─── Root composition ─────────────────────────────────────────────────────────
export const F1Intro = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: '#f8f8f8' }}>
      <SceneGoogle frame={frame} />
      <SceneF1     frame={frame} />
      <SceneTimer  frame={frame} />
      <SceneCalendario frame={frame} />
      <SceneCampeonato frame={frame} />
    </AbsoluteFill>
  );
};
