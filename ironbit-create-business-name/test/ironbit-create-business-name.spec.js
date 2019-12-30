/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../ironbit-create-business-name.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<ironbit-create-business-name></ironbit-create-business-name>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
