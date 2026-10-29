import { describe, it, expect } from "vitest";
import { extractSubdomain } from "./proxy";

// Which hosts carry a tenant. The ONDC registry knows this platform as
// openidea.co.in (reached through the Ecosyz project's forward to the
// *.vercel.app URL), and ogbharat.openidea.co.in is its own home: neither may
// be rewritten into a tenant folder.
describe("extractSubdomain", () => {
  it("reads a tenant from its subdomain", () => {
    expect(extractSubdomain("bhojpatra.openidea.co.in")).toBe("bhojpatra");
  });

  it("treats ogbharat as the platform, not a tenant", () => {
    expect(extractSubdomain("ogbharat.openidea.co.in")).toBeNull();
  });

  it("leaves the apex and the forwarded deployment URL alone", () => {
    expect(extractSubdomain("openidea.co.in")).toBeNull();
    expect(extractSubdomain("webtemp-bjcd.vercel.app")).toBeNull();
    expect(extractSubdomain("ogbharat.vercel.app")).toBeNull();
  });
});
