import { redirect } from "next/navigation";

import { Key } from "react";

async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {

  return (
    <>
      <h1 className='head-text text-left'>Search</h1>

      <section className='mt-9 flex flex-col gap-10 text-gray-300'>
        <div>
          <p>Search any Bills Of Exchange that your organization has Sold, Bought, or Endorsed to a Payee</p>
        </div>
      </section>

    </>
  );
}

export default Search;
