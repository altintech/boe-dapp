import { redirect } from "next/navigation";

import { Key } from "react";

async function Activity({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {

  return (
    <>
      <h1 className='head-text text-left'>Activity</h1>

      <section className='mt-9 flex flex-col gap-10 text-gray-300'>
        <div>
          <p>See the latest transactinos activity with Bills Of Exchange taht have been Sold, Bought, or Endorsed by your organization</p>
        </div>
      </section>

    </>
  );
}

export default Activity;
