import { createFileRoute } from "@tanstack/react-router";
import { BusinessesOverviewPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/businesses/")({
  head: () => ({
    meta: [
      { title: "Businesses | Stratos Group" },
      {
        name: "description",
        content:
          "Explore Stratos businesses across aviation, drones, consulting, research, and mining.",
      },
    ],
  }),
  component: BusinessesOverviewPage,
});
