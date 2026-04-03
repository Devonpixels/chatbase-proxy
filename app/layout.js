export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          function registerChatbaseForm() {
            if (window.chatbase && window.chatbase.registerFormSchema) {
              window.chatbase.registerFormSchema({
                devon_pixels_lead_form: async (args = {}, user = {}) => {
                  return {
                    fields: [
                      { name: "first_name", label: "First Name", type: "text", defaultValue: args.first_name || "", placeholder: "Enter your first name", validation: { required: { value: true, message: "First name is required" } } },
                      { name: "last_name", label: "Last Name", type: "text", defaultValue: args.last_name || "", placeholder: "Enter your last name", validation: { required: { value: true, message: "Last name is required" } } },
                      { name: "company_name", label: "Company Name", type: "text", defaultValue: args.company_name || "", placeholder: "Enter your company name", validation: { required: { value: true, message: "Company name is required" } } },
                      { name: "email", label: "Email Address", type: "text", defaultValue: args.email || "", placeholder: "name@company.com", validation: { required: { value: true, message: "Email is required" }, pattern: { value: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", message: "Enter a valid email" } } },
                      { name: "service_interest", label: "Service Interest", type: "text", defaultValue: args.service_interest || "", placeholder: "What are you interested in?", validation: { required: { value: true, message: "This field is required" } } },
                      { name: "main_problem", label: "Main Problem", type: "text", defaultValue: args.main_problem || "", placeholder: "What is the main issue?", validation: { required: { value: true, message: "This field is required" } } },
                      { name: "website", label: "Website", type: "text", defaultValue: args.website || "", placeholder: "example.co.uk" },
                      { name: "phone", label: "Phone Number", type: "text", defaultValue: args.phone || "", placeholder: "Enter your phone number" },
                      { name: "notes", label: "Additional Notes", type: "text", defaultValue: args.notes || "", placeholder: "Anything else we should know?" }
                    ],
                    submitButtonText: "Send details",
                    showLabels: true,
                    successMessage: "Thanks. Your details have been sent.",
                    errorMessage: "Something went wrong. Please try again."
                  };
                }
              });
            } else {
              setTimeout(registerChatbaseForm, 500);
            }
          }
          registerChatbaseForm();
        `}} />
      </body>
    </html>
  );
}
