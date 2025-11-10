export type ContactLocaleKey = "en" | "fr";

export interface ContactTexts {
  openButton: string;
  title: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
}

export type ContactTextsMap = Record<ContactLocaleKey, ContactTexts>;

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}
