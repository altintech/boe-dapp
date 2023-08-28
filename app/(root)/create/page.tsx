import { redirect } from "next/navigation";

import { Key } from "react";

async function Create({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {

  return (
    <>
      <h1 className='head-text text-left'>Create</h1>

      <section className='mt-9 flex flex-col gap-10 text-gray-300'>
        <div>
          <p>Create a new Bill Of Exchange to sell</p>
        </div>
      </section>

    </>
  );
}

export default Create;
