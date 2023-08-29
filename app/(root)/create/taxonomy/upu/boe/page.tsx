import Create from "@/components/forms/taxonomy/upu/boe/Create";

async function Page() {
  return (
    <>
      <h1 className="head-text text-left">Create Tokenized Bill of Exchange</h1>
      <section className="mt-9 flex flex-col gap-10 text-gray-300">
        <Create />
      </section>
    </>
  );
}

export default Page;
