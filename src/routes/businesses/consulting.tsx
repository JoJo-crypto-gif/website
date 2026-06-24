import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-pages";

export const Route = createFileRoute("/businesses/consulting")({
  head: () => ({
    meta: [
      { title: "Consulting | Lucid Aviation" },
      {
        name: "description",
        content: "Lucid Aviation Consulting advises aviation and industrial clients.",
      },
    ],
  }),
  component: () => <ServiceDetailPage slug="consulting" />,
});
