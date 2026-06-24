import { createFileRoute } from "@tanstack/react-router";
import { ProductsOverviewPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products | Lucid Aviation" },
      {
        name: "description",
        content:
          "Explore Lucid Aviation products across aviation, drones, consulting, research, mining, and connected operations.",
      },
    ],
  }),
  component: ProductsOverviewPage,
});
