# PROJECT RULES

## Technology Stack

Node.js (npm), TypeScript, React Router v7

## Architecture

### Design & Organization Principles

- **KISS Principle**: Keep code simple and easy to understand; avoid unnecessary complexity.
- **Entity-Feature Organization**: Structure code by feature and entity for clarity and scalability.
- **Maintainability & Testability**: Prioritize clear, modular, and well-architected code that is easy to test.
- **State Management**: Implement state management at the application or feature level, not within UI components.
- **Manager/Model Classes**: Encapsulate complex logic and internal state (e.g., drag-and-drop, undo-redo) in dedicated classes or models.
- **User Interaction Errors**: Surface errors from user interactions using toast notifications and error boundaries.
- **Input Validation & Sanitization**: Always validate and sanitize user inputs following OWASP guidelines.
- **File naming conventions**: use kebab-case with these allowed characters lowercase letters, hyphens, dots, numbers.
- **Static and mock Data**: separate the data from the usage into their own files.
- **Async Operations**: All async operations must be abortable or not affected by rendering. Use `AbortController` for cancellation.

## Error Handling & Logging

### Error Messages

- Use template literals with context: `new Error(\`ErrorType: description \${context}\`)`
- Be user-friendly and specific about expectations
- Never expose sensitive information
- Include relevant execution context
- Handle errors gracefully without crashing, giving user feedback via toasts

### Logging

Use logging for debugging only, not for user-facing messages.

- `console.error()` for errors with context
- `console.log()` for information with context
- Follow same interpolation principles as errors

### Example

```typescript
async function fetchUserData(userId: string, signal: AbortSignal): Promise<User> {
  if (!userId) {
    throw new Error(`InvalidUserId: userId is required, got empty string`);
  }
  try {
    const response = await fetch(`/api/data/${userId}`, { signal });
    if (!response.ok) {
      throw new Error(`FetchUserError: HTTP ${response.status}`);
    }
    console.log(`UserData: Successfully fetched data for user ${userId}`);
    return parseUserData(await response.json());
  } catch (error) {
    console.error(`UserDataError: Failed to fetch user ${userId}: ${error}`);
    throw error;
  }
}
```

## Comments Policy

**Minimize comments** - Write self-documenting code instead.

**Use comments only for**:

- Non-obvious business logic reasoning
- Architecture decisions
- Complex algorithms

**Avoid commenting**:

- What the code does (should be obvious)
- Every line or block
- Redundant explanations

**Prefer using jsdocs instead of inline comments for documentation.**

**AVOID:**

```typescript
interface User {
  id: string; // Unique identifier for the user
  name: string; // Full name of the user
  email: string; // Email address of the user
}
```

**PREFER:**

```typescript
interface User {
  /** Unique identifier for the user */
  id: string;
  /** Full name of the user */
  name: string;
  /** Email address of the user */
  email: string;
}
```

## Types Schema and Validation

- Don't use `JSON.parse()` directly on API responses or user inputs.
- Prefer using a schema validation library like `Zod` to parse and validate data.
- Use `Zod` for type inference to ensure type safety across the application.

```typescript
import { z } from "zod";

export const TodoSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  completed: z.boolean().default(false),
});

export type Todo = z.infer<typeof TodoSchema>;
```

```typescript
import { Todo, TodoSchema } from "./schemas/todo";
async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch("/api/todos");
  if (!response.ok) {
    throw new Error(`FetchTodosError: HTTP ${response.status}`);
  }
  const data = await response.json();
  return TodoSchema.array().parse(data);
}
```
