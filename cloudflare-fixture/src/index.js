const MARKER = "cloudflare-observe-only-e2e-20260906-01";

export default {
  async fetch() {
    return new Response(MARKER, {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    });
  }
};
