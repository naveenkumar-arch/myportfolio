import React, { useCallback } from 'react';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { FaReact, FaJava, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: ["#8B5CF6", "#00D9FF"] },
            links: { enable: false },
            move: { direction: "none", enable: true, outModes: { default: "out" }, random: true, speed: 0.5, straight: false },
            number: { density: { enable: true, area: 800 }, value: 30 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-neon-purple"></div>
              <span className="text-neon-purple font-mono font-medium tracking-wider">Hello, World! 👋</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-4 tracking-tight leading-tight">
              I'm Naveen <br /> Kumar K
            </h1>

            <div className="flex items-center text-2xl md:text-3xl font-semibold mb-6 font-jetbrains">
              <span className="text-gray-400 mr-2">&lt;</span>
              <TypeAnimation
                sequence={['React Developer', 2000, 'Full Stack Dev', 2000, 'Cyber Security', 2000, 'Java Backend', 2000]}
                wrapper="span" speed={50} className="text-neon-purple" repeat={Infinity}
              />
              <span className="text-gray-400 ml-2">/&gt;</span>
            </div>

            <p className="text-gray-400 max-w-lg text-lg mb-10 leading-relaxed">
              Building secure, scalable, and modern web applications.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10">
              <a href="#contact" className="bg-neon-purple text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:-translate-y-1 transition-all duration-300">
                Hire Me <FiArrowRight />
              </a>
              <a href="#" className="bg-[#1a1c2e] text-white border border-white/10 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/5 hover:border-neon-purple/50 hover:-translate-y-1 transition-all duration-300">
                <FiDownload /> Resume
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/naveenkumar-arch" className="w-12 h-12 bg-[#1a1c2e] border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-purple hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/naveen-kumar-k-700b802b9/" className="w-12 h-12 bg-[#1a1c2e] border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all duration-300">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:nv01110612@gmail.com" className="w-12 h-12 bg-[#1a1c2e] border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
                <FiMail size={20} />
              </a>
            </div>
          </motion.div>

          {/* ── Right Content – 3D Orbital System ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          >
            <div
              className="relative w-[340px] h-[340px] md:w-[460px] md:h-[460px] flex items-center justify-center"
              style={{ perspective: '800px', perspectiveOrigin: 'center center' }}
            >
              {/* Ambient glow blobs */}
              <div className="absolute w-60 h-60 bg-neon-purple/25 blur-[90px] rounded-full pointer-events-none" />
              <div className="absolute w-44 h-44 bg-neon-blue/20 blur-[70px] rounded-full pointer-events-none translate-x-12 -translate-y-8" />

              {/* ── Static Background Circle ── */}
              <div style={{
                position: 'absolute', width: '100%', height: '100%',
                borderRadius: '50%',
                border: '1.5px solid rgba(139,92,246,0.2)',
                boxShadow: '0 0 40px rgba(139,92,246,0.08)',
              }} />

              {/* ── RING 1 – purple | tilt wrapper + inner spin ── */}
              <div style={{ position:'absolute', width:'115%', height:'115%', transform:'rotateX(68deg) rotateY(-20deg)', transformStyle:'preserve-3d' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease:'linear' }}
                  style={{ position:'absolute', inset:0, borderRadius:'50%',
                    border:'6px solid transparent', borderTopColor:'#c084fc', borderRightColor:'#a855f7',
                    filter:'drop-shadow(0 0 18px #a855f7) drop-shadow(0 0 40px #7c3aed)' }}
                />
              </div>

              {/* ── RING 2 – cyan-blue | opposite tilt ── */}
              <div style={{ position:'absolute', width:'100%', height:'100%', transform:'rotateX(65deg) rotateY(28deg)', transformStyle:'preserve-3d' }}>
                <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 12, ease:'linear' }}
                  style={{ position:'absolute', inset:0, borderRadius:'50%',
                    border:'5px solid transparent', borderBottomColor:'#00D9FF', borderLeftColor:'#38bdf8',
                    filter:'drop-shadow(0 0 16px #00D9FF) drop-shadow(0 0 32px #0ea5e9)' }}
                />
              </div>

              {/* ── RING 3 – teal | near-horizontal ── */}
              <div style={{ position:'absolute', width:'87%', height:'87%', transform:'rotateX(80deg) rotateY(5deg)', transformStyle:'preserve-3d' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease:'linear' }}
                  style={{ position:'absolute', inset:0, borderRadius:'50%',
                    border:'4px solid transparent', borderTopColor:'#2dd4bf', borderLeftColor:'#5eead4',
                    filter:'drop-shadow(0 0 14px #2dd4bf)' }}
                />
              </div>

              {/* ── RING 4 – orange-red | steep diagonal tilt ── */}
              <div style={{ position:'absolute', width:'108%', height:'108%', transform:'rotateX(58deg) rotateY(-48deg)', transformStyle:'preserve-3d' }}>
                <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 10, ease:'linear' }}
                  style={{ position:'absolute', inset:0, borderRadius:'50%',
                    border:'5px solid transparent', borderTopColor:'#fb923c', borderRightColor:'#f43f5e',
                    filter:'drop-shadow(0 0 14px #fb923c) drop-shadow(0 0 28px #f43f5e)' }}
                />
              </div>

              {/* ── RING 5 – green | wide horizontal ── */}
              <div style={{ position:'absolute', width:'94%', height:'94%', transform:'rotateX(82deg) rotateY(42deg)', transformStyle:'preserve-3d' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease:'linear' }}
                  style={{ position:'absolute', inset:0, borderRadius:'50%',
                    border:'4px solid transparent', borderBottomColor:'#4ade80', borderRightColor:'#22c55e',
                    filter:'drop-shadow(0 0 12px #4ade80)' }}
                />
              </div>

              {/* ── Core glowing sphere ── */}
              <div
                className="absolute flex items-center justify-center rounded-full z-10"
                style={{
                  width: '54%', height: '54%',
                  background: 'radial-gradient(circle at 32% 30%, #2d1f6e, #090B1A 80%)',
                  boxShadow: '0 0 50px rgba(139,92,246,0.4), 0 0 100px rgba(139,92,246,0.15), inset 0 0 40px rgba(0,0,0,0.7)',
                  border: '1.5px solid rgba(139,92,246,0.35)',
                }}
              >
                <motion.img
                  animate={{ y: [-7, 7, -7] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png"
                  alt="Developer"
                  className="w-24 h-24 md:w-36 md:h-36 object-contain select-none"
                  style={{ filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.8))' }}
                />
              </div>

              {/* ── Skill Badges – glass constellation ── */}
              {[
                { icon: FaReact,     label: 'React.js', color: '#61DAFB', border: 'rgba(97,218,251,0.35)',  shadow: 'rgba(97,218,251,0.18)',  pos: { top: '4%',  right: '5%'  } },
                { icon: SiSpringboot,label: 'Spring',   color: '#6DB33F', border: 'rgba(109,179,63,0.35)', shadow: 'rgba(109,179,63,0.18)', pos: { top: '43%', right: '-6%' } },
                { icon: FaJava,      label: 'Java',     color: '#f89820', border: 'rgba(248,152,32,0.35)', shadow: 'rgba(248,152,32,0.18)', pos: { bottom: '7%', right: '12%' } },
                { icon: MdSecurity,  label: 'Security', color: '#f87171', border: 'rgba(248,113,113,0.35)',shadow: 'rgba(248,113,113,0.18)',pos: { bottom: '12%', left: '3%'  } },
                { icon: SiMysql,     label: 'SQL',      color: '#4479A1', border: 'rgba(68,121,161,0.35)', shadow: 'rgba(68,121,161,0.18)', pos: { top: '42%', left: '-5%' } },
                { icon: FaAws,       label: 'AWS',      color: '#FF9900', border: 'rgba(255,153,0,0.35)',  shadow: 'rgba(255,153,0,0.18)',  pos: { top: '5%',  left: '9%'  } },
              ].map(({ icon: Icon, label, color, border, shadow, pos }) => (
                <div key={label} className="absolute z-20" style={pos}>
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold backdrop-blur-md"
                    style={{
                      background: 'rgba(10,12,26,0.88)',
                      border: `1px solid ${border}`,
                      boxShadow: `0 0 20px ${shadow}, inset 0 1px 0 rgba(255,255,255,0.05)`,
                    }}
                  >
                    <Icon className="text-xl flex-shrink-0" style={{ color, filter: `drop-shadow(0 0 7px ${color})` }} />
                    <span className="text-gray-100 whitespace-nowrap">{label}</span>
                  </div>
                </div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
