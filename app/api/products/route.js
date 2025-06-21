import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'products.json');

export async function GET() {
  const data = readFileSync(filePath);
  return Response.json(JSON.parse(data));
}

export async function POST(request) {
  const body = await request.json();
  const data = JSON.parse(readFileSync(filePath));
  const newProduct = {
    id: Date.now().toString(),
    ...body,
  };
  data.push(newProduct);
  writeFileSync(filePath, JSON.stringify(data));
  return Response.json(newProduct, { status: 201 });
}
