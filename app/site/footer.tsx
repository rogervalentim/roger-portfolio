import { profile } from "../data/profile";
import { Meta } from "../components/badge";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export const Footer = ({ locale = "pt" }: { locale?: Locale }) => {
  const t = getTranslations(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-ink/90 backdrop-blur-md md:static md:bg-transparent md:backdrop-blur-none">
      <div className="container flex flex-col items-center justify-between gap-2 py-3 md:flex-row md:gap-4 md:py-6">
        <p className="text-xs text-muted">
          © {year} {profile.name}
          <span className="hidden md:inline"> · {t.rights}</span>
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center text-xs text-muted transition-colors hover:text-fg"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center text-xs text-muted transition-colors hover:text-fg"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-9 items-center text-xs text-muted transition-colors hover:text-fg"
            >
              {t.emailLabel}
            </a>
          </li>
          <li className="hidden md:block">
            <Meta>São Paulo, BR</Meta>
          </li>
        </ul>
      </div>
    </footer>
  );
};
