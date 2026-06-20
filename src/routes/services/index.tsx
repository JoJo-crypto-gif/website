import { createFileRoute } from "@tanstack/react-router";
import { BusinessesOverviewPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Stratos Group" },
      {
        name: "description",
        content:
          "Explore Stratos services across aviation, drones, consulting, research, and responsible resource operations.",
      },
    ],
  }),
  component: BusinessesOverviewPage,
});
