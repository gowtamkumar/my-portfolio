import { site } from "@/lib/site";
import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function SocialMedia() {
  const items = [
    { href: site.socials.linkedin, icon: AiFillLinkedin, label: "LinkedIn" },
    { href: site.socials.github, icon: AiFillGithub, label: "GitHub" },
    { href: site.socials.facebook, icon: AiFillFacebook, label: "Facebook" },
  ];

  return (
    <div className="flex justify-center gap-3">
      {items.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--muted)] transition hover:border-signal/40 hover:text-signal"
        >
          <Icon className="text-lg" />
        </Link>
      ))}
    </div>
  );
}
