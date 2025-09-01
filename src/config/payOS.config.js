const PayOS = require("@payos/node");
import dotenv from "dotenv";
dotenv.config();
const payos = new PayOS(
  process.env.PAYOS_CLIENTID,
  process.env.PAYOS_APIKEY,
  process.env.PAYOS_CHECKSUM_KEY
);
export default payos;
// const payos = new PayOS(
//   "75f202c4-d636-4931-a17b-660bc312980d",
//   "db3f2a47-cf50-48c9-8faf-a4dbb9c5033e",
//   "59e7cd76e0ac690fcf85d63e48ddc2a71042adbb379c04bd45bdd2be62df8315"
// );
