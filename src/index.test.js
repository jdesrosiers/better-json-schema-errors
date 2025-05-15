import { describe, expect, test } from "vitest";
import { hello } from "./index.js";

describe("Better JSON Schema Errors", () => {
  test("greeting", () => {
    expect(hello).to.equal("world");
  });
});
