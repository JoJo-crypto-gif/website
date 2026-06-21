import { createFileRoute } from "@tanstack/react-router";
import { ProductsOverviewPage } from "@/components/corporate-pages";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products | Stratos Group" },
      {
        name: "description",
        content:
          "Explore Stratos products across aviation, drones, consulting, research, mining, and connected operations.",
      },
    ],
  }),
  component: ProductsOverviewPage,
});
