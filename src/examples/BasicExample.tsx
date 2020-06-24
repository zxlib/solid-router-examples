import { Component, createEffect } from 'solid-js';
import {
  Route,
  useRouter,
  RouteSwitch,
  createLinkComponent,
} from '@zxlib/solid-router';

export const Link = createLinkComponent((props, link) => (
  <a
    href={link.fullPath}
    {...props}
    classList={{
      'navbar-item': true,
      'is-tab': true,
      'is-active': link.isActive,
    }}
  />
));

export const TestSwitch: Component<{
  name: string;
}> = (props) => {
  console.log(`!create ${props.name}`);
  return (
    <div class="panel">
      <p class="panel-heading">{props.name}</p>
      <div class="panel-block">
        <nav class="navbar panel-block">
          <div class="navbar-menu">
            <div class="navbar-start">
              <Link path="/">Index</Link>
              <Link path="/route1">First route</Link>
              <Link path="/route2">Second route</Link>
              <Link path="/not-existing-route">No route</Link>
              <Link path="/children/">Children</Link>
              <Link full path="/route1">
                First route (ROOT)
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div class="panel-block">
        <RouteSwitch>
          <Route path="/">Index content</Route>
          <Route path="/route1">First route content</Route>
          <Route path="/route2">Second route content</Route>
          <Route prefix path="/children">
            <div class="container">{props.children}</div>
          </Route>
        </RouteSwitch>
      </div>
    </div>
  );
};

export const BasicExample: Component = () => {
  const { getLocation, getRoute } = useRouter();

  createEffect(() => console.log('location: ', getLocation()));
  createEffect(() => console.log('route: ', getRoute()));

  return (
    <div class="container">
      <TestSwitch name="level 0">
        <TestSwitch name="level 1">
          <TestSwitch name="level 2">
            <TestSwitch name="level 3">FIN</TestSwitch>
          </TestSwitch>
        </TestSwitch>
      </TestSwitch>
    </div>
  );
};
