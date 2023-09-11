import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { fetch } from "cross-fetch";
import "@testing-library/jest-dom/vitest";

global.fetch = fetch;

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
