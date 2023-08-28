import { redirect } from "next/navigation";

import { Key } from "react";

async function Sold({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {

  return (
    <>
      <h1 className='head-text text-left'>Sold</h1>

      <section className='mt-9 flex flex-col gap-10 text-gray-300'>
        <div>
          <p>See all of the Bills of Exchange that your organization has sold</p>
        </div>
      </section>

    </>
  );
}

export default Sold;
