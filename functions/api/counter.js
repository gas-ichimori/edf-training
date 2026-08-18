const MILESTONE = 10000;

export async function onRequestPost(context) {
  const { env } = context;
  const key = 'visitCount';

  const current = parseInt(await env.COUNTER_KV.get(key)) || 0;
  const count = current + 1;
  await env.COUNTER_KV.put(key, String(count));

  return Response.json({ count, milestone: MILESTONE });
}
