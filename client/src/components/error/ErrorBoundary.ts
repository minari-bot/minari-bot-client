import { Component, ReactNode } from "react";

interface Props{
  children: ReactNode,
  onReset: (...args: unknown[]) => void,
  fallback: ReactNode,
}
interface State{
  hasError: boolean,
  error: Error | null;
}
const initialState = { hasError: false, error: null};

export default class ErrorBoundary extends Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  // componentDidMount(): void {
  //   if (this.state.error == null) {
  //     return;
  //   }
  //   if (isDifferentArray(prevProps.resetKeys, this.props.resetKeys)) {
  //   // Trigger Reset
  //   }
  // }
  resetQuery = () => {
    const { onReset } = this.props;
    console.log(onReset);
    onReset?.();
    this.setState(initialState);
  };

  render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;
    if (hasError && error) {
      return fallback
    }

    return children;
  }
}

