import { Injectable } from '@nestjs/common';

/* eslint-disable @typescript-eslint/no-var-requires */
const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_KEY;

@Injectable()
export class SendInBlueService {
  async sendEmail(name, emailTo) {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const templateId = 1; // Number | Id of the template

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.sender = {
      email: process.env.SENDER_EMAIL,
    };

    sendSmtpEmail.templateId = templateId;

    sendSmtpEmail.to = [
      {
        name: name,
        email: emailTo,
      },
    ];

    try {
      await apiInstance.sendTransacEmail(sendSmtpEmail);
    } catch (err) {
      console.log(err);
    }
  }
}
