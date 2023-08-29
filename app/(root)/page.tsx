import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Key } from "react";

async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10 text-gray-300">
        <div>
          <p>This is the Trade Finance Tokenization DApp</p>
        </div>
        <Link
          href="/taxonomy.pdf"
          target="_blank"
          className="flex items-center gap-4"
        >
          <Image src="/taxonomy.png" alt="logo" width={200} height={200} />
          <div>
            <p className="text-heading3-bold text-light-1 max-xs:hidden">
              Click on the image to see the Finance Taxonomy from International
              Trade and Forfaiting Association
            </p>
            <p>
              Tokenization on this platform uses this taxonomy. Each of the
              instruments shown would be enabled over time with Smart Contracts
              deployed on the Digital Assets platform
            </p>
          </div>
        </Link>
      </section>
    </>
  );
}

export default Home;
