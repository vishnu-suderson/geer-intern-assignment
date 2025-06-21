import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'products.json');

export async function DELETE(_, { params }) {
  const { id } = params;
  const data = JSON.parse(readFileSync(filePath));
  const filtered = data.filter((p) => p.id !== id);
  writeFileSync(filePath, JSON.stringify(filtered));
  return Response.json({ message: 'Deleted' }, { status: 200 });
}
