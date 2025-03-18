export default function ContributePage() {
  return (
    <main className="flex flex-1 flex-col p-6 max-w-3xl mx-auto prose">
      <h1>Contribute to Creek OCW</h1>

      <p>We welcome contributions from teachers and students.</p>
      <h2>How to Contribute</h2>

      <ol>
        <li>
          <strong>Content Contributions</strong>: Submit new course materials,
          exercises, or improvements to existing content.
        </li>
        <li>
          <strong>Tutor</strong>: Teacher others the material you learn.
        </li>
        <li>
          <strong>Code Contributions</strong>: Help improve the platform by
          contributing to our codebase.
        </li>
      </ol>

      <h2>Getting Started</h2>

      <p>
        To get started, please visit our{" "}
        <a
          href="https://github.com/CCHS-Computer-Science-Honors-Society/ocw"
          className="text-fd-primary hover:underline"
          target="_blank"
        >
          GitHub
        </a>{" "}
        and check out the contribution guidelines.
      </p>
    </main>
  );
}
