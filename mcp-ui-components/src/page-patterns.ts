/**
 * Page Generation Patterns for BotPe Admin Panel
 *
 * Standard patterns for generating complete Next.js pages
 */

export interface PagePattern {
  name: string
  description: string
  template: string
  routeTemplate: string
}

export const PAGE_PATTERNS: Record<string, PagePattern> = {
  dashboard: {
    name: 'Dashboard Page',
    description: 'Analytics dashboard with multiple data visualizations',
    template: `import Component1 from './_components/Component1'
import Component2 from './_components/Component2'
import Component3 from './_components/Component3'
import get{{name}}Dashboard from '@/server/actions/get{{name}}Dashboard'

export default async function Page() {
    const data = await get{{name}}Dashboard()

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col xl:flex-row gap-4">
                <div className="flex flex-col gap-4 flex-1">
                    <Component1 data={data.component1Data} />
                    <Component2 data={data.component2Data} />
                </div>
                <div className="flex flex-col gap-4 2xl:min-w-[360px]">
                    <Component3 data={data.component3Data} />
                </div>
            </div>
        </div>
    )
}`,
    routeTemplate: `'/dashboards/{{path}}': {
    key: 'dashboards.{{key}}',
    authority: [ADMIN, USER],
    meta: {
        pageContainerType: 'contained',
    },
},`
  },

  list: {
    name: 'List Page (CRUD)',
    description: 'Data table list page with search, filters, and pagination',
    template: `import Container from '@/components/shared/Container'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import {{name}}ListProvider from './_components/{{name}}ListProvider'
import {{name}}ListTable from './_components/{{name}}ListTable'
import {{name}}ListActionTools from './_components/{{name}}ListActionTools'
import {{name}}ListTableTools from './_components/{{name}}ListTableTools'
import {{name}}ListSelected from './_components/{{name}}ListSelected'
import get{{name}}s from '@/server/actions/get{{name}}s'
import type { PageProps } from '@/@types/common'

export default async function Page({ searchParams }: PageProps) {
    const params = await searchParams
    const data = await get{{name}}s(params)

    return (
        <{{name}}ListProvider {{camelName}}List={data.list}>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>{{name}}s</h3>
                            <{{name}}ListActionTools />
                        </div>
                        <{{name}}ListTableTools />
                        <{{name}}ListTable
                            {{camelName}}ListTotal={data.total}
                            pageIndex={parseInt(params.pageIndex as string) || 1}
                            pageSize={parseInt(params.pageSize as string) || 10}
                        />
                    </div>
                </AdaptiveCard>
            </Container>
            <{{name}}ListSelected />
        </{{name}}ListProvider>
    )
}`,
    routeTemplate: `'/{{basePath}}/{{path}}': {
    key: '{{baseKey}}.{{key}}',
    authority: [ADMIN, USER],
},`
  },

  simple: {
    name: 'Simple View',
    description: 'Single component page (settings, static content)',
    template: `import {{name}} from './_components/{{name}}'

export default function Page() {
    return <{{name}} />
}`,
    routeTemplate: `'/{{basePath}}/{{path}}': {
    key: '{{baseKey}}.{{key}}',
    authority: [ADMIN, USER],
    meta: {
        header: {
            title: '{{title}}',
        },
        pageContainerType: 'contained',
    },
},`
  },

  'provider-view': {
    name: 'Provider + View',
    description: 'Complex stateful UI with context provider (chat, mail, calendar)',
    template: `import Card from '@/components/ui/Card'
import {{name}}Provider from './_components/{{name}}Provider'
import {{name}}Sidebar from './_components/{{name}}Sidebar'
import {{name}}Body from './_components/{{name}}Body'
import {{name}}Drawer from './_components/{{name}}Drawer'
import get{{name}}List from '@/server/actions/get{{name}}List'

export default async function Page() {
    const data = await get{{name}}List()

    return (
        <{{name}}Provider data={data}>
            <Card className="h-full border-0" bodyClass="h-full flex flex-col">
                <div className="flex flex-auto h-full gap-8">
                    <{{name}}Sidebar />
                    <{{name}}Body />
                </div>
            </Card>
            <{{name}}Drawer />
        </{{name}}Provider>
    )
}`,
    routeTemplate: `'/{{basePath}}/{{path}}': {
    key: '{{baseKey}}.{{key}}',
    authority: [ADMIN, USER],
    meta: {
        pageContainerType: 'contained',
    },
},`
  },

  form: {
    name: 'Create/Edit Form',
    description: 'Form page using pre-built view components',
    template: `import Container from '@/components/shared/Container'
import { {{name}}Form } from '@/components/view'

export default function Page() {
    return (
        <Container>
            <{{name}}Form />
        </Container>
    )
}`,
    routeTemplate: `'/{{basePath}}/{{path}}': {
    key: '{{baseKey}}.{{key}}',
    authority: [ADMIN, USER],
    meta: {
        header: {
            title: '{{title}}',
            description: '{{description}}',
            contained: true,
        },
        footer: false,
    },
},`
  },
}

export interface PageSet {
  name: string
  description: string
  pages: Array<{
    type: string
    path: string
    title: string
  }>
}

export const PAGE_SETS: Record<string, PageSet> = {
  crud: {
    name: 'CRUD Page Set',
    description: 'Complete CRUD operations: list + create + edit + details',
    pages: [
      { type: 'list', path: '{{entity}}-list', title: '{{Entity}} List' },
      { type: 'form', path: '{{entity}}-create', title: 'Create {{Entity}}' },
      { type: 'form', path: '{{entity}}-edit/[id]', title: 'Edit {{Entity}}' },
      { type: 'simple', path: '{{entity}}-details/[id]', title: '{{Entity}} Details' },
    ],
  },

  'dashboard-suite': {
    name: 'Dashboard Suite',
    description: 'Multiple dashboard types for different analytics views',
    pages: [
      { type: 'dashboard', path: 'ecommerce', title: 'Ecommerce Dashboard' },
      { type: 'dashboard', path: 'project', title: 'Project Dashboard' },
      { type: 'dashboard', path: 'marketing', title: 'Marketing Dashboard' },
      { type: 'dashboard', path: 'analytic', title: 'Analytic Dashboard' },
    ],
  },

  'account-pages': {
    name: 'Account Pages',
    description: 'User account management pages',
    pages: [
      { type: 'simple', path: 'settings', title: 'Settings' },
      { type: 'simple', path: 'pricing', title: 'Pricing' },
      { type: 'simple', path: 'activity-log', title: 'Activity Log' },
      { type: 'simple', path: 'roles-permissions', title: 'Roles & Permissions' },
    ],
  },
}

export function generatePageFromPattern(
  patternType: string,
  pageName: string
): string {
  const pattern = PAGE_PATTERNS[patternType]
  if (!pattern) {
    throw new Error(`Unknown pattern type: ${patternType}`)
  }

  // Replace placeholders
  let code = pattern.template
  code = code.replace(/\{\{name\}\}/g, pageName)
  code = code.replace(/\{\{camelName\}\}/g, pageName.charAt(0).toLowerCase() + pageName.slice(1))

  return code
}

export function generateRouteConfig(
  patternType: string,
  pageName: string,
  basePath: string,
  pageTitle: string
): string {
  const pattern = PAGE_PATTERNS[patternType]
  if (!pattern) {
    throw new Error(`Unknown pattern type: ${patternType}`)
  }

  let config = pattern.routeTemplate
  config = config.replace(/\{\{name\}\}/g, pageName)
  config = config.replace(/\{\{path\}\}/g, pageName.toLowerCase())
  config = config.replace(/\{\{key\}\}/g, pageName.charAt(0).toLowerCase() + pageName.slice(1))
  config = config.replace(/\{\{basePath\}\}/g, basePath)
  config = config.replace(/\{\{baseKey\}\}/g, basePath.replace(/\//g, '.'))
  config = config.replace(/\{\{title\}\}/g, pageTitle)
  config = config.replace(/\{\{description\}\}/g, `Manage ${pageTitle.toLowerCase()}`)

  return config
}
