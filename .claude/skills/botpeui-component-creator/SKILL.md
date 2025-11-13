---
name: botpeui-component-creator
description: Create new UI components following BotPeUI conventions and file structure. Use when adding new pages, components, or features to the BotPeUI project.
---

# BotPeUI Component Creator Skill

This skill helps create new components following the BotPeUI architecture and conventions.

## Workflow

### 1. Analyze Request

Understand what component/feature the user wants:
- Is it a page, component, or concept?
- Does it need state management?
- Does it need API integration?

### 2. Determine Location

Based on UI.MD structure:
- Pages: `demo/src/app/(protected-pages)/concepts/[feature-name]/`
- Components: `demo/src/components/[category]/`
- Shared components: `demo/src/components/shared/`
- API routes: `demo/src/app/api/[endpoint]/route.ts`

### 3. Create File Structure

For a new concept/feature:
```
demo/src/app/(protected-pages)/concepts/[feature-name]/
├── page.tsx                    # Main page component
├── _components/                # Feature-specific components
│   ├── ComponentA.tsx
│   └── ComponentB.tsx
├── _store/                     # State management (if needed)
│   └── use[Feature]Store.tsx
└── _types/                     # TypeScript types (if needed)
    └── [feature].types.ts
```

### 4. Follow BotPeUI Conventions

- Use TypeScript for all files
- Follow the component naming conventions
- Import from `@/` for absolute paths
- Use the Ecme UI component library
- Follow the existing pattern for state management (Zustand)

### 5. Create API Integration (if needed)

Create service file: `demo/src/services/[Feature]Service.ts`

### 6. Add Mock Data (if needed)

Create mock data: `demo/src/mock/data/[feature]Data.ts`

### 7. Validate

- Check TypeScript compilation
- Verify imports work
- Test component renders
- Follow UI GOD rules from UIGOD-RULES.MD

## Key Conventions

- Use Ecme UI components from `@/components/ui/`
- State management with Zustand stores
- Mock data in `@/mock/data/`
- API services in `@/services/`
- Absolute imports with `@/` prefix
