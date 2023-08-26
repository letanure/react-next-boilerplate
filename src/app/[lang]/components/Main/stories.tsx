import type { Meta, StoryObj } from '@storybook/react'
import Main from './'

const meta: Meta<typeof Main> = {
  component: Main,
  args: {
    title: 'Boilerplate',
    description: 'TypeScript, ReactJS, NextJS e Styled Components',
  },
}

export default meta

type Story = StoryObj<typeof Main>

export const Default: Story = {}
