import { ShareConfig } from "./socialProviders";

type ShareConfigProps = ShareConfig & {
  clipboardTimeout: number;
};

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: ShareConfigProps) => {
  const shareConfig = {
    url,
    ...(title && { title }), // se houver um title, ele passa no objeto
    ...(text && { text }),
  };

  return {};
};
