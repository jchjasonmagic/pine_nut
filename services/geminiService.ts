import { GoogleGenAI } from "@google/genai";

// Initialize Gemini AI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generatePineNutRecipe = async (ingredients: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Please configure your API Key to use the AI Chef features.";
  }

  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      我有一些高品质的长白山松子。
      请根据用户提供的以下食材，推荐一道使用松子的高级创意料理食谱：
      "${ingredients}"

      要求：
      1. 食谱名称要优雅好听。
      2. 列出主要食材。
      3. 简述制作步骤 (3-4步即可)。
      4. 解释为什么松子能提升这道菜的风味。
      5. 输出格式必须是简洁的 Markdown。
      6. 如果用户没有提供具体食材，就推荐一道经典的松子料理（如松子玉米或罗勒松子酱意大利面）。
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "抱歉，我现在无法生成食谱，请稍后再试。";
  } catch (error) {
    console.error("Error generating recipe:", error);
    return "生成食谱时遇到了一些问题，请检查网络设置或API Key。";
  }
};