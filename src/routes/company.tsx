import { createFileRoute } from "@tanstack/react-router";
import { CompanyPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company | Stratos Group" },
      {
        name: "description",
        content: "Learn about Stratos Group, an aviation-led corporate group.",
      },
    ],
  }),
  component: CompanyPage,
});
