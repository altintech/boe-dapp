import { redirect } from "next/navigation";

import { Key } from "react";

async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {

  return (
    <>
      <h1 className='head-text text-left'>Home</h1>

      <section className='mt-9 flex flex-col gap-10 text-gray-300'>
        <div>
          <p>This is the Bills Of Exchange POC UI</p>
        </div>
      </section>

    </>
  );
}

export default Home;
