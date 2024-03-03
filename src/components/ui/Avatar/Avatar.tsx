import { computed, defineComponent } from "vue";

import { Avatar as ArkAvatar } from "@ark-ui/vue";
import type { AvatarImageProps } from "@ark-ui/vue";

import type { VariantsOfGroup } from "@klass/core/group";

import type { ClassNamesProps } from "./../types.ts";

import { CLASSES_PROPS } from "./../utils.ts";

import styles from "./Avatar.styles.ts";

export type AvatarProps = AvatarImageProps & ClassNamesProps<keyof typeof styles> & VariantsOfGroup<typeof styles>;

export const Avatar = defineComponent<AvatarProps>(
  (props, { attrs, slots }) => {
    const cx = computed(() => {
      const variants = { size: props.size };
      return {
        root: styles.root(variants, props.classNames?.root),
        fallback: styles.fallback(variants, props.classNames?.fallback),
        image: styles.image(variants, props.class ?? props.classNames?.image),
      };
    });

    return () => (
      <ArkAvatar.Root class={cx.value.root}>
        <ArkAvatar.Fallback class={cx.value.fallback}>{slots.default?.()}</ArkAvatar.Fallback>
        <ArkAvatar.Image class={cx.value.image} {...attrs} />
      </ArkAvatar.Root>
    );
  },
  {
    props: [...CLASSES_PROPS, ...styles.root.k],
    inheritAttrs: false,
  }
);
