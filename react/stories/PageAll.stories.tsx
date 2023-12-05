import { Meta } from "@storybook/react";
import { PageAll } from './PageAll';

const meta = {
  title: 'Example/PageAll',
  render: PageAll,
} satisfies Meta;

export default meta;

export const Test = {
  args: {
    label: 'TUYS'
  }
}