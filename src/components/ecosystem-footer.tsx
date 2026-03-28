"use client";

const ECOSYSTEM = [
  { name: "8gent World", href: "https://8gent.world", label: "Ecosystem" },
  { name: "8gent OS", href: "https://8gentos.com", label: "Platform" },
  { name: "8gent Code", href: "https://8gent.dev", label: "Developers", active: true },
  { name: "8gent Jr", href: "https://8gentjr.com", label: "Kids" },
  { name: "8gent Games", href: "https://8gent.games", label: "Play" },
];

export function EcosystemFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "var(--surface-1)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 24px 32px",
        }}
      >
        {/* Ecosystem nav */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          {ECOSYSTEM.map((site) => (
            <a
              key={site.href}
              href={site.href}
              style={{
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontSize: 14,
                  color: site.active
                    ? "var(--accent)"
                    : "var(--text-primary)",
                }}
              >
                {site.name}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--text-muted)",
                  marginTop: 2,
                }}
              >
                {site.label}
              </div>
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: 24,
            fontSize: 12,
            color: "var(--text-muted)",
          }}
        >
          <span>8gent - The Infinite Gentleman</span>
          <div style={{ display: "flex", gap: 16 }}>
            <a
              href="https://github.com/8gi-foundation/8gent-code"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
            >
              GitHub
            </a>
            <a
              href="https://x.com/8gentapp"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
