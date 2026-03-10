// Suppress React Native Web deprecation warning for pointerEvents
if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    const message = args[0];
    if (
      typeof message === 'string' &&
      message.includes('props.pointerEvents is deprecated')
    ) {
      return;
    }
    originalWarn.call(console, ...args);
  };
}
