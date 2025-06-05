import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="container mx-auto p-6">Hello This is SHADKIT Starter  kit!</div>
}
