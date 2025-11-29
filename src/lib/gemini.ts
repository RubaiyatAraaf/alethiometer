import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBiW6ctIHGIXzG4j7UTacbz_zHKs2dj5Ug';
const genAI = new GoogleGenerativeAI(API_KEY);

export type SymbolType =
  | 'owl'
  | 'chameleon'
  | 'snake'
  | 'magnifying-glass'
  | 'fog'
  | 'clock'
  | 'theater-masks'
  | 'question-mark';

export interface FactCheckResult {
  symbol: SymbolType;
  verdict: string;
  explanation: string;
  confidence: number;
  sources?: string[];
}

export async function analyzeImageWithGemini(imageFile: File): Promise<FactCheckResult> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' });

    const imageData = await fileToBase64(imageFile);
    const imageParts = [{
      inlineData: {
        data: imageData.split(',')[1],
        mimeType: imageFile.type,
      },
    }];

    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const prompt = `You are Alethiometer, an oracle of truth that provides cryptic but accurate symbolic verdicts on claims, news headlines, and rumors.

IMPORTANT: Today's date is ${currentDate}. Use this date for temporal context when evaluating claims.

Analyze the text in this image carefully. Determine its factual accuracy and respond ONLY in this exact JSON format:

{
  "symbol": "one of: owl|chameleon|snake|magnifying-glass|fog|clock|theater-masks|question-mark",
  "verdict": "brief one-line symbolic verdict",
  "explanation": "detailed 2-3 paragraph explanation of why this verdict was given, including key facts and context",
  "confidence": number between 0 and 100,
  "sources": ["list of 2-3 general sources or reasoning used"]
}

Symbol meanings:
- owl: Pure Truth - verified facts, completely accurate information
- chameleon: Misleading - changes with context, partial truths mixed with falsehoods, manipulated facts
- snake: Completely False - debunked lies, fabricated information, disinformation
- magnifying-glass: Partially True - contains some accurate elements but missing critical context
- fog: Unverifiable - cannot be confirmed or denied with available evidence, too vague
- clock: Outdated - was true once but no longer accurate, superseded information
- theater-masks: Satire/Parody - intentionally fake for humor, not meant to be taken seriously
- question-mark: Needs More Context - insufficient information in the image to make a judgment

Be thorough, objective, and cite reasoning. Focus on factual accuracy, not opinions.`;

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = result.response;
    const text = response.text();

    console.log('Gemini response:', text);

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error('Could not find JSON in response:', text);
      throw new Error('Unable to parse response from AI');
    }

    const parsed = JSON.parse(jsonMatch[0]);

    return {
      symbol: parsed.symbol as SymbolType,
      verdict: parsed.verdict,
      explanation: parsed.explanation,
      confidence: parsed.confidence,
      sources: parsed.sources || [],
    };
  } catch (error: any) {
    console.error('Error analyzing image:', error);
    console.error('Error details:', error.message, error.response);
    throw new Error(error.message || 'Failed to analyze image. Please try again.');
  }
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
