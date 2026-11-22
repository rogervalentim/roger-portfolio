export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  problem?: string;
  architecture?: string;
  highlights?: string[];
}

export interface ExperienceCardProps {
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  date: string;
}
