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
}
