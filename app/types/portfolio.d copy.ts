export interface SocialLink {
  label: string; // Nom du réseau (ex: "Instagram")
  icon: string; // Icône (ex: "i-simple-icons-instagram")
  url: string; // Lien vers le profil
}

export interface Portfolio {
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
  client: string;
  follow: SocialLink[]; // Tableau de liens sociaux
}

export default interface PortfolioItem {
  title: string;
  image: string;
  link: string;
}
