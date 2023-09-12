import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { fetch, Request, Response } from "@remix-run/web-fetch";
import { setupServer } from "msw/node";
import { rest } from "msw";
import "@testing-library/jest-dom/vitest";

if (!globalThis.fetch) {
  // Built-in lib.dom.d.ts expects `fetch(Request | string, ...)` but the web
  // fetch API allows a URL so @remix-run/web-fetch defines
  // `fetch(string | URL | Request, ...)`
  // @ts-expect-error
  globalThis.fetch = fetch;
  // Same as above, lib.dom.d.ts doesn't allow a URL to the Request constructor
  // @ts-expect-error
  globalThis.Request = Request;
  // web-std/fetch Response does not currently implement Response.error()
  // @ts-expect-error
  globalThis.Response = Response;
}

const places = {
  places: ["Test Place 1"],
};

export const restHandlers = [
  rest.get(`${import.meta.env.VITE_API_URL}/places`, (req, res, ctx) => {
    return res(ctx.json(places));
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
