import React from "react";
import { Route, Switch } from "wouter";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

class AppErrorBoundary extends React.Component {
  state = { hasError: false, message: "" };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error?.message || "Unknown application error",
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="not-found-page">
          <span className="eyebrow">AGRO SATHI</span>
          <h1>Something went wrong.</h1>
          <p>{this.state.message}</p>
          <a className="button button-primary" href="/">
            Return home
          </a>
        </main>
      );
    }

    return this.props.children;
  }
}

// All public pages use the same Home controller.
// It reads the URL and renders the matching page section.
function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/detect" component={Home} />
      <Route path="/guides" component={Home} />
      <Route path="/weather" component={Home} />
      <Route path="/advisory" component={Home} />
      <Route path="/about" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <AppErrorBoundary>
      <AppRoutes />
    </AppErrorBoundary>
  );
}
