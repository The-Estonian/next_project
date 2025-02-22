export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Hello, this is your API endpoint!' }),
    { status: 200 }
  );
}
