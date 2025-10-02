'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CheckCircle, Clock, Zap, Brain, Code, Rocket } from 'lucide-react';

interface DevProcess {
  id: string;
  projectName: string;
  tasks: string[];
  tech: string[];
  status: 'analyzing' | 'building' | 'deploying' | 'complete';
  aiAssisted: boolean;
}

const sampleProjects: DevProcess[] = [
  {
    id: '#KP-001',
    projectName: 'E-Commerce Platform',
    tasks: ['AI-powered product recommendations', 'Payment integration', 'Real-time inventory', 'Mobile optimization'],
    tech: ['Next.js', 'Stripe API', 'AI/ML', 'PostgreSQL'],
    status: 'analyzing',
    aiAssisted: true
  },
  {
    id: '#KP-002', 
    projectName: 'Healthcare Dashboard',
    tasks: ['Patient data visualization', 'HIPAA compliance', 'Real-time monitoring', 'Mobile app'],
    tech: ['React', 'Node.js', 'Chart.js', 'AWS'],
    status: 'building',
    aiAssisted: true
  },
  {
    id: '#KP-003',
    projectName: 'Restaurant Chain App',
    tasks: ['Multi-location ordering', 'Loyalty program', 'Kitchen automation', 'Analytics'],
    tech: ['React Native', 'Firebase', 'AI Analytics', 'Stripe'],
    status: 'deploying',
    aiAssisted: true
  },
  {
    id: '#KP-004',
    projectName: 'Financial Planning Tool',
    tasks: ['Investment tracking', 'AI market analysis', 'Risk assessment', 'Reporting'],
    tech: ['Vue.js', 'Python', 'TensorFlow', 'D3.js'],
    status: 'complete',
    aiAssisted: true
  }
];

export default function DevTerminal() {
  const [projects, setProjects] = useState<DevProcess[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentLine, setCurrentLine] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      simulateDevProcess();
    }, 1000);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [projects, currentLine]);

  const simulateDevProcess = () => {
    if (currentIndex >= sampleProjects.length) {
      setTimeout(() => {
        setProjects([]);
        setCurrentIndex(0);
        setCurrentLine('');
        setTimeout(() => simulateDevProcess(), 2000);
      }, 3000);
      return;
    }

    const project = sampleProjects[currentIndex];
    setIsProcessing(true);
    
    const lines = [
      `[${new Date().toLocaleTimeString()}] NEW PROJECT INITIATED`,
      `Project ID: ${project.id}`,
      `Name: ${project.projectName}`,
      `Tech Stack: ${project.tech.join(', ')}`,
      `AI-Assisted: ${project.aiAssisted ? 'ENABLED' : 'DISABLED'}`,
      '',
      `🧠 AI ANALYSIS PHASE:`,
      `  ✓ Requirements parsed and optimized`,
      `  ✓ Architecture patterns suggested`,
      `  ✓ Security vulnerabilities identified`,
      `  ✓ Performance optimizations planned`,
      '',
      `⚡ DEVELOPMENT PHASE:`,
      ...project.tasks.map(task => `  ✓ ${task}`),
      '',
      `🚀 DEPLOYMENT PHASE:`,
      `  ✓ CI/CD pipeline configured`,
      `  ✓ Testing automation complete`,
      `  ✓ Production deployment ready`,
      ``,
      `STATUS: ${project.status.toUpperCase()}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ''
    ];

    let lineIndex = 0;
    let charIndex = 0;

    const typeChar = () => {
      if (lineIndex >= lines.length) {
        setProjects(prev => [...prev, project]);
        setCurrentLine('');
        setIsProcessing(false);
        setCurrentIndex(prev => prev + 1);
        
        setTimeout(() => simulateDevProcess(), 3000 + Math.random() * 2000);
        return;
      }

      const currentFullLine = lines[lineIndex];
      if (charIndex < currentFullLine.length) {
        setCurrentLine(currentFullLine.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeChar, 20 + Math.random() * 30);
      } else {
        if (currentFullLine.trim()) {
          setProjects(prev => [...prev, { 
            ...project, 
            id: `line-${Date.now()}-${lineIndex}`,
            tasks: [currentFullLine],
            projectName: '',
            tech: [],
            status: 'analyzing',
            aiAssisted: false
          } as any]);
        }
        setCurrentLine('');
        lineIndex++;
        charIndex = 0;
        setTimeout(typeChar, 100);
      }
    };

    typeChar();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'analyzing': return 'text-blue-400';
      case 'building': return 'text-yellow-400';
      case 'deploying': return 'text-orange-400';
      case 'complete': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="relative">
      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-2xl"
      >
        {/* Terminal Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <Terminal className="w-4 h-4 text-gray-400 ml-2" />
            <span className="text-gray-400 text-sm font-mono">kp-development-suite.terminal</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Brain className="w-4 h-4" />
            <span className="text-xs font-mono">AI ACTIVE</span>
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="p-4 h-96 overflow-y-auto font-mono text-sm scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
          style={{ 
            background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
            textShadow: '0 0 5px rgba(139, 92, 246, 0.3)'
          }}
        >
          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-purple-400 mb-4"
          >
            <div>KP Technology Development Suite v3.1.0</div>
            <div>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
            <div className="text-gray-500">Senior developers + AI acceleration active...</div>
            <div className="mb-2"></div>
          </motion.div>

          {/* Project Lines */}
          <AnimatePresence>
            {projects.map((project, index) => {
              if (project.projectName === '') {
                const line = project.tasks[0];
                const isHeader = line.includes('NEW PROJECT') || line.includes('Project ID') || line.includes('Name:');
                const isPhase = line.includes('🧠') || line.includes('⚡') || line.includes('🚀');
                const isTask = line.startsWith('  ✓');
                const isStatus = line.includes('STATUS:');
                const isSeparator = line.includes('━');
                const isTech = line.includes('Tech Stack:') || line.includes('AI-Assisted:');
                
                return (
                  <motion.div
                    key={`${project.id}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`
                      ${isHeader ? 'text-cyan-400 font-bold' : ''}
                      ${isPhase ? 'text-purple-400 font-bold' : ''}
                      ${isTask ? 'text-green-300' : ''}
                      ${isStatus ? 'text-yellow-400 font-bold' : ''}
                      ${isTech ? 'text-blue-400' : ''}
                      ${isSeparator ? 'text-gray-600' : ''}
                      ${!isHeader && !isPhase && !isTask && !isStatus && !isTech && !isSeparator ? 'text-gray-400' : ''}
                    `}
                  >
                    {line}
                  </motion.div>
                );
              }
              return null;
            })}
          </AnimatePresence>

          {/* Currently Typing Line */}
          {currentLine && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-purple-400 inline"
            >
              {currentLine}
              {isProcessing && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-purple-400 ml-1"
                  style={{ verticalAlign: 'text-bottom' }}
                />
              )}
            </motion.div>
          )}
        </div>

        {/* Terminal Footer */}
        <div className="bg-gray-800 border-t border-gray-700 px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-400 font-mono">
                  Projects Delivered: {156 + currentIndex}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400 font-mono">
                  Avg Deploy Time: 2.1 days
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-gray-400 font-mono">AI Enhancement: Active</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Side Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 text-center"
        >
          <div className="text-2xl font-bold text-purple-400">10x</div>
          <div className="text-xs text-gray-400 mt-1">Faster Development</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 text-center"
        >
          <div className="text-2xl font-bold text-green-400">99.9%</div>
          <div className="text-xs text-gray-400 mt-1">Uptime SLA</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 text-center"
        >
          <div className="text-2xl font-bold text-cyan-400">500+</div>
          <div className="text-xs text-gray-400 mt-1">Happy Clients</div>
        </motion.div>
      </div>
    </div>
  );
}