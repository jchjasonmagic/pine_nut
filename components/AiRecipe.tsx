import React, { useState } from 'react';
import { generatePineNutRecipe } from '../services/geminiService';
import { Sparkles, ChefHat, Loader2, UtensilsCrossed } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const AiRecipe: React.FC = () => {
  const [input, setInput] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (loading) return;
    setLoading(true);
    setRecipe(''); // Clear previous
    const result = await generatePineNutRecipe(input);
    setRecipe(result);
    setLoading(false);
  };

  return (
    <section id="recipes" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 text-nut-600 font-semibold text-sm border border-nut-100">
            <Sparkles size={16} />
            <span>AI 智能大厨</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            除了生吃，松子还能怎么吃？
          </h2>
          <p className="text-stone-600">
            输入您冰箱里现有的食材（如：鸡胸肉、罗勒、甚至冰淇淋），让 AI 告诉您如何搭配我们的特级松子。
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
          <div className="p-6 md:p-8 bg-gradient-to-r from-stone-50 to-white">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="例如：虾仁, 芦笋, 意大利面..."
                className="flex-1 px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-nut-500 focus:outline-none focus:ring-4 focus:ring-nut-100 transition-all text-lg"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="bg-nut-600 hover:bg-nut-700 disabled:bg-stone-300 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-nut-600/20"
              >
                {loading ? <Loader2 className="animate-spin" /> : <ChefHat />}
                生成食谱
              </button>
            </div>
          </div>

          <div className="min-h-[200px] p-8 md:p-10 bg-white">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full text-stone-400 py-12">
                <Loader2 size={48} className="animate-spin mb-4 text-nut-400" />
                <p>大厨正在构思创意料理...</p>
              </div>
            ) : recipe ? (
              <div className="prose prose-stone prose-lg max-w-none">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                  <div className="bg-nut-100 p-2 rounded-lg">
                    <UtensilsCrossed className="text-nut-700" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 m-0">为您推荐</h3>
                </div>
                <ReactMarkdown>{recipe}</ReactMarkdown>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-stone-400 py-12 border-2 border-dashed border-stone-100 rounded-xl">
                <ChefHat size={48} className="mb-4 text-stone-200" />
                <p>等待您的点单...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiRecipe;