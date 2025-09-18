// redisClient.ts
import { createClient } from "redis";

const redis = createClient({
  url: process.env.REDIS_URL, // e.g. from Upstash
});

redis.on("error", (err) => console.error("❌ Redis Error:", err));
redis.on("connect", () => console.log("✅ Redis connected"));

await redis.connect();

export default redis;
