/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../business-name.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<business-name></business-name>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
