
import React from 'react';
import video1 from '../video1.mp4';
import video2 from '../video2.mp4';
import video3 from '../video3.mp4';
import video4 from '../video4.mp4';
import video5 from '../video5.mp4';
import { Clock, Mountain, ArrowDown } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-stone-300 relative overflow-hidden">
      {/* Background Texture - Use a reliable dark texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <img 
            src="https://images.unsplash.com/photo-1516214104703-d8707475b31c?q=80&w=2628&auto=format&fit=crop" 
            alt="Pine Texture"
            className="w-full h-full object-cover"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-sm">
              <Mountain size={16} /> 
              <span>自然的馈赠</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              30年风雨磨砺<br/>
              <span className="text-amber-600">才换来这一颗</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed font-light">
              <p>
                这不仅仅是食物，更是时间的结晶。一棵红松子树，需历经<strong className="text-white font-medium">三十载风雨磨砺</strong>方能挂果，而一枚饱满的松果，更要沉淀<strong className="text-white font-medium">两年时光</strong>才得以成熟。
              </p>
              <p>
                产自东北长白山的红松子，每一颗都来之不易。采塔人需<strong className="text-white font-medium">徒手攀爬至20-30米的高空</strong>（约等于10层楼高），在挺拔摇晃的松树上寻摘松塔。
              </p>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 italic text-stone-400">
                "只有松塔中最为硕大饱满的核心果仁，才会带到你身边 🐿️"
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 bg-stone-800/50 rounded-lg">
                <div className="text-3xl font-bold text-amber-500 mb-1">30<span className="text-sm">年</span></div>
                <div className="text-xs text-stone-500 uppercase tracking-wider">树龄挂果</div>
              </div>
              <div className="text-center p-4 bg-stone-800/50 rounded-lg">
                <div className="text-3xl font-bold text-amber-500 mb-1">20<span className="text-sm">米+</span></div>
                <div className="text-xs text-stone-500 uppercase tracking-wider">高空作业</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-800/50">
              {(() => {
                const vids = [video1, video2, video3, video4, video5];
                const [index, setIndex] = React.useState(0);
                const [startX, setStartX] = React.useState<number | null>(null);
                const prev = () => setIndex((index - 1 + vids.length) % vids.length);
                const next = () => setIndex((index + 1) % vids.length);
                const onTouchStart = (e: React.TouchEvent) => setStartX(e.touches[0].clientX);
                const onTouchEnd = (e: React.TouchEvent) => {
                  if (startX === null) return;
                  const dx = e.changedTouches[0].clientX - startX;
                  if (Math.abs(dx) > 50) {
                    if (dx < 0) next(); else prev();
                  }
                  setStartX(null);
                };
                return (
                  <div className="w-full h-[600px]" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    <div
                      className="flex w-full h-full transition-transform duration-500"
                      style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                      {vids.map((src, i) => (
                        <video
                          key={i}
                          src={src}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-[600px] object-cover flex-shrink-0"
                        />
                      ))}
                    </div>
                    <button
                      onClick={prev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-stone-900/40 hover:bg-stone-900/60 text-white rounded-full p-3"
                    >
                      ‹
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-stone-900/40 hover:bg-stone-900/60 text-white rounded-full p-3"
                    >
                      ›
                    </button>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                      {vids.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIndex(i)}
                          className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-50 pointer-events-none"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-xs uppercase tracking-widest opacity-70 mb-2">Brand Story</div>
                <div className="text-2xl font-serif">走进长白山与松子</div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-600/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-900/20 rounded-full blur-3xl z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;
