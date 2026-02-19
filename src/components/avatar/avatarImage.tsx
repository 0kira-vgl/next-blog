import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type AvatarSize = "xs" | "sm";

// omite os tamanhos da imagem
type AvatarImageProps = Omit<ImageProps, "height" | "width"> & {
  size?: AvatarSize;
};

const avatarSize = {
  xs: "size-5",
  sm: "size-9",
};

export const AvatarImage = ({
  src,
  alt,
  size = "xs",
  ...rest
}: AvatarImageProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border border-blue-200",
        avatarSize[size],
      )}
    >
      <Image {...rest} src={src} alt={alt} fill />;
    </div>
  );
};
