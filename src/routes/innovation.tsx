import { createFileRoute } from "@tanstack/react-router";
import { InnovationPage } from "@/components/corporate-feature-pages";

export const Route = createFileRoute("/innovation")({
  head: () => ({
    meta: [
      { title: "Innovation | Stratos Group" },
      {
        name: "description",
        content: "Stratos innovation across aviation, autonomy, research, and operations.",
      },
    ],
  }),
  component: InnovationPage,
});
