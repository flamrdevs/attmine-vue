<script setup lang="tsx">
import { defineComponent } from "vue";

import { PlusIcon, RocketIcon } from "lucide-vue-next";

import { Badge, Button, IconButton } from "~/components/ui";

const Section = defineComponent<{ title: string }>(
  (props, { slots }) => {
    return () => (
      <div>
        <h2 class="font-medium text-lg lg:text-xl">{props.title}</h2>

        <div class="flex flex-col items-stretch gap-4 p-3">{slots.default?.()}</div>
      </div>
    );
  },
  { props: ["title"], inheritAttrs: false }
);

const SectionSub = defineComponent<{ title: string }>(
  (props, { slots }) => {
    return () => (
      <div>
        <h3 class="font-normal text-base lg:text-lg"> {props.title}</h3>

        <div class="flex flex-row items-center gap-4 p-3">{slots.default?.()}</div>
      </div>
    );
  },
  { props: ["title"], inheritAttrs: false }
);
</script>

<template>
  <main class="container mx-auto max-w-screen-lg">
    <header class="flex items-center gap-2 p-4 sm:p-5 md:p-6 lg:p-7 border-b border-b-neutral-6">
      <h1 id="components" class="font-bold text-xl lg:text-2xl select-none">Components</h1>
    </header>

    <main class="space-y-8 xl:space-y-12 p-4 sm:p-5 md:p-6 lg:p-7">
      <Section title="Badge">
        <SectionSub title="Color">
          <Badge color="neutral">neutral</Badge>
          <Badge color="primary">primary</Badge>
        </SectionSub>

        <SectionSub title="Size">
          <Badge size="sm">small</Badge>
          <Badge size="md">medium</Badge>
          <Badge size="lg">large</Badge>
        </SectionSub>

        <SectionSub title="Icon">
          <Badge>
            <PlusIcon class="size-3" />
            left
          </Badge>
          <Badge>
            right
            <PlusIcon class="size-3" />
          </Badge>
        </SectionSub>
      </Section>

      <Section title="Button">
        <SectionSub title="Color">
          <Button color="neutral">neutral</Button>
          <Button color="primary">primary</Button>
        </SectionSub>

        <SectionSub title="Size">
          <Button size="sm">small</Button>
          <Button size="md">medium</Button>
          <Button size="lg">large</Button>
        </SectionSub>

        <SectionSub title="Icon">
          <Button>
            <PlusIcon />
            left
          </Button>
          <Button>
            right
            <PlusIcon />
          </Button>
        </SectionSub>

        <SectionSub title="State">
          <Button disabled>disabled</Button>
        </SectionSub>
      </Section>

      <Section title="IconButton">
        <SectionSub title="Color">
          <IconButton color="neutral">
            <RocketIcon />
          </IconButton>
          <IconButton color="primary">
            <RocketIcon />
          </IconButton>
        </SectionSub>

        <SectionSub title="Size">
          <IconButton size="sm">
            <RocketIcon class="size-3" />
          </IconButton>
          <IconButton size="md">
            <RocketIcon class="size-4" />
          </IconButton>
          <IconButton size="lg">
            <RocketIcon class="size-5" />
          </IconButton>
        </SectionSub>

        <SectionSub title="State">
          <IconButton disabled>
            <RocketIcon />
          </IconButton>
        </SectionSub>
      </Section>
    </main>
  </main>
</template>
