
import React from 'react';
import factoryImg from '../factory.jpg';
import { Settings, Thermometer, Hammer, ScanEye, Factory, Globe2 } from 'lucide-react';

const FactoryProcess: React.FC = () => {
  const steps = [
    {
      icon: <Settings size={24} />,
      title: "脱粒去杂 + 清水清洗",
      desc: "只留下颗粒饱满的原果，经过层层筛选才能送进工厂。彻底洗净表面浮尘。"
    },
    {
      icon: <Thermometer size={24} />,
      title: "控温控湿烘干",
      desc: "精准控制温度与湿度，牢牢锁住原果的新鲜与油脂香气。"
    },
    {
      icon: <Hammer size={24} />,
      title: "物理加热 + 机械开口",
      desc: "拒绝化学浸泡。采用物理热胀冷缩与机械挤压，让外壳好剥又不伤内仁。"
    },
    {
      icon: <ScanEye size={24} />,
      title: "智能色选 + 人工精选",
      desc: "双重关卡剔除坏仁、瘪仁，确保您吃到的每一颗都是完美果仁。"
    }
  ];

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section: Meihekou Info */}
        <div className="text-center mb-16 relative">
          <div className="inline-block px-4 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold tracking-wider mb-6 border border-amber-100">
            INDUSTRY CAPITAL
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
            全球最大松子仁加工中心<br/>
            <span className="text-amber-600">梅河口</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
            <div className="bg-stone-50 p-6 rounded-2xl flex items-center gap-4 border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-white p-4 rounded-full shadow-sm text-blue-900">
                <Globe2 size={32} />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-stone-900">7/10</div>
                <div className="text-sm text-stone-500">全球每10颗出口松子，7颗来自这里</div>
              </div>
            </div>
            <div className="bg-stone-50 p-6 rounded-2xl flex items-center gap-4 border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-white p-4 rounded-full shadow-sm text-amber-600">
                <Factory size={32} />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-stone-900">20万吨</div>
                <div className="text-sm text-stone-500">年加工能力，产业之都的品质底气</div>
              </div>
            </div>
          </div>
          <p className="mt-10 text-stone-600 max-w-2xl mx-auto leading-relaxed text-lg">
            送到工厂前早已过五关斩六将！只有最优质的原果才能进入梅河口的标准化工厂。
            分级包装后发往全国和海外，每一口都是全球顶尖加工标准的放心滋味。
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Grid */}
          <div className="order-2 lg:order-1 relative">
             <div className="grid grid-cols-2 gap-4">
                <img 
                  src={factoryImg} 
                  alt="工厂加工线" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
                />
                <img 
                  src={factoryImg} 
                  alt="工厂加工线" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
             </div>
             {/* Central Badge */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur shadow-2xl p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center border-4 border-amber-500 z-10 text-center animate-pulse-slow">
               <span className="text-3xl font-bold text-stone-900">4大</span>
               <span className="text-sm text-stone-600 font-medium">核心工序</span>
               <span className="text-xs text-amber-500 mt-1">层层把关</span>
             </div>
          </div>

          {/* Right: Steps List */}
          <div className="order-1 lg:order-2 space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="group flex gap-6 bg-stone-50 hover:bg-white p-6 rounded-2xl transition-all duration-300 border border-stone-100 hover:border-amber-200 hover:shadow-lg">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-white group-hover:bg-amber-500 rounded-xl flex items-center justify-center text-stone-400 group-hover:text-white transition-colors shadow-sm">
                    {step.icon}
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className="w-0.5 h-10 bg-stone-200 mx-auto mt-4 group-hover:bg-amber-200 transition-colors"></div>
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-2">
                    {step.title}
                  </h4>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FactoryProcess;
