import Navbar from './Navbar'
import type { Meta, StoryObj } from '@storybook/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

const meta = {
  title: 'Layout/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

function withRouter(element: React.ReactNode) {
  const router = createMemoryRouter([
    { path: '/', element },
  ])
  return <RouterProvider router={router} />
}

export const Default: Story = {
  render: () => withRouter(<Navbar />),
}
