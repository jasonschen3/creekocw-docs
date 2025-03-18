import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="https://ugakd4mkxv.ufs.sh/f/QRXW6mPDvNgcODJnurmfb52Q6NjpkM7THVhzLqitUSY9d4rf"
          alt="Creek OCW Logo"
          style={{
            height: "32px",
            width: "auto",
            marginRight: "10px",
            verticalAlign: "middle",
          }}
        />
        Creek OCW
      </>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Courses",
      url: "/courses",
      active: "nested-url",
    },
    {
      text: "Contribute",
      url: "/contribute",
      active: "nested-url",
    },
  ],
};
