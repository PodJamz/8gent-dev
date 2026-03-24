"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { EcosystemFooter } from "@/components/ecosystem-footer";
import { Terminal, BookOpen, GitBranch } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
          backgroundColor:
            "color-mix(in srgb, var(--surface-0) 80%, transparent)",
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

      {/* Hero - utility, not marketing */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "clamp(48px, 8vw, 100px) 24px 64px",
        }}
      >
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 800,
            fontSize: "clamp(28px, 5vw, 44px)",
            lineHeight: 1.2,
            color: "var(--text-primary)",
            marginBottom: 16,
          }}
        >
          8gent Code
        </motion.h1>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "clamp(16px, 2.5vw, 19px)",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          Open source autonomous coding agent. Runs on local LLMs via Ollama.
          No API keys required, no usage caps, no cloud dependency.
        </motion.p>

        {/* Install */}
        <motion.div
          variants={fadeUp}
          style={{
            padding: "20px 24px",
            backgroundColor: "var(--surface-2)",
            borderRadius: 8,
            border: "1px solid var(--border-subtle)",
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            color: "var(--text-secondary)",
            marginBottom: 32,
            overflowX: "auto",
          }}
        >
          <div style={{ marginBottom: 6 }}>
            <span style={{ color: "var(--text-muted)" }}>$</span> npm install -g @podjamz/8gent-code
          </div>
          <div>
            <span style={{ color: "var(--text-muted)" }}>$</span>{" "}
            <span style={{ color: "var(--accent)" }}>8gent</span>
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12,
          }}
        >
          <QuickLink
            href="/docs/getting-started/installation"
            icon={Terminal}
            title="Installation"
            desc="npm install and start coding"
          />
          <QuickLink
            href="/docs"
            icon={BookOpen}
            title="Documentation"
            desc="Architecture, guides, API reference"
          />
          <QuickLink
            href="https://github.com/PodJamz/8gent-code"
            icon={GitBranch}
            title="Source Code"
            desc="MIT licensed, contributions welcome"
          />
        </motion.div>
      </motion.section>

      {/* What it does - plain description, no stat padding */}
      <section
        style={{
          backgroundColor: "var(--surface-1)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(20px, 3vw, 28px)",
              color: "var(--text-primary)",
              marginBottom: 24,
            }}
          >
            What Eight does
          </h2>
          <div
            style={{
              display: "grid",
              gap: 20,
              color: "var(--text-secondary)",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            <p>
              Eight is a terminal-based coding agent with 8 built-in abilities:
              persistent memory, parallel worktree execution, a policy engine
              for safe operations, self-evolution via session reflection,
              self-healing with atomic checkpoints, AST-level code navigation,
              voice chat, and web browsing.
            </p>
            <p>
              It runs entirely on your machine using Ollama for local inference.
              Cloud models via OpenRouter are available as an opt-in fallback.
              The TUI is built with Ink v6 (React for the terminal).
            </p>
            <p>
              The system prompt improves itself through an autoresearch loop
              inspired by Karpathy - run benchmarks, analyze failures, derive
              mutations, re-test. The model router learns which model performs
              best on which domain and routes accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Docs sections */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            fontSize: "clamp(20px, 3vw, 28px)",
            color: "var(--text-primary)",
            marginBottom: 24,
          }}
        >
          Documentation
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12,
          }}
        >
          <DocSection
            href="/docs/getting-started/installation"
            title="Getting Started"
            pages={["Installation", "Quick Start", "Configuration"]}
          />
          <DocSection
            href="/docs/architecture/overview"
            title="Architecture"
            pages={["Overview", "Model Router", "Autoresearch", "Kernel"]}
          />
          <DocSection
            href="/docs/guides/tui"
            title="Guides"
            pages={["TUI", "Personalization", "OpenRouter", "MCP"]}
          />
          <DocSection
            href="/docs/reference/cli"
            title="Reference"
            pages={["CLI", "Slash Commands", "Tools", "Hooks"]}
          />
        </div>
      </section>

      <EcosystemFooter />
    </div>
  );
}

function QuickLink({
  href,
  icon: Icon,
  title,
  desc,
}: {
  href: string;
  icon: typeof Terminal;
  title: string;
  desc: string;
}) {
  return (
    <a
      href={href}
      style={{
        display: "block",
        padding: 20,
        backgroundColor: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 8,
        textDecoration: "none",
        transition: "border-color 0.2s",
      }}
    >
      <Icon
        size={18}
        style={{ color: "var(--accent)", marginBottom: 8 }}
        strokeWidth={1.75}
      />
      <div
        style={{
          fontWeight: 600,
          fontSize: 15,
          color: "var(--text-primary)",
          marginBottom: 4,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.4 }}>
        {desc}
      </div>
    </a>
  );
}

function DocSection({
  href,
  title,
  pages,
}: {
  href: string;
  title: string;
  pages: string[];
}) {
  return (
    <a
      href={href}
      style={{
        display: "block",
        padding: 20,
        backgroundColor: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 8,
        textDecoration: "none",
      }}
    >
      <div
        style={{
          fontWeight: 600,
          fontSize: 15,
          color: "var(--text-primary)",
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
        {pages.join(" / ")}
      </div>
    </a>
  );
}
