import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiAlertTriangle, FiCheckCircle, FiFileText, FiLock, FiExternalLink, FiTerminal, FiKey } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const securityReports = [
  {
    title: 'RIT INFINIX Portal — Full-Spectrum Authentication & Access Control Assessment',
    target: 'ritinfinix.vercel.app',
    url: 'https://ritinfinix.vercel.app',
    date: 'August 2026',
    severity: 'Critical (5 Findings)',
    category: 'Authentication Bypass & Credential Disclosure',
    summary: 'Discovered multiple critical authorization and authentication vulnerabilities where administrative credentials, hardcoded passwords, and offline state logic allowed unauthenticated administrative access and password-free student portal bypasses.',
    keyFindings: [
      {
        name: 'Public Administrative Credential Exposure',
        detail: 'Unauthenticated GET /api/admin/credentials returned plaintext administrator email & password in public JSON response.'
      },
      {
        name: 'Client-Side Hardcoded Password Disclosure',
        detail: 'Compiled frontend JavaScript bundle contained accepted admin credentials, allowing trivial credential retrieval.'
      },
      {
        name: 'Student Login Password-Bypass Fallback',
        detail: 'Network-failure fallback path logged users into team accounts by matching sequential Team IDs without password verification.'
      },
      {
        name: 'Client-Side Authorization & State Tampering (localStorage)',
        detail: 'Both admin and student dashboards gated sensitive views using mutable localStorage flags rather than server-validated session tokens.'
      }
    ],
    remediations: [
      'Decommissioned credential-returning API endpoints and rotated compromised administrator credentials.',
      'Implemented secure server-side session management using HttpOnly, Secure, SameSite cookies with Argon2id / bcrypt hashing.',
      'Eliminated unauthenticated offline fallback paths to enforce strict server-side authentication.',
      'Enforced server-side object-level authorization across all API routes to prevent IDOR and unauthorized state tampering.'
    ]
  }];

const BugBounty = () => {
  return (
    <section id="bug-bounty" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Bug Bounty & Security Research" 
          subtitle="Independent vulnerability assessments, responsible disclosures, and architectural security remediation reports."
        />

        <div className="space-y-12 max-w-6xl mx-auto">
          {securityReports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlassCard className="p-6 sm:p-8 border border-white/10 hover:border-red-500/40 hover:shadow-[0_0_35px_rgba(239,68,68,0.15)] transition-all duration-500 rounded-3xl">
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-red-950/80 border border-red-500/50 text-red-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                        <FiAlertTriangle className="w-3.5 h-3.5" />
                        {report.severity}
                      </span>
                      <span className="text-xs font-semibold text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                        {report.date}
                      </span>
                      <span className="text-xs font-bold text-red-400 bg-red-950/40 border border-red-500/30 px-3 py-1 rounded-full">
                        {report.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">
                      {report.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-jetbrains text-gray-400">Target URL:</span>
                      <a 
                        href={report.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold font-jetbrains text-red-400 hover:text-white bg-red-950/50 hover:bg-red-900/50 border border-red-500/40 px-3 py-1 rounded-lg transition-all shadow-sm hover:shadow-[0_0_10px_rgba(239,68,68,0.3)]"
                      >
                        <span>{report.target}</span>
                        <FiExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a 
                      href={report.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:shadow-[0_0_20px_rgba(239,68,68,0.7)] hover:-translate-y-0.5"
                    >
                      <span>Visit Target</span>
                      <FiExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Executive Summary */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {report.summary}
                </p>

                {/* Findings & Remediations Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                  {/* Vulnerability Findings */}
                  <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-5">
                    <h4 className="text-sm font-bold text-red-400 flex items-center gap-2 mb-4">
                      <FiLock className="w-4 h-4" />
                      Key Vulnerabilities Discovered
                    </h4>
                    <div className="space-y-3">
                      {report.keyFindings.map((f, fIdx) => (
                        <div key={fIdx} className="text-xs">
                          <p className="font-semibold text-white mb-0.5">• {f.name}</p>
                          <p className="text-gray-400 leading-relaxed pl-3">{f.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Remediation & Defensive Solutions */}
                  <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-5">
                    <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2 mb-4">
                      <FiShield className="w-4 h-4" />
                      Responsible Remediations Provided
                    </h4>
                    <div className="space-y-2.5">
                      {report.remediations.map((r, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs text-gray-300">
                          <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BugBounty;
