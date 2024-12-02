import { Meta, StoryObj } from "@storybook/react";

import Header from "../Header";

const meta: Meta = {
  title: "Components/Organism/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "The id of the header",
    },
    children: {
      control: {
        type: "text",
      },
      description: "The children of the header",
    },
  },
};

export default meta;

type HeaderStory = StoryObj<typeof Header>;

export const Default: HeaderStory = {
  args: {
    id: "header",
    children: (
      <>
        <p>about</p>
      </>
    ),
  },
};
