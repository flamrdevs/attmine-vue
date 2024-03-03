import setupCore from "@klass/core/setup";
import type { Config } from "@klass/core/setup";
import setupCoreGroup from "@klass/core/group/setup";
import setupVue from "@klass/vue/setup";

import { twMerge } from "tailwind-merge";

import clsx from "clsx";
import type { ClassValue } from "clsx";

const config: Config = {
  end: twMerge,
};

export const cn = (...classValues: ClassValue[]) => twMerge(clsx(classValues));

export const [klass, reklass] = setupCore(config);
export const [klassed, reklassed] = setupVue(config);
export const group = setupCoreGroup(config);

export const CLASSES_PROPS = ["class", "classNames"] as const;
