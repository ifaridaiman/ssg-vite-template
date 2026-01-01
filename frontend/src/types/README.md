# Frontend Types

This directory contains common TypeScript types used across the frontend application.

## Structure

```
types/
├── api-response.ts   # API response contracts matching backend
└── index.ts          # Central export file
```

## API Response Types

The API response types mirror the backend's response structure defined in `server/src/common/types/api-response.ts`.

### Success Response

All successful API responses follow this structure:

```typescript
{
  success: true,
  data: T,  // Your actual data
  meta: {
    timestamp: string,
    requestId?: string
  }
}
```

### Error Response

All error responses follow this structure:

```typescript
{
  success: false,
  error: {
    code: string,
    message: string,
    details?: unknown
  }
}
```

## Usage

### In API calls

```typescript
import { ApiSuccessResponse } from '../types/api-response'

const fetchData = async (): Promise<MyDataType> => {
  const response = await fetch('/api/endpoint')
  const json: ApiSuccessResponse<MyDataType> = await response.json()
  return json.data  // Unwrap the data field
}
```

### Type Guard

Use the type guard to check for errors:

```typescript
import { isApiErrorResponse } from '../types/api-response'

const response = await fetchSomething()
if (isApiErrorResponse(response)) {
  // Handle error
  console.error(response.error.message)
} else {
  // Handle success
  console.log(response.data)
}
```

## Best Practices

1. **Always unwrap the `data` field** when returning from API calls
2. **Use the common types** instead of defining inline types
3. **Keep types in sync** with backend contracts
4. **Use type guards** for runtime type checking

