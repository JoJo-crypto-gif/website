import { createFileRoute } from "@tanstack/react-router";
import { CareerApplicationPage } from "@/components/career-pages";

export const Route = createFileRoute("/careers/$slug_/apply")({
  head: () => ({
    meta: [
      { title: "Apply | Lucid Aviation Careers" },
      {
        name: "description",
        content: "Submit your application for an Lucid Aviation career opportunity.",
      },
    ],
  }),
  component: CareerApplicationRoute,
});

function CareerApplicationRoute() {
  const { slug } = Route.useParams();
  return <CareerApplicationPage slug={slug} />;
}
