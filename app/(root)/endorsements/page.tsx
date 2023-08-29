import { redirect } from "next/navigation";

import { Key } from "react";

async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <>
      <h1 className="head-text text-left">Endorsements</h1>

      <section className="mt-9 flex flex-col gap-10 text-gray-300">
        <div>
          <p>See all tokenized instruments endorsed to a 3rd party</p>
        </div>
      </section>
    </>
  );
}

export default Page;
