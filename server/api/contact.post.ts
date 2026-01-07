// server/api/contact.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Log the received data
  console.log("Received contact form:", body);

  // Add your logic here (send email, save to database, etc.)

  return {
    success: true,
    message: "Contact form submitted successfully",
  };
});
