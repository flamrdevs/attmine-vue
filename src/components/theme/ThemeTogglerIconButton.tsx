import { defineComponent } from "vue";

import { MoonIcon, SunIcon } from "lucide-vue-next";

import { IconButton, type IconButtonVariants } from "~/components/ui";

import { toggleTheme, useTheme } from "~/store/theme.ts";

type ThemeTogglerIconButtonProps = IconButtonVariants;

export const ThemeTogglerIconButton = defineComponent<ThemeTogglerIconButtonProps>(
  (props, { attrs }) => {
    const theme = useTheme();

    return () => (
      <IconButton {...props} {...attrs} onClick={toggleTheme}>
        {theme.value === "dark" ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    );
  },
  {
    props: ["color", "size"],
    inheritAttrs: false,
  }
);
