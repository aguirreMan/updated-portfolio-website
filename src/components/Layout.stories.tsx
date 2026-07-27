import Layout from '@/components/page-components/Layout'
import type { Meta, StoryObj } from '@storybook/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

const meta = {
  title: 'Layout/MainLayout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Layout>

export default meta

type Story = StoryObj<typeof meta>

export const ShortContent: Story = {
  render: () => {
    const router = createMemoryRouter([
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: (
              <section className="space-y-6">
                <h1 className="text-2xl mt-8 font-bold text-white">
                  Short page
                </h1>
                <p>This page contains very little content.</p>
              </section>
            ),
          },
        ],
      },
    ])

    return <RouterProvider router={router} />
  },
}

export const LongContent: Story = {
  render: () => {
    const router = createMemoryRouter([
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: (
              <section className="space-y-6">
                <h1 className="text-2xl mt-8 font-bold text-white">
                  Long page
                </h1>
                {Array.from({ length: 25 }, (_, index) => (
                  <p key={index}>
                    This is sample content paragraph {index + 1}. It exists to verify
                    that the layout continues to behave correctly as the page grows
                    beyond the viewport and requires scrolling.
                  </p>
                ))}
              </section>
            ),
          },
        ],
      },
    ])

    return <RouterProvider router={router} />
  },
}

export const EmptyContent: Story = {
  render: () => {
    const router = createMemoryRouter([
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: (
              <section className="p-8">
              </section>
            ),
          },
        ],
      },
    ])

    return <RouterProvider router={router} />
  },
}
