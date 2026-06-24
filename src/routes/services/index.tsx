import { createFileRoute } from "@tanstack/react-router";
import { BusinessesOverviewPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Lucid Aviation" },
      {
        name: "description",
        content:
          "Explore Lucid Aviation services across aviation, drones, consulting, research, and responsible resource operations.",
      },
    ],
  }),
  component: BusinessesOverviewPage,
});
