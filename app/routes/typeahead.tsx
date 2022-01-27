import { json, useActionData, useLoaderData } from "remix";

// if handling POST
// export const action = async ({ request }: { request: Request }) => {
//   const body = await request.formData();
//   const typeahead = body.get("typeahead");
//   return json({ typeahead });
// };

export const loader = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const typeahead = url.searchParams.get("typeahead");

  const suggestions = [
    { id: "abc", name: "Thing One" },
    { id: "xyz", name: "Thing Two" },
  ];

  return json({ typeahead, suggestions });
};

export default function Typeahead() {
  const data = useLoaderData();

  return (
    <div>
      {data.typeahead
        ? data.suggestions.map((item) => (
            <>
              <div>{item.id}</div>
              <div>{item.name}</div>
            </>
          ))
        : "waiting…"}
    </div>
  );
}
