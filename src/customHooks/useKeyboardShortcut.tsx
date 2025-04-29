import { useEffect } from 'react';
import { useNavigate } from 'react-router';

interface KeyboardShortcutOptions {
  /**
   * Array of keys that need to be pressed simultaneously
   * Example: ['n', 'f', 't']
   */
  keyCombination: string[];
  /**
   * Path to navigate to when the shortcut is triggered
   * Example: '/training'
   */
  targetPath: string;
  /**
   * Whether the Ctrl key must be pressed
   * @default false
   */
  withCtrl?: boolean;
  /**
   * Whether the Alt key must be pressed
   * @default false
   */
  withAlt?: boolean;
  /**
   * Whether the Shift key must be pressed
   * @default false
   */
  withShift?: boolean;
  /**
   * Callback function to execute before navigation
   */
  onTrigger?: () => void;
}

/**
 * Custom hook for handling keyboard shortcuts with navigation
 * @param options Configuration options for the keyboard shortcut
 */
export const useKeyboardShortcut = (options: KeyboardShortcutOptions): void => {
  const {
    keyCombination,
    targetPath,
    withCtrl = false,
    withAlt = false,
    withShift = false,
    onTrigger,
  } = options;

  const navigate = useNavigate();

  useEffect(() => {
    const keysPressed = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Add the pressed key to our set (lowercase for consistency)
      keysPressed.add(e.key.toLowerCase());

      // Check if all required keys are pressed simultaneously
      const allKeysPressed = keyCombination.every((key) =>
        keysPressed.has(key.toLowerCase())
      );

      // Check modifier key conditions
      const modifierConditionsMet =
        (!withCtrl || e.ctrlKey) &&
        (!withAlt || e.altKey) &&
        (!withShift || e.shiftKey);

      if (allKeysPressed && modifierConditionsMet) {
        // Execute callback if provided
        onTrigger?.();
        // Navigate to target path
        navigate(targetPath);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // Remove the released key from our set
      keysPressed.delete(e.key.toLowerCase());
    };

    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [
    navigate,
    keyCombination,
    targetPath,
    withCtrl,
    withAlt,
    withShift,
    onTrigger,
  ]);
};
