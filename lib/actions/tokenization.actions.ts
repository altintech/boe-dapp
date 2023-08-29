"use server";

import { revalidatePath } from "next/cache";

interface Params {
  title: string;
  currency: string;
  amount: string;
  daysToMaturity: string;
  effectiveDate: string;
}

export async function tokenizeBoe({
  title,
  currency,
  amount,
  daysToMaturity,
  effectiveDate,
}: Params) {
  try {
    //TODO Connect to the chain
  } catch (error: any) {
    throw new Error("Failed to tokenize: ${error.message}");
  }
}
