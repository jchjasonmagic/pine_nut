
import React from 'react';
import { PricingTier } from '../types';
import { ShoppingCart, Check, Truck, AlertTriangle } from 'lucide-react';

interface PricingProps {
  onOrder: () => void;
}

const pricingData: PricingTier[] = [
  { weightKg: 1, packs: 4, packSize: "1袋/250g", unitPrice: 88, shipping: "7元", totalPrice: 183 },
  { weightKg: 3, packs: 12, packSize: "1袋/250g", unitPrice: 88, shipping: "包邮", totalPrice: 528, isBestValue: true },
  { weightKg: 5, packs: 20, packSize: "1袋/250g", unitPrice: 87.5, shipping: "包邮", totalPrice: 875 },
  { weightKg: 10, packs: 40, packSize: "1袋/250g", unitPrice: 87.3, shipping: "包邮", totalPrice: 1746 },
];

const Pricing: React.FC<PricingProps> = ({ onOrder }) => {
  return (
    <section id="pricing" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/20 skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-stone-800/20 -skew-x-12 -translate-x-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-500 tracking-[0.3em] text-xs font-bold uppercase mb-4 block">Direct from Factory</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">内供价格·源头直发</h2>
          <p className="text-stone-400 max-w-xl mx-auto text-lg">
             省去中间商差价。所有规格均为<span className="text-amber-400 font-bold">250g独立包装</span>，量大更优。
          </p>
        </div>

        

        

        {/* Pricing Cards (Mobile & Tablet) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:hidden">
          {pricingData.map((tier, index) => (
            <div 
              key={index} 
              className={`relative bg-stone-800 rounded-2xl p-6 shadow-xl border ${tier.isBestValue ? 'border-amber-500' : 'border-stone-700'}`}
            >
              {tier.isBestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  家庭囤货首选
                </div>
              )}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-1">{tier.weightKg} 公斤</div>
                <div className="text-stone-400 text-sm">({tier.weightKg * 2} 斤)</div>
              </div>

              <div className="bg-stone-900/50 rounded-xl p-4 mb-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400">总包数</span>
                  <span className="text-white font-bold">{tier.packs} 袋</span>
                </div>
                 <div className="flex justify-between text-sm">
                  <span className="text-stone-400">规格</span>
                  <span className="text-white">250g/袋</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400">运费</span>
                  <span className={tier.shipping === "包邮" ? "text-green-400 font-bold" : "text-white"}>{tier.shipping}</span>
                </div>
              </div>

              <div className="text-center mb-6">
                <span className="text-sm text-stone-500 align-top">¥</span>
                <span className="text-4xl font-serif font-bold text-amber-500">{tier.totalPrice}</span>
              </div>

              <button 
                onClick={onOrder}
                className={`w-full py-3 rounded-xl font-bold transition flex justify-center items-center gap-2 ${
                tier.isBestValue 
                  ? 'bg-amber-500 text-stone-900 hover:bg-amber-400' 
                  : 'bg-stone-700 text-white hover:bg-stone-600'
              }`}>
                <ShoppingCart size={18} /> 立即购买
              </button>
            </div>
          ))}
        </div>

        

        {/* Desktop Table View - Styled like the user's image but cleaner */}
        <div className="hidden lg:block bg-white text-stone-800 rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto border-4 border-stone-200">
          <table className="w-full text-left">
            <thead className="bg-stone-100 text-stone-600 font-bold text-sm tracking-wider">
              <tr>
                <th className="p-6 pl-8">重量 (公斤)</th>
                <th className="p-6">折合斤数</th>
                <th className="p-6">规格 (250g/袋)</th>
                <th className="p-6">单价参照</th>
                <th className="p-6">运费</th>
                <th className="p-6 text-right text-lg">总价 (元)</th>
                <th className="p-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {pricingData.map((tier, index) => (
                <tr key={index} className={`hover:bg-amber-50/50 transition duration-300 group ${tier.isBestValue ? 'bg-amber-50/30' : ''}`}>
                  <td className="p-6 pl-8">
                    <div className="font-bold text-xl text-stone-900">{tier.weightKg} KG</div>
                  </td>
                  <td className="p-6 text-stone-500 font-medium">{tier.weightKg * 2} 斤</td>
                  <td className="p-6">
                    <span className={`py-1 px-3 rounded-full text-sm font-bold ${tier.isBestValue ? 'bg-amber-200 text-amber-900' : 'bg-stone-200 text-stone-700'}`}>
                      {tier.packs} 袋
                    </span>
                  </td>
                  <td className="p-6 text-stone-400 font-mono text-sm">¥{tier.unitPrice}</td>
                  <td className="p-6">
                    {tier.shipping === "包邮" ? (
                       <span className="flex items-center gap-1 text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded w-fit">
                         <Truck size={14} /> 包邮
                       </span>
                    ) : (
                      <span className="text-stone-500 font-medium">{tier.shipping}</span>
                    )}
                  </td>
                  <td className="p-6 text-right">
                    <div className="font-serif font-bold text-3xl text-stone-900">¥{tier.totalPrice}</div>
                  </td>
                  <td className="p-6 text-right pr-8">
                     <button 
                       onClick={onOrder}
                       className={`px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-lg transform group-hover:-translate-y-0.5 ${
                       tier.isBestValue 
                       ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-200' 
                       : 'bg-stone-900 hover:bg-stone-800 text-white'
                     }`}>
                      选购
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-stone-50 p-4 text-center text-sm text-stone-500 border-t border-stone-200 flex items-center justify-center gap-6">
            <span className="flex items-center gap-1"><Check size={14} className="text-amber-500"/> 坏单包赔</span>
            <span className="flex items-center gap-1"><Check size={14} className="text-amber-500"/> 现炒现发</span>
            <span className="flex items-center gap-1"><Check size={14} className="text-amber-500"/> 默认快递直达</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-start gap-2 justify-center">
            <AlertTriangle className="text-amber-500" size={18} />
            <p className="text-stone-400 text-sm leading-relaxed text-center">
              价格温馨提示：松子价格会随季节与产量波动。目前货源充足，价格更划算；临近年底受原料与加工成本影响，价格可能上调，建议及时下单锁定优惠。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
