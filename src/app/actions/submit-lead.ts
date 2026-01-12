"use server";

export async function submitLead(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const whatsapp = formData.get("whatsapp") as string;
  const address = formData.get("address") as string;
  const type = formData.get("type") as string; // 'covered' or 'uncovered'

  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Lead Received:", { name, email, whatsapp, address, type });

  // Basic validation (can be enhanced with Zod)
  if (!whatsapp || !name) {
    return {
      success: false,
      message: "Por favor completá los campos obligatorios.",
    };
  }

  // Return specific success messages based on type
  if (type === "covered") {
    return {
      success: true,
      message: "¡Excelente! Un asesor te contactará en breve para coordinar.",
    };
  } else {
    return {
      success: true,
      message: "Te avisaremos apenas lleguemos a tu zona.",
    };
  }
}
