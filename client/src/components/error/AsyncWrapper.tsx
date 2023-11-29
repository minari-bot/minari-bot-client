import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import { ReactElement, ReactNode, Suspense } from "react";

interface Props{
    children: ReactNode,
    suspenseFallback: ReactNode,
}
export default function AsyncWrapper({ children, suspenseFallback }: Props) {
    const { reset } = useQueryErrorResetBoundary();
  
    return (
      <ErrorBoundary onReset={reset}>
        <Suspense fallback={suspenseFallback}>{children}</Suspense>
      </ErrorBoundary>
    );
  }
  