import { redirect } from "next/navigation";

import { Key } from "react";

async function Bought({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {

  return (
    <>
      <h1 className='head-text text-left'>Bought</h1>

      <section className='mt-9 flex flex-col gap-10 text-gray-300'>
        <div>
          <p>See all Bills of Exchange that your organization has bought</p>
        </div>
      </section>

    </>
  );
}

export default Bought;
