'use server'

export async function checkCoverage(prevState: any, formData: FormData) {
  // Mock delay to simulate server request
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const address = formData.get('address');
  
  // Logic
  return { 
    message: address ? `Coverage confirmed for ${address}!` : 'Please enter an address.',
    success: true,
    data: { plan: 'Fiber 500' }
  };
}
