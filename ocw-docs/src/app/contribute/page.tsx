export default function ContributePage() {
  return (
    <main className="flex flex-1 flex-col p-6 max-w-3xl mx-auto prose">
      <h1>Contribute to Creek OCW</h1>

      <p>
        We welcome contributions from educators, developers, and content
        creators who want to help make educational content more accessible.
      </p>

      <h2>How to Contribute</h2>

      <ol>
        <li>
          <strong>Content Contributions</strong>: Submit new course materials,
          exercises, or improvements to existing content.
        </li>
        <li>
          <strong>Code Contributions</strong>: Help improve the platform by
          contributing to our codebase.
        </li>
        <li>
          <strong>Documentation</strong>: Help improve our documentation and
          tutorials.
        </li>
      </ol>

      <h2>Getting Started</h2>

      <p>
        To get started, please visit our{" "}
        <a
          href="https://github.com/your-organization/creek-ocw"
          className="text-fd-primary hover:underline"
        >
          GitHub repository
        </a>{" "}
        and check out the contribution guidelines.
      </p>
    </main>
  );
}
