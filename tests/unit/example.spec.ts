import HelloWorld from "../../src/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("test", () => {
  test("should ", () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg: "hello,coboy",
      },
    });
    expect(wrapper.text()).toMatch("hello,coboy");
  });
});
