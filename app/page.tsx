import { Suspense } from "react";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Portfolio />
    </Suspense>
  );
}
