import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { client } from "./client";

export const nftDropAddress = "0x10401b6505768A1CaAE3B0F37C0B27Cb5d8dfC50";

export const nftDropContract = getContract({
  client: client,
  chain: sepolia,
  address: nftDropAddress,
});
