"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { EcosystemFooter } from "@/components/ecosystem-footer";
import {
  Terminal,
  Cpu,
  Brain,
  Shield,
  GitBranch,
  Mic,
  Search,
  Globe,
} from "lucide-react";

const ABILITIES = [
  {
    icon: Brain,
    name: "Memory",
    stat: "30-day decay with frequency-based promotion",
    detail: "SQLite + FTS5 persistent recall with semantic search",
  },
  {
    icon: GitBranch,
    name: "Worktree",
    stat: "4 concurrent agents in isolated git worktrees",
    detail: "Parallel execution with filesystem-based messaging",
  },
  {
    icon: Shield,
    name: "Policy",
    stat: "11 default rules gate every destructive operation",
    detail: "YAML policy engine with approval gates",
  },
  {
    icon: Cpu,
    name: "Evolution",
    stat: "Bayesian skill confidence scoring per session",
    detail: "Post-session reflection and self-improvement",
  },
  {
    icon: Terminal,
    name: "Healing",
    stat: "Atomic git-stash checkpoints before risky ops",
    detail: "Checkpoint-verify-revert loop with failure logging",
  },
  {
    icon: Search,
    name: "AST",
    stat: "97% token reduction vs reading whole files",
    detail: "Blast radius estimation before any edit",
  },
  {
    icon: Mic,
    name: "Voice",
    stat: "Half-duplex voice chat with local whisper.cpp",
    detail: "Speak, transcribe, think, speak back",
  },
  {
    icon: Globe,
    name: "Browser",
    stat: "Lightweight fetch + DuckDuckGo scraping",
    detail: "No headless browser deps, disk cache",
  },
];

const BENCHMARKS = [
  { domain: "Auth", score: 94 },
  { domain: "Events", score: 92 },
  { domain: "Data Pipeline", score: 100 },
  { domain: "State Machine", score: 92 },
  { domain: "SEO", score: 96 },
  { domain: "Video", score: 100 },
  { domain: "Music Theory", score: 81 },
  { domain: "AI Consulting", score: 95 },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          backgroundColor: "color-mix(in srgb, var(--surface-0) 80%, transparent)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 800,
              fontSize: 20,
              color: "var(--text-primary)",
              textDecoration: "none",
            }}
          >
            8gent Code<span style={{ color: "var(--accent)" }}>.</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <a
              href="/docs"
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              Docs
            </a>
            <a
              href="https://github.com/PodJamz/8gent-code"
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              GitHub
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "clamp(48px, 10vw, 120px) 24px 80px",
          textAlign: "center",
        }}
      >
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: 13,
            fontFamily: "var(--font-mono)",
            color: "var(--accent)",
            marginBottom: 16,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Open Source Coding Agent
        </motion.p>

        {/* A-grade headline (Hormozi score: 82/100) */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 800,
            fontSize: "clamp(28px, 5vw, 52px)",
            lineHeight: 1.15,
            color: "var(--text-primary)",
            marginBottom: 24,
          }}
        >
          I tested 39 coding benchmarks on free local models.{" "}
          <span className="gradient-text">8 scored above 90.</span>
        </motion.h1>

        {/* B-grade subheadline (78/100) */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "var(--text-secondary)",
            maxWidth: 640,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          8 core abilities. 250 execution tests. Code compiles or the score is
          zero. Runs on your laptop, costs nothing.
        </motion.p>

        <motion.div
          variants={fadeUp}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="/docs/getting-started/installation"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              backgroundColor: "var(--accent)",
              color: "#fff",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
          >
            <Terminal size={16} />
            Get Started
          </a>
          <a
            href="https://github.com/PodJamz/8gent-code"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              border: "1px solid var(--border-default)",
              color: "var(--text-primary)",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              backgroundColor: "var(--surface-card)",
            }}
          >
            View Source
          </a>
        </motion.div>

        {/* Install snippet */}
        <motion.div
          variants={fadeUp}
          style={{
            marginTop: 48,
            padding: "16px 24px",
            backgroundColor: "var(--surface-2)",
            borderRadius: 8,
            border: "1px solid var(--border-subtle)",
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            color: "var(--text-secondary)",
            textAlign: "left",
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
            overflowX: "auto",
          }}
        >
          <div>
            <span style={{ color: "var(--text-muted)" }}>$</span> ollama pull
            qwen3.5 && git clone https://github.com/PodJamz/8gent-code.git
          </div>
          <div>
            <span style={{ color: "var(--text-muted)" }}>$</span> cd 8gent-code
            && bun install && bun run tui
          </div>
        </motion.div>
      </motion.section>

      {/* Benchmarks */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            fontSize: "clamp(22px, 4vw, 32px)",
            color: "var(--text-primary)",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Ran 250 execution tests. Code compiles or the score is zero.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12,
          }}
        >
          {BENCHMARKS.map((b) => (
            <motion.div
              key={b.domain}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                padding: 20,
                backgroundColor: "var(--surface-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 8,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 28,
                  fontWeight: 700,
                  color:
                    b.score >= 95
                      ? "var(--accent)"
                      : b.score >= 90
                        ? "#2D8A4E"
                        : "var(--text-primary)",
                }}
              >
                {b.score}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  marginTop: 4,
                }}
              >
                {b.domain}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8 Abilities */}
      <section
        style={{
          backgroundColor: "var(--surface-1)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(22px, 4vw, 32px)",
              color: "var(--text-primary)",
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            8 core abilities. Not plugins. Built in.
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              marginBottom: 48,
              fontSize: 15,
            }}
          >
            Every ability has measurable metrics tracked per session.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {ABILITIES.map((a) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{
                    padding: 24,
                    backgroundColor: "var(--surface-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: 8,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 8,
                    }}
                  >
                    <Icon
                      size={18}
                      style={{ color: "var(--accent)" }}
                      strokeWidth={1.75}
                    />
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: 15,
                        color: "var(--text-primary)",
                      }}
                    >
                      {a.name}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                      marginBottom: 4,
                    }}
                  >
                    {a.stat}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {a.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            fontSize: "clamp(22px, 4vw, 32px)",
            color: "var(--text-primary)",
            marginBottom: 16,
          }}
        >
          Start coding with Eight in 3 commands.
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: 32,
            fontSize: 15,
          }}
        >
          No API keys. No sign-up. No cloud dependency.
        </p>
        <a
          href="/docs/getting-started/installation"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 32px",
            backgroundColor: "var(--accent)",
            color: "#fff",
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Read the Docs
        </a>
      </section>

      <EcosystemFooter />
    </div>
  );
}
