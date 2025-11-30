
import React from 'react';
import cover from '../cover.avif';
import coverFallback from '../factory.jpg';
import { ChevronDown, Award, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Reliable Forest Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={cover} type="image/avif" />
          <img 
            src={coverFallback} 
            alt="Changbai Mountain Forest" 
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center gap-4 mb-6">
          <span className="inline-flex items-center gap-1 py-1 px-3 border border-amber-400/60 rounded-full text-amber-400 text-xs tracking-widest backdrop-blur-sm uppercase">
            <Award size={12} /> 特级内供
          </span>
          <span className="inline-flex items-center gap-1 py-1 px-3 border border-white/30 rounded-full text-white/80 text-xs tracking-widest backdrop-blur-sm uppercase">
            <ShieldCheck size={12} /> 工厂直发
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
          实全<span className="text-amber-500">·</span>长白山
        </h1>
        <p className="font-serif text-2xl md:text-4xl text-stone-200 mb-8 font-light tracking-wide">
          特级<span className="text-amber-400 font-bold mx-2">内供</span>松子
        </p>
        
        <p className="text-lg text-white/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          源自长白山原始森林，只选前1%的特级大果。<br className="hidden md:block"/>
          物理开口，0化学添加，还原松子最本真的油脂香。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#pricing" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-amber-600/30 transform hover:-translate-y-1">
            查看价格表
          </a>
          <a href="#quality" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:border-white/40">
            为什么是特级？
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
