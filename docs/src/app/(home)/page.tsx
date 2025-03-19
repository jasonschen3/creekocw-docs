import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-16 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Creek OCW</h1>
        <p className="text-xl text-fd-muted-foreground mb-8">
          Opencourseware provides resources catered towards all students at
          CCHS. Accelerate your learning with quality courses and materials.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/docs"
            className="px-6 py-3 bg-[#1a365d] text-white rounded-lg font-medium hover:bg-[#1a36dd] transition-colors"
          >
            Browse Documentation
          </Link>
          <Link
            href="/courses"
            className="px-6 py-3 border bg-[#1a365d] text-white  border-fd-border rounded-lg font-medium hover:bg-[#1a36dd] transition-colors"
          >
            Explore Courses
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
        <FeatureCard
          title="Documentation"
          description="Access comprehensive guides and resources for all CCHS students."
          link="/docs"
          linkText="View Documentation"
        />
        <FeatureCard
          title="Courses"
          description="Browse our collection of quality educational materials across subjects."
          link="/courses"
          linkText="Explore Courses"
        />
        <FeatureCard
          title="Contribute"
          description="Join our community effort to create and improve educational resources."
          link="/contribute"
          linkText="Learn How to Contribute"
        />
      </div>

      {/* Call to Action */}
      <div className="w-full max-w-3xl bg-[#eec6be] text-black rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Finished Reading Docs?</h2>
        {/* <p className="mb-6 text-fd-muted-foreground">
          Dive into our site
        </p> */}
        <Link
          href="https://www.creekocw.com/"
          className="px-6 py-3 bg-[#8B0000] text-white rounded-lg font-medium hover:bg-[#5c0000] transition-colors inline-block"
        >
          CreekOCW
        </Link>
      </div>
    </main>
  );
}
