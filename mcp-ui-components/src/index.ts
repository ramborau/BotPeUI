#!/usr/bin/env node

/**
 * BotPe UI Components MCP Server
 *
 * Exposes 400+ Next.js/React UI components via Model Context Protocol
 * - Resources: Component catalog, categories, individual components
 * - Tools: Search components, get component details, recommend components
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import {
  componentsCatalog,
  searchComponents,
  getComponentsByCategory,
  getComponent,
  getAllCategories,
  COMPONENT_CATEGORIES,
  type Component,
} from './components-catalog.js';

const SERVER_NAME = 'botpe-ui-components';
const SERVER_VERSION = '1.0.0';

class UIComponentsServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: SERVER_NAME,
        version: SERVER_VERSION,
      },
      {
        capabilities: {
          resources: {},
          tools: {},
        },
      }
    );

    this.setupResourceHandlers();
    this.setupToolHandlers();

    // Error handling
    this.server.onerror = (error) => {
      console.error('[MCP Error]', error);
    };

    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  private setupResourceHandlers() {
    // List all available resources
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      return {
        resources: [
          {
            uri: 'botpe://ui-components/catalog',
            mimeType: 'application/json',
            name: 'UI Components Catalog',
            description: 'Complete catalog of 400+ UI components',
          },
          {
            uri: 'botpe://ui-components/categories',
            mimeType: 'application/json',
            name: 'Component Categories',
            description: 'List of all component categories',
          },
          {
            uri: 'botpe://ui-components/design-system',
            mimeType: 'text/markdown',
            name: 'Design System',
            description: 'Design system guidelines (fonts, colors, rules)',
          },
          ...getAllCategories().map((category) => ({
            uri: `botpe://ui-components/category/${encodeURIComponent(category)}`,
            mimeType: 'application/json',
            name: `${category} Components`,
            description: `All components in ${category} category`,
          })),
        ],
      };
    });

    // Read resource content
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const uri = request.params.uri;

      if (uri === 'botpe://ui-components/catalog') {
        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify(componentsCatalog, null, 2),
            },
          ],
        };
      }

      if (uri === 'botpe://ui-components/categories') {
        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify(getAllCategories(), null, 2),
            },
          ],
        };
      }

      if (uri === 'botpe://ui-components/design-system') {
        const designSystem = `# BotPe UI Design System

## Fonts (MANDATORY)

**ONLY use San Francisco font family**

\`\`\`css
font-family: "San Francisco";

/* Available weights: */
font-weight: 100; /* Ultra Light */
font-weight: 200; /* Thin */
font-weight: 400; /* Regular */
font-weight: 500; /* Medium */
font-weight: 600; /* Semi Bold */
font-weight: 700; /* Bold */
\`\`\`

## Colors (MANDATORY)

**Primary Color ONLY:**
\`\`\`css
--primary: #00c307; /* Vibrant Green */
\`\`\`

**Do NOT create new colors without approval**

Use existing tokens only:
- \`bg-primary\`, \`bg-primary-deep\`, \`bg-primary-mild\`, \`bg-primary-subtle\`
- \`text-primary\`, \`border-primary\`
- \`bg-error\`, \`bg-success\`, \`bg-info\`, \`bg-warning\`
- \`bg-gray-50\` through \`bg-gray-950\`

## Rules (CRITICAL)

1. **NEVER edit demo/ folder** - It's READ-ONLY
2. **All components come from demo/** - Don't create duplicates
3. **Use approved fonts & colors only**
4. **Build pages in starter/ only**
5. **Create wrappers for modifications** - Don't edit originals
`;

        return {
          contents: [
            {
              uri,
              mimeType: 'text/markdown',
              text: designSystem,
            },
          ],
        };
      }

      // Handle category resources
      if (uri.startsWith('botpe://ui-components/category/')) {
        const category = decodeURIComponent(uri.split('/').pop() || '');
        const components = getComponentsByCategory(category);

        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify(components, null, 2),
            },
          ],
        };
      }

      throw new Error(`Unknown resource: ${uri}`);
    });
  }

  private setupToolHandlers() {
    // List all available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'search_components',
            description:
              'Search for UI components by name, description, category, or props. Returns matching components with details.',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'Search query (component name, feature, category, prop, etc.)',
                },
              },
              required: ['query'],
            },
          },
          {
            name: 'get_component',
            description:
              'Get detailed information about a specific component including props, usage examples, and import path.',
            inputSchema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Component name (e.g., "Button", "DataTable", "CustomerForm")',
                },
              },
              required: ['name'],
            },
          },
          {
            name: 'recommend_components',
            description:
              'Recommend components for a specific use case or feature. Provide a description of what you want to build.',
            inputSchema: {
              type: 'object',
              properties: {
                useCase: {
                  type: 'string',
                  description: 'Description of what you want to build (e.g., "user management table", "login form", "dashboard")',
                },
              },
              required: ['useCase'],
            },
          },
          {
            name: 'get_category_components',
            description:
              'Get all components in a specific category (Base UI, Template, Shared, View, Layout, Auth).',
            inputSchema: {
              type: 'object',
              properties: {
                category: {
                  type: 'string',
                  description: 'Category name',
                  enum: Object.values(COMPONENT_CATEGORIES),
                },
              },
              required: ['category'],
            },
          },
          {
            name: 'generate_component_code',
            description:
              'Generate ready-to-use code for a component with imports and basic usage example.',
            inputSchema: {
              type: 'object',
              properties: {
                componentName: {
                  type: 'string',
                  description: 'Component name',
                },
                includeProps: {
                  type: 'boolean',
                  description: 'Include prop examples',
                  default: true,
                },
              },
              required: ['componentName'],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'search_components':
            return this.handleSearchComponents(args);

          case 'get_component':
            return this.handleGetComponent(args);

          case 'recommend_components':
            return this.handleRecommendComponents(args);

          case 'get_category_components':
            return this.handleGetCategoryComponents(args);

          case 'generate_component_code':
            return this.handleGenerateComponentCode(args);

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${errorMessage}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  private handleSearchComponents(args: any) {
    const { query } = args;
    const results = searchComponents(query);

    return {
      content: [
        {
          type: 'text',
          text: `Found ${results.length} components matching "${query}":\n\n${this.formatComponentList(results)}`,
        },
      ],
    };
  }

  private handleGetComponent(args: any) {
    const { name } = args;
    const component = getComponent(name);

    if (!component) {
      return {
        content: [
          {
            type: 'text',
            text: `Component "${name}" not found. Try searching with search_components tool.`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: 'text',
          text: this.formatComponentDetails(component),
        },
      ],
    };
  }

  private handleRecommendComponents(args: any) {
    const { useCase } = args;
    const lowerCase = useCase.toLowerCase();

    let recommendations: Component[] = [];
    let explanation = '';

    // Smart recommendations based on use case
    if (lowerCase.includes('table') || lowerCase.includes('list') || lowerCase.includes('data')) {
      recommendations = [
        getComponent('DataTable')!,
        getComponent('Table')!,
        getComponent('Card')!,
        getComponent('Pagination')!,
      ].filter(Boolean);
      explanation = 'For data display, I recommend using DataTable for advanced features or Table for simple layouts.';
    } else if (lowerCase.includes('form') || lowerCase.includes('input')) {
      recommendations = [
        getComponent('Form')!,
        getComponent('Input')!,
        getComponent('Button')!,
        getComponent('Select')!,
        getComponent('Checkbox')!,
      ].filter(Boolean);
      explanation = 'For forms, use Form component with FormItem wrappers and react-hook-form integration.';
    } else if (lowerCase.includes('login') || lowerCase.includes('auth') || lowerCase.includes('signin')) {
      recommendations = [
        getComponent('SignIn')!,
        getComponent('SignUp')!,
        getComponent('ForgotPassword')!,
      ].filter(Boolean);
      explanation = 'For authentication, use the pre-built auth components with BetterAuth integration.';
    } else if (lowerCase.includes('dashboard') || lowerCase.includes('admin')) {
      recommendations = [
        getComponent('Header')!,
        getComponent('SideNav')!,
        getComponent('PageContainer')!,
        getComponent('Card')!,
        getComponent('Chart')!,
        getComponent('DataTable')!,
      ].filter(Boolean);
      explanation = 'For dashboards, combine layout components with data visualization components.';
    } else if (lowerCase.includes('chat') || lowerCase.includes('message')) {
      recommendations = [getComponent('ChatBox')!].filter(Boolean);
      explanation = 'For chat interfaces, use the complete ChatBox component.';
    } else {
      // Generic search
      recommendations = searchComponents(useCase);
      explanation = `Based on your use case, here are relevant components:`;
    }

    return {
      content: [
        {
          type: 'text',
          text: `${explanation}\n\n${this.formatComponentList(recommendations)}`,
        },
      ],
    };
  }

  private handleGetCategoryComponents(args: any) {
    const { category } = args;
    const components = getComponentsByCategory(category);

    return {
      content: [
        {
          type: 'text',
          text: `${category} (${components.length} components):\n\n${this.formatComponentList(components)}`,
        },
      ],
    };
  }

  private handleGenerateComponentCode(args: any) {
    const { componentName, includeProps = true } = args;
    const component = getComponent(componentName);

    if (!component) {
      return {
        content: [
          {
            type: 'text',
            text: `Component "${componentName}" not found.`,
          },
        ],
      };
    }

    const code = this.generateCodeExample(component, includeProps);

    return {
      content: [
        {
          type: 'text',
          text: code,
        },
      ],
    };
  }

  private formatComponentList(components: Component[]): string {
    return components
      .map(
        (comp, idx) =>
          `${idx + 1}. **${comp.name}** (${comp.category})\n   ${comp.description}\n   Import: \`import { ${comp.name} } from '${comp.importFrom}'\``
      )
      .join('\n\n');
  }

  private formatComponentDetails(component: Component): string {
    let details = `# ${component.name}\n\n`;
    details += `**Category**: ${component.category}\n`;
    details += `**Path**: \`${component.path}\`\n`;
    details += `**Import**: \`import { ${component.name} } from '${component.importFrom}'\`\n\n`;
    details += `**Description**: ${component.description}\n\n`;

    if (component.keyProps && component.keyProps.length > 0) {
      details += `**Key Props**:\n`;
      component.keyProps.forEach((prop) => {
        details += `- ${prop}\n`;
      });
      details += '\n';
    }

    if (component.subComponents && component.subComponents.length > 0) {
      details += `**Sub-components**: ${component.subComponents.join(', ')}\n\n`;
    }

    if (component.examples) {
      details += `**Usage Example**:\n\`\`\`typescript\n${component.examples}\n\`\`\`\n`;
    }

    return details;
  }

  private generateCodeExample(component: Component, includeProps: boolean): string {
    let code = `// Import the component\n`;
    code += `import { ${component.name} } from '${component.importFrom}'\n\n`;

    code += `// Usage example\n`;
    code += `export default function MyPage() {\n`;
    code += `  return (\n`;

    if (includeProps && component.examples) {
      code += `    ${component.examples.split('\n').slice(2).join('\n    ')}\n`;
    } else {
      code += `    <${component.name}>\n`;
      code += `      {/* Your content here */}\n`;
      code += `    </${component.name}>\n`;
    }

    code += `  )\n`;
    code += `}\n`;

    return code;
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('BotPe UI Components MCP Server running on stdio');
  }
}

const server = new UIComponentsServer();
server.run().catch(console.error);
