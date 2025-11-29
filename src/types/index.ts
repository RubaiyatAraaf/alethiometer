import { SymbolType } from '../lib/gemini';

export interface User {
  uid: string;
  email: string;
  createdAt: Date;
}

export interface SymbolInfo {
  type: SymbolType;
  name: string;
  description: string;
  color: string;
}
