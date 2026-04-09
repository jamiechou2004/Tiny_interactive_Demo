/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Type, 
  Brain, 
  Eye, 
  Zap, 
  CheckCircle2, 
  Info, 
  ArrowRightLeft,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function App() {
  const [showAReveal, setShowAReveal] = useState(false);
  const [interference, setInterference] = useState(0);
  const [transferMode, setTransferMode] = useState<'simple' | 'decorative' | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTransferClick = (mode: 'simple' | 'decorative') => {
    setTransferMode(mode);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-slate-200">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto pt-20 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-2 mb-4 bg-slate-100 rounded-full">
            <Brain className="w-5 h-5 text-slate-600 mr-2" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Psychology of Design</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Font Readability <span className="italic text-slate-400">Challenge</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore how your brain processes typography and why the fonts you choose change how people perceive the difficulty of a task.
          </p>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-24">
        
        {/* Section 1: Memory Patterns (The 'A' Recognition Box) */}
        <section className="space-y-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
              <Type className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Memory Patterns</h2>
          </div>

          <Card className="border-none shadow-sm bg-slate-50/50 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">The 'A' Recognition Box</CardTitle>
              <CardDescription>How do you know these are all the letter A?</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {[
                  { font: 'font-serif', label: 'Serif' },
                  { font: 'font-sans', label: 'Sans-serif' },
                  { font: 'font-decorative', label: 'Handwritten' },
                  { font: 'font-display', label: 'Slab' },
                  { font: 'font-mono', label: 'Abstract' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="aspect-square flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-100 shadow-sm p-4 cursor-default group"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className={`${item.font} text-6xl text-slate-800 select-none`}
                    >
                      A
                    </motion.span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-4 font-semibold opacity-60 group-hover:opacity-100 transition-opacity">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  variant={showAReveal ? "outline" : "default"}
                  onClick={() => setShowAReveal(!showAReveal)}
                  className="rounded-full px-8 h-12 text-base transition-all duration-300"
                >
                  {showAReveal ? "Hide Answer" : "Reveal the Secret"}
                </Button>

                <AnimatePresence>
                  {showAReveal && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto"
                    >
                      <p className="text-lg text-slate-700 leading-relaxed">
                        <span className="font-bold text-slate-900">Your brain uses pattern recognition, not just memory of one specific font!</span>
                        <br />
                        People identify letters by recognizing memory patterns of what a letter looks like, rather than memorizing every specific version.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Decorative Interference (The Effort Slider) */}
        <section className="space-y-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Decorative Interference</h2>
          </div>

          <Card className="border-none shadow-sm bg-slate-50/50 mb-12">
            <CardHeader>
              <CardTitle className="text-xl text-center">Interference Control</CardTitle>
              <CardDescription className="text-center">Select a level to see how decorative elements interfere with pattern recognition.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="relative flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-slate-100 min-h-[240px] overflow-hidden">
                {/* Morphing Text Layers */}
                <div className="relative w-full text-center">
                  <motion.p 
                    animate={{ 
                      opacity: Math.max(0, 1 - interference / 40),
                      letterSpacing: `${interference * 0.02}em`,
                      filter: `blur(${interference * 0.05}px)`,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-4xl md:text-5xl text-slate-800 font-sans absolute inset-0 flex items-center justify-center"
                  >
                    Complexity hides the pattern.
                  </motion.p>
                  
                  <motion.p 
                    animate={{ 
                      opacity: interference > 30 && interference < 70 ? 1 : interference <= 30 ? (interference - 10) / 20 : (90 - interference) / 20,
                      letterSpacing: `${(interference - 50) * 0.02}em`,
                      filter: `blur(${Math.abs(interference - 50) * 0.05}px)`,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-4xl md:text-5xl text-slate-800 font-serif absolute inset-0 flex items-center justify-center"
                  >
                    Complexity hides the pattern.
                  </motion.p>

                  <motion.p 
                    animate={{ 
                      opacity: Math.max(0, (interference - 60) / 40),
                      letterSpacing: `${(interference - 100) * 0.02}em`,
                      filter: `blur(${(100 - interference) * 0.05}px)`,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-4xl md:text-5xl text-slate-800 font-decorative absolute inset-0 flex items-center justify-center"
                  >
                    Complexity hides the pattern.
                  </motion.p>
                </div>
                
                {/* Placeholder to maintain height */}
                <p className="text-4xl md:text-5xl opacity-0 pointer-events-none">
                  Complexity hides the pattern.
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex p-1 bg-slate-200/50 rounded-2xl relative">
                  {[
                    { label: 'Low', value: 0 },
                    { label: 'Medium', value: 50 },
                    { label: 'High', value: 100 }
                  ].map((level) => (
                    <button
                      key={level.label}
                      onClick={() => setInterference(level.value)}
                      className={`relative z-10 flex-1 py-3 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                        interference === level.value ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {level.label}
                    </button>
                  ))}
                  <motion.div
                    className="absolute inset-y-1 bg-white rounded-xl shadow-sm z-0"
                    initial={false}
                    animate={{
                      left: `${(interference / 50) * 33.33}%`,
                      width: '33.33%'
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm bg-white overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Side A: Clean Font</span>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
                <CardTitle className="font-sans text-2xl">Simple Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div 
                  animate={{ 
                    filter: `blur(${interference * 0.02}px)`,
                    letterSpacing: `${interference * 0.005}em`
                  }}
                  className="p-6 bg-slate-50 rounded-xl font-sans text-slate-700 leading-relaxed"
                >
                  <p className="font-bold mb-2">Task: Physical Alignment</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Stand with feet shoulder-width apart.</li>
                    <li>Tuck your chin into your chest.</li>
                    <li>Hold for 15 seconds.</li>
                    <li>Repeat twice.</li>
                  </ol>
                </motion.div>
                <Button 
                  onClick={() => handleTransferClick('simple')}
                  variant="secondary" 
                  className="w-full rounded-xl h-12 font-semibold"
                >
                  Read Simple
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Side B: Decorative Font</span>
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                </div>
                <CardTitle className="font-decorative text-2xl">Simple Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div 
                  animate={{ 
                    filter: `blur(${interference * 0.05}px)`,
                    letterSpacing: `${interference * 0.01}em`,
                    opacity: 1 - (interference * 0.002)
                  }}
                  className="p-6 bg-slate-50 rounded-xl font-decorative text-2xl text-slate-700 leading-relaxed"
                >
                  <p className="font-bold mb-2">Task: Physical Alignment</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Stand with feet shoulder-width apart.</li>
                    <li>Tuck your chin into your chest.</li>
                    <li>Hold for 15 seconds.</li>
                    <li>Repeat twice.</li>
                  </ol>
                </motion.div>
                <Button 
                  onClick={() => handleTransferClick('decorative')}
                  variant="secondary" 
                  className="w-full rounded-xl h-12 font-semibold"
                >
                  Read Decorative
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="p-8 bg-slate-900 rounded-3xl text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <h3 className="text-xl font-bold mb-2">The Subconscious Transfer</h3>
                <p className="text-slate-400 text-sm">
                  Overly decorative fonts interfere with the brain's ability to recognize patterns, making text feel harder to understand. Readers subconsciously "transfer" this difficulty to the task itself.
                </p>
              </div>
              <div className="flex items-center space-x-4 bg-slate-800 p-4 rounded-2xl">
                <ArrowRightLeft className="w-6 h-6 text-slate-400" />
                <span className="text-sm font-medium">Try clicking the buttons above to see the effect.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Myth-Busting */}
        <section className="pt-12">
          <Separator className="mb-16" />
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="inline-flex items-center justify-center p-2 mb-4 bg-amber-100 rounded-lg">
                <Zap className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">Myth-Busting</h2>
              <p className="text-slate-500 leading-relaxed">
                Common design wisdom often suggests one style is superior for speed, but the data tells a different story.
              </p>
            </div>
            
            <div className="md:col-span-2 grid gap-6">
              <div className="p-8 bg-white border border-slate-100 shadow-sm rounded-3xl flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Serif vs. Sans-Serif</h4>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Research shows <span className="text-slate-900 font-bold underline decoration-slate-200 underline-offset-4">NO difference</span> in reading speed or comprehension between serif and sans-serif fonts.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-white border border-slate-100 shadow-sm rounded-3xl flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">The Real Factor</h4>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Readability is driven by <span className="text-slate-900 font-bold">familiarity</span> and <span className="text-slate-900 font-bold">clarity</span>, not the presence of serifs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12 text-center text-slate-400 text-sm">
        <p>© 2026 Font Readability Challenge • Built for Educational Purposes</p>
      </footer>

      {/* Transfer Pop-up */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-slate-600" />
              <span>Subconscious Estimation</span>
            </DialogTitle>
            <DialogDescription className="pt-4">
              {transferMode === 'decorative' ? (
                <div className="space-y-4">
                  <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl text-amber-900 font-medium">
                    "Estimation: This task will take 15 minutes and feel difficult."
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Because the font was harder to read, your brain assumed the physical task described would also be more strenuous and time-consuming.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-100 rounded-2xl text-green-900 font-medium">
                    "Estimation: This task will take 8 minutes and feel easy."
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The clean, simple font made the information easy to process, leading your brain to estimate the task as straightforward and quick.
                  </p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={() => setIsDialogOpen(false)} className="rounded-xl">
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
