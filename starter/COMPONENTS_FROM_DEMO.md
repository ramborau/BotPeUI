# BotPe UI Components Catalog

> **Source**: `demo/` folder (READ-ONLY)
> **Usage**: Import these components into `starter/` pages
> **Total Components**: 400+ files across 7 categories
> **Last Updated**: 2024-11-12

---

## 📋 Quick Stats

- **Base UI Components**: 41
- **Template Components**: ~40
- **Shared/Composite Components**: ~30
- **View Components**: 8 modules
- **Layout Components**: 8 layouts
- **Auth Components**: 6 flows
- **Documentation Components**: 5

---

## 🎨 1. BASE UI COMPONENTS (`/demo/src/components/ui/`)

### Core Input Components

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **Alert** | `/demo/src/components/ui/Alert/Alert.tsx` | Animated notification with auto-dismiss | `closable`, `duration`, `title`, `type` (success/info/warning/danger) |
| **Avatar** | `/demo/src/components/ui/Avatar/Avatar.tsx` | User avatar with image/icon/text support | `size`, `shape` (circle/square), `src`, `icon` |
| **AvatarGroup** | `/demo/src/components/ui/Avatar/AvatarGroup.tsx` | Groups multiple avatars with overflow | `chained`, `maxCount`, `onOmittedAvatarClick` |
| **Badge** | `/demo/src/components/ui/Badge/Badge.tsx` | Count/status indicator badge | `content`, `maxCount`, `badgeStyle` |
| **Button** | `/demo/src/components/ui/Button/Button.tsx` | Versatile button with variants & loading | `variant` (solid/plain/default), `size`, `loading`, `icon`, `shape` |
| **Card** | `/demo/src/components/ui/Card/Card.tsx` | Content container with header/footer | `clickable`, `header`, `footer`, `bordered` |
| **Checkbox** | `/demo/src/components/ui/Checkbox/Checkbox.tsx` | Checkbox with indeterminate state | `checked`, `indeterminate`, `onChange`, `value` |
| **Input** | `/demo/src/components/ui/Input/Input.tsx` | Flexible text input with prefix/suffix | `prefix`, `suffix`, `textArea`, `invalid`, `size` |
| **Select** | `/demo/src/components/ui/Select/Select.tsx` | Dropdown select (react-select based) | `isMulti`, `componentAs`, `size`, `invalid` |
| **Radio** | `/demo/src/components/ui/Radio/Radio.tsx` | Radio button with group support | `checked`, `name`, `value` |

### Form Components

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **Form** | `/demo/src/components/ui/Form/Form.tsx` | Form wrapper for state management | `onSubmit`, `containerClassName` |
| **FormContainer** | `/demo/src/components/ui/Form/FormContainer.tsx` | Form layout container | - |
| **FormItem** | `/demo/src/components/ui/Form/FormItem.tsx` | Form field wrapper with label/error | `label`, `invalid`, `errorMessage` |
| **InputGroup** | `/demo/src/components/ui/InputGroup/InputGroup.tsx` | Groups inputs with addons | `size` |

### Date & Time Components

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **DatePicker** | `/demo/src/components/ui/DatePicker/DatePicker.tsx` | Date picker with calendar | `value`, `onChange`, `format`, `placeholder` |
| **DatePickerRange** | `/demo/src/components/ui/DatePicker/DatePickerRange.tsx` | Date range picker | `value`, `onChange`, `startPlaceholder`, `endPlaceholder` |
| **DateTimepicker** | `/demo/src/components/ui/DatePicker/DateTimepicker.tsx` | Combined date and time picker | `value`, `onChange` |
| **Calendar** | `/demo/src/components/ui/DatePicker/Calendar.tsx` | Standalone calendar component | `value`, `onChange` |
| **RangeCalendar** | `/demo/src/components/ui/RangeCalendar/index.ts` | Calendar for date range selection | `value`, `onChange` |
| **TimeInput** | `/demo/src/components/ui/TimeInput/TimeInput.tsx` | Time input with AM/PM | `value`, `onChange`, `format` |
| **TimeInputRange** | `/demo/src/components/ui/TimeInput/TimeInputRange.tsx` | Time range input | `value`, `onChange` |

### Navigation Components

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **Menu** | `/demo/src/components/ui/Menu/Menu.tsx` | Menu container with collapsible items | `defaultActiveKeys`, `defaultExpandedKeys`, `menuItemHeight`, `onSelect` |
| **MenuItem** | `/demo/src/components/ui/Menu/MenuItem.tsx` | Individual menu item | `eventKey`, `disabled`, `asElement` |
| **MenuCollapse** | `/demo/src/components/ui/Menu/MenuCollapse.tsx` | Collapsible menu section | `eventKey`, `label` |
| **MenuGroup** | `/demo/src/components/ui/Menu/MenuGroup.tsx` | Menu items grouping | `label` |
| **Tabs** | `/demo/src/components/ui/Tabs/Tabs.tsx` | Tab navigation container | `defaultValue`, `onChange`, `value`, `variant` (underline/pill) |
| **TabList** | `/demo/src/components/ui/Tabs/TabList.tsx` | Container for tab headers | - |
| **TabNav** | `/demo/src/components/ui/Tabs/TabNav.tsx` | Individual tab item | `value`, `disabled` |
| **TabContent** | `/demo/src/components/ui/Tabs/TabContent.tsx` | Tab content panel | `value` |
| **Pagination** | `/demo/src/components/ui/Pagination/Pagination.tsx` | Pagination controls | `currentPage`, `total`, `pageSize`, `onChange` |
| **Steps** | `/demo/src/components/ui/Steps/Steps.tsx` | Step-by-step progress indicator | `current` |
| **StepItem** | `/demo/src/components/ui/Steps/StepItem.tsx` | Individual step | `title`, `description` |

### Overlay Components

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **Dialog** | `/demo/src/components/ui/Dialog/Dialog.tsx` | Modal dialog with animation | `closable`, `isOpen`, `onClose`, `width`, `height` |
| **Drawer** | `/demo/src/components/ui/Drawer/Drawer.tsx` | Slide-in drawer panel | `closable`, `isOpen`, `onClose`, `placement` (top/right/bottom/left), `width`, `height` |
| **Dropdown** | `/demo/src/components/ui/Dropdown/Dropdown.tsx` | Dropdown menu with floating-ui | `activeKey`, `placement` |
| **DropdownMenu** | `/demo/src/components/ui/Dropdown/DropdownMenu.tsx` | Dropdown items container | - |
| **DropdownItem** | `/demo/src/components/ui/Dropdown/DropdownItem.tsx` | Dropdown menu item | `eventKey`, `disabled` |
| **DropdownToggle** | `/demo/src/components/ui/Dropdown/DropdownToggle.tsx` | Dropdown trigger button | - |
| **Tooltip** | `/demo/src/components/ui/Tooltip/Tooltip.tsx` | Tooltip with positioning | `title`, `placement`, `isOpen` |
| **Notification** | `/demo/src/components/ui/Notification/Notification.tsx` | Toast notification system | `type`, `title`, `message`, `duration` |

### Data Display Components

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **Table** | `/demo/src/components/ui/Table/Table.tsx` | Table with sorting & hover | `asElement`, `cellBorder`, `compact`, `hoverable`, `overflow` |
| **THead** | `/demo/src/components/ui/Table/THead.tsx` | Table header | - |
| **TBody** | `/demo/src/components/ui/Table/TBody.tsx` | Table body | - |
| **TFoot** | `/demo/src/components/ui/Table/TFoot.tsx` | Table footer | - |
| **Tr** | `/demo/src/components/ui/Table/Tr.tsx` | Table row | - |
| **Th** | `/demo/src/components/ui/Table/Th.tsx` | Table header cell | - |
| **Td** | `/demo/src/components/ui/Table/Td.tsx` | Table data cell | - |
| **Sorter** | `/demo/src/components/ui/Table/Sorter.tsx` | Sort indicator for columns | `sort` (asc/desc) |
| **Timeline** | `/demo/src/components/ui/Timeline/Timeline.tsx` | Timeline for event display | - |
| **TimeLineItem** | `/demo/src/components/ui/Timeline/TimeLineItem.tsx` | Individual timeline event | `media`, `isLast` |
| **Tag** | `/demo/src/components/ui/Tag/Tag.tsx` | Label/tag with closable option | `closable`, `onClose`, `prefix`, `suffix` |

### Feedback Components

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **Spinner** | `/demo/src/components/ui/Spinner/Spinner.tsx` | Loading spinner | `size`, `color`, `enableTheme` |
| **Skeleton** | `/demo/src/components/ui/Skeleton/Skeleton.tsx` | Skeleton loader placeholder | `animation`, `width`, `height`, `variant` (circle/text/block) |
| **Progress** | `/demo/src/components/ui/Progress/Progress.tsx` | Progress bar/circle indicator | `percent`, `showInfo`, `variant` (line/circle) |
| **StatusIcon** | `/demo/src/components/ui/StatusIcon/StatusIcon.tsx` | Status icon with types | `type` (success/warning/danger/info), `custom` |
| **toast** | `/demo/src/components/ui/toast/toast.tsx` | Toast notification (programmatic) | `push()`, `remove()`, `removeAll()` |

### Other UI Components

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **Segment** | `/demo/src/components/ui/Segment/Segment.tsx` | Segmented control/button group | `value`, `onChange`, `size` |
| **SegmentItem** | `/demo/src/components/ui/Segment/SegmentItem.tsx` | Individual segment item | `value` |
| **Slider** | `/demo/src/components/ui/Slider/Slider.tsx` | Single value slider | `min`, `max`, `step`, `value`, `onChange`, `marks` |
| **RangeSlider** | `/demo/src/components/ui/Slider/RangeSlider.tsx` | Dual-handle range slider | `min`, `max`, `step`, `value`, `onChange` |
| **Switcher** | `/demo/src/components/ui/Switcher/Switcher.tsx` | Toggle switch | `checked`, `defaultChecked`, `disabled`, `onChange` |
| **Upload** | `/demo/src/components/ui/Upload/Upload.tsx` | File upload with preview | `accept`, `multiple`, `onChange`, `beforeUpload`, `fileList` |
| **ScrollBar** | `/demo/src/components/ui/ScrollBar/ScrollBar.tsx` | Custom scrollbar | `direction`, `autoHide` |
| **CloseButton** | `/demo/src/components/ui/CloseButton/CloseButton.tsx` | Standardized close button | `absolute`, `onClick` |
| **ConfigProvider** | `/demo/src/components/ui/ConfigProvider/ConfigProvider.ts` | Global UI configuration | - |

---

## 🏗️ 2. TEMPLATE COMPONENTS (`/demo/src/components/template/`)

### Layout Structure

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **Header** | `/demo/src/components/template/Header.tsx` | App header with sections | `headerStart`, `headerEnd`, `headerMiddle`, `container` |
| **Footer** | `/demo/src/components/template/Footer.tsx` | App footer with links | `pageContainerType`, `className` |
| **SideNav** | `/demo/src/components/template/SideNav.tsx` | Collapsible side navigation | `translationSetup`, `background`, `mode` |
| **MobileNav** | `/demo/src/components/template/MobileNav.tsx` | Mobile navigation drawer | - |
| **HorizontalNav** | `/demo/src/components/template/HorizontalNav.tsx` | Horizontal navigation bar | - |
| **PageContainer** | `/demo/src/components/template/PageContainer.tsx` | Main page content container | `contained`, `className` |
| **LayoutBase** | `/demo/src/components/template/LayoutBase.tsx` | Base layout wrapper | - |
| **BottomStickyBar** | `/demo/src/components/template/BottomStickyBar.tsx` | Sticky bottom action bar | - |

### Navigation Content

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **VerticalMenuContent** | `/demo/src/components/template/VerticalMenuContent/VerticalMenuContent.tsx` | Renders vertical menu tree | `collapsed`, `navigationTree`, `routeKey`, `userAuthority` |
| **VerticalSingleMenuItem** | `/demo/src/components/template/VerticalMenuContent/VerticalSingleMenuItem.tsx` | Single vertical menu item | `nav` |
| **VerticalCollapsedMenuItem** | `/demo/src/components/template/VerticalMenuContent/VerticalCollapsedMenuItem.tsx` | Collapsible menu item | `nav` |
| **VerticalMenuIcon** | `/demo/src/components/template/VerticalMenuContent/VerticalMenuIcon.tsx` | Menu item icon renderer | `icon` |
| **HorizontalMenuContent** | `/demo/src/components/template/HorizontalMenuContent/HorizontalMenuContent.tsx` | Renders horizontal menu | `navigationTree`, `routeKey`, `userAuthority` |
| **HorizontalMenuNavLink** | `/demo/src/components/template/HorizontalMenuContent/HorizontalMenuNavLink.tsx` | Horizontal menu link | `nav` |
| **HorizontalMenuDropdown** | `/demo/src/components/template/HorizontalMenuContent/HorizontalMenuDropdown.tsx` | Horizontal menu dropdown | `nav` |

### Stacked Navigation

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **StackedSideNav** | `/demo/src/components/template/StackedSideNav/StackedSideNav.tsx` | Two-tier stacked navigation | - |
| **StackedSideNavMini** | `/demo/src/components/template/StackedSideNav/StackedSideNavMini.tsx` | Mini primary navigation | - |
| **StackedSideNavSecondary** | `/demo/src/components/template/StackedSideNav/StackedSideNavSecondary.tsx` | Secondary navigation panel | - |

### Header Components

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **Logo** | `/demo/src/components/template/Logo.tsx` | App logo with mode support | `type` (full/streamline), `mode`, `logoWidth`, `logoHeight` |
| **HeaderLogo** | `/demo/src/components/template/HeaderLogo.tsx` | Logo for header placement | - |
| **Search** | `/demo/src/components/template/Search.tsx` | Global search with command palette | - |
| **UserProfileDropdown** | `/demo/src/components/template/UserProfileDropdown.tsx` | User profile dropdown menu | - |
| **LanguageSelector** | `/demo/src/components/template/LanguageSelector.tsx` | Language/locale selector | - |
| **SideNavToggle** | `/demo/src/components/template/SideNavToggle.tsx` | Toggle side nav collapse | - |

### Notification

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **Notification** | `/demo/src/components/template/Notification/Notification.tsx` | Notification center | - |
| **NotificationToggle** | `/demo/src/components/template/Notification/NotificationToggle.tsx` | Open notification panel | - |
| **NotificationAvatar** | `/demo/src/components/template/Notification/NotificationAvatar.tsx` | Avatar for notifications | - |

### Side Panel

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **SidePanel** | `/demo/src/components/template/SidePanel/SidePanel.tsx` | Configurable side panel | - |
| **SidePanelContent** | `/demo/src/components/template/SidePanel/SidePanelContent.tsx` | Side panel content wrapper | - |

### Theme & Config

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **ThemeProvider** | `/demo/src/components/template/Theme/ThemeProvider.tsx` | Theme configuration provider | - |
| **ThemeContext** | `/demo/src/components/template/Theme/ThemeContext.tsx` | Theme context consumer | - |
| **ThemeConfigurator** | `/demo/src/components/template/ThemeConfigurator/ThemeConfigurator.tsx` | Theme settings panel | - |
| **ModeSwitcher** | `/demo/src/components/template/ThemeConfigurator/ModeSwitcher.tsx` | Light/Dark mode switcher | - |
| **ThemeSwitcher** | `/demo/src/components/template/ThemeConfigurator/ThemeSwitcher.tsx` | Color theme switcher | - |
| **LayoutSwitcher** | `/demo/src/components/template/ThemeConfigurator/LayoutSwitcher.tsx` | Layout type switcher | - |
| **DirectionSwitcher** | `/demo/src/components/template/ThemeConfigurator/DirectionSwitcher.tsx` | LTR/RTL switcher | - |
| **CopyButton** | `/demo/src/components/template/ThemeConfigurator/CopyButton.tsx` | Copy theme config button | - |

### Other Template

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **LocaleProvider** | `/demo/src/components/template/LocaleProvider.tsx` | i18n provider | `locale`, `messages` |
| **NavigationProvider** | `/demo/src/components/template/Navigation/NavigationProvider.tsx` | Navigation state provider | - |
| **FrameLessGap** | `/demo/src/components/template/FrameLessGap.tsx` | Spacing for frameless layouts | - |

---

## 📦 3. SHARED/COMPOSITE COMPONENTS (`/demo/src/components/shared/`)

### Data Components

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **DataTable** | `/demo/src/components/shared/DataTable.tsx` | Full-featured data table (@tanstack/react-table) | `columns`, `data`, `loading`, `selectable`, `pagingData`, `onPaginationChange`, `onSort` |
| **Chart** | `/demo/src/components/shared/Chart.tsx` | ApexCharts wrapper | `series`, `type` (line/bar/area/donut/radar), `xAxis`, `customOptions` |
| **GanttChart** | `/demo/src/components/shared/GanttChart/GanttChart.tsx` | Gantt chart for timelines | - |
| **CalendarView** | `/demo/src/components/shared/CalendarView.tsx` | Calendar with event display | - |
| **RegionMap** | `/demo/src/components/shared/RegionMap.tsx` | Interactive region map | - |

### Input Enhancement

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **AutoComplete** | `/demo/src/components/shared/AutoComplete.tsx` | Auto-complete input with dropdown | `data`, `optionKey`, `value`, `onInputChange`, `onOptionSelected` |
| **PasswordInput** | `/demo/src/components/shared/PasswordInput.tsx` | Password input with show/hide | `onVisibleChange` |
| **PatternInput** | `/demo/src/components/shared/PatternInput.tsx` | Input with pattern formatting | `format`, `mask` |
| **NumericInput** | `/demo/src/components/shared/NumericInput.tsx` | Number-only input | `thousandSeparator`, `decimalScale` |
| **CustomFormatInput** | `/demo/src/components/shared/CustomFormatInput.tsx` | Custom format masking | `format`, `mask` |
| **DebouceInput** | `/demo/src/components/shared/DebouceInput.tsx` | Debounced onChange input | `wait` |
| **OtpInput** | `/demo/src/components/shared/OtpInput.tsx` | One-time password input | `length`, `onComplete` |

### Rich Content

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **RichTextEditor** | `/demo/src/components/shared/RichTextEditor/RichTextEditor.tsx` | WYSIWYG editor (TipTap) | `content`, `onChange`, `customToolBar`, `invalid` |
| **SyntaxHighlighter** | `/demo/src/components/shared/SyntaxHighlighter.tsx` | Code syntax highlighting | `language`, `code` |
| **ImageGallery** | `/demo/src/components/shared/ImageGallery.tsx` | Image gallery with lightbox | `images` |
| **DoubleSidedImage** | `/demo/src/components/shared/DoubleSidedImage.tsx` | Image for light/dark mode | `lightModeSrc`, `darkModeSrc` |
| **Masonry** | `/demo/src/components/shared/Masonry/Masonry.tsx` | Pinterest-style grid | `columns`, `gap` |

### Display & Feedback

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **UsersAvatarGroup** | `/demo/src/components/shared/UsersAvatarGroup.tsx` | Avatar group for user lists | `users`, `maxCount` |
| **Loading** | `/demo/src/components/shared/Loading.tsx` | Loading overlay with spinner | `loading`, `type` (default/cover/spinner) |
| **NotFound** | `/demo/src/components/shared/NotFound.tsx` | 404/Not found page | - |
| **ConfirmDialog** | `/demo/src/components/shared/ConfirmDialog.tsx` | Confirmation dialog | `isOpen`, `onConfirm`, `onCancel`, `title`, `message` |
| **IconText** | `/demo/src/components/shared/IconText.tsx` | Icon with text label | `icon`, `text` |
| **GrowShrinkValue** | `/demo/src/components/shared/GrowShrinkValue.tsx` | Animated number value | `value`, `suffix` |
| **AbbreviateNumber** | `/demo/src/components/shared/AbbreviateNumber.tsx` | Number abbreviation (1K, 1M) | `value` |
| **EllipsisButton** | `/demo/src/components/shared/EllipsisButton.tsx` | Three-dot menu button | - |
| **PresetSegmentItemOption** | `/demo/src/components/shared/PresetSegmentItemOption.tsx` | Preset segment option | - |

### Utility & Layout

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **Container** | `/demo/src/components/shared/Container.tsx` | Responsive container | `className` |
| **Affix** | `/demo/src/components/shared/Affix.tsx` | Sticky content on scroll | `offset` |
| **StickyFooter** | `/demo/src/components/shared/StickyFooter.tsx` | Sticky footer component | - |
| **ActionLink** | `/demo/src/components/shared/ActionLink.tsx` | Styled action link | `href`, `themeColor` |
| **AdaptiveCard** | `/demo/src/components/shared/AdaptiveCard.tsx` | Container-adaptive card | - |
| **NavToggle** | `/demo/src/components/shared/NavToggle.tsx` | Hamburger menu button | `toggled`, `onToggle` |
| **ToggleDrawer** | `/demo/src/components/shared/ToggleDrawer.tsx` | Toggle for drawer panels | - |
| **StrictModeDroppable** | `/demo/src/components/shared/StrictModeDroppable.tsx` | DnD droppable (strict mode) | - |
| **AuthorityCheck** | `/demo/src/components/shared/AuthorityCheck.tsx` | Permission wrapper | `authority`, `userAuthority` |

### Skeleton Loaders

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **MediaSkeleton** | `/demo/src/components/shared/loaders/MediaSkeleton.tsx` | Skeleton for media content | - |
| **TableRowSkeleton** | `/demo/src/components/shared/loaders/TableRowSkeleton.tsx` | Skeleton for table rows | `rows` |
| **TextBlockSkeleton** | `/demo/src/components/shared/loaders/TextBlockSkeleton.tsx` | Skeleton for text blocks | `rows` |

---

## 🎯 4. VIEW COMPONENTS (`/demo/src/components/view/`)

### Form Views

#### CustomerForm
- **Path**: `/demo/src/components/view/CustomerForm/CustomerForm.tsx`
- **Description**: Complete customer creation/edit form
- **Sub-components**:
  - `OverviewSection.tsx` - Name, email, phone
  - `AddressSection.tsx` - Address, city, postcode, country
  - `ProfileImageSection.tsx` - Profile image upload
  - `TagsSection.tsx` - Tags management
  - `AccountSection.tsx` - Account status
- **Key Props**: `onFormSubmit`, `defaultValues`, `newCustomer`

#### ProductForm
- **Path**: `/demo/src/components/view/ProductForm/ProductForm.tsx`
- **Description**: Product creation/edit form
- **Sub-components**:
  - `GeneralSection.tsx` - Name, code, description
  - `PricingSection.tsx` - Price, cost, tax, discounts
  - `ImageSection.tsx` - Product images
  - `AttributeSection.tsx` - Category & attributes
- **Key Props**: `onFormSubmit`, `defaultValues`, `newProduct`

#### OrderForm
- **Path**: `/demo/src/components/view/OrderForm/OrderForm.tsx`
- **Description**: Multi-step order creation form
- **Sub-components**:
  - `ProductSelectSection.tsx` - Product selection
  - `CustomerDetailSection.tsx` - Customer info
  - `BillingAddressSection.tsx` - Billing address
  - `PaymentMethodSection.tsx` - Payment method
  - `Navigator.tsx` - Step navigation
- **Key Props**: `onFormSubmit`, `defaultValues`, `defaultProducts`, `newOrder`

### Communication Views

#### ChatBox
- **Path**: `/demo/src/components/view/ChatBox/ChatBox.tsx`
- **Description**: Complete chat interface
- **Sub-components**:
  - `ChatContainer.tsx` - Container wrapper
  - `MessageList.tsx` - Scrollable messages
  - `Message.tsx` - Message bubble
  - `ChatInput.tsx` - Input field
  - `Attachment.tsx` - File attachment
- **Key Props**: `messageList`, `header`, `placeholder`, `onInputChange`, `showAvatar`, `typing`

### Activity & Timeline

| Component | Path | Description |
|-----------|------|-------------|
| **Activity** | `/demo/src/components/view/Activity/index.ts` | Activity feed/timeline |
| **ActivityEvent** | `/demo/src/components/view/Activity/ActivityEvent.tsx` | Activity event item |
| **ActivityAvatar** | `/demo/src/components/view/Activity/ActivityAvatar.tsx` | Activity avatar |

### Utility Views

| Component | Path | Description | Key Props |
|-----------|------|-------------|-----------|
| **FileIcon** | `/demo/src/components/view/FileIcon/FileIcon.tsx` | File type icon by extension | `type` |
| **TaskItem** | `/demo/src/components/view/TaskItem/TaskItem.tsx` | Task/todo item | `completed`, `onToggle` |
| **CreditCardDialog** | `/demo/src/components/view/CreditCardDialog/CreditCardDialog.tsx` | Credit card input dialog | `isOpen`, `onClose` |

---

## 🔐 5. AUTH COMPONENTS (`/demo/src/components/auth/`)

### Auth Providers

| Component | Path | Description |
|-----------|------|-------------|
| **AuthProvider** | `/demo/src/components/auth/AuthProvider/AuthProvider.tsx` | Authentication context provider |
| **SessionContext** | `/demo/src/components/auth/AuthProvider/SessionContext.tsx` | Session management context |

### Auth Flows

#### SignIn
- **Path**: `/demo/src/components/auth/SignIn/SignIn.tsx`
- **Description**: Sign in page with email/password & OAuth
- **Sub-components**:
  - `SignInForm.tsx` - Email/password form
  - `OauthSignIn.tsx` - Social login buttons
- **Key Props**: `signUpUrl`, `forgetPasswordUrl`, `onSignIn`, `onOauthSignIn`

#### SignUp
- **Path**: `/demo/src/components/auth/SignUp/SignUp.tsx`
- **Description**: User registration page
- **Sub-components**: `SignUpForm.tsx`
- **Key Props**: `signInUrl`, `onSignUp`

#### ForgotPassword
- **Path**: `/demo/src/components/auth/ForgotPassword/ForgotPassword.tsx`
- **Description**: Password recovery request
- **Sub-components**: `ForgotPasswordForm.tsx`
- **Key Props**: `signInUrl`, `onForgotPassword`

#### ResetPassword
- **Path**: `/demo/src/components/auth/ResetPassword/ResetPassword.tsx`
- **Description**: Password reset with new password
- **Sub-components**: `ResetPasswordForm.tsx`
- **Key Props**: `signInUrl`, `onResetPassword`

#### OtpVerification
- **Path**: `/demo/src/components/auth/OtpVerification/OtpVerification.tsx`
- **Description**: OTP verification page
- **Sub-components**: `OtpVerificationForm.tsx`
- **Key Props**: `onOtpVerification`, `onResendOtp`

---

## 🏛️ 6. LAYOUT COMPONENTS (`/demo/src/components/layouts/`)

### Pre-Login

| Component | Path | Description |
|-----------|------|-------------|
| **PreLoginLayout** | `/demo/src/components/layouts/PreLoginLayout.tsx` | Layout for unauthenticated pages |

### Auth Layouts

| Component | Path | Description |
|-----------|------|-------------|
| **AuthLayout** | `/demo/src/components/layouts/AuthLayout/AuthLayout.tsx` | Dynamic auth layout switcher |
| **Simple** | `/demo/src/components/layouts/AuthLayout/Simple.tsx` | Simple centered auth layout |
| **Split** | `/demo/src/components/layouts/AuthLayout/Split.tsx` | Split-screen auth layout |
| **Side** | `/demo/src/components/layouts/AuthLayout/Side.tsx` | Side-by-side auth layout |

### Post-Login Layouts

| Component | Path | Description |
|-----------|------|-------------|
| **PostLoginLayout** | `/demo/src/components/layouts/PostLoginLayout/PostLoginLayout.tsx` | Main authenticated layout switcher |
| **CollapsibleSide** | `/demo/src/components/layouts/PostLoginLayout/components/CollapsibleSide.tsx` | Collapsible sidebar layout |
| **StackedSide** | `/demo/src/components/layouts/PostLoginLayout/components/StackedSide.tsx` | Two-tier stacked sidebar |
| **TopBarClassic** | `/demo/src/components/layouts/PostLoginLayout/components/TopBarClassic.tsx` | Classic top nav layout |
| **FrameLessSide** | `/demo/src/components/layouts/PostLoginLayout/components/FrameLessSide.tsx` | Frameless sidebar layout |
| **ContentOverlay** | `/demo/src/components/layouts/PostLoginLayout/components/ContentOverlay.tsx` | Overlay content layout |
| **Blank** | `/demo/src/components/layouts/PostLoginLayout/components/Blank.tsx` | Blank layout (no nav) |

---

## 📚 7. DOCUMENTATION COMPONENTS (`/demo/src/components/docs/`)

| Component | Path | Description |
|-----------|------|-------------|
| **DemoLayout** | `/demo/src/components/docs/DemoLayout.tsx` | Layout for docs pages |
| **DemoCard** | `/demo/src/components/docs/DemoCard/DemoCard.tsx` | Card for component examples |
| **CodeBox** | `/demo/src/components/docs/DemoCard/CodeBox.tsx` | Code snippet display |
| **CodeToggleTabs** | `/demo/src/components/docs/DemoCard/CodeToggleTabs.tsx` | Toggle preview/code |
| **CardFooter** | `/demo/src/components/docs/DemoCard/CardFooter.tsx` | Demo card footer |
| **DemoBoxContent** | `/demo/src/components/docs/DemoBoxContent.tsx` | Demo content wrapper |
| **DemoComponentApi** | `/demo/src/components/docs/DemoComponentApi.tsx` | API/props documentation |
| **DemoTitleSection** | `/demo/src/components/docs/DemoTitleSection.tsx` | Title & description section |
| **DocumentationNav** | `/demo/src/components/docs/DocumentationNav.tsx` | Documentation navigation |

---

## 🎯 COMPONENT PATTERNS

### Architecture Patterns Used:

1. **Compound Components** - Table (THead, TBody, Tr, Td), Tabs (TabList, TabNav, TabContent)
2. **Context Providers** - Form, Menu, Tabs use React Context for state
3. **Controlled/Uncontrolled** - All inputs support both patterns
4. **Render Props** - DataTable, ChatBox support custom renderers
5. **Composition** - Highly composable (InputGroup, Form)
6. **Hook-based** - Custom hooks for logic reuse
7. **TypeScript** - Fully typed with comprehensive interfaces
8. **Responsive** - Mobile-first design
9. **Theme-aware** - All components respect theme
10. **Accessible** - ARIA attributes, keyboard navigation

### Key Dependencies:

- **UI Foundation**: Tailwind CSS, Framer Motion
- **Forms**: React Hook Form, Zod
- **Tables**: @tanstack/react-table
- **Charts**: ApexCharts
- **Rich Text**: TipTap/ProseMirror
- **Floating**: @floating-ui/react
- **Icons**: react-icons (HeroIcons)
- **Utils**: lodash, classnames, dayjs

---

## 💡 USAGE EXAMPLES

### Importing Components

```typescript
// Base UI Components
import { Button, Input, Card } from '@/components/ui'

// Template Components
import { Header, Footer, SideNav } from '@/components/template'

// Shared Components
import { DataTable, Chart, Loading } from '@/components/shared'

// View Components
import { CustomerForm, ChatBox } from '@/components/view'

// Layout Components
import { CollapsibleSide } from '@/components/layouts/PostLoginLayout/components'

// Auth Components
import { SignIn, SignUp } from '@/components/auth'
```

### Basic Usage Example

```typescript
// Simple page with components from demo/
import { Button, Card, Input } from '@/components/ui'
import { Header, PageContainer } from '@/components/template'

export default function MyPage() {
  return (
    <>
      <Header />
      <PageContainer>
        <Card>
          <h1>My Page Title</h1>
          <Input placeholder="Enter text..." />
          <Button>Submit</Button>
        </Card>
      </PageContainer>
    </>
  )
}
```

### DataTable Example

```typescript
import { DataTable } from '@/components/shared'

const columns = [
  { header: 'Name', accessorKey: 'name' },
  { header: 'Email', accessorKey: 'email' },
]

const data = [
  { name: 'John Doe', email: 'john@example.com' },
]

export default function UsersPage() {
  return <DataTable columns={columns} data={data} />
}
```

---

## 📖 NOTES

- **All components are READ-ONLY** - Never edit files in `demo/`
- **Use as-is** - Import directly into `starter/` pages
- **Need modifications?** - Create wrappers in `starter/` that compose `demo/` components
- **Component changes** - Require formal PR with justification
- **Theme integration** - All components auto-respect theme settings
- **TypeScript** - Full type safety with IntelliSense support
- **Documentation** - Check `demo/src/components/docs/` for usage examples

---

**For questions or component requests, refer to this catalog first before creating new components.**

**Last updated**: 2024-11-12 by UI-GOD 🎨
