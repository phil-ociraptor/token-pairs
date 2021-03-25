import { mapAddressesToTokens, mapTokensToAddresses } from "./mappers";

/**
 * Takes in a pairStr that looks like 'ETH/DAI,ETH/MATIC'
 * @param {string} pairStr
 * @param {object} tokenList
 */
const processInputPair = (pairStr, tokenList) => {
  const pairs = pairStr.split(",");
  return pairs.map((p) =>
    mapTokensToAddresses(p.trim().split(/\/|-/), tokenList)
  );
};

const processInputAddresses = (inputAddresses, tokenList) => {
  let pairs;
  try {
    pairs = JSON.parse(inputAddresses);
  } catch (e) {
    console.log(e);
    console.log(inputAddresses);
    pairs = [];
  }
  return pairs.map((p) => mapAddressesToTokens(p, tokenList));
};

export { processInputPair, processInputAddresses };
