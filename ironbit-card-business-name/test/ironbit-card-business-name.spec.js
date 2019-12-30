/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../ironbit-card-business-name.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<ironbit-card-business-name></ironbit-card-business-name>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
