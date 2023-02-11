import sgMail, { MailDataRequired } from "@sendgrid/mail";

export const configMail = () => {
  sgMail.setApiKey(process.env.SENDGRID_API!);
};

export const sendMail = (props: Omit<MailDataRequired, 'from'>) => {
  // @ts-ignore
  const msg: MailDataRequired = {
    from: process.env.ADMIN_EMAIL!,
    ...props,
  };
  
  return sgMail.send(msg);
};
