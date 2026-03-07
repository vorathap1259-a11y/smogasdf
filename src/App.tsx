import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { CaseStudies } from './components/CaseStudies';
import { Packages } from './components/Packages';
import { Locations } from './components/Locations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Deliverables } from './components/Deliverables';
import { OmerSastim } from './components/OmerSastim';
import { LanguageProvider } from './LanguageContext';
import { motion, useScroll, useTransform } from 'motion/react';

function GlobalBackground() {
  const { scrollYProgress } = useScroll();

  // Base background color
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "#05000a", // Hero: Midnight Purple
      "#000510", // Authority/Problem: Deep Blue
      "#000f0a", // Solution: Emerald Dark
      "#0f0500", // Case Studies: Dark Amber
      "#0a0010", // Packages: Deep Violet
      "#020202", // Contact: Almost Black
    ]
  );

  // Mesh Gradients
  const mesh1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "radial-gradient(circle at 0% 0%, #2e1065 0%, transparent 70%)",
      "radial-gradient(circle at 0% 0%, #1e3a8a 0%, transparent 70%)",
      "radial-gradient(circle at 0% 0%, #064e3b 0%, transparent 70%)",
      "radial-gradient(circle at 0% 0%, #78350f 0%, transparent 70%)",
      "radial-gradient(circle at 0% 0%, #4c1d95 0%, transparent 70%)",
      "radial-gradient(circle at 0% 0%, #171717 0%, transparent 70%)",
    ]
  );

  const mesh2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "radial-gradient(circle at 100% 0%, #1e1b4b 0%, transparent 70%)",
      "radial-gradient(circle at 100% 0%, #0f172a 0%, transparent 70%)",
      "radial-gradient(circle at 100% 0%, #022c22 0%, transparent 70%)",
      "radial-gradient(circle at 100% 0%, #451a03 0%, transparent 70%)",
      "radial-gradient(circle at 100% 0%, #2e1065 0%, transparent 70%)",
      "radial-gradient(circle at 100% 0%, #0a0a0a 0%, transparent 70%)",
    ]
  );

  const mesh3 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "radial-gradient(circle at 0% 100%, #0f172a 0%, transparent 70%)",
      "radial-gradient(circle at 0% 100%, #022c22 0%, transparent 70%)",
      "radial-gradient(circle at 0% 100%, #451a03 0%, transparent 70%)",
      "radial-gradient(circle at 0% 100%, #2e1065 0%, transparent 70%)",
      "radial-gradient(circle at 0% 100%, #1e1b4b 0%, transparent 70%)",
      "radial-gradient(circle at 0% 100%, #000000 0%, transparent 70%)",
    ]
  );

  const mesh4 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "radial-gradient(circle at 100% 100%, #3b0764 0%, transparent 70%)",
      "radial-gradient(circle at 100% 100%, #1d4ed8 0%, transparent 70%)",
      "radial-gradient(circle at 100% 100%, #059669 0%, transparent 70%)",
      "radial-gradient(circle at 100% 100%, #b45309 0%, transparent 70%)",
      "radial-gradient(circle at 100% 100%, #6d28d9 0%, transparent 70%)",
      "radial-gradient(circle at 100% 100%, #262626 0%, transparent 70%)",
    ]
  );

  // Orb Colors (Changed to radial gradients to avoid expensive CSS blur)
  const orb1Color = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "radial-gradient(circle at center, rgba(147, 51, 234, 0.15) 0%, transparent 60%)", // Purple
      "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 60%)", // Blue
      "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 60%)", // Emerald
      "radial-gradient(circle at center, rgba(245, 158, 11, 0.15) 0%, transparent 60%)", // Amber
      "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 60%)", // Violet
      "radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 60%)", // White/Silver
    ]
  );

  const orb2Color = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "radial-gradient(circle at center, rgba(79, 70, 229, 0.15) 0%, transparent 60%)",  // Indigo
      "radial-gradient(circle at center, rgba(14, 165, 233, 0.15) 0%, transparent 60%)", // Sky
      "radial-gradient(circle at center, rgba(20, 184, 166, 0.15) 0%, transparent 60%)", // Teal
      "radial-gradient(circle at center, rgba(217, 119, 6, 0.15) 0%, transparent 60%)",  // Amber dark
      "radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 60%)", // Fuchsia
      "radial-gradient(circle at center, rgba(156, 163, 175, 0.05) 0%, transparent 60%)", // Gray
    ]
  );

  const orb3Color = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "radial-gradient(circle at center, rgba(192, 38, 211, 0.1) 0%, transparent 60%)", // Fuchsia
      "radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 60%)", // Indigo
      "radial-gradient(circle at center, rgba(52, 211, 153, 0.1) 0%, transparent 60%)", // Emerald light
      "radial-gradient(circle at center, rgba(251, 191, 36, 0.1) 0%, transparent 60%)", // Amber light
      "radial-gradient(circle at center, rgba(217, 70, 239, 0.1) 0%, transparent 60%)", // Fuchsia light
      "radial-gradient(circle at center, rgba(75, 85, 99, 0.05) 0%, transparent 60%)",   // Gray dark
    ]
  );

  // Parallax movement for orbs
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "50%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["-10%", "-50%"]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], ["30%", "-20%"]);
  
  const orb1X = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);
  const orb2X = useTransform(scrollYProgress, [0, 1], ["-10%", "-30%"]);
  const orb3X = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);

  // --- NEW MASSIVE SHAPE TRANSFORMS ---

  // 1. Giant Outline Circle
  const circleY = useTransform(scrollYProgress, [0, 1], ["-20%", "80%"]);
  const circleScale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const circleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.4, 0]);

  // 2. Massive Glass Pill
  const pillX = useTransform(scrollYProgress, [0, 1], ["-40%", "120%"]);
  const pillY = useTransform(scrollYProgress, [0, 1], ["10%", "140%"]);
  const pillRotate = useTransform(scrollYProgress, [0, 1], [-20, 60]);

  // 3. Floating Diamond / Square
  const squareY = useTransform(scrollYProgress, [0, 1], ["120%", "-60%"]);
  const squareRotate = useTransform(scrollYProgress, [0, 1], [45, 270]);

  // 4. Giant Background Text
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-150%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  // 5. Wireframe Grid Sphere
  const gridY = useTransform(scrollYProgress, [0, 1], ["100%", "-30%"]);
  const gridRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // 6. Floating Triangle
  const triangleY = useTransform(scrollYProgress, [0, 1], ["-10%", "180%"]);
  const triangleRotate = useTransform(scrollYProgress, [0, 1], [0, -180]);

  // Edge Vignette Color
  const vignette = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "radial-gradient(circle at center, transparent 0%, #05000a 120%)",
      "radial-gradient(circle at center, transparent 0%, #000510 120%)",
      "radial-gradient(circle at center, transparent 0%, #000f0a 120%)",
      "radial-gradient(circle at center, transparent 0%, #0f0500 120%)",
      "radial-gradient(circle at center, transparent 0%, #0a0010 120%)",
      "radial-gradient(circle at center, transparent 0%, #020202 120%)",
    ]
  );

  return (
    <motion.div style={{ backgroundColor: bgColor }} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Mesh Gradient */}
      <div className="absolute inset-0 opacity-60">
        <motion.div style={{ background: mesh1 }} className="absolute top-0 left-0 w-[50vw] h-[50vh]" />
        <motion.div style={{ background: mesh2 }} className="absolute top-0 right-0 w-[50vw] h-[50vh]" />
        <motion.div style={{ background: mesh3 }} className="absolute bottom-0 left-0 w-[50vw] h-[50vh]" />
        <motion.div style={{ background: mesh4 }} className="absolute bottom-0 right-0 w-[50vw] h-[50vh]" />
      </div>

      {/* --- NEW MASSIVE INTERACTIVE SHAPES --- */}

      {/* Giant Background Text */}
      <motion.div
        style={{ y: textY, x: textX }}
        className="absolute top-[30%] left-[5%] text-[25vw] font-display font-bold text-transparent whitespace-nowrap [-webkit-text-stroke:2px_rgba(255,255,255,0.04)]"
      >
        VIRAL BRANDS
      </motion.div>

      {/* Giant Outline Circle */}
      <motion.div
        style={{ y: circleY, scale: circleScale, opacity: circleOpacity }}
        className="absolute top-0 right-[5%] w-[50vw] h-[50vw] rounded-full border-[2px] border-white/10"
      />
      <motion.div
        style={{ y: circleY, scale: circleScale, opacity: circleOpacity }}
        className="absolute top-[2%] right-[7%] w-[46vw] h-[46vw] rounded-full border-[1px] border-purple-500/20"
      />

      {/* Massive Glass Pill */}
      <motion.div
        style={{ x: pillX, y: pillY, rotate: pillRotate }}
        className="absolute top-0 left-0 w-[60vw] h-[20vw] rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-white/5 shadow-[0_0_100px_rgba(139,92,246,0.1)]"
      />

      {/* Floating Diamond */}
      <motion.div
        style={{ y: squareY, rotate: squareRotate }}
        className="absolute top-[40%] left-[15%] w-[30vw] h-[30vw] rounded-[4rem] bg-white/[0.02] border border-white/10 shadow-2xl"
      />

      {/* Floating Triangle */}
      <motion.div
        style={{ 
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', 
          y: triangleY, 
          rotate: triangleRotate 
        }}
        className="absolute top-[10%] right-[25%] w-[20vw] h-[20vw] bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-white/10"
      />

      {/* Wireframe Concentric Circles */}
      <motion.div
        style={{ y: gridY, rotate: gridRotate }}
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] opacity-30"
      >
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-[10%] rounded-full border border-white/10" />
        <div className="absolute inset-[20%] rounded-full border border-white/10" />
        <div className="absolute inset-[30%] rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/10" />
      </motion.div>

      {/* Animated Fluid Orbs (Kept for glow/lighting) */}
      <motion.div
        style={{ background: orb1Color, x: orb1X, y: orb1Y }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[50vw] h-[50vw] rounded-full mix-blend-screen will-change-transform"
      />
      <motion.div
        style={{ background: orb2Color, x: orb2X, y: orb2Y }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[60vw] h-[60vw] rounded-full mix-blend-screen will-change-transform"
      />
      <motion.div
        style={{ background: orb3Color, x: orb3X, y: orb3Y }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full mix-blend-screen will-change-transform"
      />

      {/* Diagonal Premium Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[linear-gradient(to_right,#fff_1px,transparent_1px)] bg-[size:120px_120px] transform -rotate-12" />
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:120px_120px] transform -rotate-12" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Edge Vignette */}
      <motion.div style={{ background: vignette }} className="absolute inset-0" />
    </motion.div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen text-white font-sans selection:bg-purple-500/30 selection:text-purple-200 relative">
        <GlobalBackground />
        <div className="noise-bg"></div>
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Authority />
          <Problem />
          <Solution />
          <Deliverables />
          <OmerSastim />
          <CaseStudies />
          <Packages />
          <Locations />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
