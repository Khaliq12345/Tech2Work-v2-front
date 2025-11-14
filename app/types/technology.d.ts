export interface TechnologyFeature {
  title: string;
  description: string;
  icon: string;
}

export interface TechnologyProcessStep {
  phase: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechnologyContent {
  title: string;
  name: string;
  coverImage: string;
  heroHeadline: string;
  heroCoverAlt: string;
  descriptionV1: string;
  descriptionV2: string;
  additionalDescription: string;
  additionalTitle: string;
  usesTitle: string;
  usesDescription: string;
  features: TechnologyFeature[];
  process: TechnologyProcessStep[];
  processTitle: string;
  processDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaImageAlt: string;
}

export interface TechnologyEntry {
  en: TechnologyContent;
  fr: TechnologyContent;
}
