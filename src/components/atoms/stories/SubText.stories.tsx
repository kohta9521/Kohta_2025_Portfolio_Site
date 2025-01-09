import { Meta, StoryObj } from "@storybook/react";

// components
import SubText from "../SubText";

const meta: Meta = {
  title: "Components/Atoms/SubText",
  component: SubText,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "key設定用のid",
    },
    text: {
      control: {
        type: "text",
      },
      description: "テキスト",
    },
    size: {
      control: {
        type: "select",
        options: ["Default", "Small", "Large"],
      },
      description: "テキストのサイズ",
    },
    color: {
      control: {
        type: "select",
        options: ["Default", "Primary", "Secondary", "Sub", "Border", "Box"],
      },
      description: "テキストの色",
    },
    weight: {
      control: {
        type: "select",
        options: ["Default", "Bold", "Light"],
      },
      description: "テキストの太さ",
    },
    type: {
      control: {
        type: "select",
        options: ["Default", "Primary", "Secondary", "Sub", "Border", "Box"],
      },
      description: "テキストのタイプ",
    },
    marginBottom: {
      control: {
        type: "select",
        options: ["Default", "Small", "Large", "Zero"],
      },
      description: "テキストのマージン",
    },
  },
};

export default meta;

type SubTextStory = StoryObj<typeof SubText>;

export const Default: SubTextStory = {
  args: {
    id: "sub-text",
    text: "SubText",
    size: "Default",
    color: "Default",
    weight: "Default",
    type: "Default",
    marginBottom: "Default",
  },
};
