import { Component, ReactElement, ReactNode } from "react";
import ErrorComponent from "./ErrorComponent"
// interface Props{
//   children: ReactNode,
//   onReset: (...args: unknown[]) => void,
// }
// interface State{
//   hasError: boolean,
//   error: Error | null;
// }
const initialState = { hasError: false, error: null};
export default class ErrorBoundary extends Component  {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error) {
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
    this.setState(initialState);
  };

  render() {
    const { hasError, error } = this.state;
    const { children} = this.props;
    if (hasError && error) 
      return <ErrorComponent reset={this.resetQuery}/>

    return children;
  }
}

