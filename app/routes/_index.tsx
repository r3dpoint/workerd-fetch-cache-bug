import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "workerd fetch cache bug" },
    { name: "description", content: "workerd fetch cache bug" },
  ];
};

export default function Index() {
  return (
    <div>
      <div></div>
    </div>
  );
}
