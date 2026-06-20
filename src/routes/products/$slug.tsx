import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/products/$slug")({
  component: ProductRoute,
});

function ProductRoute() {
  const { slug } = Route.useParams();

  return <ProductDetailPage slug={slug} />;
}
