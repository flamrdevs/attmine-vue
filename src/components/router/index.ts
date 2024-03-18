import { composed as mklassed } from "~/components/ui/utils.ts";

import { Button, IconButton } from "~/components/ui";

import { CustomLink } from "./lib.ts";

export const CustomLinkButton = mklassed(CustomLink, Button.fx);
export const CustomLinkIconButton = mklassed(CustomLink, IconButton.fx);
