
import React from 'react';
import package1 from '../package1.jpg';
import package2 from '../package2.jpg';
import package3 from '../package3.jpg';
import { CheckCircle2, Package, Ruler, Ban, Star, AlertTriangle } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const packages = [
    { src: package1, name: '象牙白', dotClass: 'bg-white' },
    { src: package3, name: '奢华金', dotClass: 'bg-amber-500' },
    { src: package2, name: '深海蓝', dotClass: 'bg-blue-900' },
  ];
  const [pkgIndex, setPkgIndex] = React.useState(0);
  const [startX, setStartX] = React.useState<number | null>(null);
  const prevPkg = () => setPkgIndex((pkgIndex - 1 + packages.length) % packages.length);
  const nextPkg = () => setPkgIndex((pkgIndex + 1) % packages.length);
  const onTouchStart = (e: React.TouchEvent) => setStartX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) nextPkg(); else prevPkg();
    }
    setStartX(null);
  };
  React.useEffect(() => {
    const t = setInterval(() => {
      setPkgIndex((i) => (i + 1) % packages.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="quality" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
            不只是大，更是<span className="text-amber-600">特级标准</span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            市面上的松子千差万别。实全坚持“内供标准”，从采摘到筛选，严格把控每一道工序，确保您收到的是真正的特级大果。
          </p>
        </div>

        {/* 1. Comparison Section (CSS Visualized - No Image Needed) */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 mb-20">
          <div className="grid md:grid-cols-2 items-stretch">
            {/* Left: Text Info */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold tracking-wider text-sm mb-4 bg-amber-50 px-3 py-1 rounded-full w-fit">
                <Ruler size={16} /> 真实对比
              </div>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
                一眼看出的差距
              </h3>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                普通的松子往往干瘪、壳厚仁小。而我们的<span className="font-bold text-amber-600">特级内供</span>，是经过精密色选和X光检测的“塔尖尖”上的好果。
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1 shadow-lg shadow-amber-200">A</div>
                  <div>
                    <span className="text-stone-900 font-bold text-lg block">特级内供 (实全)</span>
                    <span className="text-stone-500 text-sm">个头硕大，油脂丰富，开口易剥，果仁饱满度99%</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 opacity-60">
                  <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center font-bold text-sm shrink-0 mt-1">B</div>
                  <div>
                    <span className="text-stone-700 font-bold text-lg block">普通等级 (市场通货)</span>
                    <span className="text-stone-500 text-sm">颗粒较小，由于成熟度不够，果仁往往不贴壳</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 opacity-40">
                  <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center font-bold text-sm shrink-0 mt-1">C</div>
                  <div>
                    <span className="text-stone-700 font-bold text-lg block">次品/其他</span>
                    <span className="text-stone-500 text-sm">颜色暗沉，瘪仁坏仁多，口感苦涩</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: CSS Visualized Pine Nuts */}
            <div className="bg-stone-100 p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#a8a29e 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              
              <div className="relative z-10 flex items-end gap-4 md:gap-8 w-full justify-center">
                
                {/* Nut A: Premium */}
                <div className="flex flex-col items-center gap-4 transition-transform duration-500 hover:-translate-y-2">
                  <div className="relative">
                     <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap animate-bounce">
                        推荐选择
                     </div>
                     {/* CSS Pine Nut Shape - Large */}
                     <div className="w-24 h-36 md:w-32 md:h-44 bg-gradient-to-br from-amber-300 via-amber-600 to-amber-800 rounded-[50%_50%_40%_40%_/_60%_60%_35%_35%] shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-[10%] left-[20%] w-[40%] h-[30%] bg-white/20 rounded-full blur-md"></div>
                        <div className="absolute bottom-[10%] right-[20%] w-[60%] h-[60%] bg-black/10 rounded-full blur-xl"></div>
                        {/* The crack */}
                        <div className="w-[2px] h-[60%] bg-amber-900/40 blur-[1px]"></div>
                     </div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif font-bold text-2xl text-stone-800">特级内供</div>
                    <div className="text-xs font-mono text-stone-500 mt-1">DIA: 13-14mm+</div>
                  </div>
                </div>

                {/* Nut B: Regular */}
                <div className="flex flex-col items-center gap-4 opacity-70 scale-95 origin-bottom">
                  {/* CSS Pine Nut Shape - Medium */}
                  <div className="w-20 h-28 md:w-24 md:h-32 bg-gradient-to-br from-stone-300 via-stone-400 to-stone-600 rounded-[50%_50%_40%_40%_/_60%_60%_35%_35%] shadow-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute top-[10%] left-[20%] w-[40%] h-[30%] bg-white/10 rounded-full blur-md"></div>
                      <div className="w-[2px] h-[60%] bg-stone-800/20 blur-[1px]"></div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif font-bold text-xl text-stone-600">普通等级</div>
                    <div className="text-xs font-mono text-stone-400 mt-1">DIA: 10-11mm</div>
                  </div>
                </div>

                {/* Nut C: Small */}
                <div className="flex flex-col items-center gap-4 opacity-50 scale-90 origin-bottom">
                   {/* CSS Pine Nut Shape - Small */}
                   <div className="w-16 h-20 md:w-16 md:h-24 bg-gradient-to-br from-stone-400 via-stone-500 to-stone-700 rounded-[50%_50%_40%_40%_/_60%_60%_35%_35%] shadow-lg flex items-center justify-center relative overflow-hidden">
                       <div className="w-[2px] h-[60%] bg-stone-900/20 blur-[1px]"></div>
                   </div>
                   <div className="text-center">
                    <div className="font-serif font-bold text-lg text-stone-500">其他</div>
                    <div className="text-xs font-mono text-stone-400 mt-1">DIA: &lt;9mm</div>
                  </div>
                </div>

              </div>
              
              <div className="mt-12 text-center text-stone-400 text-sm">
                *示意图模拟真实松子大小比例
              </div>
            </div>
          </div>
        </div>

        {/* 2. Packaging Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
           <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-[500px] bg-stone-200">
             <div className="w-full h-full" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
               <div
                 className="flex w-full h-full transition-transform duration-500"
                 style={{ transform: `translateX(-${pkgIndex * 100}%)` }}
               >
                 {packages.map((p, i) => (
                   <img key={i} src={p.src} alt={`${p.name}包装展示`} className="w-full h-[500px] object-cover flex-shrink-0" />
                 ))}
               </div>
               <button
                 onClick={prevPkg}
                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-stone-900/40 hover:bg-stone-900/60 text-white rounded-full p-3"
               >
                 ‹
               </button>
               <button
                 onClick={nextPkg}
                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-stone-900/40 hover:bg-stone-900/60 text-white rounded-full p-3"
               >
                 ›
               </button>
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                 {packages.map((p, i) => (
                   <button
                     key={i}
                     onClick={() => setPkgIndex(i)}
                     aria-label={p.name}
                     className={`w-2.5 h-2.5 rounded-full ${p.dotClass} ${i === pkgIndex ? 'ring-2 ring-white' : 'opacity-60'}`}
                   />
                 ))}
               </div>
             </div>
             
             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent">
                <div className="flex items-center justify-between">
                    <div>
                        <h4 className="text-2xl font-serif font-bold text-white mb-1">三色尊享包装</h4>
                        <p className="text-blue-200 text-sm">实全 SHIQUAN · 长白山手信</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setPkgIndex(0)} className={`w-6 h-6 rounded-full bg-white border ${pkgIndex===0?'border-white':'border-white/50'}`} title="象牙白" aria-label="象牙白"></button>
                        <button onClick={() => setPkgIndex(1)} className={`w-6 h-6 rounded-full bg-amber-500 border ${pkgIndex===1?'border-white':'border-white/50'}`} title="奢华金" aria-label="奢华金"></button>
                        <button onClick={() => setPkgIndex(2)} className={`w-6 h-6 rounded-full bg-blue-900 border ${pkgIndex===2?'border-white':'border-white/50'}`} title="深海蓝" aria-label="深海蓝"></button>
                    </div>
                </div>
             </div>
             
             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-stone-900 px-4 py-2 rounded-lg text-xs font-bold shadow-lg">
                250g 独立防潮袋
             </div>
           </div>
           
           <div className="space-y-8">
             <div>
               <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                 <span className="text-blue-900">品质锁鲜</span>，如亲临长白山
               </h3>
               <p className="text-stone-600 text-lg leading-relaxed">
                 我们采用了高阻隔的食品级镀铝包装袋（象牙白/奢华金/深海蓝三色可选），不仅外观时尚大气，更能有效隔绝阳光和氧气。
               </p>
             </div>

             <div className="grid gap-6">
               <div className="flex gap-4">
                 <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-blue-900 shrink-0">
                   <Package size={24} />
                 </div>
                 <div>
                   <h5 className="font-bold text-stone-900 text-lg">250g 独立小袋</h5>
                   <p className="text-stone-500">科学定量，既方便携带分享，又能避免大包装开封后受潮氧化。</p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="bg-amber-50 w-12 h-12 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                   <Star size={24} />
                 </div>
                 <div>
                   <h5 className="font-bold text-stone-900 text-lg">物理开口工艺</h5>
                   <p className="text-stone-500">拒绝化学药水浸泡开口。我们采用纯物理开口，保留松子原本的自然褐色，吃得更放心。</p>
                 </div>
               </div>

                <div className="flex gap-4">
                 <div className="bg-stone-100 w-12 h-12 rounded-full flex items-center justify-center text-stone-600 shrink-0">
                   <Ban size={24} />
                 </div>
                 <div>
                   <h5 className="font-bold text-stone-900 text-lg">0 添加剂</h5>
                   <p className="text-stone-500">配料表只有松子。无香精、无防腐剂、无漂白。</p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        

      </div>
    </section>
  );
};

export default ProductDetail;
