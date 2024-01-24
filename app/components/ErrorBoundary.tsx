import React from "react";

class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      if (this.props.errorUI) {
        return this.props.errorUI;
      }
      return <h1> Something went wrong. </h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
