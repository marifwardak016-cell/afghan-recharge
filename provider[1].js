/*
 * Provider adapter boundary.
 *
 * Do not guess API routes or payloads. Fill this in only after the supplier gives
 * you current API documentation, a sandbox credential, and permission to resell.
 *
 * AFGTopup's public partner page describes a server-to-server API, EUR prepaid
 * partner balance, sandbox mode, and use of a unique external order ID. Exact
 * endpoints and payloads must come from the official docs provided to your account.
 */
async function sendTopup({ order, product }) {
  const provider = (process.env.TOPUP_PROVIDER || "mock").toLowerCase();
  const liveEnabled = process.env.TOPUP_LIVE_ENABLED === "true";

  if (provider === "mock" || !liveEnabled) {
    return {
      simulated: true,
      status: "simulated",
      reference: `SIM-${order.id}`,
      message: "No real top-up sent. Provider is in mock/demo mode."
    };
  }

  if (!process.env.TOPUP_API_KEY || !process.env.TOPUP_API_BASE_URL) {
    throw new Error("Top-up provider is marked live but API credentials/base URL are missing.");
  }

  // Intentionally fail closed until official endpoint/payload/signature rules are added.
  throw new Error(
    "Live provider adapter is not configured. Add the supplier's official documented API calls before enabling real top-ups."
  );
}

module.exports = { sendTopup };
