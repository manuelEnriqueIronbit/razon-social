/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../card-business-name.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<card-business-name></card-business-name>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
