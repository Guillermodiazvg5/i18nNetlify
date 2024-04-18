import { signInOAuthProvider } from '@mitimiti/services/login.services';
import { ActionFunctionArgs, json, redirect } from '@remix-run/node';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get('intent');

  switch (intent) {
    case 'auth-google': {
      const { data, error, headers } = await signInOAuthProvider(
        request,
        'google'
      );
      if (error || !data.url) {
        return json({ message: 'Error' }, { headers });
      }
      return redirect(data.url, { headers });
    }
    case 'auth-facebook': {
      const { data, error, headers } = await signInOAuthProvider(
        request,
        'facebook'
      );
      if (error || !data.url) {
        return json({ message: 'Error' }, { headers });
      }
      return redirect(data.url, { headers });
    }
    default: {
      return new Error('Error al autenticar usuario. Intente nuevamente.');
    }
  }
}
