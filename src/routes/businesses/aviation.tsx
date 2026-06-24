import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-pages";

export const Route = createFileRoute("/businesses/aviation")({
  head: () => ({
    meta: [
      { title: "Aviation | Lucid Aviation" },
      {
        name: "description",
        content: "Lucid Aviation Aviation develops aircraft platforms and lifecycle programs.",
      },
    ],
  }),
  component: () => <ServiceDetailPage slug="aviation" />,
});
