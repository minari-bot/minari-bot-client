import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import { ReactElement, ReactNode, Suspense } from "react";

interface Props{
    children: ReactNode,
    suspenseFallback: ReactElement,
    errorFallback: ReactElement,
}
export default function AsyncWrapper({ children, errorFallback, suspenseFallback }: Props) {
    const { reset } = useQueryErrorResetBoundary();
  
    return (
      <ErrorBoundary fallback={errorFallback} onReset={reset}>
        <Suspense fallback={suspenseFallback}>{children}</Suspense>
      </ErrorBoundary>
    );
  }
  