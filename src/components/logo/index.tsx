import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/">
      <Image src="/assets/logo.svg" alt="Image Logo" width={116} height={32} />
    </Link>
  );
}
