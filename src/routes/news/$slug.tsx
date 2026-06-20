import { createFileRoute } from "@tanstack/react-router";
import { NewsArticlePage } from "@/components/news-pages";

export const Route = createFileRoute("/news/$slug")({
  component: NewsDetailRoute,
});

function NewsDetailRoute() {
  const { slug } = Route.useParams();

  return <NewsArticlePage slug={slug} />;
}
