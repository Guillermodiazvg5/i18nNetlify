import { json, ActionFunctionArgs } from '@remix-run/node';
import { getGooglePredictions } from '@mitimiti/lib/google-suggestions.server';

export const action = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();
  const searchText = data.get('searchText') as string;
  const { predictions } = await getGooglePredictions(searchText);
  return json({
    result: {
      success: true,
      message: `${predictions?.length || 0} places found`,
    },
    posted: searchText,
    predictions,
  });
};
