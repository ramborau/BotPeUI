Introduction
Ecme is not just another web template—it's a meticulously crafted masterpiece that stands out in a market flooded with generic, poorly designed options. Every aspect of Ecme, from its elegant UI to its robust code architecture, has been thoughtfully designed to ensure unparalleled flexibility and scalability for your projects.

Unlike other templates that rely on common open-source libraries, Ecme features a comprehensive suite of custom-built UI components. These components are not only rich in functionality but also offer greater control, allowing you to tailor every detail to meet your specific needs.

Ecme is equipped with advanced features like multi-language support, dark and light mode, right-to-left layout, theme color customization, and the ability to switch seamlessly between six pre-designed layouts. Whether you're building a global platform or a niche application, Ecme's versatility has you covered.

Moreover, the included application examples are grounded in real-world use cases, giving you practical, ready-to-use solutions for your projects. With Ecme, you're not just buying a template—you're investing in a powerful, flexible foundation for your web development success.

Core libraries used
Here's a list of the core libraries we use in Ecme

React
React
Next.js
Next.js
TypeScript
TypeScript
Tailwind Css
Tailwind Css

Installation
Prerequisites
Before getting started with Ecme, ensure your development environment has the following tools installed:

Node.js
npm
Installing Ecme
After extracting the downloaded .zip file, you'll find two folders TypeScript and JavaScript. Each folder contains the following sub-directories:

demo
This folder contains the full demo of the project, including everything you see in the live preview. It's meant for reference only and NOT recommended for development.

starter
The starter pack provides the basic setup for the template. This is where you should begin your development, creating pages and adding your code. We recommend copying this folder into your workspace.

documentation
This folder includes an index.html file that redirects to the online documentation.

Once you've chosen your desired package, navigate to the project's root directory (where package.json is located) and run the following command in your console:

npm install
This will install all necessary dependencies in the node_modules directory, allowing you to start development.

TailwindCSS
Tailwind CSS is a utility-first CSS framework that provides predefined classes for building and designing UI directly within JSX. Ecme utilizes Tailwind as its core CSS framework, with most UI elements built entirely using its features. You can easily update the theme and base styles by modifying the tailwind.config.cjs file located in the root directory.

Tooling
If you use VS Code as your IDE, we recommend installing the Tailwind CSS IntelliSense plugin. This plugin provides autocomplete, syntax highlighting, and linting based on your Tailwind configuration, which can significantly speed up your development process.

Note
Some of our UI components use semantic classes with the Tailwind @apply directive. In certain cases, applying Tailwind classes directly to these components may not work as expected. You might need to use the !important modifier to override the default high specificity selectors.
To make any utility class important, simply add an ! character at the beginning, e.g.:

<Dropdown className="bg-red-500!" />
For more information on utility classes and Tailwind configuration, visit the official documentation: https://tailwindcss.com/docs/utility-first

CSS
While we primarily use Tailwind CSS, we also have additional custom styles written in standard CSS, located in the src/assets/styles/\* directory. Because Tailwind depends on certain CSS processing features, we're using PostCSS as our preprocessor.

Here's an overview of our styles folder structure:

├── styles
| ├── components # styles for base UI components
| ├── docs # styles for documentation components
| ├── tailwind # Tailwind entry & base styles
| ├── template # styles for template components
| ├── vendors # styles for third-party libraries
| └── index.css # main entry CSS
Each folder inside the styles directory contains an index.css file that imports all other CSS files within the same folder. Eventually, all these index.css files are imported into the main entry CSS.

Custom CSS
If Tailwind doesn't cover all your styling needs, you can add custom CSS in this folder. We recommend using Tailwind's functions and directives when adding custom styles, such as @apply, @layer, and theme().

For more details on how to use these features, you can check the official Tailwind documentation.

Starter
As mentioned in the Installation section, we've provided a starter version with the essential core components and basic functionality setup. We highly recommend that developers use this version as the foundation for building their apps.

When you open the starter pack in your local environment, you'll be directed to the login page. You can sign in using the credentials user: admin | password: 123Qwe.

Default Configurations
Below are some of the default configurations for the starter version. You can modify these settings to suit your needs.

AppConfig - Documentation

Typescript
Javascript
const appConfig: AppConfig = {
apiPrefix: '/api',
authenticatedEntryPath: '/home',
unAuthenticatedEntryPath: '/sign-in',
locale: 'en',
activeNavTranslation: false
}
ThemeConfig - Documentation

Typescript
Javascript
export const themeConfig: ThemeConfig = {
schema: 'default',
direction: THEME_ENUM.DIR_LTR,
mode: THEME_ENUM.MODE_LIGHT,
panelExpand: false,
controlSize: 'md',
layout: {
type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
sideNavCollapse: false,
},
}
RoutesConfig - Documentation

const publicRoutes = [
'/home': {
key: 'home',
authority: [],
}
]

export const protectedRoutes = {
'/articles': {
key: 'articles',
authority: [ADMIN, USER],
meta: {
pageContainerType: 'contained',
},
},
'/articles/[slug]': {
key: 'articles.articleDetails',
authority: [ADMIN, USER],
meta: {
pageContainerType: 'contained',
},
dynamicRoute: true
},
}
NavConfig - Documentation

const navigationConfig = [
{
key: 'home',
path: '/home',
title: 'Home',
translateKey: 'nav.home',
icon: 'home',
type: NAV_ITEM_TYPE_ITEM,
authority: [],
subMenu: []
}
]

Development Server
Once you've installed all the dependencies, you can start the development server by running the following command in your terminal:

npm run dev
Open your browser and go to http://localhost:3000/. The app will automatically reload whenever you make changes to the source files.

Environment Variables
Environment variables are a secure way to store and manage configuration data or sensitive information, such as API keys, database connection strings, or environment-specific settings. In Next.js, environment variables are defined in .env files and can be accessed during build time or runtime, depending on their prefix.

Setting Up Environment Variables
The template already comes with a .env file located in the root directory. Feel free to modify these variables according to your project requirements. Here's an example of an environment variables and naming conventions:

NEXT*PUBLIC_API_BASE_URL=https://api.example.com
DATABASE_URL=postgres://user:password@localhost:5432/db_name
Public Variables: Variables prefixed withNEXT_PUBLIC* are exposed to the browser. These should not include sensitive data.
Private Variables: Variables without theNEXT*PUBLIC* prefix are only available on the server side and are never exposed to the client.
Accessing Environment Variables
Server-Side Access:
Access private variables in server-side functions like API routes or Server Components:
export async function GET() {
const databaseUrl = process.env.DATABASE_URL;
return new Response('Database URL:' + databaseUrl);
}
Client-Side Access:
Access public variables in your React components:
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

useEffect(() => {
console.log('API Base URL:', apiBaseUrl);
}, []);
Official Documentation
For more details, refer to the official Next.js Environment Variables documentation.

older Structure
Our template's folder structure closely follows the official Next.js app router structure conventions. In this section you will find the basic folder structure and everything you need to get the template up and running. Both the demo and starter versions have the same structure, except that the starter version will have fewer files & folders than the demo version as they are not required in the starter.

Below is a schematic diagram of directory structure:

Typescript
Javascript

├── messages # Locale messages
| ├── en.json # locale JSON file
| └── ... # Other locale JSON files
├── public # Static resource
| ├── img # Images
| ├── data # Static data
| └── ... # Other static files
├── src
│ ├── @types # Type files that share across the temeplate
│ │ └── ...
│ ├── app # Main application directory for Next.js App Router
│ │ ├── (auth-pages) # Group routes for auth pages
│ │ ├── └── ... # Auth pages
│ │ ├── └── layout.tsx # Base layout for auth pages
│ │ ├── (protected-pages) # Group routes for pages theat require authentication
│ │ ├── ├── ... # Protected pages
│ │ ├── └── layout.tsx # Root layout for protected pages
│ │ ├── (public-pages) # Group routes for public pages
│ │ ├── └── ... # Public pages
│ │ ├── api # API endpoint
│ │ | └── ... # API route & files
│ │ favicon.ico # Favicon
│ │ layout.tsx # Root layout
│ │ not-found.tsx # Empty page for 404
│ │ page.tsx # Entry page
| ├── assets # App static resource
│ │ ├── maps # Map meta data
│ │ ├── markdown # Markdown files
│ │ ├── styles # Global CSS files
│ │ └── svg # SVG files
│ ├── components # General components
│ │ ├── auth # Auth related components
│ │ ├── docs # Documentations related components
│ │ ├── layouts # Layout components
│ │ ├── shared # Upper level components built on top of ui components
│ │ ├── template # Template components, such as Header, Footer, Nav, etc...
│ │ ├── ui # Bottom level components, such as Button, Dropdown, etc...
│ │ └── view # Sharable High level components that used for pages
│ ├── configs # Configuration files
│ │ └── ...
│ ├── constants # Constant files
│ │ └── ...
│ ├── i18n # Localization setup
│ │ └── ...
│ ├── mock # Mock data for fake API Calls
│ │ └── data # Mock data
│ │ | └── ... # Mock data TS files
│ ├── server # Server side files
│ │ └── actions # Server action files
│ │ | └── ...
│ ├── services # Service files for managing client API integrations
│ │ ├── ApiService.ts # Api request & response handler
│ │ ├── axios # Axios configs & interceptors
| | | └── ...
│ │ └── ... # Other service files
│ ├── utils # All reusable function & hooks
│ │ ├── hooks # Hooks
│ │ | └── ...
│ │ └── ... # Reusable functions
│ | auth.ts # Next auth setup entry file
│ └── middleware.ts # Nextjs middleware
├── .env # File to stores environment configuration and secrets
├── .eslintignore # Ignore file for eslint
├── .gitignore # Ignore file for git
├── .prettierignore # Ignore file for prettier
├── .prettierrc # Prettier config
├── next-env.d.ts # Nextjs environment declaration
├── next.config.mjs # Nextjs configuration file
├── package.json
├── package.lock.json
├── postcss.config.mjs # PostCss configuration file
├── README.md
├── tailwind.config.ts # TailwindCSS configuration file
└── tsconfig.json # Project Typescript configuration file
This folder structure provides a clear organization of resources, components, configuration, and assets, making it easier to manage and scale your project. Each folder and file is purposefully placed to ensure a clean and maintainable codebase.

Routing
Ecme routing follows the Next.js App Router conventions, it uses a file-based routing system where each file in the /app directory corresponds to a route in your application. Subfolders represent nested routes, making it easy to structure complex navigation.

For detailed information & concepts about the Next.js App Router, please refer to the documentation

Route configuration
Although Next.js provides a robust and powerful routing system out of the box, our template introduces an additional layer of routing configuration. This approach allows us to extend and customize the behavior of each page while maintaining flexibility and scalability

The router configuration for the template can be found in src/configs/routes.config/index.ts. There are 3 main groups of routes:

export const publicRoutes = [
...
]

export const protectedRoutes = [
...
]

export const authRoutes = [
...
]
publicRoutes:
This group includes all routes that are accessible to all users.

protectedRoutes:
This group contains routes that require authentication to access.

authRoutes:
This group configuration handles routes related to login, registration, and authentication processes.

Configuration Structure
Our custom routing configuration introduces a structured way to define and extend the behavior of each route in the application. Here's a breakdown of the configuration structure:

export const protectedRoutes = {
'/articles': {
key: 'articles',
authority: [ADMIN, USER],
meta: {
pageContainerType: 'contained',
},
},
'/articles/[slug]': {
key: 'articles.articleDetails',
authority: [ADMIN, USER],
meta: {
pageContainerType: 'contained',
},
dynamicRoute: true
},
}
Key Components of the Configuration:
Route Keys (Matchers):
Each key in theroutes object (e.g., '/articles','/articles/[slug]') serves as a route matcher for the current URL. When a user visits a page, the application matches the URL against the route keys in the configuration. Once a match is found, it retrieves the corresponding route data from the configuration object and applies the defined settings.

For example:

'/articles' matches a static route.
'/articles/[slug]' matches a dynamic route, where[slug] is a placeholder for replaced with the actual dynamic value from the URL.
Configuration Object:
Each route key maps to a configuration object containing the following properties:

key:
An identifier for the route that pair with navigation config.
authority:
An array of roles (e.g., [ADMIN, USER]) that specifies which user roles are allowed to access the route. This implements Role-Based Access Control (RBAC).
meta:
Metadata for the route, providing additional customization options:
dynamicRoute:
A boolean flag indicating whether the route is dynamic (i.e., contains a parameter placeholder [slug]).
Authority
Ecme routes support simple role-based access control. You can specify the roles that have access to a route by using the authority field. For example, the following route is only accessible to users with the 'admin' or 'user' roles. If the authority field is left as an empty array, the route will be open to all roles.

export const protectedRoutes = [
{
...
authority: ['admin', 'user'],
},
]
Of course, the authority model is flexible and can be changes to meet your projects specific requirements. You can configure it to intercept user access either at the middleware level on the server or directly at the client level for enhanced control.

Meta
The meta field allows you to pass additional information to the PageContainer or the view component associated with the route.

export const protectedRoutes = [
{
...
meta: {
pageContainerType: 'gutter',
header: {
title: 'My tittle',
description: 'Some description'
contained: false,
extraHeader: lazy(() => import('@/components/SomeComponent')),
},
footer: false,
layout: 'blank',
}
},
]
The layout will be able to access all the meta data specified.

properties Description Type Default
pageContainerType Defines the type of the view container 'default' | 'gutterless' | 'contained' 'default'
pageBackgroundType Define the type of the page background 'default' | 'plain' -
header Specifies the page header & further configuration { title?: string | ReactNode | LazyExoticComponent<() => JSX.Element> description?: string | ReactNode contained?: boolean extraHeader?: string | ReactNode | LazyExoticComponent<() => JSX.Element> } -
footer Determines whether to display the footer boolean true
layout Overrides the current layout for this page 'blank' | 'collapsibleSide' | 'stackedSide' | 'topBarClassic' | 'framelessSide' | 'contentOverlay' -

Create New Page
This guide walks you through the steps to create a new page in the template. By leveraging Next.js file-system routing and the extended routing configuration, you can easily add new pages with tailored settings.

Create the Page Component
Navigate to the app directory
In the src/app folder, decide where your new page should go. For example, if the page requires authentication, place it in thesrc/app/(protected-pages) directory. If it doesn't require authentication, use thesrc/app/(public-pages) directory instead.

Create a New File
Create a file named after the new route. For example:

For a static route, createsrc/app/new-page/page.tsx.
For a dynamic route, use brackets to define parameters, e.g.,src/app/new-page/[id]/page.tsx.
Add Your Page Code
Define the React component for your page. Example:

const Page = () => {
return (
<div>
<h1>Welcome to the New Page</h1>
<p>This is a custom page.</p>
</div>
);
};

export default Page;
Add Routing Configuration
Extend the routing setup, update the src/configs/route.config/routes.config.ts protectedRoutes or publicRoutes configuration to include your new page. For example:

import { ADMIN, USER } from '@/constants/roles';

export const protectedRoutes = {
...protectedRoutes,
'/new-page': {
key: 'newPage',
authority: [ADMIN, USER],
meta: {
pageContainerType: 'contained',
},
},
};
In Next.js, creating a new page is as simple as adding a folder and a page.tsx file

Additional Notes
Instead of applying 'use client' directly to the page file, it is recommended to create a separate client component and import it into the page. This approach allows the page itself to remain server-rendered, optimizing server-side rendering (SSR) and letting only the client-side logic be handled in the client component. For example:

// src/app/(protected-pages)/new-page/page.tsx
import ClientComponent from './ClientComponent';

const NewPage = () => {
return (
<div>
<h1>New Page</h1>
<ClientComponent />
</div>
);
};

export default NewPage;
// src/app/(protected-pages)/new-page/\_components/ClientComponent.tsx
'use client';

const ClientComponent = () => {
return <p>This component runs on the client.</p>;
};

export default ClientComponent;
This way, the page can process SSR tasks before rendering client-side components.

API Integration
Next.js provides a built-in API routing system, enabling you to define backend functionality directly within your application. This system allows you to handle requests, process data, and communicate with external services seamlessly, all while colocating your API logic with your Next.js project structure.

In this section, we'll explore how APIs work in Next.js, provide examples of creating API routes, and demonstrate how it work with Ecme.

How API Routes Work
File-based API Routes:
API routes are created inside the /app/api directory. Each file within this directory defines an endpoint. The file name (or folder structure) corresponds to the endpoint's path.

Request and Response Objects:
API routes handle requests and responses using Node.js-stylereq and res objects. This makes it easy to process incoming data and send responses.

Server-side Execution:
API routes always run on the server, ensuring secure handling of sensitive operations such as database queries or authentication logic.

For more comprehensive details, refer to the official Next.js documentation on API Routes.

Creating API Routes
Here's an example of creating a simple API route

Create the API Route:
Create a file named hello.ts in the src/app/api/hello/route.ts directory:
Typescript
Javascript
import { NextResponse } from 'next/server';

const mockMethodThatSavesToDatabase = async (data) => {
// Simulate saving to a database
console.log('Data saved to database:', data);
};

export async function POST(request: Request) {
try {
// Fetch data from an external API
const externalApiResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const externalData = await externalApiResponse.json();

        // Save the fetched data to the database
        await mockMethodThatSavesToDatabase(externalData);

        return NextResponse.json({ message: 'Data saved successfully', data: externalData });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save data', details: error.message }, { status: 500 });
    }

}
Calling an API Route from the Client Side
To simplify client-side API calls, our template includes a utility ApiService under the services directory. This utility: Accepts an Axios request configuration andautomatically handles responses and errors, returning only the relevant data or error details. Here's how it works:

Start by creating a new service file specific to your feature or module. For instance, if you're working on user management, create a file named UserManagementService.ts in the services directory.

Inside the service file, declare an asynchronous function to handle the API request. This function should utilize ApiService.fetchData, accepting two generic types: Response and Request, along with the Axios configuration. Here's an example:

Typescript
Javascript
type MyApiResponse = {
someResponseData: string
someResponseData2: boolean
}

type MyApiRequest = {
someRequestData: string
}

export async function myApi (data) {
return ApiService.fetchData<MyApiResponse,MyApiRequest>({
url: '/my-api-url',
method: 'post',
data
})
}
...
or forwarding the type to generic from comsumer level:

Typescript
Javascript
import ApiService from "./ApiService"

export async function myApi<TResponse, TRequest>(data) {
return ApiService.fetchData<TResponse, TRequest>({
url: '/my-api-url',
method: 'post',
data
})
}
...
And now you can hook up this API in your component

Typescript
Javascript
type MyApiResponse = {
someResponseData: string
someResponseData2: boolean
}

type MyApiRequest = {
someRequestData: string
}

import { myApi } from './MyService.ts'

const MyComponent = props => {

    const fetchData = async () => {
        const reqeustParam = { key: 'value'}
        try {
            const resp = await myApi<MyApiResponse, MyApiRequest>(reqeustParam)
            if (resp.data) {
                ...do something
            }
        } catch (errors) {
            ...handle errors
        }
    }

    // You can
    useEffect(() => {
        fetchData()
    }, [])

    return (
    ...

)
Note: You can also use data-fetching libraries like SWR or TanStack Query for a more declarative approach to data fetching. The choice depends on your specific needs.

With ApiService, handling client-side API calls becomes standardized and easier to maintain. Combined with Next.js API routes, you can seamlessly manage server-side logic and interact with your backend.

Authentication
Ecme uses NextAuth.js as the authentication solution, offering a robust and flexible way to handle user authentication, it supports custom authentication flows and provides a wide range of authentication providers, including Google, GitHub, and more.

NextAuth relies on environment variables for secure configuration. By default, our template includes the following variables in the .env file:

# Authentication Secret

AUTH_SECRET=your-secret-key

# Base URL for NextAuth callbacks

NEXTAUTH_URL=http://localhost:3000

# OAuth Provider (Google)

GOOGLE_AUTH_CLIENT_ID=your-google-client-id
GOOGLE_AUTH_CLIENT_SECRET=GOCSPX-your-google-secret

# OAuth Provider (Github)

GITHUB_AUTH_CLIENT_ID=your-github-client-id
GITHUB_AUTH_CLIENT_SECRET=your-github-secret
AUTH_SECRET: A random string used to encrypt session tokens.
NEXTAUTH_URL: The base URL for your application, used in redirect callbacks. Update this in production to match your deployed domain.
GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET, GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET, : Credentials for integrating with OAuth.
In our template, the NextAuth configuration is centralized in the auth.config.ts file located in src/configs/This file defines the authentication providers and callback handlers to extend session attributes.

Credentials Provider
The Credentials provider allows custom authentication logic via the authorize method, when the user signs in, the credentials are validated using a backend action validateCredential. If validation passes, the user object is returned; otherwise, null is returned. You can impletment your own user validate logic in validateCredential method, it can be an api call or a database query.

Typescript
Javascript
import type { NextAuthConfig } from "next-auth";
import validateCredential from "../server/actions/user/validateCredential";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { SignInCredential } from "@/@types/auth";

export default {
providers: [
..., // other providers, e.g., Github, Google
Credentials({
async authorize(credentials) {
/\*_ validate credentials from backend here _/
const user = await validateCredential(credentials as SignInCredential)
if(!user) {
return null
}

                return {
                    id: user.id,
                    name: user.userName,
                    email: user.email,
                    image: user.avatar,
                };
            },
        }),
    ],
    callbacks: {
        async session(payload) {

            /** apply extra user attributes here, for example, we add 'authority' & 'id' in this section */
            return {
                ...payload.session,
                user: {
                  ...payload.session.user,
                  id: payload.token.sub,
                  authority: ['admin', 'user']
                },
            }
        }
    },

} satisfies NextAuthConfig;
OAuth Integration
NextAuth supports a wide range of OAuth providers, you can check out this link for more built in providers NextAuth supports. Below is an example of integrating Google as an OAuth provider.

export default {
providers: [
Google({
clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
}),
]
}
Accessing Sessions on Client and Server
Authentication often requires session management both on the client and server. Our template provides utilities for handling sessions seamlessly in both environments

Client Side:
While NextAuth provides the useSession hook, it has known re-render issues. To address this, we includes a custom session hook called useCurrentSession. It provides a same but lesser defects way to manage the session state on the client.

import useCurrentSession from '@/utils/hooks/useCurrentSession';

const Component = () => {
const { session } = useCurrentSession();

    return (
        <div>
            {session ? (
                <>
                    <h1>Welcome, {session.user.name}!</h1>
                    <p>Email: {session.user.email}</p>
                </>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );

};

export default Component
Server Side:
For server-side operations, you can use the auth() function to securely retrieve session details. This is particularly useful when you are restricting user access to some routes or pre fetching user data before rendering the page

import { auth } from "@/auth";

export default async function Page() {
const session = await auth();

    if (!session) {
        // Redirect or show an error for unauthenticated users
        return <p>You must be logged in to view this page.</p>;
    }

    return (
        <div>
            <h1>Welcome, {session.user.name}!</h1>
            <p>Your email: {session.user.email}</p>
        </div>
    );

}
Removing auth
If you choose not to use NextAuth, follow these steps to remove it:

Uninstall NextAuth:
npm uninstall next-auth
Remove next auth related files:
Remove the src/configs/auth.config.ts.
Delete dynamic API routes at pages/api/auth/[...nextauth].
Reset or delete(if you do not need routing protection) middleware.ts.
Remove all auth() & useCurrentSession() implementations from following components:
app/layout.tsx
components/template/HorizontalNav.tsx
components/template/MobileNav.tsx
components/template/SideNav.tsx
components/template/UserProfileDropdown.tsx
components/template/StackeSideNav.tsx
By following these steps, you can successfully remove NextAuth from the template and replace it with your preferred authentication method.

Official Documentation
For further details on using NextAuth, visit the NextAuth.js Documentation.

State management
In this template, we've integrated Zustand for client side state management. Zustand is a small, fast, and scalable state management solution that allows you to manage state for your client-side components in a simple and efficient way.

We use Zustand to manage some of the core states in the demo, but it's entirely optional for you to continue using it in your projects. If you prefer a different state management library or even the built-in React state, you can easily switch to what best suits your needs.

Creating a Zustand State
Creating a Zustand store is straightforward. Below is an example of how you can create a global state to manage a simple counter:

Typescript
Javascript
import create from 'zustand'

type CouterState = {
count: number
}

type CouterAction = {
increaseCount: () => void
decreaseCount: () => void
}

// Define the store
const useCounterStore = create<CouterState & CouterAction>((set) => ({
count: 0,
increaseCount: () => set((state) => ({ count: state.count + 1 })),
decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}))

export default useCounterStore
In this example, we've created a store with a count state and two actions: increaseCount and decreaseCount. These actions update the state by increasing or decreasing the count.

Using Zustand State in a Component
Once you've created the store, using it in a component is simple. Here's how you can integrate the useCounterStore into a React component:

import useCounterStore from './path/to/store'

const Counter = () => {
const { count, increaseCount, decreaseCount } = useCounterStore()

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    )

}

export default Counter
In this component, we use the useCounterStore hook to access the count state and the two actions. The UI updates automatically whenever the state changes, and the buttons allow the user to interact with the state.

This is just a basic example to get you started. Zustand is flexible and can be used for more complex state management scenarios as your application grows. If you want to explore more advanced usage, we recommend checking out the official Zustand documentation.

App Config
You can configure various static app settings in src/configs/app.config.ts. Below are the default configurations for both the demo and starter versions.

Demo Configuration
Typescript
Javascript
const appConfig: AppConfig = {
apiPrefix: '/api',
authenticatedEntryPath: '/dashboards/ecommerce',
unAuthenticatedEntryPath: '/sign-in',
locale: 'en',
activeNavTranslation: true
}
Starter Configuration
Typescript
Javascript
const appConfig: AppConfig = {
apiPrefix: '/api',
authenticatedEntryPath: '/home',
unAuthenticatedEntryPath: '/sign-in',
locale: 'en',
activeNavTranslation: false
}
Configuration Metadata
Property Description Type Default (Demo) Default (Starter)
apiPrefix The base path for all API requests. string '/api' '/api'
authenticatedEntryPath The path users are redirected to after successful authentication. string '/app/sales/dashboard' '/home'
unAuthenticatedEntryPath The path users are redirected to if they are not authenticated. string '/sign-in' '/sign-in'
locale The default language/locale for the app. string 'en' 'en'
activeNavTranslation Enables or disables the tranlation fucntionality that implmented in navigation. boolean true false

Layouts
Ecme provide 6 types of post login layouts & 3 types of auth layouts, all layouts component can be found under directory src/components/layouts/PostLoginLayout/components*and all the components used within layouts can be found under src/components/template/*

The following was the post login layouts that we had:

Collapsible side - 'collapsibleSide'
Stacked side - 'stackedSide'
Top bar classic - 'topBarClassic'
Frameless side - 'framelessSide'
Content overlay - 'contentOverlay'
Blank - 'blank'
Configuring Layout
You can config the initial layout in src/configs/theme.config.ts with the string value above

export const themeConfig = {
...
layout: {
type: 'framelessSide',
...
},
}
Here's available values & key for configuring the layout field

properties Description Type Default
type Type of the application layout 'blank' | 'collapsibleSide' | 'stackedSide' | 'topBarClassic' | 'framelessSide' | 'contentOverlay' 'modern'
sideNavCollapse Whether to collapse the side navigation (only only applicable when type is 'classic' or 'modern') boolean false
Overriding layouts
In general, all route views will follow the settings of the layout in theme.config.ts. However, if there are some cases where you want to show a different layout in a certiain route view, you can the layout value you wish under the route meta to overide the current layout as we mentioned in Routing guide.

export const protectedRoutes = {
'/your-page-path': {
key: 'keyForYourPage',
authority: [ADMIN, USER],
meta: {
...
layout: 'blank',
},
},
}
Auth layouts
Configuring auth layout is slightly different from the above, just need to visit src/app/(auth-pages)/layout.tsx and replace the wrapper component. For example, switching side to simple

import { ReactNode } from 'react'
import Side from '@/components/layouts/AuthLayout/Side'
import Simple from '@/components/layouts/AuthLayout/Simple'
// import Split from '@/components/layouts/AuthLayout/Split'

const Layout = ({ children }: { children: ReactNode }) => {
return (
<div className="flex flex-auto flex-col h-[100vh]">
<Simple>
<Side>
{children}
</Simple>
<Side/>
</div>
)
}

export default Layout

Navigation Config
We form our navigation structure as array of objects & render it into UI eventually. You can change or customize the app navigation very easily by accessing src/configs/navigation.config/index.ts

Here is the type for a single menu item

export type HorizontalMenuMeta = {
layout: 'default'
} | {
layout: 'columns'
showColumnTitle?: boolean
columns: 1 | 2 | 3 | 4 | 5
} | {
layout: 'tabs'
columns: 1 | 2 | 3 | 4 | 5
}

export interface NavigationTree {
key: string
path: string
isExternalLink?: boolean
title: string
translateKey: string
icon: string
type: 'title' | 'collapse' | 'item'
authority: string[]
subMenu: NavigationTree[]
description?: string
meta?: {
horizontalMenu?: HorizontalMenuMeta
description?: {
translateKey: string
label: string
}
}
}

properties Description Type Default
key An key that match with the route for highlighting purpose string -
path An URL that this menu item link to string -
isExternalLink Whether to open link in new tab upon click boolean -
title Rendered text of this menu item string -
translateKey Translate key to translate the rendered text in menu item, fallback to title if empty or invalid string -
icon Render icon in menu item, string value must tally with object key in navigation-icon.config.tsx string -
type To define the type of current menu item 'title' | 'collapse' | 'item' -
authority Display menu items to users who have the roles given, there will be no access block if the this field is undefine or empty array string[] -
subMenu Whether have child in this menu item, it will render a menu group under this menu item, if the type is 'title' or 'collapse', this field accept properties within this table navigationConfig[] -
meta This is an optional configuration field for navigation. It can include additional information that's only needed in specific use cases { horizontalMenu?: HorizontalMenuMeta description?: { translateKey: string label: string } } -
meta.horizontalMenu Further configuration for horizontal menu, e.g layout, columns & etc. { layout: 'default' } | { layout: 'columns' showColumnTitle?: boolean columns: 1 | 2 | 3 | 4 | 5 } | { layout: 'tabs' columns: 1 | 2 | 3 | 4 | 5 } -
meta.description Description of the page, description only available when themeConfig.layout.type is 'contentOverlay' navigationConfig[] -
An example of structured navigation config

const navigationConfig = [
{
key: 'uiComponent',
path: '',
title: 'Ui Component',
translateKey: 'nav.uiComponents',
icon: 'uiComponents',
type: 'title',
authority: ['admin', 'user'],
/\*_ We can define mnu config here, if we are using horizontal menu _/
meta: {
horizontalMenu: {
layout: 'columns',
columns: 4
}
},
subMenu: [
{
key: 'uiComponent.common',
path: '',
title: 'Common',
translateKey: 'nav.uiComponentsCommon.common',
icon: 'common',
type: 'collapse',
authority: ['admin', 'user'],
subMenu: [
{
key: 'uiComponent.common.button',
path: '/button',
title: 'Button',
translateKey: 'nav.uiComponentsCommon.button',
icon: '',
type: 'item',
authority: ['admin', 'user'],
subMenu: []
},
{
key: 'uiComponent.common.typography',
path: '/typography',
title: 'Typography',
translateKey: 'nav.uiComponentsCommon.typography',
icon: '',
type: 'item',
authority: ['admin', 'user'],
subMenu: []
}
]
}
]
}
]
Configuring navigation icon
Navigation icon configuration placed on seperate file in src/configs/navigation-icon.config.tsx

In the above example, we use string value uiComponents in the icon field, we must then use this value in navigation-icon.config.ts to define the icon for the callout.

First, import the icon you want from react-icons

import { FaBeer } from 'react-icons/fa'

const navigationIcon = {}
Set the value used in icon field as & the imported icon component as value

import { FaBeer } from 'react-icons/fa'

const navigationIcon = {
uiComponents: <FaBeer />
}
Now the corresponding menu item will render FaBeer as the menu icon.

Theming
We manage the theme color scheme using CSS variables, making it easy to customize and extend the theme. You can modify the theme colors by editing the CSS variables in the file located at:assets/styles/tailwind/index.css

Here is the default setup for the light and dark modes:

:root {
--neutral: #ffffff;
--primary: #2a85ff;
--primary-deep: #0069f6;
--primary-mild: #4996ff;
--primary-subtle: #2a85ff1a;
--error: #ff6a55;
--error-subtle: #ff6a551a;
--success: #10b981;
--success-subtle: #05eb7624;
--info: #2a85ff;
--info-subtle: #2a85ff1a;
--warning: #f59e0b;
--warning-subtle: #ffd40045;
--gray-50: #fafafa;
--gray-100: #f5f5f5;
--gray-200: #e5e5e5;
--gray-300: #d4d4d4;
--gray-400: #a3a3a3;
--gray-500: #737373;
--gray-600: #525252;
--gray-700: #404040;
--gray-800: #262626;
--gray-900: #171717;
--gray-950: #0a0a0a;
}

.dark {
--neutral: #ffffff;
--primary: #2a85ff;
--primary-deep: #0069f6;
--primary-mild: #4996ff;
--primary-subtle: #2a85ff1a;
--error: #ff6a55;
--error-subtle: #ff6a551a;
--success: #10b981;
--success-subtle: #05eb7624;
--info: #2a85ff;
--info-subtle: #2a85ff1a;
--warning: #f59e0b;
--warning-subtle: #ffd40045;
--gray-50: #fafafa;
--gray-100: #f5f5f5;
--gray-200: #e5e5e5;
--gray-300: #d4d4d4;
--gray-400: #a3a3a3;
--gray-500: #737373;
--gray-600: #525252;
--gray-700: #404040;
--gray-800: #262626;
--gray-900: #171717;
--gray-950: #0a0a0a;
}
Setting Up a Dynamic Theme
If you want to enable dynamic theme switching in your application, you'll need to take a few extra steps. First, configure your theme schema in the configs/theme.config.ts file:

Typescript
Javascript
export type Variables =
| "primary"
| "primaryDeep"
| "primaryMild"
| "primarySubtle"
| "neutral";

export type ThemeVariables = Record<
"light" | "dark",
Record<Variables, string>

>

/\*_ Default theme schema should corresponding to the CSS variables _/
const defaultTheme: ThemeVariables = {
light: {
primary: "#2a85ff",
primaryDeep: "#0069f6",
primaryMild: "#4996ff",
primarySubtle: "#2a85ff1a",
neutral: "#ffffff",
},
dark: {
primary: "#2a85ff",
primaryDeep: "#0069f6",
primaryMild: "#4996ff",
primarySubtle: "#2a85ff1a",
neutral: "#ffffff",
},
}

/\*_ Example of a custom green theme schema _/
const greenTheme: ThemeVariables = {
light: {
primary: "#0CAF60",
primaryDeep: "#088d50",
primaryMild: "#34c779",
primarySubtle: "#0CAF601a",
neutral: "#ffffff",
},
dark: {
primary: "#0CAF60",
primaryDeep: "#088d50",
primaryMild: "#34c779",
primarySubtle: "#0CAF601a",
neutral: "#ffffff",
},
}

const presetThemeSchemaConfig: Record<string, ThemeVariables> = {
default: defaultTheme,
green: greenTheme,
}

export default presetThemeSchemaConfig
Now that your theme schemas are set up, you can use the useTheme hook to switch between different theme colors. Here's an example of how you might implement a theme switcher:

import classNames from '@/utils/classNames'
import { TbCheck } from 'react-icons/tb'
import presetThemeSchemaConfig from '@/configs/preset-theme-schema.config'
import useTheme from '@/utils/hooks/useTheme'

const ThemeSwitcher = () => {
const schema = useTheme((state) => state.themeSchema)
const setSchema = useTheme((state) => state.setSchema)
const mode = useTheme((state) => state.mode)

    return (
        <div className="inline-flex items-center gap-2">
            {Object.entries(presetThemeSchemaConfig).map(([key, value]) => (
                <button
                    key={key}
                    className={classNames(
                        'h-8 w-8 rounded-full flex items-center justify-center border-2 border-white',
                        schema === key && 'ring-2 ring-primary',
                    )}
                    style={{ backgroundColor: value[mode].primary || '' }}
                    onClick={() => setSchema(key)}
                >
                    {schema === key ? (
                        <TbCheck className="text-neutral text-lg" />
                    ) : (
                        <></>
                    )}
                </button>
            ))}
        </div>
    )

}

export default ThemeSwitcher
This guide should help you effectively manage and switch themes within your application. You can extend the theme schemas as needed to fit your design requirements.

Internationalization
Our template uses next-intl to handle internationalization (i18n). By default, the starter does not include i18n setup, as not every project requires this feature. However, we offer two distinct setups to cater to both scenarios: Without i18n Routing (default) and With i18n Routing.

We integrates i18n into the navigation module by default. If you need to having i18n in your app, you might need to toggle the activeNavTranslation field in src/configs/app.config.ts to true.

// src/configs/app.config.ts
export const appConfig: AppConfig = {
...
activeNavTranslation: true
}
Without i18n Routing
This setup is designed for simplicity, allowing you to manage translations without involving URL structures, which we implemented in our demo.

Add your translation files to the messages folder in the root directory:

messages/
├── en.json
├── es.json
└── fr.json
This is a simplest example to add your translation key to a JSON files

// messages/en.json
{
"title": "Home",
}
// messages/es.json
{
"title": "Inicio",
}
Wrap the application with LocaleProvider in src/app/layout.tsx and inject necessary props

Typescript
Javascript
// src/app/layout.tsx
...
import LocaleProvider from "@/components/template/LocaleProvider";
import { getLocale, getMessages } from "next-intl/server";

export default async function RootLayout({
children,
}: Readonly<{
children: ReactNode;
}>) {

    const locale = await getLocale();

    const messages = await getMessages();

    ...

    return (
        <html suppressHydrationWarning>
            <body suppressHydrationWarning>
                <LocaleProvider locale={locale} messages={messages}>
                    <ThemeProvider locale={locale} theme={theme}>
                        ...other components
                        {children}
                    </ThemeProvider>
                </LocaleProvider>
            </body>
        </html>
    );

}
Now you can use translations in your page components or anywhere else with useTranslation hook

import {useTranslations} from 'next-intl';

export default function HomePage() {
const t = useTranslations();
return <h1>{t('title')}</h1>;
}
With i18n Routing
Next Intl provide i18n Routing setup, it use unique pathnames for every language that your app supports, this setup can be useful if you need a Prefix-based routing (e.g. /en/about) or Domain-based routing (e.g. en.example.com)

Setting up i18n routing in a Next.js app requires more effort compared with the above one. This setup involves changes to the project structure and additional configurations.

If you're considering implementing i18n routing, refer to the official next-intl documentation for a comprehensive guide: App Router setup with i18n routing

Changing language
If you need to switch languages dynamically(Without i18n Routing), you can use the i18n object provided by the useTranslation hook to change the current language.

Typescript
Javascript
'use client'

import { setLocale } from '@/server/actions/locale'

const Component = () => {

    const handleUpdateLocale = async (locale: string) => {
        await setLocale(locale)
    }

    return (
        <button onClick={() => handleUpdateLocale('fr')}>Change language</button>
    )

}

export default Component
Setting the Default Language
To set the default language, you might need to visit src/configs/app.config.ts and change the locale field value

export const appConfig: AppConfig = {
...
locale: 'fr'
}
Adding new locale
To support a new language in your app, create a new JSON file for the locale inside the messages folder. For example, to add French translations, create a file named messages/fr.json:

// messages/fr.json
{
"HomePage": {
"title": "Bonjour le monde!",
"about": "Aller à la page à propos"
}
}
Register the new locale value in src/i18n/dateLocales.ts

Typescript
Javascript
export const dateLocales: {
[key: string]: () => Promise<ILocale>
} = {
...
fr: () => import('dayjs/locale/fr'),
}
For i18n Routing, you might need to include the new locale value to routing configuration & middleware

Dark/Light Mode
To initialize dark or light mode to the app, simply set mode field as'light' or 'dark' in src/configs/theme.config.ts. For example:

export const themeConfig = {
...
mode: 'dark'
}
Hook
You can access or update the mode in a component via our prepared hook.

Typescript
Javascript
'use client'

import useTheme from '@/utils/hooks/useTheme'
import Switcher from '@/components/ui/Switcher'

const ModeSwitcher = () => {

    const mode = useTheme((state) => state.mode)
    const setMode = useTheme((state) => state.setMode)

    const onSwitchChange = (checked: boolean) => {
        setMode(checked ? 'dark' : 'light')
    }

    return (
        <div>
            <Switcher
                defaultChecked={mode === 'dark'}
                onChange={onSwitchChange}
            />
        </div>
    )

}

export default ModeSwitcher

Direction
To initialize the app direction, simply set direction field as'ltr' or 'rtl' in src/configs/theme.config.ts. For example:

export const themeConfig = {
...
direction: 'rtl'
}
Hook
You can access or update the direction in a component via our prepared hook.

Typescript
Javascript
'use client'

import Button from '@/components/ui/Button'
import InputGroup from '@/components/ui/InputGroup'
import useTheme from '@/utils/hooks/useTheme'
import { THEME_ENUM } from '@/constants/theme.constant'
import type { Direction } from '@/@types/theme'

const dirList = [
{ value: THEME_ENUM.DIR_LTR, label: 'LTR' },
{ value: THEME_ENUM.DIR_RTL, label: 'RTL' },
]

const DirectionSwitcher = (props: {
callBackClose?: () => void
}) => {

    const setDirection = useTheme((state) => state.setDirection)
    const direction = useTheme((state) => state.direction)

    const onDirChange = (val: Direction) => {
        setDirection(val)
    }

    return (
        <InputGroup size="sm">
            {dirList.map((dir) => (
                <Button
                    key={dir.value}
                    active={direction === dir.value}
                    onClick={() => onDirChange(dir.value)}
                >
                    {dir.label}
                </Button>
            ))}
        </InputGroup>
    )

}

export default DirectionSwitcher

Overall Theme Config
The file src/configs/theme.config.ts contains the default theme settings for the template. These configurations are predefined but can be customized to suit your needs. Below is the default configuration:

If you realize that the theme did not change after setting a new value to the configuration, you could consider to clear the theme key from cookies

Typescript
Javascript
import { THEME_ENUM } from '@/constants/theme.constant'
import {
Direction,
Mode,
ControlSize,
LayoutType,
} from '@/@types/theme'

export type ThemeConfig = {
themeSchema: string
direction: Direction
mode: Mode
panelExpand: boolean
controlSize: ControlSize
layout: {
type: LayoutType
sideNavCollapse: boolean
}
}

export const themeConfig: ThemeConfig = {
themeSchema: '',
direction: THEME_ENUM.DIR_LTR,
mode: THEME_ENUM.MODE_LIGHT,
panelExpand: false,
controlSize: 'md',
layout: {
type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
sideNavCollapse: false,
},
}
Configuration Properties
Prop Description Type Default
themeSchema Sets the color scheme of the template. you can leave this field empty if you are having dynamic theme in your app string ''
direction Defines the text direction for the template. 'ltr' | 'rtl' 'ltr'
mode Toggles between Light and Dark mode. 'light' | 'dark' 'light'
panelExpand Determines whether the side panel is expanded by default. boolean false
controlSize Sets the initial size of control inputs. 'xs' | 'sm' | 'md' | 'lg' 'md'
layout.type Defines the overall layout style of the application. 'blank' | 'collapsibleSide' | 'stackedSide' | 'topBarClassic' | 'framelessSide' | 'contentOverlay' 'modern'
layout.sideNavCollapse Specifies whether the side navigation is collapsed. This option is only applicable when type is set to 'collapsibleSide' or 'framelessSide'. boolean false
State Persistence
We store the theme configuration in cookies, but it's only saved there when the theme is changed using the useTheme hook. By default, the theme configuration is loaded from theme.config.tsx.

Build production
This section covers the steps to deploy your app to a live environment. Whether you're using Vercel or a custom hosting solution, follow these guidelines to ensure a smooth deployment process.

For detailed instructions on platform-specific deployments, refer to the Next.js Deployment Documentation.

Preparing for Deployment
Before deploying, ensure that your app is production-ready:

Environment Variables:
Verify that all required variables (e.g., API keys, database URLs) are correctly set in your environment configuration.
Build Optimizations
Run the following command to create an optimized production build:

npm run build
Testing
Test your app locally using the production build to identify potential issues:

npm run start
Deploying to Vercel
Vercel is a popular platform for deploying Next.js apps.

Connect to Vercel: Sign in toVercel and import your Git repository.
Configure Build Settings: Ensure the framework is set toNext.js, and the build command isnpm run build.
Environment Variables: Add environment variables directly in the Vercel dashboard.
Deploy: ClickDeploy, and Vercel will automatically handle the rest.
Custom Hosting
If you're deploying to a custom server or VPS, make sure Node.js installed on your server.

Build the App: Run the production build
npm run build
Build the App
npm run start
You can use a process manager like pm2 or Docker to manage your app

## Credits

Sources & Credits
Name URL License
@floating-ui/react https://github.com/floating-ui/floating-ui MIT
@floating-ui/core https://github.com/fullcalendar/fullcalendar MIT
@fullcalendar/daygrid https://github.com/fullcalendar/fullcalendar MIT
@fullcalendar/interaction https://github.com/fullcalendar/fullcalendar MIT
@fullcalendar/react https://github.com/fullcalendar/fullcalendar MIT
@fullcalendar/timegrid https://github.com/fullcalendar/fullcalendar MIT
@hello-pangea/dnd https://github.com/hello-pangea/dnd Apache
@hookform/resolvers https://github.com/react-hook-form/resolvers MIT
@tailwindcss/typography https://github.com/tailwindlabs/tailwindcss-typography MIT
@tanstack/match-sorter-utils https://github.com/tanstack/table MIT
@tanstack/react-table https://github.com/tanstack/table MIT
@tanstack/react-virtual https://github.com/TanStack/virtual MIT
@testing-library/jest-dom https://github.com/testing-library/jest-dom MIT
@testing-library/react https://github.com/testing-library/react-testing-library MIT
@testing-library/user-event https://github.com/testing-library/user-event MIT
@tiptap/pm https://github.com/ueberdosis/tiptap MIT
@tiptap/react https://github.com/ueberdosis/tiptap MIT
@tiptap/starter-kit https://github.com/ueberdosis/tiptap MIT
@visx/pattern https://github.com/airbnb/visx MIT
axios https://github.com/axios/axios MIT
axios-mock-adapter https://github.com/ctimmerm/axios-mock-adapter MIT
classnames https://github.com/JedWatson/classnames MIT
dayjs https://github.com/iamkun/dayjs/ MIT
d3-fetch https://github.com/d3/d3-fetch ISC
d3-dsv https://github.com/d3/d3-dsv ISC
d3-scale https://github.com/d3/d3-scale ISC
framer-motion https://github.com/framer/motion MIT
gantt-task-react https://github.com/MaTeMaTuK/gantt-task-react Apache
html-react-parser https://github.com/remarkablemark/html-react-parser MIT
lodash https://github.com/lodash/lodash MIT
marked https://github.com/markedjs/marked MIT
next https://github.com/vercel/next.js MIT
next-auth https://github.com/nextauthjs/next-auth ISC
next-intl https://github.com/amannn/next-intl MIT
postcss-import https://github.com/postcss/postcss-import MIT
react https://github.com/facebook/react/ MIT
react-apexcharts https://github.com/apexcharts/react-apexcharts MIT
react-dom https://github.com/facebook/react MIT
react-highlight-words https://github.com/bvaughn/react-highlight-words MIT
react-hook-form https://github.com/react-hook-form/react-hook-form MIT
react-i18next https://github.com/i18next/react-i18next MIT
react-icons https://github.com/react-icons/react-icons MIT
react-markdown https://github.com/remarkjs/react-markdown MIT
react-modal https://github.com/reactjs/react-modal MIT
react-number-format https://github.com/s-yadav/react-number-format MIT
react-portal https://github.com/tajo/react-portal MIT
react-scroll https://github.com/fisshy/react-scroll MIT
react-select https://github.com/JedWatson/react-select MIT
react-simple-maps https://github.com/zcreativelabs/react-simple-maps MIT
react-syntax-highlighter https://github.com/react-syntax-highlighter/react-syntax-highlighter MIT
react-tooltip https://github.com/wwayne/react-tooltip MIT
react-window https://github.com/bvaughn/react-window MIT
simplebar-react https://github.com/grsmto/simplebar MIT
swr https://github.com/vercel/swr MIT
autoprefixer https://github.com/postcss/autoprefixer MIT
postcss https://github.com/postcss/postcss MIT
postcss-preset-env https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env MIT
tailwindcss https://github.com/tailwindlabs/tailwindcss MIT
tailwind-merge https://github.com/dcastil/tailwind-merge MIT
typescript https://github.com/microsoft/TypeScript MIT
yet-another-react-lightbox https://github.com/igordanchenko/yet-another-react-lightbox/tree/main MIT
zod https://github.com/colinhacks/zod MIT
zustand https://github.com/pmndrs/zustand MIT
