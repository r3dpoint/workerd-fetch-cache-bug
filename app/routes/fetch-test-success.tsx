import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return json(data);
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
