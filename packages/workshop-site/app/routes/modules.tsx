import { Link, Outlet } from '@remix-run/react';
import moduleStyles from '~/styles/routes/modules.css';
import contentStyles from '~/styles/routes/module-content.css';

export function links() {
  return [
    { rel: 'stylesheet', href: moduleStyles },
    { rel: 'stylesheet', href: contentStyles }
  ];
}

function SidebarHeading({ text }: { text: string }) {
  return <h3 className="sidebar-heading">{text}</h3>;
}

function SidebarItem({ text, link }: { text: string; link: string }) {
  return (
    <li>
      <Link className="sidebar-link" to={link} prefetch="intent">
        {text}
      </Link>
    </li>
  );
}

const sidebarContent = [
  {
    heading: 'Introduction',
    items: [
      {
        text: 'Prerequisites',
        link: '/modules/introduction/prerequisites'
      },
      {
        text: 'Scenario',
        link: '/modules/introduction/scenario'
      }
    ]
  },
  {
    heading: 'PESPAs',
    items: [
      {
        text: 'Short History of Web Architecture',
        link: '/modules/pespas/short-history-of-web-architecture'
      },
      {
        text: 'Progressively Enhanced Single Page App',
        link: '/modules/pespas/progressively-enhanced-single-page-app'
      },
      {
        text: 'Where Does Remix Fit?',
        link: '/modules/pespas/where-does-remix-fit'
      }
    ]
  },
  {
    heading: 'Creating a Remix App',
    items: [
      {
        text: 'The Remix CLI',
        link: '/modules/creating-a-remix-app/the-remix-cli'
      },
      {
        text: 'Remix Stacks',
        link: '/modules/creating-a-remix-app/remix-stacks'
      },
      {
        text: 'Exercise',
        link: '/modules/creating-a-remix-app/exercise'
      }
    ]
  },
  {
    heading: 'Remix Routes',
    items: [
      {
        text: 'Defining a Route',
        link: '/modules/remix-routes/defining-a-route'
      },
      {
        text: 'Nested Routing',
        link: '/modules/remix-routes/nested-routing'
      },
      {
        text: 'Route Params',
        link: '/modules/remix-routes/route-params'
      },
      {
        text: 'Nested Layouts',
        link: '/modules/remix-routes/nested-layouts'
      },
      {
        text: 'Exercise',
        link: '/modules/remix-routes/exercise'
      }
    ]
  },
  {
    heading: 'Remix Loaders',
    items: [
      {
        text: 'Building a Data Model',
        link: '/modules/remix-loaders/building-a-data-model'
      },
      {
        text: 'Defining a Loader',
        link: '/modules/remix-loaders/defining-a-loader'
      },
      {
        text: 'Rendering Data',
        link: '/modules/remix-loaders/rendering-data'
      },
      {
        text: 'Loader Benefits',
        link: '/modules/remix-loaders/loader-benefits'
      },
      {
        text: 'Exercise',
        link: '/modules/remix-loaders/exercise'
      }
    ]
  },
  {
    heading: 'Remix Actions',
    items: [
      {
        text: 'Updating Our Data Model',
        link: '/modules/remix-actions/updating-our-data-model'
      },
      {
        text: 'Building a Form',
        link: '/modules/remix-actions/building-a-form'
      },
      {
        text: 'Defining an Action',
        link: '/modules/remix-actions/defining-an-action'
      },
      {
        text: 'Exercise',
        link: '/modules/remix-actions/exercise'
      }
    ]
  },
  {
    heading: 'In Review',
    items: [
      {
        text: 'What We Learned',
        link: '/modules/in-review/what-we-learned'
      },
      {
        text: 'Questions',
        link: '/modules/in-review/questions'
      }
    ]
  }
];

export default function Modules() {
  return (
    <div className="layout">
      <div className="menu">
        <Link to="/" prefetch="intent">
          Intro to Remix
        </Link>
      </div>

      <div className="sidebar">
        {sidebarContent.map((section, sectionIndex) => (
          <div key={sectionIndex} className="sidebar-section">
            <SidebarHeading text={section.heading} />
            <hr />

            <ul className="sidebar-list">
              {section.items.map((item, itemIndex) => (
                <SidebarItem
                  key={`${sectionIndex} - ${itemIndex}`}
                  text={item.text}
                  link={item.link}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="content">
        <div className="padding">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
