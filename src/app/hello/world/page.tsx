import { redirect } from "next/navigation";

export default async function Page() {
  return (
    <div>
      <pre>/hello/world</pre>

      <form
        action={async () => {
          "use server";
          redirect("./");
        }}
      >
        <button type="submit">Redirect to ./</button>
      </form>
    </div>
  );
}
