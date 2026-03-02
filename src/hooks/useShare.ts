import { useCallback, useMemo } from "react";
import {
  ShareConfig,
  SocialProvider,
  socialProviders,
} from "./socialProviders";

type ShareConfigProps = ShareConfig & {
  // clipboardTimeout: number;
};

export const useShare = ({
  url,
  title,
  text,
  // clipboardTimeout = 2000,
}: ShareConfigProps) => {
  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }), // se houver um title, ele passa no objeto
      ...(text && { text }),
    }),
    [url, title, text],
  );

  const share = useCallback(
    (provider: SocialProvider) => {
      try {
        const providerConfig = socialProviders[provider];
        if (!providerConfig) {
          throw new Error(`Provider ${provider} not supported`);
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(
          shareUrl,
          "_blank",
          "width=600,height=600,location=yes,status=yes",
        );
        return !!shareWindow;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [shareConfig],
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(socialProviders).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
    ],
    [share],
  );

  return { shareButtons };
};
