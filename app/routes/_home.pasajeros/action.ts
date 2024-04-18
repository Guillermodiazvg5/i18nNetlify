import { json, ActionFunctionArgs } from '@remix-run/node';
import { tripSchema } from '@mitimiti/lib/validator.server';

export const action = async ({ request }: ActionFunctionArgs) => {
  const { searchParams } = new URL(request.url);
  const cityFrom = searchParams.get('city-from') as string;
  const cityTo = searchParams.get('city-to') as string;
  const date = searchParams.get('date') as string;
  const seats = searchParams.get('seats') as string;

  const data = {
    cityFrom,
    cityTo,
    date,
    seats,
  };

  const validatedForm = tripSchema.safeParse(data);

  if (!validatedForm.success) {
    return json({
      result: { success: false, message: 'error' },
      data: null,
      errors: validatedForm?.error?.issues,
    });
  }

  // Supabase connection

  return json({
    result: { success: true, message: 'ok' },
    data,
    errors: null,
  });
};
