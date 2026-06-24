import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-pages";

export const Route = createFileRoute("/businesses/research")({
  head: () => ({
    meta: [
      { title: "Research | Lucid Aviation" },
      {
        name: "description",
        content: "Lucid Aviation Research advances aviation, autonomy, and industrial systems.",
      },
    ],
  }),
  component: () => <ServiceDetailPage slug="research" />,
});
