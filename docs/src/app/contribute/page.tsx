export default function ContributePage() {
  return (
    <main className="flex flex-1 flex-col p-6 max-w-3xl mx-auto prose">
      <h1>Contribute to Creek OCW</h1>

      <p>
        We welcome contributions from teachers and students to help improve the
        Creek OCW platform and expand our educational resources.
      </p>

      <div className="my-6 flex justify-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe19E0KdFPsMH_qOzGBQyNajlk2aHBJkuNxpv5raYzARfEDDg/viewform?usp=header"
          className="px-6 py-3 bg-[#8B0000] text-white rounded-lg font-medium hover:bg-[#650000] transition-colors inline-flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-text"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
          Submit Request or Contribution
        </a>
      </div>

      <h2>How to Contribute</h2>

      <ol>
        <li>
          <strong>Content Contributions</strong>: Submit new course materials,
          exercises, or improvements to existing content.
        </li>
        <li>
          <strong>Tutor</strong>: Teach others the material you learn.
        </li>
        <li>
          <strong>Code Contributions</strong>: Help improve the platform by
          contributing to our codebase.
        </li>
      </ol>

      <h2>Code Contributions:</h2>

      <p>
        Please visit our{" "}
        <a
          href="https://github.com/CCHS-Computer-Science-Honors-Society/ocw"
          className="text-fd-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and check out the contribution guidelines.
      </p>
      <div className="bg-[#1a365d] p-4 rounded-lg my-6">
        <h3 className="text-lg font-medium mb-2 text-white">
          Join Our Community
        </h3>
        <p className="mb-0 text-gray-200">
          We're always looking for passionate students and teachers to help grow
          our platform. Your contribution makes a difference in the academic
          success of Cherry Creek High School students.
        </p>
        <br></br>
      </div>
    </main>
  );
}
