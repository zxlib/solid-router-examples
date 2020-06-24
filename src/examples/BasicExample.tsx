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

export const Navbar: Component = () => (
  <nav class="navbar panel-block">
    <div class="navbar-menu">
      <div class="navbar-start">
        <Link path="/">Index</Link>
        <Link path="/route1">First route</Link>
        <Link path="/route2">Second route</Link>
        <Link path="/not-existing-route">No route</Link>
        <Link path="/children">Children</Link>
        <Link full path="/route1">
          First route (ROOT)
        </Link>
      </div>
    </div>
  </nav>
);

export const SwitchBlock: Component<{ id: string }> = (props) => (
  <RouteSwitch id={props.id}>
    <Route path="/">Index content</Route>
    <Route path="/route1">First route content</Route>
    <Route path="/route2">Second route content</Route>
    <Route prefix path="/children">
      <div class="container">{props.children}</div>
    </Route>
  </RouteSwitch>
);

export const TestSwitch: Component<{
  name: string;
}> = (props) => (
  <div class="panel">
    <p class="panel-heading">{props.name}</p>
    <div class="panel-block">
      <Navbar />
    </div>

    <div class="panel-block">
      <SwitchBlock id={props.name}>{props.children}</SwitchBlock>
    </div>
  </div>
);

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
