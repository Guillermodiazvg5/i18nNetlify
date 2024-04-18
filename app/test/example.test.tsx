import * as RTL from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Home from '@mitimiti/routes/_home/route';

function sum(a: number, b: number) {
  return a + b;
}

describe('component', () => {
  test.skip('render title', () => {
    const { getByText } = RTL.render(<Home />);
    expect(getByText('Bienvenido a Mitimiti')).toBeTruthy();
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
