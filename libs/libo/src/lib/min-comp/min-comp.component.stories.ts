import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MinCompComponent } from './min-comp.component';

export default {
  title: 'MinCompComponent',
  component: MinCompComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MinCompComponent>;

const Template: Story<MinCompComponent> = (args: MinCompComponent) => ({
  component: MinCompComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}