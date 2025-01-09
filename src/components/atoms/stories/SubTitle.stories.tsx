import { Meta, StoryObj } from "@storybook/react";

// components
import SubTitle from "../SubTitle";

const meta: Meta = {
  title: "Components/Atoms/SubTitle",
  component: SubTitle,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "key設定用のid",
    },
    size: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4"],
      },
      description: "タイトルのサイズ",
    },
    text: {
      control: {
        type: "text",
      },
      description: "タイトルのテキスト",
    },
  },
};

export default meta;

type SubTitleStory = StoryObj<typeof SubTitle>;

export const Default: SubTitleStory = {
  args: {
    id: "sub-title",
    size: "h1",
    text: "SubTitle",
  },
};

export const Small: SubTitleStory = {
  args: {
    id: "sub-title",
    size: "h2",
    text: "SubTitle",
  },
};
