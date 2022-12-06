import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';
import globalStyles from '~/styles/global.css';
import resetStyles from '~/styles/reset.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Intro to Remix',
  viewport: 'width=device-width,initial-scale=1'
});

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: globalStyles
    },
    {
      rel: 'stylesheet',
      href: resetStyles
    }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
