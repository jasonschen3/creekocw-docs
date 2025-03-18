import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="flex flex-1 flex-col p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>

      <h2 className="text-2xl font-semibold mb-4">STEM</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CourseCard
          title="AP Biology"
          description="Study of living organisms and biological systems"
          href="/courses/ap-biology"
        />
        <CourseCard
          title="AP Chemistry"
          description="Advanced chemistry concepts, lab work, and chemical principles"
          href="/courses/ap-chemistry"
        />
        <CourseCard
          title="AP Physics 1"
          description="Algebra-based physics covering mechanics, waves, and circuits"
          href="/courses/ap-physics-1"
        />
        <CourseCard
          title="AP Physics 2"
          description="Fluid mechanics, thermodynamics, electricity, and quantum physics"
          href="/courses/ap-physics-2"
        />
        <CourseCard
          title="AP Physics C: Mechanics"
          description="Calculus-based physics focusing on mechanics"
          href="/courses/ap-physics-c-mechanics"
        />
        <CourseCard
          title="AP Physics C: E&M"
          description="Calculus-based electricity and magnetism"
          href="/courses/ap-physics-c-em"
        />
        <CourseCard
          title="AP Calculus AB"
          description="Differential and integral calculus with applications"
          href="/courses/ap-calculus-ab"
        />
        <CourseCard
          title="AP Calculus BC"
          description="Extended calculus including series, parametric and polar functions"
          href="/courses/ap-calculus-bc"
        />
        <CourseCard
          title="AP Statistics"
          description="Collection, analysis, and drawing conclusions from data"
          href="/courses/ap-statistics"
        />
        <CourseCard
          title="AP Computer Science A"
          description="Java programming fundamentals and algorithms"
          href="/courses/ap-computer-science-a"
        />
        <CourseCard
          title="AP Computer Science Principles"
          description="Fundamentals of computing, programming, and real-world applications"
          href="/courses/ap-computer-science-principles"
        />
        <CourseCard
          title="Data Structures"
          description="Advanced data structures and algorithms beyond AP CS"
          href="/courses/data-structures"
        />
        <CourseCard
          title="AP Environmental Science"
          description="Interdisciplinary study of ecosystem interactions and human impact"
          href="/courses/ap-environmental-science"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Humanities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CourseCard
          title="AP English Language"
          description="Rhetorical analysis, argument, and synthesis writing skills"
          href="/courses/ap-english-language"
        />
        <CourseCard
          title="AP English Literature"
          description="Critical analysis of literature and college-level writing"
          href="/courses/ap-english-literature"
        />
        <CourseCard
          title="AP U.S. History"
          description="Comprehensive survey of American history from pre-colonial to present"
          href="/courses/ap-us-history"
        />
        <CourseCard
          title="AP World History"
          description="Global historical themes and developments across civilizations"
          href="/courses/ap-world-history"
        />
        <CourseCard
          title="AP European History"
          description="European history from the Renaissance to present day"
          href="/courses/ap-european-history"
        />
        <CourseCard
          title="AP Government & Politics (U.S.)"
          description="U.S. government, political systems, and constitutional foundations"
          href="/courses/ap-gov-politics-us"
        />
        <CourseCard
          title="AP Comparative Government"
          description="Political systems and governance across different countries"
          href="/courses/ap-comparative-government"
        />
        <CourseCard
          title="AP Human Geography"
          description="Patterns of human population, cultural, and political organization"
          href="/courses/ap-human-geography"
        />
        <CourseCard
          title="AP Psychology"
          description="Scientific study of behavior and mental processes"
          href="/courses/ap-psychology"
        />
        <CourseCard
          title="AP Macroeconomics"
          description="Principles of economy-wide phenomena like inflation and economic growth"
          href="/courses/ap-macroeconomics"
        />
        <CourseCard
          title="AP Microeconomics"
          description="Economic principles of consumer and company decision-making"
          href="/courses/ap-microeconomics"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CourseCard
          title="AP Spanish Language"
          description="Advanced Spanish communication skills and cultural knowledge"
          href="/courses/ap-spanish-language"
        />
        <CourseCard
          title="AP Spanish Literature"
          description="Literary analysis of Spanish and Latin American literature"
          href="/courses/ap-spanish-literature"
        />
        <CourseCard
          title="AP French Language"
          description="French communication skills in real-world contexts"
          href="/courses/ap-french-language"
        />
        <CourseCard
          title="AP Chinese Language"
          description="Mandarin communication skills and cultural knowledge"
          href="/courses/ap-chinese-language"
        />
        <CourseCard
          title="AP German Language"
          description="German language proficiency and cultural understanding"
          href="/courses/ap-german-language"
        />
        <CourseCard
          title="AP Latin"
          description="Reading and analysis of Latin literature"
          href="/courses/ap-latin"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Arts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CourseCard
          title="AP Art History"
          description="Analysis of major forms of artistic expression throughout history"
          href="/courses/ap-art-history"
        />
        <CourseCard
          title="AP Studio Art: 2-D Design"
          description="Two-dimensional design principles and techniques"
          href="/courses/ap-studio-art-2d"
        />
        <CourseCard
          title="AP Studio Art: 3-D Design"
          description="Three-dimensional design principles and techniques"
          href="/courses/ap-studio-art-3d"
        />
        <CourseCard
          title="AP Studio Art: Drawing"
          description="Drawing skills, techniques, and creative expression"
          href="/courses/ap-studio-art-drawing"
        />
        <CourseCard
          title="AP Music Theory"
          description="Fundamentals of music notation, composition, and analysis"
          href="/courses/ap-music-theory"
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
    <div className="border bg-[#1a365d] border-fd-border rounded-lg p-4 hover:border-fd-primary transition-colors">
      <Link href={href} className="block h-full">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-fd-muted-foreground">{description}</p>
      </Link>
    </div>
  );
}
