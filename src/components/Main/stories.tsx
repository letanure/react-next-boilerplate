import type { Meta, StoryObj } from '@storybook/react'

import Main from './'

const meta: Meta<typeof Main> = {
  title: 'Components/Main',
  component: Main,
  args: {
    title: 'Boilerplate',
    description: 'TypeScript, ReactJS, NextJS e Styled Components',
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Default: StoryObj<typeof Main> = {}

export const Basic: StoryObj = {
  args: {
    title: 'title basic',
    description: 'description basic',
  },
}
