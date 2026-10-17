import Link from "next/link";

type HomeCardProps = {
  text: string;
  href: string;
  width?: string;
  height?: string;
};

export default function HomeCard({ text, href, width, height }: HomeCardProps) {
  return (
    <Link
      href={href}
      style={{ width, height }}
      className="block border border-[#DCE3E3] rounded-lg p-4 hover:bg-[#F3F6F6] transition-colors"
    >
      {text}
    </Link>
  );
}
