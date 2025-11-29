import {
  Bird,
  GitBranch,
  Skull,
  Search,
  Cloud,
  Clock,
  Drama,
  HelpCircle,
  LucideIcon,
} from 'lucide-react';
import { SymbolType } from './gemini';
import { SymbolInfo } from '../types';

export const SYMBOLS: Record<SymbolType, SymbolInfo & { icon: LucideIcon }> = {
  owl: {
    type: 'owl',
    name: 'The Owl',
    description: 'Pure Truth - verified facts, completely accurate information',
    color: 'text-emerald-500',
    icon: Bird,
  },
  chameleon: {
    type: 'chameleon',
    name: 'The Chameleon',
    description: 'Misleading - changes with context, partial truths mixed with falsehoods',
    color: 'text-amber-500',
    icon: GitBranch,
  },
  snake: {
    type: 'snake',
    name: 'The Snake',
    description: 'Completely False - debunked lies, fabricated information',
    color: 'text-red-500',
    icon: Skull,
  },
  'magnifying-glass': {
    type: 'magnifying-glass',
    name: 'The Magnifying Glass',
    description: 'Partially True - contains some accurate elements but missing critical context',
    color: 'text-blue-500',
    icon: Search,
  },
  fog: {
    type: 'fog',
    name: 'The Fog',
    description: 'Unverifiable - cannot be confirmed or denied with available evidence',
    color: 'text-gray-500',
    icon: Cloud,
  },
  clock: {
    type: 'clock',
    name: 'The Clock',
    description: 'Outdated - was true once but no longer accurate',
    color: 'text-purple-500',
    icon: Clock,
  },
  'theater-masks': {
    type: 'theater-masks',
    name: 'The Theater Masks',
    description: 'Satire/Parody - intentionally fake for humor, not meant seriously',
    color: 'text-pink-500',
    icon: Drama,
  },
  'question-mark': {
    type: 'question-mark',
    name: 'The Question',
    description: 'Needs More Context - insufficient information to make a judgment',
    color: 'text-orange-500',
    icon: HelpCircle,
  },
};

export function getSymbolInfo(symbolType: SymbolType) {
  return SYMBOLS[symbolType];
}
