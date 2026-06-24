import { createFileRoute } from "@tanstack/react-router";
import { InnovationPage } from "@/components/corporate-feature-pages";

export const Route = createFileRoute("/innovation")({
  head: () => ({
    meta: [
      { title: "Innovation | Lucid Aviation" },
      {
        name: "description",
        content: "Lucid Aviation innovation across aviation, autonomy, research, and operations.",
      },
    ],
  }),
  component: InnovationPage,
});
