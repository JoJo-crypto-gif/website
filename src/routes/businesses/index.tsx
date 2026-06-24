import { createFileRoute } from "@tanstack/react-router";
import { BusinessesOverviewPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/businesses/")({
  head: () => ({
    meta: [
      { title: "Businesses | Lucid Aviation" },
      {
        name: "description",
        content:
          "Explore Lucid Aviation businesses across aviation, drones, consulting, research, and mining.",
      },
    ],
  }),
  component: BusinessesOverviewPage,
});
