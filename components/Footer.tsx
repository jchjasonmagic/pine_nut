import React from 'react';
import { MapPin, QrCode } from 'lucide-react';
import qrcodeImg from '../qrcode.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-nut-600 rounded-full flex items-center justify-center text-white font-serif font-bold">
                松
              </div>
              <span className="text-xl font-serif font-bold text-white">长白山实全</span>
            </div>
            <p className="mb-6 leading-relaxed">
              专注长白山特级红松子。自然的搬运工，只为将森林中最纯粹的美味带给您。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <span>吉林省延边朝鲜族自治州长白山产区</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2 text-white font-bold">
                <QrCode size={18} />
                <span>微信二维码</span>
              </div>
              <img 
                src={qrcodeImg} 
                alt="微信二维码" 
                className="w-24 h-24 object-contain rounded-lg border border-white/20 bg-white"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">快速链接</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#origin" className="hover:text-nut-400 transition">产地介绍</a>
              <a href="#quality" className="hover:text-nut-400 transition">品质对比</a>
              <a href="#pricing" className="hover:text-nut-400 transition">价格套餐</a>
              <a href="#process" className="hover:text-nut-400 transition">加工工艺</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 长白山实全松子. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
