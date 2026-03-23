import React, { useState, useEffect } from 'react';
import Shell from './components/Layout/Shell';
import Hero from './sections/Hero';
import Identity from './sections/Identity';
import Systems from './sections/Systems';
import Missions from './sections/Missions';
import Timeline from './sections/Timeline';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Transmission from './sections/Transmission';
import LoadingScreen from './components/UI/LoadingScreen';
import CustomCursor from './components/UI/CustomCursor';
import WebGLBackground from './components/Effects/WebGLBackground';
import TerminalWidget from './components/UI/TerminalWidget';
import AvailabilityBadge from './components/UI/AvailabilityBadge';

import SectionDivider from './components/UI/SectionDivider';

function App() {
  const [loading, setLoading] = useState(true);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Prevent default cursor
    document.body.style.cursor = 'none';
  }, []);

  const handleBootComplete = () => {
    setLoading(false);
  };

  const handleStart = () => {
    setBooted(true);
  };

  if (loading) {
    return <LoadingScreen onComplete={handleBootComplete} />;
  }

  if (!booted) {
    return (
      <>
        <CustomCursor />
        <div
          onClick={handleStart}
          className="h-screen w-full bg-black flex flex-col items-center justify-center text-neon-blue font-tech cursor-none"
        >
          <div className="animate-pulse mb-4 text-6xl">⦿</div>
          <p className="tracking-widest">CLICK TO INITIALIZE SYSTEM</p>
        </div>
      </>
    );
  }


  return (
    <>
      <WebGLBackground />
      <CustomCursor />
      <TerminalWidget />
      <AvailabilityBadge />
      <Shell>
        <div id="hero" className="min-h-screen relative">
          <Hero />
        </div>
        
        <div id="identity" className="min-h-screen relative flex flex-col pt-12">
          <SectionDivider label="DATA_IDENTIFICATION" color="#00f3ff" />
          <div className="flex-1">
            <Identity />
          </div>
        </div>
        
        <div id="systems" className="min-h-screen relative flex flex-col pt-12">
          <SectionDivider label="SYSTEM_ARCHITECTURE" color="#05ffa1" />
          <div className="flex-1">
            <Systems />
          </div>
        </div>
        
        <div id="missions" className="min-h-screen relative flex flex-col pt-12">
          <SectionDivider label="MISSION_LOGS" color="#bd00ff" />
          <div className="flex-1">
            <Missions />
          </div>
        </div>

        <div id="education" className="min-h-screen relative flex flex-col pt-12">
          <SectionDivider label="ACADEMIC_RECORDS" color="#00f3ff" />
          <div className="flex-1">
            <Education />
          </div>
        </div>
        
        <div id="certificates" className="min-h-screen relative flex flex-col pt-12">
          <SectionDivider label="SECURITY_CLEARANCE" color="#fcee0a" />
          <div className="flex-1">
            <Certificates />
          </div>
        </div>
        
        <div id="timeline" className="min-h-screen relative flex flex-col pt-12">
          <SectionDivider label="TEMPORAL_SEQUENCE" color="#00f3ff" />
          <div className="flex-1">
            <Timeline />
          </div>
        </div>
        
        <div id="transmission" className="min-h-screen relative flex flex-col pt-12">
          <SectionDivider label="ESTABLISH_UPLINK" color="#00f3ff" />
          <div className="flex-1">
            <Transmission />
          </div>
        </div>
      </Shell>
    </>
  );
}

export default App;