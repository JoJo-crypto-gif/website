import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-pages";

export const Route = createFileRoute("/businesses/mining")({
  head: () => ({
    meta: [
      { title: "Mining | Lucid Aviation" },
      {
        name: "description",
        content:
          "Lucid Aviation Mining supports responsible resource operations and aerial survey.",
      },
    ],
  }),
  component: () => <ServiceDetailPage slug="mining" />,
});
