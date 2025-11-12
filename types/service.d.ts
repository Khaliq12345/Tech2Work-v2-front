export interface Solution {
  title: string;
  description: string;
  content: string;
}

export interface Project {
  title: string;
  description?: string;
  image: string;
  badge: string;
  to?: string;
}

export interface ServiceData {
  title: string;
  tag: string;
  about: {
    description: string;
    images: string[];
  };
  expertise: {
    description: string;
    skills: string[];
  };
  solutions: Solution[];
  projects: Project[];
}

export default interface ServiceItem {
  title: string;
  image: string;
  link: string;
}
