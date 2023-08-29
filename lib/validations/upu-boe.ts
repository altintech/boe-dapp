import { z } from "zod";

const CURRENCIES = ["USD", "PAB", "NGN", "BGN"] as const;

export const formSchema = z.object({
  title: z.string().nonempty(),
  effective_date: z.coerce.date(),
});
