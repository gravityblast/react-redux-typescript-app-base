import React from 'react';

interface Props {
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <div>
        <p>Something went wrong.</p>
      </div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
