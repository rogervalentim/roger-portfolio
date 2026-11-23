export interface Localized<T = string> {
  pt: T;
  en: T;
}

export interface ProjectCardProps {
  id: string;
  /** Nome curto do produto. */
  title: Localized;
  /** Rótulo técnico exibido acima do título (ex.: "Plataforma de pedidos"). */
  kicker: Localized;
  /** Descrição de uma linha exibida no card. */
  description: Localized;
  image: string;
  link: string;
  technologies: string[];
  /** Case study: desafio técnico real do projeto. */
  challenge: Localized;
  /** Case study: solução/arquitetura implementada. */
  solution: Localized;
  /** Case study: diferenciais de UI/UX. */
  uiDecisions: Localized;
  /** Case study: destaques técnicos objetivos. */
  highlights: Localized<string[]>;
  githubUrl?: string;
}

export interface TimelineItem {
  id: string;
  kind: Localized;
  title: Localized;
  org: Localized;
  period: Localized;
  summary: Localized<string[]>;
}
