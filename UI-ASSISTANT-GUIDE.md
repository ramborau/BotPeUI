# BotPe UI Components Assistant Guide

> **Complete Guide** to using the Claude Skill and MCP Server for UI component assistance

---

## 🎯 Overview

We've created **two powerful tools** to help you work with the 400+ UI components:

1. **Claude Skill** (`.claude/skills/ui-components.md`) - Direct Claude integration
2. **MCP Server** (`mcp-ui-components/`) - Model Context Protocol server

Both provide intelligent component discovery, search, and code generation.

---

## 📦 What's Included

### 1. Claude Skill: UI Components Assistant

**Location**: `.claude/skills/ui-components.md`

**Features**:
- Component search and recommendations
- Usage examples and import patterns
- Design system enforcement (fonts, colors)
- UIGOD-RULES.MD compliance
- Next.js + TypeScript + Tailwind patterns

**Activation**: Available in Claude Code automatically when skill file exists

### 2. MCP Server: BotPe UI Components

**Location**: `mcp-ui-components/`

**Features**:
- **Resources**: Component catalog, categories, design system
- **Tools**: Search, get details, recommend, generate code
- **Integration**: Works with Claude Desktop and any MCP client
- **API**: Programmatic access to component data

---

## 🚀 Quick Start

### Option 1: Using the Claude Skill (Recommended for Claude Code)

The skill is automatically available when you run Claude Code in this repository.

**Example Usage**:

```
You: "I need a data table component"

Claude: Based on the UI components catalog, I recommend:

**DataTable** (Shared/Composite Components)
- Full-featured table with sorting, pagination, selection
- Uses @tanstack/react-table
- Import: `import { DataTable } from '@/components/shared'`

Here's how to use it:

[Shows complete code example with imports and usage]
```

### Option 2: Using the MCP Server (Recommended for Claude Desktop)

1. **Build the server**:
   ```bash
   cd mcp-ui-components
   npm install
   npm run build
   ```

2. **Configure Claude Desktop**:

   **macOS/Linux**: Edit `~/Library/Application Support/Claude/claude_desktop_config.json`

   **Windows**: Edit `%APPDATA%\Claude\claude_desktop_config.json`

   ```json
   {
     "mcpServers": {
       "botpe-ui-components": {
         "command": "node",
         "args": [
           "/absolute/path/to/BotPeUI/mcp-ui-components/dist/index.js"
         ]
       }
     }
   }
   ```

3. **Restart Claude Desktop**

4. **Use the tools**:
   ```
   You: "Use the search_components tool to find button components"

   Claude: [Calls MCP tool and shows results]
   ```

---

## 🎨 Component Discovery

### By Name

**Question**: "Do you have a Button component?"

**Claude Response**:
```typescript
Yes! Here's the Button component:

**Button** (Base UI Components)
Path: /demo/src/components/ui/Button/Button.tsx
Import: `import { Button } from '@/components/ui'`

Key Props:
- variant (solid/plain/default)
- size (lg/md/sm/xs)
- loading
- icon
- shape (round/circle/none)

Usage:
<Button variant="solid" size="md">Click Me</Button>
<Button loading>Loading...</Button>
<Button icon={<HiPlus />}>Add Item</Button>
```

### By Feature

**Question**: "I need to display data in a table"

**Claude Response**:
```
For data display, I recommend:

1. **DataTable** - For advanced features (sorting, filtering, pagination)
   - Import: `import { DataTable } from '@/components/shared'`
   - Best for: User lists, product tables, data grids

2. **Table** - For simple tables
   - Import: `import { Table } from '@/components/ui'`
   - Best for: Basic data display, static tables

Here's a complete example with DataTable:
[Shows full implementation]
```

### By Use Case

**Question**: "How do I build a login page?"

**Claude Response**:
```
For a login page, use the pre-built auth components:

**SignIn Component**
- Path: /demo/src/components/auth/SignIn/SignIn.tsx
- Import: `import { SignIn } from '@/components/auth'`
- Includes: Email/password form + OAuth buttons
- Integrated with BetterAuth

Complete implementation:
[Shows complete login page code]

Next steps:
1. Add route config in src/configs/routes.config/index.ts
2. Configure BetterAuth in .env
3. Test at http://localhost:3000/sign-in
```

---

## 🔍 MCP Server Tools

### 1. search_components

Search by name, description, category, or props.

**Example**:
```
Claude: search_components { "query": "dropdown" }

Results:
1. Dropdown - Dropdown menu with floating-ui
2. DropdownMenu - Container for dropdown items
3. DropdownItem - Individual dropdown menu item
4. UserProfileDropdown - User profile dropdown menu
```

### 2. get_component

Get detailed information about a specific component.

**Example**:
```
Claude: get_component { "name": "Card" }

Result:
# Card

**Category**: Base UI Components
**Path**: /demo/src/components/ui/Card/Card.tsx
**Import**: `import { Card } from '@/components/ui'`

**Description**: Content container with optional header, footer

**Key Props**:
- clickable
- header (content, bordered, extra)
- footer
- bordered
- bodyClass

**Usage Example**:
<Card header={{ title: 'Title', description: 'Subtitle' }}>
  Content
</Card>
```

### 3. recommend_components

Get recommendations for a use case.

**Example**:
```
Claude: recommend_components {
  "useCase": "user management dashboard with a data table and filters"
}

Result:
For dashboards, combine layout + data components:

1. Header - Application header
2. SideNav - Collapsible navigation
3. PageContainer - Content wrapper
4. Card - Container for table
5. DataTable - Data grid with sorting/filtering
6. Input - Search filters
7. Button - Action buttons

[Shows complete implementation]
```

### 4. get_category_components

Get all components in a category.

**Example**:
```
Claude: get_category_components {
  "category": "Base UI Components"
}

Result:
Base UI Components (41 components):

1. Alert - Animated notification
2. Avatar - User avatar
3. Badge - Count/status indicator
4. Button - Versatile button
... (37 more)
```

### 5. generate_component_code

Generate ready-to-use code.

**Example**:
```
Claude: generate_component_code {
  "componentName": "DataTable",
  "includeProps": true
}

Result:
// Import the component
import { DataTable } from '@/components/shared'

// Usage example
export default function MyPage() {
  const columns = [
    { header: 'Name', accessorKey: 'name' },
    { header: 'Email', accessorKey: 'email' },
  ]

  return (
    <DataTable columns={columns} data={users} selectable />
  )
}
```

---

## 📚 Component Categories

### Base UI Components (41)

Core UI elements:
- **Forms**: Button, Input, Select, Checkbox, Radio, Form
- **Data Display**: Table, Card, Badge, Avatar, Tag, Timeline
- **Navigation**: Menu, Tabs, Pagination, Steps
- **Overlays**: Dialog, Drawer, Dropdown, Tooltip
- **Feedback**: Spinner, Skeleton, Progress, Alert
- **Date/Time**: DatePicker, Calendar, TimeInput

### Template Components (~40)

Layout and structure:
- **Layout**: Header, Footer, SideNav, PageContainer
- **Navigation**: VerticalMenuContent, HorizontalMenuContent
- **Header Elements**: Logo, Search, UserProfileDropdown
- **Theme**: ThemeProvider, ModeSwitcher, ThemeSwitcher

### Shared/Composite Components (~30)

Advanced components:
- **Data**: DataTable, Chart, GanttChart, CalendarView
- **Input Enhancement**: AutoComplete, PasswordInput, OtpInput
- **Rich Content**: RichTextEditor, SyntaxHighlighter, ImageGallery
- **Display**: Loading, ConfirmDialog, UsersAvatarGroup

### View Components (8)

Complex features:
- **Forms**: CustomerForm, ProductForm, OrderForm
- **Communication**: ChatBox
- **Activity**: Activity, ActivityEvent
- **Utility**: FileIcon, TaskItem, CreditCardDialog

### Layout Components (8)

Page layouts:
- CollapsibleSide, StackedSide, TopBarClassic
- FrameLessSide, ContentOverlay, Blank
- Auth layouts: Simple, Split, Side

### Auth Components (6)

Authentication flows:
- SignIn, SignUp, ForgotPassword
- ResetPassword, OtpVerification
- AuthProvider, SessionContext

---

## 🎨 Design System Rules

Both the skill and MCP server enforce these rules:

### Fonts (MANDATORY)

```css
/* ONLY use San Francisco font */
font-family: "San Francisco";

/* Weights: 100, 200, 400, 500, 600, 700 */
```

### Colors (MANDATORY)

```css
/* Primary color ONLY */
--primary: #00c307; /* Vibrant green */

/* Do NOT create new colors without approval */
```

### Workflow Rules

✅ **DO**:
- Use components from demo/ as-is (READ-ONLY)
- Build pages in starter/
- Create wrappers for modifications
- Use San Francisco font and #00c307 color

❌ **DON'T**:
- Never edit demo/ files
- Never create new fonts/colors without approval
- Never skip the wrapper pattern for modifications

---

## 💡 Common Workflows

### Workflow 1: Building a New Page

**Step 1**: Search for components
```
You: "I need components for a user profile page"

Claude: Recommends Card, Avatar, Input, Button, Tabs
```

**Step 2**: Get component details
```
You: "Show me details for Card and Avatar"

Claude: Shows props, usage examples, import paths
```

**Step 3**: Generate starter code
```
You: "Generate code for a Card with Avatar"

Claude: Provides complete TypeScript code
```

**Step 4**: Implement in starter/
```
You: "Create the page at src/app/(protected-pages)/profile/page.tsx"

Claude: Creates the file with all imports and code
```

### Workflow 2: Finding the Right Component

**Scenario**: "I need to let users pick a date"

**Claude Process**:
1. Searches for "date" components
2. Finds: DatePicker, Calendar, DatePickerRange, DateTimepicker
3. Recommends DatePicker for single date selection
4. Shows usage example with props
5. Generates ready-to-use code

### Workflow 3: Building Complex Features

**Scenario**: "I need a chat interface"

**Claude Process**:
1. Identifies ChatBox view component
2. Shows sub-components: MessageList, ChatInput, Attachment
3. Provides complete implementation example
4. Explains state management with Zustand
5. Shows API integration pattern

---

## 📖 Resources

### Reference Files

| File | Purpose |
|------|---------|
| `starter/COMPONENTS_FROM_DEMO.md` | Complete component catalog (32KB) |
| `UI.MD` | Full UI documentation (3,302 lines) |
| `UIGOD-RULES.MD` | Workflow rules and conventions |
| `starter/README.md` | Playground setup guide |
| `.claude/skills/ui-components.md` | Claude skill definition |
| `mcp-ui-components/README.md` | MCP server documentation |

### Quick Links

- **Component Search**: Search `COMPONENTS_FROM_DEMO.md` with Ctrl+F
- **Examples**: Check `demo/src/app/` for working examples
- **Props**: Component TypeScript files have full type definitions

---

## 🔧 Troubleshooting

### Claude Skill Not Working

**Issue**: Skill not responding

**Solution**:
1. Verify file exists: `.claude/skills/ui-components.md`
2. Check Claude Code is running in the BotPeUI directory
3. Try restarting Claude Code

### MCP Server Not Connecting

**Issue**: Server not showing in Claude Desktop

**Solution**:
1. Verify server is built: `npm run build` in `mcp-ui-components/`
2. Check config file has correct absolute path
3. Restart Claude Desktop completely
4. Check logs in Claude Desktop settings

### Component Not Found

**Issue**: "Component X not found"

**Solution**:
1. Check exact component name in `COMPONENTS_FROM_DEMO.md`
2. Try searching: `search_components { "query": "X" }`
3. Check category: Some components are in unexpected categories

### Import Errors

**Issue**: Import path not working

**Solution**:
1. Verify `tsconfig.json` has correct paths
2. Check component is from demo/, not custom
3. Use correct category import (`@/components/ui` vs `@/components/shared`)

---

## 🎓 Learning Resources

### For Beginners

1. **Start here**: `starter/README.md` - Setup guide
2. **Browse catalog**: `starter/COMPONENTS_FROM_DEMO.md` - All components
3. **Learn patterns**: `UI.MD` - Complete documentation
4. **Ask Claude**: "Show me how to build a simple page with a Card and Button"

### For Intermediate

1. **Complex forms**: Ask about CustomerForm, ProductForm, OrderForm
2. **Data tables**: Explore DataTable with sorting, pagination
3. **Layouts**: Try different PostLoginLayout types
4. **Theming**: Use ThemeProvider and theme utilities

### For Advanced

1. **Custom wrappers**: Create component wrappers in starter/
2. **Server actions**: Integrate with Next.js server actions
3. **State management**: Use Zustand stores
4. **Performance**: Implement code splitting, lazy loading

---

## 🚀 Next Steps

1. **Try the skill**: Ask Claude to find components
2. **Install MCP**: Set up the MCP server in Claude Desktop
3. **Build something**: Create your first page using the components
4. **Explore catalog**: Browse all 400+ components
5. **Read docs**: Deep dive into UI.MD for advanced patterns

---

## 🤝 Feedback

Found an issue or have suggestions?
- Check component catalog first
- Review UIGOD-RULES.MD
- Test with both skill and MCP server
- Document any edge cases

---

**Built with ❤️ by UI-GOD** 🎨⚡

**Version**: 1.0.0
**Last Updated**: 2024-11-12
**Total Components**: 400+
