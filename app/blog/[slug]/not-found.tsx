"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-midnight-600/20 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <FileQuestion className="w-12 h-12 text-brand-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-7xl font-bold text-white mb-4"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-semibold text-white/80 mb-4"
          >
            Artigo não encontrado
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/60 mb-8 max-w-md mx-auto"
          >
            O artigo que você está procurando não existe ou foi removido.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/blog"
              className="btn-primary group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar ao blog
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
