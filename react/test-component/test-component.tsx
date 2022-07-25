import React, { ReactNode } from 'react';

export type TestComponentProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function TestComponent({ children }: TestComponentProps) {
  return (
    <div>
      {children}
    </div>
  );
}

