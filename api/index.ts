import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Pool } from "pg";

const createPool = async () => {
  const pool = new Pool({ ssl: true });
  return pool;
};

export default async function (req: VercelRequest, res: VercelResponse) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  // @ts-ignore
  let count: Number = parseInt(req.query.count) || 1;
  if (count > 20) count = 1;
  const pool = await createPool();
  pool.query(
    `select name,link,category,cover from zhutian.web_content order by random() limit ${count}`,
    (err, result) => {
      if (err) throw err.stack;
      res.json(result.rows);
    }
  );
  pool.end();
}
