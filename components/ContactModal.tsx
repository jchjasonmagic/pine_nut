
import React from 'react';
import { X, QrCode } from 'lucide-react';
import qrcodeImg from '../qrcode.jpg';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors p-2 hover:bg-stone-100 rounded-full"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <QrCode size={36} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">添加微信订购</h3>
          <p className="text-stone-500 text-sm leading-relaxed px-4">
            为保证每一单都是最新日期的产品，<br/>我们采用<strong>人工一对一核对发货</strong>。
          </p>
        </div>

        <div className="bg-stone-50 rounded-xl p-6 border border-stone-100 mb-8 shadow-inner">
          <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3 text-center">
            客服微信二维码
          </div>
          <div className="flex flex-col items-center gap-4">
            <img 
              src={qrcodeImg} 
              alt="微信二维码" 
              className="w-56 h-56 object-contain rounded-xl border border-stone-200 bg-white shadow-md"
            />
            <div className="text-stone-600 text-sm">请使用微信扫描二维码添加好友</div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 text-sm font-medium transition-colors hover:underline underline-offset-4"
          >
            我再看看
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
