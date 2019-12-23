/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../create-business-name.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<create-business-name></create-business-name>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
