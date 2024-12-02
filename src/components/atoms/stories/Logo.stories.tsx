import { Meta, StoryObj } from "@storybook/react";

import Logo from "../Logo";

const meta: Meta = {
  title: "Components/Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "The id of the logo",
    },
    link: {
      control: {
        type: "text",
      },
      description: "The link of the logo",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "The size of the logo",
    },
  },
};

export default meta;

type LogoStory = StoryObj<typeof Logo>;

export const Default: LogoStory = {
  args: {
    id: "logo",
    link: "/",
    size: "medium",
  },
};

export const Small: LogoStory = {
  args: {
    id: "logo",
    link: "/",
    size: "small",
  },
};

export const Medium: LogoStory = {
  args: {
    id: "logo",
    link: "/",
    size: "medium",
  },
};

export const Large: LogoStory = {
  args: {
    id: "logo",
    link: "/",
    size: "large",
  },
};
