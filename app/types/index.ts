export interface Tech {
  id: string;
  icon: React.ReactNode;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  techs: Tech[];
  badges: string[];
  visible?: boolean;
}

export interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
}
