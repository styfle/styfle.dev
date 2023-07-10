export const memory = 3008

export function GET(req: Request) {
  return new Response(`Hello ${req.url}`, { status: 200 })
}