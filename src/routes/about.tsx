import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Stratos Group" },
      {
        name: "description",
        content:
          "Learn about Stratos Group, its operating model, leadership, partners, and long-term corporate direction.",
      },
    ],
  }),
  component: CompanyPage,
});
