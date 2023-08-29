import { Key } from "react";
import { redirect } from "next/navigation";
import CreateItem from "@/components/forms/taxonomy/upu/boe/Create";
import Link from "next/link";
import Image from "next/image";

import Taxonomy from "@/components/taxonomy/Taxonomy";

async function Page() {
  return (
    <>
      <h1 className="head-text text-left">Create</h1>
      <section className="mt-9 flex flex-col gap-10 text-gray-300">
        <Link
          href="/taxonomy.pdf"
          target="_blank"
          className="flex items-center gap-4"
        >
          <Image src="/taxonomy.png" alt="logo" width={200} height={200} />
          <div>
            <p className="text-heading3-bold text-light-1 max-xs:hidden">
              Click on the links below to tokenize an instrument
            </p>
            <p>
              Tokenization uses the Trade Finaince Taxonomy from International
              Trade and Forfaiting Association. Each of the instruments shown
              below would be enabled over time with Smart Contracts deployed on
              the Digital Assets platform
            </p>
          </div>
        </Link>
        <Taxonomy />
      </section>
    </>
  );
}

export default Page;
