import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export function FeatureCard({
  title,
  description,
  link,
  linkText,
}: FeatureCardProps) {
  return (
    <div className="border border-fd-border rounded-lg p-6 hover:border-[#8B0000] transition-colors flex flex-col">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-fd-muted-foreground mb-4 flex-grow">{description}</p>
      <Link href={link} className="text-[#8B0000] hover:underline font-medium">
        {linkText} →
      </Link>
    </div>
  );
}
