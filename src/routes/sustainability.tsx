import { createFileRoute } from "@tanstack/react-router";
import { SustainabilityPage } from "@/components/corporate-feature-pages";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability | Lucid Aviation" },
      {
        name: "description",
        content: "Lucid Aviation sustainability and responsible operations.",
      },
    ],
  }),
  component: SustainabilityPage,
});
