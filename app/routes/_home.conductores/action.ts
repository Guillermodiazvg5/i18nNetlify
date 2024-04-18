import { ActionFunctionArgs } from '@remix-run/node';
import { publishTripStepOne, publishTripStepTwo } from './helpers';

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData: FormData = await request.formData();
  const intent = formData.get('intent');

  let actionAnswer = null;

  switch (intent) {
    case 'publish-trip-step-one':
      actionAnswer = await publishTripStepOne(request);
      break;
    case 'publish-trip-step-two':
      actionAnswer = await publishTripStepTwo(request, formData);
      break;
    default:
      break;
  }

  return actionAnswer;
};
