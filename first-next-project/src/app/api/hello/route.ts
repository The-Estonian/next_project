

export async function GET() {
  return new Response(
    JSON.stringify({ message: "Welcome! Great to have you here!" }),
    { status: 200 }
  );
}
