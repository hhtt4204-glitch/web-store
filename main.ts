import { Application, send } from "https://deno.land/x/oak/mod.ts";
const app = new Application();

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/src`,
    index: "index.html",
  });
});

console.log("Server running on http://localhost:3000/");
await app.listen({ port: 3000 });