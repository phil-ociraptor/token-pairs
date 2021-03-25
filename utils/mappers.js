const mapAddressesToTokens = (addresses, tokenList) => {
  const addressMap = tokenList.reduce((acc, curr) => {
    acc[curr.address] = curr;
    return acc;
  }, {});
  return addresses.map((a) =>
    addressMap[a] ? addressMap[a].symbol : "unknown"
  );
};

const mapTokensToAddresses = (tokens, tokenList) => {
  const tokenMap = tokenList.reduce((acc, curr) => {
    acc[curr.symbol] = curr;
    return acc;
  }, {});
  return tokens.map((t) => {
    return tokenMap[t] ? tokenMap[t].address : "unknown";
  });
};

export { mapAddressesToTokens, mapTokensToAddresses };
