# BotPe UI Components MCP Server

> **Model Context Protocol Server** for BotPe Admin Panel UI Components
>
> Exposes 400+ Next.js/React/TypeScript UI components via MCP for AI assistants to query, search, and recommend components.

---

## 🚀 Features

- **📦 400+ Components**: Complete catalog of UI components from demo/ folder
- **🔍 Smart Search**: Search by name, description, category, or props
- **💡 Recommendations**: AI-powered component recommendations based on use cases
- **📚 Resources**: Component catalog, categories, design system guidelines
- **🛠️ Tools**: Search, get details, recommend, generate code
- **⚡ Fast**: Instant component lookups and searches
- **🎨 Design System**: Enforces font/color rules from UIGOD-RULES.MD

---

## 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Resources](#available-resources)
- [Available Tools](#available-tools)
- [Integration with Claude Desktop](#integration-with-claude-desktop)
- [Integration with Other MCP Clients](#integration-with-other-mcp-clients)
- [Component Categories](#component-categories)
- [Examples](#examples)
- [Development](#development)

---

## 🔧 Installation

### Prerequisites

- **Node.js**: v18 or higher
- **npm** or **yarn** or **pnpm**

### Install Dependencies

```bash
cd mcp-ui-components
npm install
```

### Build the Server

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` folder.

---

## 🎯 Usage

### Running Standalone

```bash
npm start
```

The server runs on stdio and communicates via Model Context Protocol.

### Running in Development

```bash
npm run dev
```

This watches for changes and rebuilds automatically.

---

## 📦 Available Resources

The MCP server exposes the following resources:

| Resource URI | Type | Description |
|-------------|------|-------------|
| `botpe://ui-components/catalog` | JSON | Complete catalog of 400+ components |
| `botpe://ui-components/categories` | JSON | List of all component categories |
| `botpe://ui-components/design-system` | Markdown | Design system rules (fonts, colors) |
| `botpe://ui-components/category/{name}` | JSON | Components in a specific category |

### Example: Reading the Catalog

```typescript
// MCP client code
const catalog = await mcpClient.readResource('botpe://ui-components/catalog')
```

---

## 🛠️ Available Tools

### 1. `search_components`

Search for components by name, description, category, or props.

**Input:**
```json
{
  "query": "table"
}
```

**Output:**
```
Found 3 components matching "table":

1. **DataTable** (Shared/Composite Components)
   Full-featured data table with sorting, pagination, selection (@tanstack/react-table)
   Import: `import { DataTable } from '@/components/shared'`

2. **Table** (Base UI Components)
   Table component with sorting and hover states
   Import: `import { Table } from '@/components/ui'`

3. **TableRowSkeleton** (Shared/Composite Components)
   Skeleton loader for table rows
   Import: `import { TableRowSkeleton } from '@/components/shared'`
```

### 2. `get_component`

Get detailed information about a specific component.

**Input:**
```json
{
  "name": "Button"
}
```

**Output:**
```markdown
# Button

**Category**: Base UI Components
**Path**: `/demo/src/components/ui/Button/Button.tsx`
**Import**: `import { Button } from '@/components/ui'`

**Description**: Versatile button with multiple variants, sizes, loading states, and icon support

**Key Props**:
- variant (solid/plain/default)
- size (lg/md/sm/xs)
- loading
- icon
- shape (round/circle/none)
- disabled

**Usage Example**:
```typescript
import { Button } from '@/components/ui'

<Button variant="solid" size="md">Click Me</Button>
<Button loading>Loading...</Button>
<Button icon={<HiPlus />}>Add Item</Button>
```
```

### 3. `recommend_components`

Get component recommendations for a specific use case.

**Input:**
```json
{
  "useCase": "I need to build a user management dashboard with a data table"
}
```

**Output:**
```
For dashboards, combine layout components with data visualization components.

1. **Header** (Template Components)
   Application header with configurable sections
   Import: `import { Header } from '@/components/template'`

2. **SideNav** (Template Components)
   Collapsible side navigation
   Import: `import { SideNav } from '@/components/template'`

3. **PageContainer** (Template Components)
   Main page content container
   Import: `import { PageContainer } from '@/components/template'`

4. **Card** (Base UI Components)
   Content container with optional header, footer
   Import: `import { Card } from '@/components/ui'`

5. **DataTable** (Shared/Composite Components)
   Full-featured data table with sorting, pagination
   Import: `import { DataTable } from '@/components/shared'`
```

### 4. `get_category_components`

Get all components in a specific category.

**Input:**
```json
{
  "category": "Base UI Components"
}
```

**Output:**
```
Base UI Components (41 components):

1. **Button** (Base UI Components)
   Versatile button with multiple variants, sizes, loading states
   Import: `import { Button } from '@/components/ui'`

2. **Input** (Base UI Components)
   Flexible text input with prefix/suffix support
   Import: `import { Input } from '@/components/ui'`

... (39 more)
```

### 5. `generate_component_code`

Generate ready-to-use code for a component.

**Input:**
```json
{
  "componentName": "DataTable",
  "includeProps": true
}
```

**Output:**
```typescript
// Import the component
import { DataTable } from '@/components/shared'

// Usage example
export default function MyPage() {
  return (
    const columns = [
      { header: 'Name', accessorKey: 'name' },
      { header: 'Email', accessorKey: 'email' },
    ]

    <DataTable columns={columns} data={users} selectable />
  )
}
```

---

## 🖥️ Integration with Claude Desktop

Add this server to your Claude Desktop configuration:

### macOS/Linux

Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

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

### Windows

Edit `%APPDATA%\Claude\claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "botpe-ui-components": {
      "command": "node",
      "args": [
        "C:\\absolute\\path\\to\\BotPeUI\\mcp-ui-components\\dist\\index.js"
      ]
    }
  }
}
```

### Restart Claude Desktop

After editing the config, restart Claude Desktop. The MCP server will start automatically.

---

## 🔌 Integration with Other MCP Clients

Any MCP-compatible client can connect to this server. The server uses stdio transport.

### Example with MCP Client SDK

```typescript
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const transport = new StdioClientTransport({
  command: 'node',
  args: ['/path/to/mcp-ui-components/dist/index.js'],
});

const client = new Client(
  {
    name: 'my-app',
    version: '1.0.0',
  },
  {
    capabilities: {},
  }
);

await client.connect(transport);

// Search for components
const result = await client.callTool({
  name: 'search_components',
  arguments: { query: 'button' },
});

console.log(result);
```

---

## 📂 Component Categories

The server organizes components into 7 categories:

| Category | Count | Description |
|----------|-------|-------------|
| **Base UI Components** | 41 | Core UI elements (Button, Input, Card, etc.) |
| **Template Components** | ~40 | Layout and template components (Header, Footer, etc.) |
| **Shared/Composite Components** | ~30 | Advanced components (DataTable, Chart, etc.) |
| **View Components** | 8 | Complex view modules (CustomerForm, ChatBox, etc.) |
| **Layout Components** | 8 | Page layouts (CollapsibleSide, StackedSide, etc.) |
| **Auth Components** | 6 | Authentication flows (SignIn, SignUp, etc.) |
| **Documentation Components** | 5 | Documentation helpers |

---

## 💡 Examples

### Example 1: Finding a Component

**User**: "I need a button component"

**MCP Tool Call**:
```json
{
  "tool": "search_components",
  "arguments": { "query": "button" }
}
```

**Result**: Returns Button component with import path and props.

### Example 2: Building a Form

**User**: "How do I build a login form?"

**MCP Tool Call**:
```json
{
  "tool": "recommend_components",
  "arguments": { "useCase": "login form" }
}
```

**Result**: Returns Form, Input, Button, and PasswordInput components with usage examples.

### Example 3: Getting Component Details

**User**: "Show me details for DataTable"

**MCP Tool Call**:
```json
{
  "tool": "get_component",
  "arguments": { "name": "DataTable" }
}
```

**Result**: Complete component details including props, import, and usage.

### Example 4: Generating Code

**User**: "Generate code for a Card component"

**MCP Tool Call**:
```json
{
  "tool": "generate_component_code",
  "arguments": { "componentName": "Card", "includeProps": true }
}
```

**Result**: Ready-to-use TypeScript code with imports.

---

## 🔨 Development

### Project Structure

```
mcp-ui-components/
├── src/
│   ├── index.ts                 # Main MCP server
│   └── components-catalog.ts    # Component catalog data
├── dist/                        # Compiled JavaScript (generated)
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
└── README.md                    # This file
```

### Building

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Testing

```bash
# Install the server in Claude Desktop config
# Then ask Claude to search for components

# Example prompts to test:
- "Search for button components"
- "Show me all table components"
- "Recommend components for a dashboard"
- "Get details for DataTable"
- "Generate code for a Card"
```

---

## 🎨 Design System Enforcement

The MCP server enforces the design system rules from UIGOD-RULES.MD:

### Fonts

✅ **ONLY** San Francisco font (weights 100-700)
❌ No custom fonts without approval

### Colors

✅ **Primary**: `#00c307` (vibrant green)
✅ Existing color tokens only
❌ No new colors without approval

### Component Usage

✅ Use components from demo/ as-is (READ-ONLY)
✅ Build pages in starter/
✅ Create wrappers for modifications
❌ Never edit demo/ files

---

## 📖 Additional Resources

- **Component Catalog**: `../starter/COMPONENTS_FROM_DEMO.md`
- **UI Documentation**: `../UI.MD`
- **Workflow Rules**: `../UIGOD-RULES.MD`
- **Starter README**: `../starter/README.md`

---

## 🤝 Contributing

This MCP server is part of the BotPe Admin Panel UI project. Follow UIGOD-RULES.MD when contributing.

---

## 📝 License

MIT

---

## 🆘 Support

For issues or questions:
1. Check component catalog: `../starter/COMPONENTS_FROM_DEMO.md`
2. Review UI docs: `../UI.MD`
3. Check workflow rules: `../UIGOD-RULES.MD`

---

**Built with ❤️ by UI-GOD** 🎨⚡

**MCP Server Version**: 1.0.0
**Total Components**: 400+
**Last Updated**: 2024-11-12
