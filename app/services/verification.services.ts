import twilio from 'twilio';
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

export const createServiceTwilio = async ({
  numberPhone,
}: {
  request: Request;
  numberPhone: string;
}) => {
  try {
    if (!numberPhone)
      return {
        message: 'Invalid phone number',
        sid: '',
        error: '',
        status: 400,
      };

    const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

    const service = await twilioClient.verify.v2.services.create({
      friendlyName: 'My Verify Service',
    });
    if (!service) {
      return {
        message: 'Error creating service',
        sid: '',
        error: '',
        status: 500,
      };
    }

    return {
      message: 'Message sent',
      sid: service.sid,
      error: '',
      status: 200,
    };
  } catch (error) {
    return {
      message: 'Error sending message',
      sid: '',
      error: 'Error',
      status: 500,
    };
  }
};
export const sendCodevalidate = async ({
  sid,
  numberPhone,
}: {
  sid: string;
  numberPhone: string;
}) => {
  try {
    if (!numberPhone || !sid)
      return {
        message: 'Error numero incorrecto o sid incorrecto',
        sid: '',
        error: '',
        status: 400,
      };

    const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    const verification = await twilioClient.verify.v2
      .services(sid)
      .verifications.create({
        to: numberPhone,
        channel: 'sms',
      });

    if (!verification) {
      return {
        message: 'Invalid phone number',
        sid: '',
        error: '',
        status: 401,
      };
    }

    return {
      message: 'Mensaje enviado correctamente',
      sid: verification.sid,
      error: '',
      status: 200,
    };
  } catch (error) {
    return {
      message: 'Error al enviar mensaje',
      sid: '',
      error: '',
      status: 500,
    };
  }
};

export const validate = async ({
  numberPhone,
  codeValidator,
  sid,
}: {
  numberPhone: string;
  codeValidator: string;
  sid: string;
}) => {
  try {
    const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

    const verificationCheck = await twilioClient.verify.v2
      .services(sid)
      .verificationChecks.create({
        to: numberPhone,
        code: codeValidator,
      });

    if (verificationCheck.status !== 'approved') {
      return {
        message: 'Invalid phone number',
        sid: '',
        error: '',
        status: 401,
      };
    }
    return {
      message: 'Codigo correcto',
      sid: '',
      error: '',
      status: 200,
    };
  } catch (error) {
    return {
      message: 'Invalid phone number',
      sid: '',
      error: '',
      status: 500,
    };
  }
};
