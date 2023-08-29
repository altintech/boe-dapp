import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import router from "next/router";

async function Page() {
  return (
    <Link
      href="/taxonomy.pdf"
      target="_blank"
      className="flex items-center gap-4"
    >
      <Image src="/taxonomy.png" alt="logo" width={200} height={200} />
      <p className="text-heading3-bold text-light-1 max-xs:hidden">
        Click on the image to see the Taxonomy PDF
      </p>
    </Link>
  );
}

export default Page;
