import { defineComponent, h, reactive } from "vue";
import type { JSX } from "vue/jsx-runtime";

import { useLink } from "vue-router";
import type { RouterLinkProps } from "vue-router";

type CustomLinkProps = Pick<RouterLinkProps, "to" | "replace"> & Omit<JSX.IntrinsicElements["a"], "href" | "onClick">;

export const CustomLink = defineComponent<CustomLinkProps>(
  (props, { attrs, slots }) => {
    const link = reactive(useLink(props));

    return () =>
      h(
        "a",
        {
          ...attrs,
          href: link.href,
          onClick: link.navigate,
        },
        slots.default?.(link)
      );
  },
  {
    props: ["to", "replace"],
    inheritAttrs: false,
  }
);
