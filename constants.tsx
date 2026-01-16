import React from 'react';
import { FeatureItem, BenefitItem } from './types';

export const COLORS = {
  primary: '#001a3d',
  secondary: '#003366',
  accent: '#facc15',
  success: '#22c55e',
  bonusBg: '#8ab4b8',
};

export interface FeatureItemExtended extends FeatureItem {
  icon: string;
}

export const FEATURES: FeatureItemExtended[] = [
  {
    icon: "📖",
    title: "Reflexões diárias",
    description: "inspiradas na vida e virtudes de Maria que te guiarão ao encontro com Deus",
  },
  {
    icon: "🙏",
    title: "Orações poderosas",
    description: "que te ajudarão a fortalecer sua fé e confiança em Deus",
  },
  {
    icon: "⚡",
    title: "Desafios práticos",
    description: "que incentivam a aplicação dos ensinamentos de Maria no dia a dia, aprofundando sua caminhada com Cristo",
  },
  {
    icon: "✝️",
    title: "Passagens bíblicas",
    description: "que te conectam à Palavra de Deus, trazendo luz e sabedoria para os momentos de dúvida e incerteza",
  },
];

export const BASIC_BENEFITS: BenefitItem[] = [
  { text: "Devocional Digital 365 Dias (Jan a Dez 2026)", checked: true },
  { text: "Bônus: Exército de São Miguel", strikethrough: true },
  { text: "Bônus: Guia do Rosário", strikethrough: true },
  { text: "Bônus: Novena da Fé e Confiança", strikethrough: true },
  { text: "Bônus: Áudios Oração das 18h", strikethrough: true },
  { text: "Bônus: Virtudes de Maria", strikethrough: true },
  { text: "Bônus: Plano Bíblico 2026", strikethrough: true },
];

export const PREMIUM_BENEFITS: BenefitItem[] = [
  { text: "Devocional Digital 365 Dias (Jan a Dez 2026)", checked: true },
  { text: "Acesso Vitalício", checked: true },
  { text: "Garantia de 60 dias", checked: true },
  { text: "🎁 Bônus: Exército de São Miguel", checked: true },
  { text: "🎁 Bônus: Guia do Rosário", checked: true },
  { text: "🎁 Bônus: Novena da Fé e Confiança", checked: true },
  { text: "🎁 Bônus: Áudios Oração das 18h", checked: true },
  { text: "🎁 Bônus: Virtudes de Maria", checked: true },
  { text: "🎁 Bônus: Plano Bíblico 2026", checked: true },
];