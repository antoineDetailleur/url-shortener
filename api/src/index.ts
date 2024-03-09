import Koa from "koa";
import bodyParser from "koa-bodyparser"
import cors from '@koa/cors'
import { nanoid } from "nanoid";

const app = new Koa();

app.use(cors());

app.use(bodyParser());

app.use((ctx) => {
  var body = ctx.query;
  var url = body.url as string;
  const urlSplitted = url?.split("/");
  const firstPart = urlSplitted[0];
  var newUrl = "";
  if (firstPart === "https:" || firstPart === "http:") {
    newUrl = firstPart + "//" + urlSplitted[2] + "/" + nanoid()
  } else {
    newUrl = firstPart + "/" + nanoid()
  }
  ctx.body = newUrl;
});

app.listen(process.env.PORT, () => {
  console.log(`Server ready http://localhost:${process.env.PORT}`);
});
