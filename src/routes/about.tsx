import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Lucid Aviation" },
      {
        name: "description",
        content:
          "Learn about Lucid Aviation, its operating model, leadership, partners, and long-term corporate direction.",
      },
    ],
  }),
  component: CompanyPage,
});
