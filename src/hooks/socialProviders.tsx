import { Facebook, Linkedin, Slack, Twitter } from "lucide-react";

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialProvider = "linkedin" | "facebook" | "slack" | "twitter";

export const socialProviders = {
  linkedin: {
    name: "Linkedin",
    icon: <Linkedin className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      // encodeURIComponent garante que a URL/texto seja codificado corretamente,
      // evitando que caracteres como ?, &, = ou espaços quebrem os parâmetros da URL.
      `https://www.linkedin.com/sharing/share-offsite/?url${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: "Facebook",
    icon: <Facebook className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: "Slack",
    icon: <Slack className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || "")}`,
  },
  twitter: {
    name: "Twitter",
    icon: <Twitter className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || "")}`,
  },
};
