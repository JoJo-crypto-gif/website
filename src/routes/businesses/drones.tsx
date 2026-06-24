import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-pages";

export const Route = createFileRoute("/businesses/drones")({
  head: () => ({
    meta: [
      { title: "Drones | Lucid Aviation" },
      {
        name: "description",
        content: "Lucid Aviation drones and autonomous systems for industrial aerial intelligence.",
      },
    ],
  }),
  component: () => <ServiceDetailPage slug="drones" />,
});
