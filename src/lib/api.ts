export const sendContactData = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const response = await fetch(
      "https://fer-api.coderslab.pl/v1/portfolio/contact",
      {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.error("There has been a problem:", error);
    throw error;
  }
};
