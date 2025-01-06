# Unexpected Behavior in React useEffect Hook

This repository demonstrates a common error when using the `useEffect` hook in React. The provided code snippet shows an incorrect implementation that leads to unexpected behavior.

## Bug Description

The `MyComponent` attempts to update the `count` state within the `useEffect` hook.  However, due to the direct assignment within the useEffect, only a single render occurs. The expected outcome is the count incrementing every second, reflecting the use of `setInterval` in the commented-out lines.  The solution provided shows the correct implementation using a timer and clean-up function.