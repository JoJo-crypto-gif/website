import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company | Lucid Aviation" },
      {
        name: "description",
        content: "Learn about Lucid Aviation, an aviation-led corporate group.",
      },
    ],
  }),
  component: CompanyPage,
});
