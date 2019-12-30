/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../ironbit-business-name.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<ironbit-business-name></ironbit-business-name>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
