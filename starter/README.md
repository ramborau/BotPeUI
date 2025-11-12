# BotPe Admin Panel UI - Starter Pack 🎨

> **UI Playground & Development Workspace**
>
> This is your development workspace for building the BotPe Admin Panel UI. All UI components come from the `demo/` folder, and all pages are built here in `starter/`.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18 or higher
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# Navigate to starter folder
cd starter

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will auto-reload on file changes.

### Default Login Credentials

- **Username**: `admin`
- **Password**: `123Qwe`

---

## 📚 Documentation

### Essential Files

| File | Description |
|------|-------------|
| **[COMPONENTS_FROM_DEMO.md](./COMPONENTS_FROM_DEMO.md)** | 📋 Complete catalog of all 400+ components available from `demo/` |
| **[UI.MD](../UI.MD)** (root) | 📖 Full UI documentation with setup guides, examples, and API references |
| **[UIGOD-RULES.MD](../UIGOD-RULES.MD)** (root) | ⚖️ Workflow rules, conventions, and UI-GOD guidelines |

---

## 🎯 Project Structure

```
starter/
├── src/
│   ├── @types/           # TypeScript type definitions
│   ├── app/              # Next.js App Router pages
│   │   ├── (auth-pages)/     # Login, signup, etc.
│   │   ├── (protected-pages)/ # Authenticated pages
│   │   ├── (public-pages)/    # Public pages
│   │   └── api/              # API routes
│   ├── assets/           # Static assets (images, styles)
│   ├── components/       # Your custom components/wrappers
│   ├── configs/          # Configuration files
│   ├── constants/        # Constants
│   ├── lib/              # Library integrations (auth, prisma)
│   ├── services/         # API service layer
│   ├── store/            # Zustand stores
│   └── utils/            # Utilities & hooks
├── public/               # Static files
├── COMPONENTS_FROM_DEMO.md  # Component catalog
├── README.md            # This file
└── package.json         # Dependencies
```

---

## 🧩 Using Components from Demo

### ⚠️ CRITICAL RULES

1. **Never edit `demo/` folder** - It's READ-ONLY
2. **All components come from `demo/`** - Don't create duplicates
3. **Use approved fonts & colors only**:
   - **Font**: San Francisco
   - **Primary Color**: `#00c307` (vibrant green)
4. **Build pages only in `starter/`**
5. **Need modifications?** Create wrappers, don't edit originals

### Import Pattern

```typescript
// Base UI Components
import { Button, Input, Card, Table } from '@/components/ui'

// Template Components
import { Header, Footer, SideNav, Logo } from '@/components/template'

// Shared/Composite Components
import { DataTable, Chart, Loading, AutoComplete } from '@/components/shared'

// View Components (complex forms/features)
import { CustomerForm, ProductForm, ChatBox } from '@/components/view'

// Layout Components
import { CollapsibleSide } from '@/components/layouts/PostLoginLayout/components'

// Auth Components
import { SignIn, SignUp, ForgotPassword } from '@/components/auth'
```

### Example Page

```typescript
// src/app/(protected-pages)/my-page/page.tsx
import { Button, Card, Input } from '@/components/ui'
import { Header, PageContainer } from '@/components/template'
import { DataTable } from '@/components/shared'

export default function MyPage() {
  return (
    <>
      <Header />
      <PageContainer>
        <Card
          header={{
            title: 'My Dashboard',
            description: 'Welcome to your dashboard'
          }}
        >
          <div className="space-y-4">
            <Input placeholder="Search..." />
            <DataTable
              columns={columns}
              data={data}
            />
            <Button>Submit</Button>
          </div>
        </Card>
      </PageContainer>
    </>
  )
}
```

### Creating Component Wrappers

If you need to modify a `demo/` component's behavior, create a wrapper:

```typescript
// src/components/MyCustomButton.tsx (in starter)
'use client'

import { Button } from '@/components/ui' // From demo/

export default function MyCustomButton(props) {
  return (
    <Button
      {...props}
      className={`my-custom-styles ${props.className || ''}`}
      onClick={(e) => {
        // Custom logic
        console.log('Custom click handler')
        props.onClick?.(e)
      }}
    />
  )
}
```

---

## 🎨 Design System

### Typography

**Font**: San Francisco (all weights 100-700)

```typescript
// Tailwind classes (configured)
font-thin      // 200
font-light     // 300
font-normal    // 400
font-medium    // 500
font-semibold  // 600
font-bold      // 700
```

### Colors

**Primary**: `#00c307` (vibrant green)

```typescript
// Tailwind classes
bg-primary         // #00c307
bg-primary-deep    // Darker shade
bg-primary-mild    // Lighter shade
bg-primary-subtle  // 10% opacity

text-primary
border-primary
// etc.
```

### Available Color Tokens

Check `tailwind.config.ts` for full palette:
- `primary`, `error`, `success`, `info`, `warning`
- `gray-50` through `gray-950`
- `neutral`

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run dev:turbo    # Start with Turbo mode

# Building
npm run build        # Create production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues
npm run format       # Format with Prettier

# Type Checking
npm run type-check   # Run TypeScript compiler check
```

---

## 📦 Key Dependencies

| Category | Packages |
|----------|----------|
| **Framework** | Next.js 14+, React 18+, TypeScript 5+ |
| **Styling** | Tailwind CSS 3+, PostCSS |
| **Forms** | React Hook Form, Zod |
| **Auth** | BetterAuth |
| **State** | Zustand |
| **Data** | @tanstack/react-table, ApexCharts |
| **UI** | Framer Motion, @floating-ui/react |
| **Utils** | dayjs, lodash, classnames |

---

## 🗂️ Finding Components

### By Category

1. **Form inputs?** → [Base UI Components](./COMPONENTS_FROM_DEMO.md#1-base-ui-components)
2. **Navigation?** → [Template Components](./COMPONENTS_FROM_DEMO.md#2-template-components)
3. **Data tables/charts?** → [Shared Components](./COMPONENTS_FROM_DEMO.md#3-sharedcomposite-components)
4. **Complex forms?** → [View Components](./COMPONENTS_FROM_DEMO.md#4-view-components)
5. **Page layouts?** → [Layout Components](./COMPONENTS_FROM_DEMO.md#6-layout-components)
6. **Auth flows?** → [Auth Components](./COMPONENTS_FROM_DEMO.md#5-auth-components)

### Quick Search

Open [`COMPONENTS_FROM_DEMO.md`](./COMPONENTS_FROM_DEMO.md) and use Ctrl+F (or Cmd+F) to search:

- Component name (e.g., "Button", "DataTable")
- Feature (e.g., "password", "chart", "upload")
- File path (e.g., "ui/Button")

---

## 🔄 Development Workflow

### 1. **Plan Your Page**
- Review existing components in [`COMPONENTS_FROM_DEMO.md`](./COMPONENTS_FROM_DEMO.md)
- Identify which components you need
- Sketch the layout

### 2. **Create Page in `starter/`**
```bash
# Example: Creating a new dashboard page
mkdir -p src/app/(protected-pages)/dashboard
touch src/app/(protected-pages)/dashboard/page.tsx
```

### 3. **Import & Compose**
```typescript
// Use components from demo/ as-is
import { Card, Button } from '@/components/ui'
import { DataTable } from '@/components/shared'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <DataTable columns={columns} data={data} />
      </Card>
    </div>
  )
}
```

### 4. **Add Route Config**
```typescript
// src/configs/routes.config/index.ts
export const protectedRoutes = {
  '/dashboard': {
    key: 'dashboard',
    authority: ['admin', 'user'],
    meta: {
      pageContainerType: 'contained',
    },
  },
}
```

### 5. **Add to Navigation** (optional)
```typescript
// src/configs/navigation.config/index.ts
{
  key: 'dashboard',
  path: '/dashboard',
  title: 'Dashboard',
  translateKey: 'nav.dashboard',
  icon: 'dashboard',
  type: NAV_ITEM_TYPE_ITEM,
  authority: ['admin', 'user'],
  subMenu: [],
}
```

### 6. **Test & Iterate**
- Run `npm run dev`
- Test your page at http://localhost:3000/dashboard
- Iterate until satisfied

### 7. **Freeze When Done**
```bash
git add .
git commit -m "[UI] Add dashboard page — DataTable, Card"
git tag ui/freeze/dashboard@$(date +%Y%m%d)
```

---

## 🚨 Common Issues & Solutions

### Issue: Component not found

**Solution**: Check [`COMPONENTS_FROM_DEMO.md`](./COMPONENTS_FROM_DEMO.md) for correct import path

### Issue: Styling not applying

**Solution**:
1. Check if you're using correct Tailwind classes
2. Some components need `!important` modifier: `className="bg-red-500!"`
3. Verify `tailwind.config.ts` includes your files

### Issue: TypeScript errors

**Solution**:
1. Run `npm run type-check` to see all errors
2. Check component props in [`COMPONENTS_FROM_DEMO.md`](./COMPONENTS_FROM_DEMO.md)
3. Import types: `import type { ButtonProps } from '@/components/ui/Button'`

### Issue: Theme not working

**Solution**:
1. Ensure `ThemeProvider` wraps your app (should be in `app/layout.tsx`)
2. Check `src/configs/theme.config.ts` for theme settings
3. Clear cookies: `document.cookie = 'theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'`

---

## 📖 Additional Resources

### Official Documentation

- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **BetterAuth**: https://better-auth.com
- **React Hook Form**: https://react-hook-form.com
- **Zustand**: https://github.com/pmndrs/zustand

### Internal Docs

- **[UI.MD](../UI.MD)** - Complete UI documentation
- **[UIGOD-RULES.MD](../UIGOD-RULES.MD)** - Workflow rules
- **[COMPONENTS_FROM_DEMO.md](./COMPONENTS_FROM_DEMO.md)** - Component catalog

---

## 🤝 Contributing

### Before Any Change

**Checklist** (from UIGOD-RULES.MD):

- [ ] Did I read `demo/` for the component I want?
- [ ] Am I editing `starter/` (not `demo/`)?
- [ ] Using only approved fonts (San Francisco) and colors (#00c307)?
- [ ] Did I confirm `donor` branch exists?
- [ ] If modifying `demo/`, did I open PR with justification?

### Git Conventions

- **Feature branches**: `ui/<description>`
- **PR format**: `[UI] <summary> — <demo-component-used>`
- **Freeze tags**: `ui/freeze/<page-name>@<YYYYMMDD>`

### Need Component Changes?

1. **Never edit `demo/` directly**
2. Create wrapper in `starter/` instead
3. If `demo/` change is absolutely required:
   - Open PR with detailed justification
   - Include before/after examples
   - Get explicit approval

---

## 🎯 Quick Reference Card

| Need | Component Category | Section Link |
|------|-------------------|--------------|
| Button, Input, Card | Base UI | [View →](./COMPONENTS_FROM_DEMO.md#1-base-ui-components) |
| Header, Footer, Nav | Template | [View →](./COMPONENTS_FROM_DEMO.md#2-template-components) |
| DataTable, Chart | Shared | [View →](./COMPONENTS_FROM_DEMO.md#3-sharedcomposite-components) |
| Customer/Product Form | View | [View →](./COMPONENTS_FROM_DEMO.md#4-view-components) |
| Page Layouts | Layout | [View →](./COMPONENTS_FROM_DEMO.md#6-layout-components) |
| Login, Signup | Auth | [View →](./COMPONENTS_FROM_DEMO.md#5-auth-components) |

---

## 💡 Tips & Best Practices

1. **Always search [`COMPONENTS_FROM_DEMO.md`](./COMPONENTS_FROM_DEMO.md) first** before creating new components
2. **Use TypeScript** - Full type safety is built in
3. **Follow responsive design** - Mobile-first approach
4. **Leverage composition** - Combine simple components for complex UIs
5. **Use theme utilities** - Components auto-respect light/dark mode
6. **Server components by default** - Only use `'use client'` when needed
7. **Test on multiple screen sizes** - Use Chrome DevTools device toolbar

---

## 🆘 Getting Help

1. **Check the catalog**: [`COMPONENTS_FROM_DEMO.md`](./COMPONENTS_FROM_DEMO.md)
2. **Read the docs**: [`UI.MD`](../UI.MD)
3. **Review examples**: `demo/src/app/` has working examples
4. **Check rules**: [`UIGOD-RULES.MD`](../UIGOD-RULES.MD)

---

**Happy coding! 🎨** Built with ❤️ by UI-GOD

**Last updated**: 2024-11-12
