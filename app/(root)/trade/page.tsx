import { redirect } from "next/navigation";

import { Key } from "react";

async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <>
      <h1 className="head-text text-left">Trade</h1>

      <section className="mt-9 flex flex-col gap-10 text-gray-300">
        <div>
          <p>See all tokenized instruments available for trade</p>
        </div>
      </section>
    </>
  );
}

export default Page;
