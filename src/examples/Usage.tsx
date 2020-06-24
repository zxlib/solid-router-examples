import { RouterProvider, Link, RouteSwitch, Route } from '@zxlib/solid-router';

export const App = () => {
  return (
    <RouterProvider>
      <div class="nav">
        <Link path="/">Index</Link>
        <Link path="/route1">Route1</Link>
        <Link path="/route2">Route2</Link>
        <Link path="/prefix4nested/">Sub Routes Index</Link>
      </div>
      <div class="content">
        <RouteSwitch>
          <Route path="/">Index content</Route>
          <Route path="/route1">Route1 Content</Route>
          <Route path="/route2">Route2 Content</Route>
          <Route fallback>No route</Route>
          <Route prefix path="/prefix4nested">
            <div>
              <div class="nav">
                <Link path="/">Sub Index</Link>
                <Link path="/route1">Sub Route1</Link>
                <Link path="/route2">Sub Route2</Link>
              </div>
            </div>
            <div>
              <RouteSwitch>
                <Route path="/">Sub Index Content</Route>
                <Route path="/route1">Sub Route1 Content</Route>
                <Route path="/route2">Sub Route2 Content</Route>
                <Route fallback>No sub route</Route>
              </RouteSwitch>
            </div>
          </Route>
        </RouteSwitch>
      </div>
    </RouterProvider>
  );
};
