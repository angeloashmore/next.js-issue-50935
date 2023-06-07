import { RouteRefresher } from "../RouteRefresher";
import { Debug } from "../Debug";

export default async function Page() {
  return (
    <main>
      <h1>With generateStaticParams</h1>
      <RouteRefresher />
      <Debug />
    </main>
  );
}

export function generateStaticParams() {
  return [{ id: "foo" }];
}
