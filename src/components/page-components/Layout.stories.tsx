import Layout from '@/components/page-components/Layout'
import type { Decorator, Meta, StoryObj } from '@storybook/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

const withRouter: Decorator = (Story) => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Story />,
          },
        ],
      },
    ],
    {
      initialEntries: ['/'],
    }
  )

  return <RouterProvider router={router} />
}

const meta = {
  title: 'Layout/MainLayout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withRouter],
} satisfies Meta<typeof Layout>

export default meta

type Story = StoryObj<typeof meta>

export const ShortContent: Story = {
  render: () => (
    <section className="space-y-6">
      <h1 className="mt-8 text-2xl font-bold text-white">
        Short page
      </h1>

      <p>This page contains very little content.</p>
    </section>
  ),
}

export const LongContent: Story = {
  render: () => (
    <section className="space-y-6">
      <h1 className="mt-8 text-2xl font-bold text-white">
        Long page
      </h1>

      {Array.from({ length: 25 }, (_, index) => (
        <p key={index}>
          This is sample content paragraph {index + 1}. It exists to verify
          that the layout behaves correctly when the page grows beyond the
          viewport and requires scrolling.
        </p>
      ))}
    </section>
  ),
}

export const EmptyContent: Story = {
  render: () => <section aria-label="Empty page content" />,
}
