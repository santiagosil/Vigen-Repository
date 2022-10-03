using MailKit.Security;
using MailKit.Net.Smtp;
using System.Net;
using System.Net.Mail;
using MimeKit.Text;
using MimeKit;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Email
{
    public class Send
    {
        public Send()
        {

        }
        private readonly vigendbContext _context;
        public string enviar(string correo, string numero)
        {
			try
			{
                
                // create email message
                var email = new MimeMessage();
                email.From.Add(MailboxAddress.Parse("vigenservice@outlook.com"));
                email.To.Add(MailboxAddress.Parse(correo));
                email.Subject = "Test Email Subject";
                email.Body = new TextPart(TextFormat.Plain) { Text = numero+"" };

                // send email
                SmtpClient smtp = new SmtpClient();
                smtp.Connect("smtp.office365.com", 587, SecureSocketOptions.StartTls);
                smtp.Authenticate("vigenservice@outlook.com", "vigen2022");
                smtp.Send(email);
                smtp.Disconnect(true);
                return "succesfull";
            }
			catch (Exception ex)
			{

				return ex.Message ;
			}
        }
    }
}
