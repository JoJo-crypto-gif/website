import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "@/components/corporate-feature-pages";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers | Lucid Aviation" },
      {
        name: "description",
        content:
          "Explore careers across aviation, drones, consulting, research, and responsible resource operations at Lucid Aviation.",
      },
    ],
  }),
  component: CareersPage,
});
