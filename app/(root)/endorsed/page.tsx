import { redirect } from "next/navigation";

import { Key } from "react";

async function Endorsed({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {

  return (
    <>
      <h1 className='head-text text-left'>Endorsed</h1>

      <section className='mt-9 flex flex-col gap-10 text-gray-300'>
        <div>
          <p>See all Bills of Exchange taht your organization has endorsed over to a Payee</p>
        </div>
      </section>

    </>
  );
}

export default Endorsed;
