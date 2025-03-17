import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="flex flex-1 flex-col p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Place courses here */}
        <CourseCard
          title="Introduction to Programming"
          description="Learn the basics of programming concepts"
          href="/courses/intro-programming"
        />
        <CourseCard
          title="Data Structures"
          description="Explore fundamental data structures and algorithms"
          href="/courses/data-structures"
        />
      </div>
    </main>
  );
}

function CourseCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="border border-fd-border rounded-lg p-4 hover:border-fd-primary transition-colors">
      <Link href={href} className="block h-full">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-fd-muted-foreground">{description}</p>
      </Link>
    </div>
  );
}
