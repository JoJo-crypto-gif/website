import { createFileRoute } from "@tanstack/react-router";
import { SustainabilityPage } from "@/components/corporate-feature-pages";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability | Stratos Group" },
      {
        name: "description",
        content: "Stratos sustainability and responsible operations.",
      },
    ],
  }),
  component: SustainabilityPage,
});
