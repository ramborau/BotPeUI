/**
 * BotPe UI Components Catalog
 * Complete inventory of 400+ components from demo/ folder
 */

export interface Component {
  name: string;
  path: string;
  category: string;
  description: string;
  keyProps?: string[];
  importFrom: string;
  subComponents?: string[];
  examples?: string;
}

export const COMPONENT_CATEGORIES = {
  BASE_UI: 'Base UI Components',
  TEMPLATE: 'Template Components',
  SHARED: 'Shared/Composite Components',
  VIEW: 'View Components',
  LAYOUT: 'Layout Components',
  AUTH: 'Auth Components',
  DOCS: 'Documentation Components',
} as const;

export const componentsCatalog: Component[] = [
  // BASE UI COMPONENTS
  {
    name: 'Button',
    path: '/demo/src/components/ui/Button/Button.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Versatile button with multiple variants, sizes, loading states, and icon support',
    keyProps: ['variant (solid/plain/default)', 'size (lg/md/sm/xs)', 'loading', 'icon', 'shape (round/circle/none)', 'disabled'],
    importFrom: '@/components/ui',
    examples: `import { Button } from '@/components/ui'

<Button variant="solid" size="md">Click Me</Button>
<Button loading>Loading...</Button>
<Button icon={<HiPlus />}>Add Item</Button>`,
  },
  {
    name: 'Input',
    path: '/demo/src/components/ui/Input/Input.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Flexible text input with prefix/suffix support, size variants, textarea mode',
    keyProps: ['prefix', 'suffix', 'textArea', 'invalid', 'size', 'type', 'disabled'],
    importFrom: '@/components/ui',
    examples: `import { Input } from '@/components/ui'

<Input placeholder="Enter text..." />
<Input prefix={<HiSearch />} placeholder="Search..." />
<Input textArea rows={4} placeholder="Multi-line text..." />`,
  },
  {
    name: 'Card',
    path: '/demo/src/components/ui/Card/Card.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Content container with optional header, footer, and bordered/shadow variants',
    keyProps: ['clickable', 'header (content, bordered, extra)', 'footer', 'bordered', 'bodyClass'],
    importFrom: '@/components/ui',
    examples: `import { Card } from '@/components/ui'

<Card header={{ title: 'Card Title', description: 'Subtitle' }}>
  Content goes here
</Card>`,
  },
  {
    name: 'Table',
    path: '/demo/src/components/ui/Table/Table.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Table component with sorting and hover states',
    keyProps: ['asElement', 'cellBorder', 'compact', 'hoverable', 'overflow'],
    importFrom: '@/components/ui',
    subComponents: ['THead', 'TBody', 'TFoot', 'Tr', 'Th', 'Td', 'Sorter'],
  },
  {
    name: 'Form',
    path: '/demo/src/components/ui/Form/Form.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Form wrapper for state management',
    keyProps: ['onSubmit', 'containerClassName'],
    importFrom: '@/components/ui',
    subComponents: ['FormContainer', 'FormItem'],
  },
  {
    name: 'Select',
    path: '/demo/src/components/ui/Select/Select.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Dropdown select built on react-select with async and creatable variants',
    keyProps: ['isMulti', 'componentAs (ReactSelect/CreatableSelect/AsyncSelect)', 'size', 'invalid'],
    importFrom: '@/components/ui',
  },
  {
    name: 'Checkbox',
    path: '/demo/src/components/ui/Checkbox/Checkbox.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Checkbox input with indeterminate state',
    keyProps: ['checked', 'indeterminate', 'onChange', 'value', 'disabled'],
    importFrom: '@/components/ui',
  },
  {
    name: 'Radio',
    path: '/demo/src/components/ui/Radio/Radio.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Radio button with group support',
    keyProps: ['checked', 'name', 'value', 'disabled'],
    importFrom: '@/components/ui',
  },
  {
    name: 'DatePicker',
    path: '/demo/src/components/ui/DatePicker/DatePicker.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Date picker with calendar interface',
    keyProps: ['value', 'onChange', 'format', 'placeholder'],
    importFrom: '@/components/ui',
  },
  {
    name: 'Dialog',
    path: '/demo/src/components/ui/Dialog/Dialog.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Modal dialog with animation',
    keyProps: ['closable', 'isOpen', 'onClose', 'width', 'height'],
    importFrom: '@/components/ui',
  },
  {
    name: 'Drawer',
    path: '/demo/src/components/ui/Drawer/Drawer.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Slide-in drawer panel from any direction',
    keyProps: ['closable', 'isOpen', 'onClose', 'placement (top/right/bottom/left)', 'width', 'height'],
    importFrom: '@/components/ui',
  },
  {
    name: 'Dropdown',
    path: '/demo/src/components/ui/Dropdown/Dropdown.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Dropdown menu with floating-ui positioning',
    keyProps: ['activeKey', 'placement'],
    importFrom: '@/components/ui',
    subComponents: ['DropdownMenu', 'DropdownItem', 'DropdownToggle'],
  },
  {
    name: 'Tabs',
    path: '/demo/src/components/ui/Tabs/Tabs.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Tab navigation container',
    keyProps: ['defaultValue', 'onChange', 'value', 'variant (underline/pill)'],
    importFrom: '@/components/ui',
    subComponents: ['TabList', 'TabNav', 'TabContent'],
  },
  {
    name: 'Menu',
    path: '/demo/src/components/ui/Menu/Menu.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Menu container with collapsible items',
    keyProps: ['defaultActiveKeys', 'defaultExpandedKeys', 'menuItemHeight', 'onSelect'],
    importFrom: '@/components/ui',
    subComponents: ['MenuItem', 'MenuCollapse', 'MenuGroup'],
  },
  {
    name: 'Alert',
    path: '/demo/src/components/ui/Alert/Alert.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Animated notification with auto-dismiss',
    keyProps: ['closable', 'duration', 'title', 'type (success/info/warning/danger)', 'onClose'],
    importFrom: '@/components/ui',
  },
  {
    name: 'Avatar',
    path: '/demo/src/components/ui/Avatar/Avatar.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'User avatar with image/icon/text support',
    keyProps: ['size (lg/md/sm/number)', 'shape (circle/square)', 'src', 'icon', 'alt'],
    importFrom: '@/components/ui',
  },
  {
    name: 'Badge',
    path: '/demo/src/components/ui/Badge/Badge.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Count/status indicator badge',
    keyProps: ['content', 'maxCount', 'badgeStyle'],
    importFrom: '@/components/ui',
  },
  {
    name: 'Spinner',
    path: '/demo/src/components/ui/Spinner/Spinner.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Loading spinner',
    keyProps: ['size', 'color', 'enableTheme'],
    importFrom: '@/components/ui',
  },
  {
    name: 'Pagination',
    path: '/demo/src/components/ui/Pagination/Pagination.tsx',
    category: COMPONENT_CATEGORIES.BASE_UI,
    description: 'Pagination controls',
    keyProps: ['currentPage', 'total', 'pageSize', 'onChange'],
    importFrom: '@/components/ui',
  },

  // SHARED/COMPOSITE COMPONENTS
  {
    name: 'DataTable',
    path: '/demo/src/components/shared/DataTable.tsx',
    category: COMPONENT_CATEGORIES.SHARED,
    description: 'Full-featured data table with sorting, pagination, selection (@tanstack/react-table)',
    keyProps: ['columns', 'data', 'loading', 'selectable', 'pagingData', 'onPaginationChange', 'onSort'],
    importFrom: '@/components/shared',
    examples: `import { DataTable } from '@/components/shared'

const columns = [
  { header: 'Name', accessorKey: 'name' },
  { header: 'Email', accessorKey: 'email' },
]

<DataTable columns={columns} data={users} selectable />`,
  },
  {
    name: 'Chart',
    path: '/demo/src/components/shared/Chart.tsx',
    category: COMPONENT_CATEGORIES.SHARED,
    description: 'ApexCharts wrapper for multiple chart types',
    keyProps: ['series', 'type (line/bar/area/donut/radar)', 'xAxis', 'customOptions'],
    importFrom: '@/components/shared',
  },
  {
    name: 'Loading',
    path: '/demo/src/components/shared/Loading.tsx',
    category: COMPONENT_CATEGORIES.SHARED,
    description: 'Loading overlay with spinner',
    keyProps: ['loading', 'type (default/cover/spinner)'],
    importFrom: '@/components/shared',
  },
  {
    name: 'AutoComplete',
    path: '/demo/src/components/shared/AutoComplete.tsx',
    category: COMPONENT_CATEGORIES.SHARED,
    description: 'Auto-complete input with dropdown',
    keyProps: ['data', 'optionKey', 'value', 'onInputChange', 'onOptionSelected'],
    importFrom: '@/components/shared',
  },
  {
    name: 'RichTextEditor',
    path: '/demo/src/components/shared/RichTextEditor/RichTextEditor.tsx',
    category: COMPONENT_CATEGORIES.SHARED,
    description: 'WYSIWYG rich text editor using TipTap',
    keyProps: ['content', 'onChange', 'customToolBar', 'invalid'],
    importFrom: '@/components/shared',
  },
  {
    name: 'PasswordInput',
    path: '/demo/src/components/shared/PasswordInput.tsx',
    category: COMPONENT_CATEGORIES.SHARED,
    description: 'Password input with show/hide toggle',
    keyProps: ['onVisibleChange'],
    importFrom: '@/components/shared',
  },
  {
    name: 'ConfirmDialog',
    path: '/demo/src/components/shared/ConfirmDialog.tsx',
    category: COMPONENT_CATEGORIES.SHARED,
    description: 'Confirmation dialog for destructive actions',
    keyProps: ['isOpen', 'onConfirm', 'onCancel', 'title', 'message'],
    importFrom: '@/components/shared',
  },

  // TEMPLATE COMPONENTS
  {
    name: 'Header',
    path: '/demo/src/components/template/Header.tsx',
    category: COMPONENT_CATEGORIES.TEMPLATE,
    description: 'Application header with configurable sections',
    keyProps: ['headerStart', 'headerEnd', 'headerMiddle', 'container'],
    importFrom: '@/components/template',
  },
  {
    name: 'Footer',
    path: '/demo/src/components/template/Footer.tsx',
    category: COMPONENT_CATEGORIES.TEMPLATE,
    description: 'Application footer',
    keyProps: ['pageContainerType', 'className'],
    importFrom: '@/components/template',
  },
  {
    name: 'SideNav',
    path: '/demo/src/components/template/SideNav.tsx',
    category: COMPONENT_CATEGORIES.TEMPLATE,
    description: 'Collapsible side navigation',
    keyProps: ['translationSetup', 'background', 'mode'],
    importFrom: '@/components/template',
  },
  {
    name: 'PageContainer',
    path: '/demo/src/components/template/PageContainer.tsx',
    category: COMPONENT_CATEGORIES.TEMPLATE,
    description: 'Main page content container',
    keyProps: ['contained', 'className'],
    importFrom: '@/components/template',
  },
  {
    name: 'Logo',
    path: '/demo/src/components/template/Logo.tsx',
    category: COMPONENT_CATEGORIES.TEMPLATE,
    description: 'App logo with mode support',
    keyProps: ['type (full/streamline)', 'mode', 'logoWidth', 'logoHeight'],
    importFrom: '@/components/template',
  },
  {
    name: 'UserProfileDropdown',
    path: '/demo/src/components/template/UserProfileDropdown.tsx',
    category: COMPONENT_CATEGORIES.TEMPLATE,
    description: 'User profile dropdown menu',
    keyProps: [],
    importFrom: '@/components/template',
  },
  {
    name: 'ThemeProvider',
    path: '/demo/src/components/template/Theme/ThemeProvider.tsx',
    category: COMPONENT_CATEGORIES.TEMPLATE,
    description: 'Theme configuration provider',
    keyProps: [],
    importFrom: '@/components/template',
  },

  // VIEW COMPONENTS
  {
    name: 'CustomerForm',
    path: '/demo/src/components/view/CustomerForm/CustomerForm.tsx',
    category: COMPONENT_CATEGORIES.VIEW,
    description: 'Complete customer creation/edit form with sections',
    keyProps: ['onFormSubmit', 'defaultValues', 'newCustomer'],
    importFrom: '@/components/view',
    subComponents: ['OverviewSection', 'AddressSection', 'ProfileImageSection', 'TagsSection', 'AccountSection'],
  },
  {
    name: 'ProductForm',
    path: '/demo/src/components/view/ProductForm/ProductForm.tsx',
    category: COMPONENT_CATEGORIES.VIEW,
    description: 'Product creation/edit form',
    keyProps: ['onFormSubmit', 'defaultValues', 'newProduct'],
    importFrom: '@/components/view',
    subComponents: ['GeneralSection', 'PricingSection', 'ImageSection', 'AttributeSection'],
  },
  {
    name: 'ChatBox',
    path: '/demo/src/components/view/ChatBox/ChatBox.tsx',
    category: COMPONENT_CATEGORIES.VIEW,
    description: 'Complete chat interface',
    keyProps: ['messageList', 'header', 'placeholder', 'onInputChange', 'showAvatar'],
    importFrom: '@/components/view',
    subComponents: ['ChatContainer', 'MessageList', 'Message', 'ChatInput', 'Attachment'],
  },

  // AUTH COMPONENTS
  {
    name: 'SignIn',
    path: '/demo/src/components/auth/SignIn/SignIn.tsx',
    category: COMPONENT_CATEGORIES.AUTH,
    description: 'Sign in page with email/password & OAuth',
    keyProps: ['signUpUrl', 'forgetPasswordUrl', 'onSignIn', 'onOauthSignIn'],
    importFrom: '@/components/auth',
    subComponents: ['SignInForm', 'OauthSignIn'],
  },
  {
    name: 'SignUp',
    path: '/demo/src/components/auth/SignUp/SignUp.tsx',
    category: COMPONENT_CATEGORIES.AUTH,
    description: 'User registration page',
    keyProps: ['signInUrl', 'onSignUp'],
    importFrom: '@/components/auth',
  },
  {
    name: 'ForgotPassword',
    path: '/demo/src/components/auth/ForgotPassword/ForgotPassword.tsx',
    category: COMPONENT_CATEGORIES.AUTH,
    description: 'Password recovery request page',
    keyProps: ['signInUrl', 'onForgotPassword'],
    importFrom: '@/components/auth',
  },

  // LAYOUT COMPONENTS
  {
    name: 'CollapsibleSide',
    path: '/demo/src/components/layouts/PostLoginLayout/components/CollapsibleSide.tsx',
    category: COMPONENT_CATEGORIES.LAYOUT,
    description: 'Collapsible sidebar layout',
    keyProps: [],
    importFrom: '@/components/layouts/PostLoginLayout/components',
  },
  {
    name: 'StackedSide',
    path: '/demo/src/components/layouts/PostLoginLayout/components/StackedSide.tsx',
    category: COMPONENT_CATEGORIES.LAYOUT,
    description: 'Two-tier stacked sidebar layout',
    keyProps: [],
    importFrom: '@/components/layouts/PostLoginLayout/components',
  },
  {
    name: 'TopBarClassic',
    path: '/demo/src/components/layouts/PostLoginLayout/components/TopBarClassic.tsx',
    category: COMPONENT_CATEGORIES.LAYOUT,
    description: 'Classic top navigation bar layout',
    keyProps: [],
    importFrom: '@/components/layouts/PostLoginLayout/components',
  },
];

export const searchComponents = (query: string): Component[] => {
  const lowerQuery = query.toLowerCase();
  return componentsCatalog.filter(
    (comp) =>
      comp.name.toLowerCase().includes(lowerQuery) ||
      comp.description.toLowerCase().includes(lowerQuery) ||
      comp.category.toLowerCase().includes(lowerQuery) ||
      comp.keyProps?.some((prop) => prop.toLowerCase().includes(lowerQuery))
  );
};

export const getComponentsByCategory = (category: string): Component[] => {
  return componentsCatalog.filter((comp) => comp.category === category);
};

export const getComponent = (name: string): Component | undefined => {
  return componentsCatalog.find(
    (comp) => comp.name.toLowerCase() === name.toLowerCase()
  );
};

export const getAllCategories = (): string[] => {
  return Object.values(COMPONENT_CATEGORIES);
};
