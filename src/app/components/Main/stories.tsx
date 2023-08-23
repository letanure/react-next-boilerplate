import type { Meta, StoryObj } from '@storybook/react'
import Main from './'

const meta: Meta<typeof Main> = {
  component: Main,
}

export default meta
type Story = StoryObj<typeof Main>

export const Primary: Story = {
  args: {
    title: 'Boilerplate',
    description: 'TypeScript, ReactJS, NextJS e Styled Components',
  },
}
